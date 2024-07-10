import {
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Form = ({ handleSubmit, handleClose }) => {
  const names = [
    "Humaira Sims",
    "Santiago Solis",
    "Dawid Floyd",
    "Mateo Barlow",
    "Samia Navarro",
    "Kaden Fields",
    "Genevieve Watkins",
    "Mariah Hickman",
    "Rocco Richardson",
    "Harris Glenn",
  ];

  const [extention, setExtention] = useState("");
  const [mimeType, setMimeType] = useState([]);
  const [selectedNames, setSelectedNames] = useState([]);

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
          sx={{ m: 1, width: 500 }}
        />
        <FormControl sx={{ m: 1, width: 500 }}>
          <InputLabel>Mime Types</InputLabel>
          <Select
            multiple
            value={selectedNames}
            onChange={(e) => setSelectedNames(e.target.value)}
            input={<OutlinedInput label="Multiple Select" />}
            renderValue={(selected) => (
              <Stack gap={1} direction="row" flexWrap="wrap">
                {selected.map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    onDelete={() =>
                      setSelectedNames(
                        selectedNames.filter((item) => item !== value)
                      )
                    }
                    deleteIcon={
                      <CancelIcon
                        onMouseDown={(event) => event.stopPropagation()}
                      />
                    }
                  />
                ))}
              </Stack>
            )}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
