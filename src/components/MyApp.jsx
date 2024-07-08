import { Label } from "@mui/icons-material";
import { Button, FormControlLabel, Switch } from "@mui/material";
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
    // Process the selected items (checkedItems) here
    // console.log("Selected items:", checkedItems);
  };

  return (
    <div className="flex items-center justify-center border border-blue-500 w-2/3">
      <form onSubmit={handleSubmit} className="flex gap-2">
        {items.map((item) => (
          <div key={item.id} className="flex flex-row bg-slate-500">
            <span className="bg-slate-500">
              <label className="flex items-center" htmlFor={item.extension}>
                {item.extension}
              </label>
            </span>
            <span>
              <input
                type="checkbox"
                name={item.extension}
                checked={item.enabled}
                onChange={(e) => handleCheckboxChange(item, e)}
                className=""
              />
            </span>
            {/* <FormControlLabel control={<Switch Label={item.extension} />} /> */}
          </div>
        ))}
        <Button className="" type="submit" variant="outlined">
          Post
        </Button>
      </form>
    </div>
  );
}

export default MyForm;
