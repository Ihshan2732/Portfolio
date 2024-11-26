// components/SocialLinks.jsx
import React from 'react';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShareIcon from '@mui/icons-material/Share';

const SocialLinks = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleShareClick = (event: { currentTarget: React.SetStateAction<null>; }) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleWebShare = async () => {
    const shareData = {
      title: 'Check out this website!',
      text: 'I found this amazing website!',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log('Content shared successfully!');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      setAnchorEl(anchorEl);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 2,
        marginTop: 2,
      }}
    >
      {/* Social Media Links */}
      <IconButton
        href="https://www.linkedin.com"
        target="_blank"
        aria-label="LinkedIn"
        color="primary"
        sx={{ backgroundColor: 'black', color: 'white' }}
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        href="https://www.instagram.com"
        target="_blank"
        aria-label="Instagram"
        color="secondary"
        sx={{ backgroundColor: 'black', color: 'white' }}
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        href="https://www.facebook.com"
        target="_blank"
        aria-label="Facebook"
        color="primary"
        sx={{ backgroundColor: 'black', color: 'white' }}
      >
        <FacebookIcon />
      </IconButton>

      {/* Share Button */}
      <IconButton
        aria-label="Share"
        color="primary"
        sx={{ backgroundColor: 'black', color: 'white' }}
        onClick={handleWebShare}
      >
        <ShareIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            window.open(
              'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href,
              '_blank'
            );
            handleClose();
          }}
        >
          Share on Facebook
        </MenuItem>
        <MenuItem
          onClick={() => {
            window.open(
              'https://api.whatsapp.com/send?text=' + encodeURIComponent(window.location.href),
              '_blank'
            );
            handleClose();
          }}
        >
          Share on WhatsApp
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
            handleClose();
          }}
        >
          Copy Link
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default SocialLinks;
