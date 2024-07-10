import { Button, TextField } from "@mui/material";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Form = ({ handleSubmit, handleClose }) => {
  const [extention, setExtention] = useState("");
  const [mimeType, setMimeType] = useState([]);

  return (
    <>
      <form
        onSubmit={([extention, mimeType]) => {
          handleSubmit([extention, mimeType]);
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <TextField
          label="extention"
          variant="filled"
          value={extention}
          onChange={(e) => {
            setExtention(e.target.value);
          }}
          required
        />
        <div>
          <Button
            variant="contained"
            type="submit"
            sx={{ margin: "2rem" }}
            onClick={(e) => handleSubmit(e)}
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
      </form>
    </>
  );
};

export default Form;
