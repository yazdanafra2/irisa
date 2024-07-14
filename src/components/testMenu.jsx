import { Button, Grid, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function AddDynamicInputFields({ handleSubmit, handleClose }) {
  const [input, setInput] = useState({ extention: "", mimeTypes: [""] });

  const handleAddMimeType = () => {
    setInput({
      ...input,
      mimeTypes: [...input.mimeTypes, ""],
    });
  };

  const handleChange = (event, index) => {
    let { name, value } = event.target;
    if (name === "extention") {
      setInput({ ...input, extention: value });
    } else {
      let newMimeTypes = [...input.mimeTypes];
      newMimeTypes[index] = value;
      setInput({ ...input, mimeTypes: newMimeTypes });
    }
  };

  const handleDeleteMimeType = (index) => {
    let newMimeTypes = [...input.mimeTypes];
    newMimeTypes.splice(index, 1);
    setInput({ ...input, mimeTypes: newMimeTypes });
  };

  return (
    <form>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ gap: "16px", p: "30px" }}
      >
        <Grid item sx={{ width: "100%", maxWidth: "500px" }}>
          <p style={{ color: "gray", fontSize: "1rem" }}>
            .فرمت مورد نظر را وارد کنید (مثال: jpg)
          </p>
          <TextField
            fullWidth
            name="extention"
            label="Extension"
            variant="outlined"
            value={input.extention}
            onChange={(event) => handleChange(event)}
          />
          <p
            style={{
              color: "gray",
              fontSize: "1rem",
            }}
          >
            نوع داده‌ای فایل را وارد کنید. (مثال: image/jpeg) برای اطلاعات بیشتر
            به راهنمای زیر مراجعه کنید
          </p>
          <a href="https://mimetype.io/all-types" target="_blank">
            راهنما
          </a>
        </Grid>
        {input.mimeTypes.map((mimeType, index) => (
          <Grid
            container
            item
            key={index}
            alignItems="center"
            // flexDirection="column"
            sx={{ gap: "16px", width: "100%", maxWidth: "500px" }}
          >
            <Grid item sx={{ flexGrow: 1 }}>
              <TextField
                fullWidth
                name="mimeType"
                label={`Mime Type ${index + 1}`}
                variant="outlined"
                value={mimeType}
                onChange={(event) => handleChange(event, index)}
              />
            </Grid>

            <Grid item sx={{ display: "flex", gap: "0.5rem" }}>
              {input.mimeTypes.length > 1 && (
                <Button
                  variant="outlined"
                  onClick={() => handleDeleteMimeType(index)}
                >
                  <DeleteIcon />
                </Button>
              )}
            </Grid>
            <Grid>
              {index === input.mimeTypes.length - 1 && (
                <Button onClick={handleAddMimeType} variant="contained">
                  <AddIcon />
                </Button>
              )}
            </Grid>
          </Grid>
        ))}

        <Grid
          container
          justifyContent="center"
          sx={{ mt: "2rem", gap: "2rem" }}
        >
          <Button variant="contained" onClick={() => handleSubmit(input)}>
            ثبت
          </Button>
          <Button variant="contained" onClick={handleClose}>
            لغو
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default AddDynamicInputFields;
