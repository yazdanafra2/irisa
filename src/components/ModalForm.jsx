import { Dialog } from "@mui/material";
import Form from "./Form";

// eslint-disable-next-line react/prop-types
const ModalForm = ({ open, handleClose, handleSubmit }) => {
  return (
    <>
      <Dialog open={open}>
        <Form handleSubmit={handleSubmit} handleClose={handleClose}></Form>
      </Dialog>
    </>
  );
};

export default ModalForm;
