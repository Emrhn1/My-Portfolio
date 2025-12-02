// app/components/Contact.tsx
'use client';
import { Container, Typography, Box, TextField, Button, Card, CardContent, Alert, CircularProgress } from '@mui/material';
import {Grid} from '@mui/system';
import { Email, Phone, LocationOn, Send } from '@mui/icons-material';
import { keyframes } from '@mui/system';
import { useState } from 'react';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        const data = await response.json();
        setError(data.error || 'Bir hata oluştu. Lütfen tekrar deneyin.');
      }
    } catch (err) {
      setError('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Email sx={{ fontSize: 40 }} />,
      title: 'Email',
      value: 'oyuncut80@gmail.com',
      link: 'mailto:oyuncut80@gmail.com',
    },
    {
      icon: <Phone sx={{ fontSize: 40 }} />,
      title: 'Telefon',
      value: '+90 536 793 6456',
      link: 'tel:+905367936456',
    },
    {
      icon: <LocationOn sx={{ fontSize: 40 }} />,
      title: 'Konum',
      value: 'İstanbul, Türkiye',
      link: '#',
    },
  ];

  return (
    <Box
      id="contact"
      sx={{
        minHeight: '100vh',
        py: 10,
        position: 'relative',
        overflow: 'hidden',
        // Dinamik background
        background: (theme) => theme.palette.mode === 'dark'
          ? 'linear-gradient(-45deg, #0f172a, #1e293b, #0f172a, #1e293b)'
          : 'linear-gradient(-45deg, #ffffff, #f1f5f9, #ffffff, #f1f5f9)',
        backgroundSize: '400% 400%',
        animation: `${gradientAnimation} 15s ease infinite`,
      }}
    >
      {/* Background Effects */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15), transparent)',
          filter: 'blur(80px)',
          animation: `${float} 8s ease-in-out infinite`,
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
            İLETİŞİM
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
            Benimle İletişime Geçin
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: '600px', mx: 'auto', fontSize: '1.1rem' }}
          >
            Proje fikirleri, iş birlikleri veya sorularınız için bana ulaşabilirsiniz.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  component="a"
                  href={info.link}
                  sx={{
                    background: (theme) => theme.palette.mode === 'dark' 
                      ? 'rgba(30, 41, 59, 0.5)' 
                      : '#ffffff',
                    backdropFilter: 'blur(10px)',
                    border: (theme) => `1px solid ${theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)'}`,
                    boxShadow: (theme) => theme.palette.mode === 'light' ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      border: '1px solid rgba(59, 130, 246, 0.5)',
                      background: (theme) => theme.palette.mode === 'dark' ? 'rgba(30, 41, 59, 0.8)' : '#f8fafc',
                    },
                  }}
                >
                  <CardContent sx={{ display: 'flex', gap: 3, alignItems: 'center', p: 3 }}>
                    <Box
                      sx={{
                        color: '#3b82f6',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: 60,
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                        {info.title}
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
                        {info.value}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              ))}

              <Box
                sx={{
                  mt: 2,
                  p: 4,
                  background: 'rgba(59, 130, 246, 0.1)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: 3,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'text.primary' }}>
                  Çalışma Saatleri
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Pazartesi - Cuma: 09:00 - 18:00
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Hafta Sonu: Proje Bazlı
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Card
              sx={{
                background: (theme) => theme.palette.mode === 'dark' 
                  ? 'rgba(30, 41, 59, 0.5)' 
                  : '#ffffff',
                backdropFilter: 'blur(10px)',
                border: (theme) => `1px solid ${theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)'}`,
                boxShadow: (theme) => theme.palette.mode === 'light' ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Adınız"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(0, 0, 0, 0.2)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(59, 130, 246, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#3b82f6',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'text.secondary',
                          },
                          '& .MuiInputBase-input': {
                            color: 'text.primary',
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(59, 130, 246, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(59, 130, 246, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#3b82f6',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Konu"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(59, 130, 246, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(59, 130, 246, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#3b82f6',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Mesajınız"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        multiline
                        rows={6}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(59, 130, 246, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(59, 130, 246, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#3b82f6',
                            },
                          },
                        }}
                      />
                    </Grid>
                    {error && (
                      <Grid size={{ xs: 12 }}>
                        <Alert severity="error">{error}</Alert>
                      </Grid>
                    )}
                    {success && (
                      <Grid size={{ xs: 12 }}>
                        <Alert severity="success">
                          Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.
                        </Alert>
                      </Grid>
                    )}
                    <Grid size={{ xs: 12 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        disabled={loading}
                        endIcon={loading ? <CircularProgress size={20} /> : <Send />}
                        sx={{
                          py: 1.5,
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {loading ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}