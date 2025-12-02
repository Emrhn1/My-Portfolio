// app/projects/[slug]/ProjectDetailClient.tsx
'use client';
import { Container, Typography, Box, Button, IconButton, useTheme, Grid } from '@mui/material';
import { GitHub, OpenInNew, ArrowBack } from '@mui/icons-material';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SpotlightCard from '../../components/SpotLightCard';
import SplitText from '../../components/SplitText';
import TiltCard from '../../components/TiltCard';

interface Project {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  date: string;
  features: {
    icon: any;
    title: string;
    desc: string;
  }[];
}

export default function ProjectDetailClient({ project }: { project: Project }) {
  const theme = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      background: theme.palette.mode === 'dark' ? '#0f172a' : '#ffffff',
      pt: 10 
    }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Link href="/#projects" passHref>
          <Button
            startIcon={<ArrowBack />}
            sx={{
              mb: 4,
              color: '#3b82f6',
              '&:hover': {
                background: 'rgba(59, 130, 246, 0.1)',
              },
            }}
          >
            Projelere Dön
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box
            component="img"
            src={project.image}
            alt={project.title}
            sx={{
              width: '100%',
              height: { xs: '300px', md: '500px' },
              objectFit: 'cover',
              borderRadius: 3,
              mb: 6,
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            }}
          />
        </motion.div>

        <Box sx={{ mb: 6 }}>
            <Typography
            variant="h2"
            sx={{
                fontSize: { xs: '2rem', md: '3.5rem' },
                fontWeight: 900,
                mb: 2,
                color: 'text.primary',
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
            }}
            >
            <SplitText text={project.title} delay={0.01} />
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, mb: 4, alignItems: 'center' }}>
            <Typography variant="body2" color="text.secondary">
                {project.date}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton
                href={project.githubUrl}
                target="_blank"
                sx={{
                    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                    color: 'text.primary',
                    '&:hover': {
                    borderColor: '#3b82f6',
                    background: 'rgba(59, 130, 246, 0.1)',
                    },
                }}
                >
                <GitHub />
                </IconButton>
                <IconButton
                href={project.liveUrl}
                target="_blank"
                sx={{
                    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                    color: 'text.primary',
                    '&:hover': {
                    borderColor: '#8b5cf6',
                    background: 'rgba(139, 92, 246, 0.1)',
                    },
                }}
                >
                <OpenInNew />
                </IconButton>
            </Box>
            </Box>
        </Box>

        <Grid container spacing={4} sx={{ mb: 8 }}>
            <Grid size={{ xs: 12, md: 8 }}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: 'text.primary' }}>
                        Proje Hakkında
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                            lineHeight: 1.8,
                            whiteSpace: 'pre-line',
                            fontSize: '1.1rem',
                            mb: 4
                        }}
                    >
                        {project.fullDescription}
                    </Typography>
                </motion.div>
            </Grid>
            
            <Grid size={{ xs: 12, md: 4 }}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: 'text.primary' }}>
                        Teknolojiler
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {project.tags.map((tag, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <SpotlightCard>
                                    <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Box
                                            sx={{
                                                width: 8,
                                                height: 8,
                                                borderRadius: '50%',
                                                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                                            }}
                                        />
                                        <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                                            {tag}
                                        </Typography>
                                    </Box>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </Box>
                </motion.div>
            </Grid>
        </Grid>

        {/* Özellikler Bölümü */}
        <Box sx={{ mb: 8 }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 6, textAlign: 'center', color: 'text.primary' }}>
                    Öne Çıkan Özellikler
                </Typography>
            </motion.div>
            
            <Grid container spacing={3}>
                {project.features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <Grid key={index} size={{ xs: 12, sm: 6, md: project.features.length === 4 ? 6 : 4 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <TiltCard>
                                <Box
                                    sx={{
                                        p: 3,
                                        height: '100%',
                                        minHeight: '220px',
                                        borderRadius: 3,
                                        background: theme.palette.mode === 'dark' 
                                            ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.8) 100%)'
                                            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%)',
                                        border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                                        backdropFilter: 'blur(10px)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            borderColor: '#3b82f6',
                                            boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)',
                                        }
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 64,
                                            height: 64,
                                            borderRadius: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                                            mb: 2,
                                            color: '#fff',
                                            boxShadow: '0 8px 16px rgba(59, 130, 246, 0.3)',
                                        }}
                                    >
                                        <IconComponent sx={{ fontSize: 32 }} />
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: 'text.primary' }}>
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                                        {feature.desc}
                                    </Typography>
                                </Box>
                            </TiltCard>
                        </motion.div>
                    </Grid>
                  );
                })}
            </Grid>
        </Box>

      </Container>
    </Box>
  );
}