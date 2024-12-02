import '../App.css'
import { useState } from "react";
import { Box, Typography } from '@mui/material';
import { saveRegistration } from '../shopApi';

function Registration() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    saveRegistration(formData)
    .then(console.log(formData))
    .catch(err => console.error(err))
  }

	return (
		<Box 
      sx={{ 
        display: 'block', 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'rgba(245, 245, 245, 0.8)',
		    margin: 0,
        padding: 2,
      }}
    >
		  <Typography variant="h4" gutterBottom>
        Registration
      </Typography>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="firstName">First name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        </div>
        <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="lastName">Last name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        </div>
        <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        </div>
      <button type="submit">Register</button>
      </form>
    </Box>
	)
}

export default Registration