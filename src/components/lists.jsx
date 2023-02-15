import React from "react";

import AddList from "./list";
function ShowLister({ databse, onDelete }) {
  return (
    <div>
      {databse.map((data) => (
        <AddList key="data.id" data={data} onDelete={onDelete} />
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
