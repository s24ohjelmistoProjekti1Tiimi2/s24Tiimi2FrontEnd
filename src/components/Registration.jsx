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
import { saveRegistration } from "../shopApi";

function Registration() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const [firstnameError, setFirstnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [open, setOpen] = useState(false);

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
        .then(setOpen(true))
        .catch((err) => console.error(err));
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(245, 245, 245, 0.8)",
          margin: 0,
          padding: 2,
        }}
      >
        <div style={{ width: "35%" }}>
          <Stack spacing={2}>
            <Typography variant="h4" gutterBottom>
              Registration
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
            style={{ backgroundColor: "white" }}
          >
            Register
          </Button>
        </div>
      </Box>
      <Snackbar
        open={open}
        message="Registered successfully"
        autoHideDuration={3000}
        onClose={handleClose}
      />
    </>
  );
}

export default Registration;
