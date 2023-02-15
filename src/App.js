import React, { useState } from "react";
import "./App.css";
import EnterTodo from "./components/addtodo";
import Button from "@mui/material/Button";
import ShowLister from "./components/lists";

let nextId = 1;
function App() {
  const [addMenu, setAddMenu] = useState(false);
  const [databse, setDatabse] = useState([]);

  const checkMenu = () => {
    setAddMenu(!addMenu);
  };
  const handleCancel = () => {
    setAddMenu(!addMenu);
  };
  const handleAdd = (title, deadline, stats) => {
    setDatabse([
      ...databse,
      { id: nextId++, title: title, deadline: deadline, stats: stats },
    ]);
  };
  const handleDelete = (i) => {
    setDatabse((olddb) => {
      return olddb.filter((j) => j.id !== i);
    });
  };
  return (
    <div>
      <Button
        variant="contained"
        size="medium"
        onClick={checkMenu}
        style={{ marginBottom: "5px" }}
      >
        Add a new todo
      </Button>
      {addMenu && <EnterTodo onCancel={handleCancel} onAddList={handleAdd} />}
      <br />
      {databse.length !== 0 && (
        <ShowLister databse={databse} onDelete={handleDelete} />
      )}
    </div>
  );
}

export default App;
