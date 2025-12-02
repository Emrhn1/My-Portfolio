// app/components/Footer.tsx
'use client';
import { Box, Container, Typography, IconButton, Link as MuiLink, useTheme } from '@mui/material';
import { GitHub, LinkedIn, Twitter, Email } from '@mui/icons-material';

export default function Footer() {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        background: theme.palette.mode === 'dark' 
          ? 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)'
          : 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)',
        borderTop: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)'}`,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3,
          }}
        >
          {/* Sol Taraf - Logo/Metin */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 1,
              }}
            >
              Emirhan
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Frontend Developer
            </Typography>
          </Box>

          {/* Orta - Sosyal Medya İkonları */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              component="a"
              href="https://github.com/Emrhn1"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'text.primary',
                border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                '&:hover': {
                  borderColor: '#3b82f6',
                  background: 'rgba(59, 130, 246, 0.1)',
                  color: '#3b82f6',
                },
              }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/emirhan-erkan-0aa03424b/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'text.primary',
                border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                '&:hover': {
                  borderColor: '#3b82f6',
                  background: 'rgba(59, 130, 246, 0.1)',
                  color: '#3b82f6',
                },
              }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              component="a"
              href="mailto:oyuncut80@gmail.com"
              sx={{
                color: 'text.primary',
                border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                '&:hover': {
                  borderColor: '#3b82f6',
                  background: 'rgba(59, 130, 246, 0.1)',
                  color: '#3b82f6',
                },
              }}
            >
              <Email />
            </IconButton>
          </Box>

          {/* Sağ Taraf - Copyright */}
          <Box sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Typography variant="body2" color="text.secondary">
              © {currentYear} Emirhan. Tüm hakları saklıdır.
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Made with ❤️ using Next.js & MUI
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}