import React from 'react';
import { Box, Typography, Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SocialLinks from '../SocialLinks/SocialLinks';
import './HeroSection.css';

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box className="hero-background">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 4,
          height: isMobile ? 'calc(100vh - 56px)' : '100vh',
        }}
      >
        <Box>
          <Typography variant="h3" color="white" style={{ marginTop: '-100px' }}>
            Hi all, I'm Ihshan
          </Typography>
          <Box style={{ marginTop: '10px', marginRight: '100px' }}>
            <Typography variant="h6" color="white" sx={{ my: 2 }}>
              A versatile Full Stack Web Developer specializing in creating seamless, user-friendly
              applications using modern front-end and back-end technologies like React, Node.js, and
              robust database systems. Passionate about delivering efficient, scalable, and
              innovative solutions.
            </Typography>
          </Box>
          <Box
            sx={{
              display: isMobile ? 'flex' : 'block',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '20px',
              marginLeft: '-580px',
            }}
          >
            <SocialLinks />
          </Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 5 }}
            href="./Resume.pdf"
            target="_blank"
          >
            See My Resume
          </Button>
        </Box>
        <Box
          sx={{
            transition: 'transform .3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          <img
            src="/Me.jpg"
            alt="Developer"
            style={{
              maxWidth: '500px',
              height: isMobile ? '30vh' : '90vh',
              marginRight: isMobile ? '0px' : '10px',
              marginTop: isMobile ? '0px' : '-40px',
              borderRadius: '20%',
              color: 'white',
              backgroundColor: 'white',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
