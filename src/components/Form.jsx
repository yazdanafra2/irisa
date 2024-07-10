import { Button, TextField } from "@mui/material";

const Form = (handleSubmit, handleClose) => {
  return (
    <>
      <form
        onSubmit={() => handleSubmit()}
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
          onChange={handleSubmit}
          required
        />
        <div>
          <Button variant="contained" type="submit" sx={{ margin: "2rem" }}>
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
