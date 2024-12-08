import "../App.css";
import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  Snackbar,
} from "@mui/material";
import { getCustomerId, saveRegistration, softDeleteCustomer } from "../shopApi";

function Registration() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  
  const [firstnameError, setFirstnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const firstnameErrorValidation = () => {
    if (!formData.firstname) {
      // Asetetaan error näkyville lomakkeeseen
      setFirstnameError(true);
      // Palautetaan true firstnameErrorille
      return true;
    } else {
      // Asetetaan error pois lomakenäkymästä
      setFirstnameError(false);
      // Palautetaan false firstnameErrorille
      return false;
    }
  };

  const emailErrorValidation = () => {
    const emailRegex = /^[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,}$/; // https://regex101.com/r/lHs2R3/1
    if (!formData.email || !emailRegex.test(formData.email)) {
      setEmailError(true);
      return true;
    } else {
      setEmailError(false);
      return false;
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const firstnameErrorState = firstnameErrorValidation();
    const emailErrorState = emailErrorValidation();
    if (firstnameErrorState || emailErrorState) {
      return;
    } else {
      saveRegistration(formData)
        .then(() => {
          setOpen(true);
          setFormData({ firstname: "", lastname: "", email: "" });
        })
        .catch((err) => console.error(err));
    }
  };

  // const handleDelete = () => {
  //   console.log("Unregister request sent for:", formData);
  //   setDeleteOpen(true);
  //   setFormData({ firstname: "", lastname: "", email: "" });
  // }

  const handleSoftDelete = () => {
    const emailErrorState = emailErrorValidation();
    setFirstnameError(false);
    if (emailErrorState) {
      return;
    } else {
      getCustomerId(formData.email)
        .then((customerId) => {
          softDeleteCustomer(customerId)
        })
        .then(() => {
          setDeleteOpen(true);
          setFormData({ firstname: "", lastname: "", email: "" });
        })
        .catch((err) => console.error(err));
    }
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(245, 245, 245, 0.8)",
          height:"550px",
          width: "500px",
          margin: "auto",
          padding: 2,
          marginTop: "100px",
        }}
      >
        <div style={{ width: "80%" }}>
          <Stack 
          spacing={2}
          marginTop={6}
          marginBottom={0}
          >
            <Typography variant="h4" gutterBottom>
              Registration
            </Typography>
            <Typography variant="subtitle1">
            Register as a user to receive the latest information on products, campaigns, and bonus program rewards.
            </Typography>
            <TextField
              style={{ backgroundColor: "white" }}
              required
              margin="dense"
              variant="outlined"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              label="First Name"
              error={firstnameError}
              helperText={firstnameError ? "Set first name" : ""}
            />
            <TextField
              style={{ backgroundColor: "white" }}
              margin="dense"
              variant="outlined"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              label="Last Name"
            />
            <TextField
              style={{ backgroundColor: "white" }}
              required
              margin="dense"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              label="Email"
              error={emailError}
              helperText={
                emailError
                  ? "Set valid email, for example: example@gmail.com"
                  : ""
              }
            />
            <Box sx={{ textAlign: "left" }}>
              <Typography variant="caption" color="textSecondary">
                Required *
              </Typography>
            </Box>
          </Stack>
          <Button
            variant="outlined"
            onClick={handleSubmit}
            style={{ backgroundColor: "white", marginBottom: "20px" }}
          >
            Register
          </Button>
          <Button
            variant="outlined"
            onClick={handleSoftDelete}
            style={{ backgroundColor: "white", marginBottom: "20px", color: "red" }}
          >
            Request to be unregistered
          </Button>
        </div>
      </Box>
      <Snackbar
        open={open}
        message="Registered successfully"
        autoHideDuration={3000}
        onClose={handleClose}
      />
      <Snackbar
        open={deleteOpen}
        message="Request sent successfully"
        autoHideDuration={3000}
        onClose={handleDeleteClose}
      />
    </>
  );
}

export default Registration;
