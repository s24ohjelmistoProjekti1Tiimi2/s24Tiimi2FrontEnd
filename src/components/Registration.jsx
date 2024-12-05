import '../App.css'
import { useState } from "react";
import { Box, Button, TextField, Typography, Stack } from '@mui/material';
import { saveRegistration } from '../shopApi';

function Registration() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [firstNameError, setFirstNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const firstNameErrorValidation = () => {
    if (!formData.firstName) {
        // Asetetaan error näkyville lomakkeeseen
        setFirstNameError(true);
        // Palautetaan true firstNameErrorille
        return true;
    } else {
        // Asetetaan error pois lomakenäkymästä
        setFirstNameError(false);
        // Palautetaan false firstNameErrorille
        return false;
    }
  }

  const emailErrorValidation = () => {
    const emailRegex = /^[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,}$/; // https://regex101.com/r/lHs2R3/1
    if (!formData.email || !emailRegex.test(formData.email)) {
        setEmailError(true);
        return true;
    } else {
        setEmailError(false);
        return false;
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const firstNameErrorState = firstNameErrorValidation();
    const emailErrorState = emailErrorValidation();
    if (firstNameErrorState || emailErrorState) {
      return;
    } else {
      saveRegistration(formData)
        .then(console.log(formData))
        .catch(err => console.error(err))
    }
  }

	return (
		<Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: "rgba(255, 255, 255, 0.87)",
		    margin: 0,
        padding: 2,
      }}
    >
    <div style={{width: "35%"}}>
      <Stack spacing={2}>
        <Typography variant="h4" gutterBottom>
          Registration
        </Typography>
        <TextField
          required
          margin="dense"
          variant="outlined"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          label="First Name"
          error={firstNameError}
          helperText={firstNameError ? "Set first name" : ""}
        />
        <TextField
            margin="dense"
            variant="outlined"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            label="Last Name"
        />
        <TextField
          required
          margin="dense"
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleChange}
          label="Email"
          error={emailError}
          helperText={emailError ? 
          <>
              Set valid email, for example: 
              <span style={{ fontStyle: "italic" }}> example@gmail.com</span>
          </> 
          : ""}
        />
        <Box sx={{textAlign: "left" }}>
          <Typography 
            variant="caption" 
            color="textSecondary" 
            sx={{ marginTop: 2 }}>
            Required *
          </Typography>
        </Box>
      </Stack>
      <Button variant="outlined" onClick={handleSubmit}>Register</Button>
    </div>
    </Box>
	)
}

export default Registration