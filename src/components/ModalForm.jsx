import { Dialog } from "@mui/material";
import AddDynamicInputFields from "./testMenu";

// eslint-disable-next-line react/prop-types
const ModalForm = ({ open, handleClose, handleSubmit }) => {
  return (
    <>
      <Dialog open={open} fullWidth="xl" maxWidth="sm">
        {/* <Form handleSubmit={handleSubmit} handleClose={handleClose}></Form> */}
        <AddDynamicInputFields
          handleSubmit={(e) => handleSubmit(e)}
          handleClose={handleClose}
        ></AddDynamicInputFields>
      </Dialog>
    </>
  );
};

export default ModalForm;
