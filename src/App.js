import React, { useState } from "react";
import "./App.css";
import EnterTodo from "./components/addtodo";
import Button from "@mui/material/Button";
import ShowLister from "./components/lists";
import {
  AppBar,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import logo from "./to-do-list.png";

let nextId = 1;
function App() {
  const [addMenu, setAddMenu] = useState(false);
  const [database, setDatabase] = useState([]);

  const checkMenu = () => {
    setAddMenu(!addMenu);
  };
  const handleCancel = () => {
    setAddMenu(!addMenu);
  };
  const handleAdd = (title, deadline, stats) => {
    setDatabase([
      ...database,
      { id: nextId++, title: title, deadline: deadline, stats: stats },
    ]);
  };
  const handleDelete = (i) => {
    setDatabase((oldDb) => {
      return oldDb.filter((j) => j.id !== i);
    });
  };
  return (
    <CssBaseline>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src={logo}
              alt="logo"
              style={{ height: "50px", width: "auto" }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                ml: 2,
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Todo List
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <div style={{ display: "flex" }}>
        <Container sx={{ mt: "5px" }}>
          <Button
            variant="contained"
            size="medium"
            onClick={checkMenu}
            style={{ marginBottom: "5px" }}
          >
            Add a new todo
          </Button>
          {addMenu && (
            <EnterTodo onCancel={handleCancel} onAddList={handleAdd} />
          )}
        </Container>
        <Container sx={{ mt: "5px" }}>
          {database.length !== 0 && (
            <ShowLister database={database} onDelete={handleDelete} />
          )}
        </Container>
      </div>
    </CssBaseline>
  );
}

export default App;
