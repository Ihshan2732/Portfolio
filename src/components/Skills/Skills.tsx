import React from 'react';
import { Box, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const skills = [
  {
    category: 'Front-End Development',
    description: 'Creating interactive and responsive user interfaces.',
    tools: ['React', 'Next.js', 'Material-UI', 'Mantine', 'HTML', 'CSS', 'JavaScript (ES6+)'],
    icon: <CodeIcon color="primary" />,
  },
  {
    category: 'Back-End Development',
    description: 'Building and managing server-side logic and APIs.',
    tools: ['Node.js', 'MongoDB', 'PHP', 'MySQL'],
    icon: <StorageIcon color="secondary" />,
  },
  {
    category: 'Programming Languages',
    description: 'Proficient in multiple programming languages for various applications.',
    tools: ['Java', 'PHP', 'C#', 'JavaScript (ES6+)'],
    icon: <CodeIcon color="primary" />,
  },
  {
    category: 'UI/UX Design',
    description: 'Designing clean and user-friendly interfaces.',
    tools: ['Figma', 'Responsive Design', 'Mantine Components', 'Material Components'],
    icon: <DesignServicesIcon color="success" />,
  },
  {
    category: 'Advanced Skills',
    description: 'Implementing complex functionalities and validations.',
    tools: [
      'Barcode Generation',
      'Bulk Upload (CSV/Excel)',
      'Stock Management',
      'Real-time Alerts',
      'Unit Testing (Jest, Mocha)',
    ],
    icon: <CheckCircleOutlineIcon color="action" />,
  },
];

const Skills = () => (
  <Box id="skills" sx={{ padding: 4, background: '#f5f5f5' }}>
    <Typography variant="h4" sx={{ textAlign: 'center', mb: 4 }}>
      My Skills
    </Typography>
    <Grid container spacing={3}>
      {skills.map((skill, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            sx={{
              backgroundColor: '#e0e0e0',
              borderRadius: '20px',
              height: '100%',
              '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.3s ease-in-out',
              },
            }}
          >
            <CardContent>
              <List>
                <ListItem>
                  <ListItemIcon>{skill.icon}</ListItemIcon>
                  <Typography variant="h6">{skill.category}</Typography>
                </ListItem>
              </List>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {skill.description}
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                Tools & Technologies:
              </Typography>
              <List>
                {skill.tools.map((tool, idx) => (
                  <ListItem key={idx} sx={{ padding: 0 }}>
                    <ListItemText primary={`• ${tool}`} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Skills;
