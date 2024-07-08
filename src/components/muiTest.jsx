import { Button, FormControlLabel, FormGroup, Switch } from "@mui/material";

const MuiTest = () => {
  const handleSubmit = () => {
    console.log("submitted");
  };

  return (
    <>
      <FormGroup onSubmit={handleSubmit}>
        <FormControlLabel control={<Switch defaultChecked />} label="Label" />
        <FormControlLabel required control={<Switch />} label="Required" />
        <FormControlLabel disabled control={<Switch />} label="Disabled" />
        <Button onClick={handleSubmit}>submit</Button>
      </FormGroup>
    </>
  );
};

export default MuiTest;
