import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function EnterTodo({ onCancel, onAddList }) {
  const [title, setTitle] = React.useState("");
  const [dline, setDline] = React.useState("");
  const [sts, setSts] = React.useState();

  const handleChange = (event) => {
    setSts(event.target.value);
  };
  return (
    <Box sx={{ maxWidth: 500 }}>
      <Card variant="inline" sx={{ bgcolor: "#a6a6a6" }}>
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
              Add a new todo
            </Typography>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "52ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="title"
                label="Title"
                variant="outlined"
                required
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <br />
              <TextField
                id="deadline"
                label="Deadline"
                variant="outlined"
                required
                type="text"
                value={dline}
                onChange={(e) => setDline(e.target.value)}
              />
              <br />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" required>
                  Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sts}
                  label="Status"
                  onChange={handleChange}
                >
                  <MenuItem
                    value={1}
                    style={{
                      borderLeft: "5px solid green",
                    }}
                  >
                    Done
                  </MenuItem>
                  <MenuItem
                    value={2}
                    style={{
                      borderLeft: "5px solid #eb1750",
                    }}
                  >
                    Not started
                  </MenuItem>
                  <MenuItem
                    value={3}
                    style={{
                      borderLeft: "5px solid yellow",
                    }}
                  >
                    In progress
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </CardContent>
          <CardActions style={{ flexDirection: "row-reverse" }}>
            <Button
              size="small"
              variant="contained"
              onClick={() => {
                onAddList(title, dline, sts);
                setDline("");
                setTitle("");
              }}
            >
              Add
            </Button>
            <Button
              size="small"
              color="error"
              variant="outlined"
              onClick={onCancel}
              style={{ marginRight: "10px" }}
            >
              Cancel
            </Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}
