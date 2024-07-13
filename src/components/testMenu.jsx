import { Button, Grid, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function AddDynamicInputFields({ handleSubmit, handleClose }) {
  const [inputs, setInputs] = useState([{ extention: "", mimeType: "" }]);

  const handleAddInput = () => {
    setInputs([...inputs, { extention: "", mimeType: "" }]);
  };

  const handleChange = (event, index) => {
    let { name, value } = event.target;
    let onChangeValue = [...inputs];
    onChangeValue[index][name] = value;
    setInputs(onChangeValue);
  };

  const handleDeleteInput = (index) => {
    const newArray = [...inputs];
    newArray.splice(index, 1);
    setInputs(newArray);
  };

  return (
    <form>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ gap: "16px", justifyContent: "center", p: "30px" }}
      >
        {inputs.map((item, index) => (
          <Grid
            container
            item
            key={index}
            justifyContent="center"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Grid
              item
              sx={{ display: "flex", flexDirection: "row", gap: "16px" }}
            >
              <TextField
                name="extention"
                label="Extention"
                variant="outlined"
                value={item.extention}
                onChange={(event) => handleChange(event, index)}
              />
              <TextField
                name="mimeType"
                label="Mime Type"
                variant="outlined"
                value={item.mimeType}
                onChange={(event) => handleChange(event, index)}
              />
            </Grid>

            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "0.5rem",
                justifyContent: "flex-end",
              }}
            >
              {index === inputs.length - 1 && (
                <Button onClick={() => handleAddInput()} variant="contained">
                  <AddIcon />
                </Button>
              )}
              {inputs.length > 1 && (
                <Button
                  variant="outlined"
                  onClick={() => handleDeleteInput(index)}
                >
                  <DeleteIcon />
                </Button>
              )}
            </Grid>
          </Grid>
        ))}

        {/* <div className="body"> {JSON.stringify(inputs)} </div> */}
        <div>
          <Button
            variant="contained"
            sx={{ margin: "2rem" }}
            onClick={() => handleSubmit(inputs)}
          >
            ثبت
          </Button>
          <Button
            variant="contained"
            sx={{ margin: "2rem" }}
            onClick={handleClose}
          >
            لغو
          </Button>
        </div>
      </Grid>
    </form>
  );
}

export default AddDynamicInputFields;
