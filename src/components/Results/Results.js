import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import "./Results.scss";
import moment from "moment";

const formatDateTime = (dateTime) => {
  const m = moment(dateTime);
  return m.format("Do MMMM YYYY");
};

const Results = ({ searchTerm, results }) => {
  return (
    <div className="results-container">
      {results.length > 0 ? (
        <>
          <Typography className="header">
            Most stars: '{searchTerm}'
          </Typography>
          <Typography className="repos">
            Repos created since 7th December 2017
          </Typography>
        </>
      ) : null}
      {results.map((r) => {
        return (
          <Card key={r.id} className="card">
            <CardContent>
              <Typography>
                <a rel="noreferrer" target="_blank" href={r.url}>
                  {r.full_name}
                </a>
              </Typography>
              <Typography>{r.description}</Typography>
              <Typography className="details-container">
                <div className="date-time">Created: {formatDateTime(r.created_at)}</div>
                <StarBorderIcon className="icon" />
                <div className="count">{r.stargazers_count}</div>
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default Results;
