import React, { useCallback, useState } from 'react'
import { Container } from '@material-ui/core'
import SearchBar from './components/SearchBar/SearchBar'
import Results from './components/Results/Results'

const App = () => {
  const [results, setResults] = useState([])
  const [searchTerm, setSearchTerm] = useState([])

  const onSearch = useCallback(async (language) => {
    const urlEncodedQuery = encodeURIComponent(language);
    const response = await fetch(`https://api.github.com/search/repositories?q=language:${urlEncodedQuery} created:>2017-12-07&per_page=3`);
    const json = await response.json()

    if (json.items.length > 0){
      setResults(json.items)
      setSearchTerm(language)
    }

  }, [setResults])

  return (
    <Container maxWidth="md">
      <SearchBar onSearch={onSearch} />
      <Results searchTerm={searchTerm} results={results} />
    </Container>
  )
}

export default App;
