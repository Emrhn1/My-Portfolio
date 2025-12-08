// app/components/Navbar.tsx
'use client';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, useTheme, Tooltip } from '@mui/material';
import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SunnyIcon from '@mui/icons-material/Sunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useColorMode } from './ThemeContextProvider';
import Link from 'next/link';


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const colorMode = useColorMode();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Hakkımda', sectionId: 'about' },
    { label: 'Projeler', sectionId: 'projects' },
    { label: 'İletişim', sectionId: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: scrolled
          ? (theme.palette.mode === 'dark' ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.9)')
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(59, 130, 246, 0.2)' : 'none',
        transition: 'all 0.3s ease',
        color: theme.palette.text.primary,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Tooltip title="Anasayfa'ya Git">
            <Link href="/">
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 800,
                  fontSize: '1.5rem',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  }
                }}
              >
                {'<Emirhan />'}
              </Typography>
            </Link>
          </Tooltip>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            {menuItems.map((item, index) => (
              <Tooltip title={item.label} key={index}>
                <Button
                  key={index}
                  color="inherit"
                  onClick={() => scrollToSection(item.sectionId)}
                  sx={{
                    position: 'relative',
                    px: 2,
                    py: 1,
                    fontSize: '1rem',
                    fontWeight: 500,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 0,
                      height: '2px',
                      background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                      transition: 'width 0.3s ease',
                    },
                    '&:hover::before': {
                      width: '80%',
                    },
                  }}
                >
                  {item.label}
                </Button>
              </Tooltip>
            ))}

            <Tooltip title={theme.palette.mode === 'dark' ? "Açık Temaya Geç" : "Koyu Temaya Geç"}>
              <IconButton
                onClick={colorMode.toggleColorMode}
                color="inherit"
                sx={{ ml: 2 }}
              >
                {theme.palette.mode === 'dark' ? <SunnyIcon /> : <DarkModeIcon />}
              </IconButton>
            </Tooltip>
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <Tooltip title={theme.palette.mode === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}>
              <IconButton
                onClick={colorMode.toggleColorMode}
                color="inherit"
              >
                {theme.palette.mode === 'dark' ? <SunnyIcon /> : <DarkModeIcon />}
              </IconButton>
            </Tooltip>
            <IconButton
              onClick={() => setMobileOpen(!mobileOpen)}
              color="inherit"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        </Toolbar>

        {/* Mobile Menu */}
        {mobileOpen && (
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexDirection: 'column',
              gap: 1,
              pb: 2,
              background: theme.palette.background.paper,
              borderRadius: 2,
              p: 2,
              mt: 1,
              boxShadow: 3,
            }}
          >
            {menuItems.map((item, index) => (
              <Button
                key={index}
                color="inherit"
                fullWidth
                onClick={() => {
                  scrollToSection(item.sectionId);
                  setMobileOpen(false);
                }}
                sx={{ justifyContent: 'flex-start', pl: 2 }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </Container>
    </AppBar>
  );
}