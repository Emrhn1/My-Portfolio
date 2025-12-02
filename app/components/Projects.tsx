// app/components/Projects.tsx
'use client';
import { Container, Typography, Box, Card, CardContent, CardMedia, Chip, IconButton } from '@mui/material';
import {Grid} from '@mui/system';
import { GitHub, OpenInNew, ArrowForward } from '@mui/icons-material';
import { keyframes } from '@mui/system';
import Link from 'next/link';
import { projects } from '../projects';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

export default function Projects() {
  return (
    <Box
      id="projects"
      sx={{
        minHeight: '100vh',
        py: 10,
        // Dinamik background
        background: (theme) => theme.palette.mode === 'dark'
          ? 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)'
          : 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Effects */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15), transparent)',
          filter: 'blur(80px)',
          animation: `${float} 10s ease-in-out infinite`,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="overline"
            sx={{
              color: '#3b82f6',
              fontWeight: 600,
              letterSpacing: 2,
              mb: 2,
              display: 'block',
            }}
          >
            PORTFOLIO
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 900,
              mb: 2,
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Projelerim
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: '600px', mx: 'auto', fontSize: '1.1rem' }}
          >
            Üzerinde çalıştığım ve geliştirdiğim projeler. Her biri farklı teknolojiler ve yaklaşımlar kullanılarak oluşturuldu.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: (theme) => theme.palette.mode === 'dark' 
                    ? 'rgba(30, 41, 59, 0.5)' 
                    : '#ffffff',
                  backdropFilter: 'blur(10px)',
                  border: (theme) => `1px solid ${theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)'}`,
                  boxShadow: (theme) => theme.palette.mode === 'light' ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none',
                  borderRadius: 3,
                  overflow: 'hidden',
                  position: 'relative',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  animation: `${fadeInUp} 0.6s ease-out ${index * 0.1}s both`,
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-12px)',
                    border: '1px solid rgba(59, 130, 246, 0.5)',
                    boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)',
                    '& .project-image': {
                      transform: 'scale(1.1)',
                    },
                    '& .project-overlay': {
                      opacity: 1,
                    },
                  },
                }}
              >
                <Link 
                  href={`/projects/${project.slug}`} 
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Box sx={{ position: 'relative', paddingTop: '60%', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      image={project.image}
                      alt={project.title}
                      className="project-image"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease',
                      }}
                    />
                    <Box
                      className="project-overlay"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(139, 92, 246, 0.8))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                      }}
                    >
                      <ArrowForward sx={{ fontSize: 48, color: 'white' }} />
                    </Box>
                  </Box>

                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 1.5,
                        color: 'text.primary', // Dinamik renk
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mb: 2,
                        lineHeight: 1.7,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {project.tags.map((tag, tagIndex) => (
                        <Chip
                          key={tagIndex}
                          label={tag}
                          size="small"
                          sx={{
                            background: 'rgba(59, 130, 246, 0.1)',
                            border: '1px solid rgba(59, 130, 246, 0.3)',
                            color: '#3b82f6',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Link>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 2,
                    pt: 0,
                  }}
                >
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <IconButton
                      size="small"
                      href={project.githubUrl}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      sx={{
                        border: (theme) => `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                        color: 'text.primary', // İkon rengi
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: '#3b82f6',
                          background: 'rgba(59, 130, 246, 0.1)',
                          transform: 'rotate(5deg)',
                        },
                      }}
                    >
                      <GitHub fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      href={project.liveUrl}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      sx={{
                        border: '1px solid rgba(255,255,255,0.1)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: '#8b5cf6',
                          background: 'rgba(139, 92, 246, 0.1)',
                          transform: 'rotate(-5deg)',
                        },
                      }}
                    >
                      <OpenInNew fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}