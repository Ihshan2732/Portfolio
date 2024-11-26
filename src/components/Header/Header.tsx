import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Button } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const Header = () => (
  <AppBar position="static" color="inherit" sx={{ boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
    <Toolbar>
      {/* Name/Brand */}
      <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: 'cursive', color: 'black', display: 'flex', alignItems: 'center' }}>
        <Box component="span" sx={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: 'primary.light', mr: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h6" sx={{ color: 'white' }}>
            MI
          </Typography>
        </Box>
        Mohamed Ihshan
      </Typography>

      {/* Navigation Links */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mr: 4 }}>
        <Button
          onClick={() => window.location.href = '/'}
          color="inherit"
          sx={{
            fontSize: '16px',
            fontColor: 'white',
            textTransform: 'none',
            backgroundColor: 'pink',
            '&:hover': {
              backgroundColor: '#1565C0',
              transition: 'background-color 0.2s ease-in-out',
            },
          }}>
          About Me
        </Button>
        <Button onClick={() => window.location.href = '/projects'} color="inherit" sx={{
          fontSize: '16px',
          textTransform: 'none',
          backgroundColor: 'pink',
          '&:hover': {
            backgroundColor: '#1565C0',
            transition: 'background-color 0.2s ease-in-out',
          },
        }}>
          Projects
        </Button>
        <Button onClick={() => window.location.href = '/Skills'} color="inherit" sx={{
          fontSize: '16px',
          textTransform: 'none',
          backgroundColor: 'pink',
          '&:hover': {
            backgroundColor: '#1565C0',
            transition: 'background-color 0.2s ease-in-out',
          },
        }}>
          Skills
        </Button>
        <Button onClick={() => window.location.href = '/contact'} color="inherit" sx={{
          fontSize: '16px',
          textTransform: 'none',
          backgroundColor: 'pink',
          '&:hover': {
            backgroundColor: '#1565C0',
            transition: 'background-color 0.2s ease-in-out',
          },
        }}>
          Contact
        </Button>
      </Box>

      {/* Social Icons */}
      <Box sx={{ display: 'flex', gap: 1 }}>
        <IconButton href="https://www.twitter.com" target="_blank" aria-label="Twitter" color="primary" sx={{backgroundColor:'lightblue'}}>
          <TwitterIcon />
        </IconButton>
        <IconButton href="https://www.github.com" target="_blank" aria-label="GitHub" sx={{backgroundColor:'lightblue'}}>
          <GitHubIcon />
        </IconButton>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
