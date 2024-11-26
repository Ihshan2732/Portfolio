import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Alert } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setError(true);
      setSuccess(false);
      return;
    }

    setError(false);
    setSuccess(true);

    console.log('Form Submitted:', formData);

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box className="background-animation">
      <Box
        id="contact"
        sx={{
          maxWidth: '400px',
          margin: 'auto',
          padding: 4,
          background: '#f5f5f5',
          borderRadius: 10,
          boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      >
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 3 }}>
          Contact Me
        </Typography>
        {success && <Alert severity="success">Your message has been sent successfully!</Alert>}
        {error && <Alert severity="error">Please fill out all fields before submitting.</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            type="email"
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            endIcon={<SendIcon />}
          >
            Send Message
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default ContactForm;
