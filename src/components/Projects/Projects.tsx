import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button, Grid } from '@mui/material';

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A responsive personal portfolio built with React and Material-UI.",
    image: "/Capture.PNG",
    link: "https://your-portfolio-link.com",
  },
  {
    id: 2,
    title: "Pos System",
    description: "A fully functional POS System with React, Node.js, and MongoDB.",
    image: "/dscreen-img-2.jpg",
    link: "https://your-ecommerce-link.com",
  },
  {
    id: 3,
    title: "Blog Platform",
    description: "A modern blog platform with user authentication and CRUD functionality.",
    image: "/download.jpeg",
    link: "https://your-blog-link.com",
  },
  {
    id: 4,
    title: "GYM Management System",
    description: "A group project for a GYM Management Site web application completed during the second semester.",
    technologies: "JavaScript | PHP | SQL | HTML | CSS | Bootstrap",
    image: "/12.PNG",
    link: "https://your-gym-management-link.com",
  },
  {
    id: 5,
    title: "Online Birth Certificate Management System",
    description: "An individual project for an Online Birth Certificate Management System completed during the third semester.",
    technologies: "JavaScript | PHP | SQL | HTML | CSS",
    image: "/B1.PNG",
    link: "https://github.com/Ihshan2732/Online-Birth-Certificate-System",
  },
  {
    id: 6,
    title: "Vehicle Service Center Management System",
    description: "An individual project for a Vehicle Service Center Management System completed during the final semester.",
    technologies: "JavaScript | PHP | SQL | HTML | CSS | Bootstrap | jQuery | AJAX",
    image: "/V1.PNG",
    link: "https://github.com/Ihshan2732/Vehicle-Service-Center-Management-System",
  },
];

const Projects = () => (
  <Box id="projects" sx={{ padding: 4, background: '#f5f5f5' }}>
    <Typography variant="h4" sx={{ textAlign: 'center', mb: 4 }}>
      My Projects
    </Typography>
    <Grid container spacing={3}>
      {projects.map((project) => (
        <Grid item xs={12} sm={6} md={4} key={project.id}>
          <Card
            sx={{
              maxWidth: 345,
              transition: 'transform .3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <CardMedia
              component="img"
              height={200}
              style={{ objectFit: 'cover', marginTop: '10px' }}
              width={400}
              image={project.image}
              alt={project.title}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
              {project.technologies && (
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  <strong>Technologies:</strong> {project.technologies}
                </Typography>
              )}
            </CardContent>
            <Button
              variant="contained"
              color="primary"
              href={project.link}
              target="_blank"
              sx={{ margin: 2 }}
              onClick={() => {
                console.log(`You clicked on ${project.title}`);
              }}
            >
              View Project
            </Button>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Projects;
