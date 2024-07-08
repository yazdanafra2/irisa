import { Label } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Switch,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { options } from "./testObject";

function MyForm() {
  // const [checkedItems, setCheckedItems] = useState([]);
  const [items, setItems] = useState(options);

  // useEffect(() => {
  //   axios.get("#").then((res) => {
  //     setItems(res);
  //   });
  // }, []);

  const handleCheckboxChange = (item, event) => {
    const { checked } = event.target;
    setItems(items.map((i) => (i == item ? { ...item, enabled: checked } : i)));
    console.log(item);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submtted");
  };

  return (
    <>
      <Grid container>
        <FormGroup onSubmit={handleSubmit}>
          {items.map((item) => (
            <div key={item.id}>
              <Grid item>
                <Paper>
                  <FormControlLabel
                    label={item.extension}
                    control={
                      <Switch
                        checked={item.enabled}
                        onChange={(e) => handleCheckboxChange(item, e)}
                      />
                    }
                  />
                </Paper>
              </Grid>
            </div>
          ))}

          <Button className="" type="submit" variant="outlined">
            Post
          </Button>
        </FormGroup>
      </Grid>
    </>
  );
}

export default MyForm;
