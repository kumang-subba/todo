import React from "react";

import AddList from "./list";
function ShowLister({ database, onDelete }) {
  return (
    <div>
      {database.map((data, index) => (
        <AddList key={index} data={data} onDelete={onDelete} />
      ))}
      <br />
      <span
        style={{
          borderLeft: "5px solid green",
          padding: "5px",
          marginRight: "20px",
        }}
      >
        Done
      </span>
      <span
        style={{
          borderLeft: "5px solid #eb1750",
          padding: "5px",
          marginRight: "20px",
        }}
      >
        Not started
      </span>
      <span
        style={{
          borderLeft: "5px solid yellow",
          padding: "5px",
        }}
      >
        In progress
      </span>
    </div>
  );
}

export default ShowLister;
