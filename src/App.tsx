import EventService from "./services/services";
import "./App.css";
import { SyntheticEvent, useEffect, useState } from "react";
import logo from "./static/images/logo.png";
import { Alert, Button, Snackbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function App() {
  const eventService = new EventService();
  const [open, setOpen] = useState(true);

  const getData = async () => {
    const data = await eventService.getAllEvents();
    console.log(data);
  };

  const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  useEffect(() => {
    getData();
  });

  return (
    <div className="App">
      <img
        alt="logo"
        src={logo}
        style={{ height: "100px", width: "100px", margin: "50px" }}
      />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        action={action}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="warning" action={action}>
          This application is under development
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
