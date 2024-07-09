import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Switch,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { options } from "./testObject";

function MyForm() {
  let firewalls = [
    {
      value: "whitelist",
      description: "فقط فرمت‌های انتخاب شده‌ی زیر قابل ارسال هستند",
    },
    {
      value: "blacklist",
      description:
        "همه‌ی فرمت‌ها قابل ارسال هستند به جز فرمت‌های انتخاب شده‌ی زیر",
    },
  ];

  const [firewall, setFirewall] = useState(firewalls[0]);
  const [items, setItems] = useState(options);
  const [isLoading, setLoading] = useState(false);
  let flag1,
    flag2 = false;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    axios
      .get("formats_api")
      .then((res) => {
        setItems(Array.from(Object.values(res)));
        flag1 = true;
      })
      .catch((err) => {
        console.log(err);
        flag1 = true;
      });
    axios
      .get("firewall_api")
      .then((res) => {
        firewalls = Array.from(Object.values(res));
        flag2 = true;
      })
      .catch((err) => {
        console.log(err);
        flag2 = true;
      });
    setLoading(flag1 && flag2);
  };

  // const fetchData2 = async () => {
  //   const res = await axios.get("formats_api");
  //   setItems(Array.from(Object.values(res)));
  //   axios
  //     .get("firewall_api")
  //     .then((res) => {
  //       firewalls = Array.from(Object.values(res));
  //     })
  //     .catch((err) => console.log(err));
  // };

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
      <Box pb={3}>
        <Grid container alignItems="center" width={1 / 4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              گزینه‌های فایروال
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={firewall}
              label="Firewall Option"
              onChange={(e) => handleMenuChange(e)}
            >
              {/* <Tooltip title={firewalls[0].description} arrow> */}
              <MenuItem value={firewalls[0].value}>وایت لیست</MenuItem>
              {/* </Tooltip> */}
              {/* <Tooltip title={firewalls[1].description} arrow> */}
              <MenuItem value={firewalls[1].value}>بلک لیست</MenuItem>
              {/* </Tooltip> */}
            </Select>
          </FormControl>
        </Grid>
        <Box pt={2}>
          {firewall && (
            <div>{firewalls.find((f) => f.value === firewall).description}</div>
          )}
        </Box>
      </Box>
      <Paper elevation={4}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Grid container alignItems="center" justifyContent="space-between">
            {items.map((item) => (
              <Grid item xs={6} sm={4} md={3} key={item.id}>
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
          </Grid>
          <Button
            type="submit"
            variant="contained"
            onClick={handleSubmit}
            style={{
              maxWidth: "7.5rem",
              minWidth: "7.5rem",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            ثبت
          </Button>
        </Box>
      </Paper>
    </div>
  );
}

export default MyForm;
