import React, { useState, useCallback } from "react";
import { TextField, Button } from "@material-ui/core";

import "./SearchBar.scss";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const onTextFieldChange = useCallback(
    (e) => {
      const {
        target: { value },
      } = e;
      setQuery(value);
    },
    [setQuery]
  );

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      onSearch(query);
    },
    [query, onSearch]
  );

  return (
    <div className="search-bar">
      <TextField
        className="text-input"
        onChange={onTextFieldChange}
        label="Language"
      />
      <Button onClick={onSubmitForm}>Search</Button>
    </div>
  );
};

export default SearchBar;
