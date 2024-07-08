import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Switch,
  Tooltip,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { options } from "./testObject";
import { Description } from "@mui/icons-material";

function MyForm() {
  const [firewall, setFirewall] = useState({
    option: "وایت لیست",
    description: "این",
  });
  const [items, setItems] = useState(options);

  // useEffect(() => {
  //   axios.get("#").then((res) => {
  //     setItems(res.json());
  //   });
  // }, []);

  const handleCheckboxChange = (item, event) => {
    const { checked } = event.target;
    setItems(items.map((i) => (i == item ? { ...item, enabled: checked } : i)));
    console.log(item);
  };

  const handleMenuChange = (event) => {
    const { value } = event.target;
    setFirewall(value);
    console.log(firewall);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("#", { items, firewall })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div dir="rtl">
      <Paper>
        <Grid container alignItems="center" width={1 / 4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">گزینه فایروال</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={firewall}
              label="Firewall Option"
              onChange={(e) => handleMenuChange(e)}
            >
              <Tooltip title={firewall.description} arrow>
                <MenuItem value={"وایت لیست"}>وایت لیست</MenuItem>
              </Tooltip>
              <Tooltip title={firewall.description} arrow>
                <MenuItem value={"بلک لیست"}>بلک لیست</MenuItem>
              </Tooltip>
            </Select>
          </FormControl>
        </Grid>
      </Paper>
      <Paper elevation={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          {/* <FormControl direction="row">
              <FormGroup className="row"> */}
          {items.map((item) => (
            <Grid item xs={3} key={item.id}>
              <FormControlLabel
                label={item.extension}
                control={
                  <Switch
                    checked={item.enabled}
                    onChange={(e) => handleCheckboxChange(item, e)}
                    classes={{
                      root: { display: "flex", direction: "row" },
                    }}
                  />
                }
              />
            </Grid>
          ))}

          {/* </FormGroup>
            </FormControl> */}
        </Grid>
        <Grid item alignItems="center" justifyContent="center">
          <Button type="submit" variant="outlined" onClick={handleSubmit}>
            Post
          </Button>
        </Grid>
      </Paper>
    </div>
  );
}

export default MyForm;
