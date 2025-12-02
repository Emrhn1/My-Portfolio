// app/components/Hero.tsx
'use client';
import { Container, Typography, Box, Button, Card, CardContent, Chip, IconButton } from '@mui/material';
import {Grid} from '@mui/system';
import { GitHub, LinkedIn, Email, Code, Rocket, Lightbulb } from '@mui/icons-material';
import { keyframes } from '@mui/system';
import SplitText from './SplitText';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
  50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.8); }
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export default function Hero() {
  const skills = ['React', 'Next.js', 'TypeScript', 'Redux Toolkit', 'MUI', 'TailwindCSS'];
  
  const features = [
    {
      icon: <Code sx={{ fontSize: 40 }} />,
      title: 'Clean Code',
      description: 'Temiz ve sürdürülebilir kod yazımı',
    },
    {
      icon: <Rocket sx={{ fontSize: 40 }} />,
      title: 'Performance',
      description: 'Optimize edilmiş ve hızlı uygulamalar',
    },
    {
      icon: <Lightbulb sx={{ fontSize: 40 }} />,
      title: 'Innovation',
      description: 'Modern ve yenilikçi çözümler',
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        // Dinamik background
        background: (theme) => theme.palette.mode === 'dark'
          ? 'linear-gradient(-45deg, #0f172a, #1e293b, #0f172a, #1e293b)'
          : 'linear-gradient(-45deg, #ffffff, #f1f5f9, #ffffff, #f1f5f9)', // Çok hafif gri geçişler
        backgroundSize: '400% 400%',
        animation: `${gradientAnimation} 15s ease infinite`,
        pt: { xs: 10, md: 12 },
      }}
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2), transparent)',
          filter: 'blur(60px)',
          animation: `${float} 6s ease-in-out infinite`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2), transparent)',
          filter: 'blur(80px)',
          animation: `${float} 8s ease-in-out infinite`,
          animationDelay: '2s',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box>
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="overline"
                  component="div"
                  sx={{
                    color: '#3b82f6',
                    fontWeight: 600,
                    letterSpacing: 2,
                  }}
                >
                  <SplitText text="FRONTEND DEVELOPER" delay={0.1} />
                </Typography>
              </Box>
              
              <Typography
                variant="h1"
                component="div"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                  fontWeight: 900,
                  mb: 2,
                  lineHeight: 1.2,
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: `${gradientAnimation} 3s ease infinite`,
                }}
              >
                <Box sx={{ display: 'block' }}>
                  <SplitText text="Merhaba," delay={0.2} />
                </Box>
                <Box sx={{ display: 'block' }}>
                  <SplitText text="Ben Emirhan Erkan" delay={0.4} />
                </Box>
              </Typography>
              
              <Box sx={{ mb: 4, maxWidth: '650px' }}>
                <Typography
                  variant="h5"
                  component="div"
                  color="text.secondary"
                  sx={{ 
                    lineHeight: 1.6,
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                  }}
                >
                  <SplitText 
                    text="Modern web teknolojileri ile kullanıcı dostu ve performanslı web uygulamaları geliştiriyorum. Kullanıcı deneyimini ön planda tutarak,estetik 
                    tasarımları temiz kod yapısıyla birleştiriyor ve etkileşimli arayüzler oluşturuyorum." 
                    delay={0.5}
                  />
                </Typography>
              </Box>

              <Box sx={{ mb: 4, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {skills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    sx={{
                      background: 'rgba(59, 130, 246, 0.1)',
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                      color: '#3b82f6',
                      fontWeight: 600,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'rgba(59, 130, 246, 0.2)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  />
                ))}
              </Box>
              
              <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  href="#projects"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                    animation: `${glow} 2s ease-in-out infinite`,
                    '&:hover': {
                      background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Projeleri Gör
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  href="#contact"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderWidth: 2,
                    borderColor: '#3b82f6',
                    color: '#3b82f6',
                    '&:hover': {
                      borderWidth: 2,
                      background: 'rgba(59, 130, 246, 0.1)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  İletişime Geç
                </Button>
              </Box>

              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton
                  href="https://github.com/Emrhn1"
                  target="_blank"
                  sx={{
                    border: '2px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: '#3b82f6',
                      transform: 'translateY(-3px) rotate(5deg)',
                      background: 'rgba(59, 130, 246, 0.1)',
                    },
                  }}
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  href="https://www.linkedin.com/in/emirhan-erkan-0aa03424b/"
                  target="_blank"
                  sx={{
                    border: '2px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: '#0077b5',
                      transform: 'translateY(-3px) rotate(-5deg)',
                      background: 'rgba(0, 119, 181, 0.1)',
                    },
                  }}
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  href="mailto:oyuncut80@gmail.com"
                  sx={{
                    border: '2px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: '#8b5cf6',
                      transform: 'translateY(-3px) rotate(5deg)',
                      background: 'rgba(139, 92, 246, 0.1)',
                    },
                  }}
                >
                  <Email />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {features.map((feature, index) => (
                <Card
                  key={index}
                  sx={{
                    background: (theme) => theme.palette.mode === 'dark' 
                      ? 'rgba(30, 41, 59, 0.5)' 
                      : 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: (theme) => `1px solid ${theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)'}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateX(10px)',
                      border: '1px solid rgba(59, 130, 246, 0.5)',
                      background: (theme) => theme.palette.mode === 'dark' 
                        ? 'rgba(30, 41, 59, 0.8)' 
                        : '#ffffff', // Light mode hover rengi
                      boxShadow: (theme) => theme.palette.mode === 'light' ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none',
                    },
                  }}
                >
                  <CardContent sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Box
                      sx={{
                        color: '#3b82f6',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}