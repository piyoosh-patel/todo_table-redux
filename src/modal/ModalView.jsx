import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import AddTable from "../components/AddTable";
import TableData from "../components/TableData";
import { colors } from "@mui/material";
import shadows from "@mui/material/styles/shadows";
// import {useSelector} from 'react-redux'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  // height: 900,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function ModalView( ) {
  const [open, setOpen] = React.useState(false);

  const [update, setUpdate] = React.useState("");

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        color="info"
        style={{ marginTop: 100, float: "center" , color:"aqua" , }}
      >
        Add User
      </Button>
      <TableData setUpdate={setUpdate} handleOpen={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 600 }}>
        <Button
            onClick={handleClose}
            class="text-gray-500 hover:text-red-500 focus:outline-none float-end"
          >
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>
          <h2 id="parent-modal-title" className="font-bold">Welcome  </h2>

          <AddTable update={update} setUpdate={setUpdate} setOpen={setOpen}/>
         
        </Box>
      </Modal>
    </div>
  );
}
