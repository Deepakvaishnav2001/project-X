"use client"
import React, { useState } from 'react'
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Snackbar,
  SnackbarContent
} from '@mui/material'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setFormErrors({ ...formErrors, [e.target.name]: '' })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let errors = {
      name: '',
      email: '',
      message: '',
    }

    // Validate form data
    if (!formData.name) {
      errors.name = 'Name is required'
    }
    if (!formData.email) {
      errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address'
    }
    if (!formData.message) {
      errors.message = 'Message is required'
    }

    if (Object.values(errors).some((err) => err !== '')) {
      setFormErrors(errors)
      return
    }

    try {
      const name = formData.name;
      const email = formData.email;
      const message = formData.message;
      await fetch(`${process.env.NEXT_PUBLIC_PB_URL}/api/collections/contacts/records`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message
        }),
      });
      setSuccessMessage('Contact form submitted successfully!')
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      setErrorMessage('Error submitting contact form. Please try again later.')
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
      <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-20">
          <Container maxWidth="lg">
            <Box className="max-w-3xl mx-auto text-center">
              <Typography
                variant="h1"
                component="h1"
                className="text-4xl font-bold text-white mb-6"
              >
                Welcome to Our Business
              </Typography>
              <Typography
                variant="body1"
                component="p"
                className="text-lg text-white mb-8"
              >
                We offer custom single-page lead generation websites for small
                businesses.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href="#contact"
                className="bg-white text-indigo-500 hover:bg-indigo-500 hover:text-white"
              >
                Get Started
              </Button>
            </Box>
          </Container>
        </section>

        {/* Services Section */}
        <section className="py-20" id="services">
          <Container maxWidth="lg">
            <Box className="text-center mb-12">
              <Typography
                variant="h2"
                component="h2"
                className="text-3xl font-bold mb-4"
              >
                Our Services
              </Typography>
              <Typography
                variant="body1"
                component="p"
                className="text-lg text-gray-600"
              >
                We offer a wide range of services to meet your business needs.
              </Typography>
            </Box>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Card className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <CardContent className="p-6">
                    <Typography
                      variant="h3"
                      component="h3"
                      className="text-xl font-bold mb-4"
                    >
                      Custom Website Design
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      className="text-gray-600"
                    >
                      We create stunning, responsive, and user-friendly websites
                      tailored to your business needs.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <CardContent className="p-6">
                    <Typography
                      variant="h3"
                      component="h3"
                      className="text-xl font-bold mb-4"
                    >
                      Lead Generation
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      className="text-gray-600"
                    >
                      Our websites are designed to capture leads and convert
                      them into customers for your business.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <CardContent className="p-6">
                    <Typography
                      variant="h3"
                      component="h3"
                      className="text-xl font-bold mb-4"
                    >
                      Search Engine Optimization
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      className="text-gray-600"
                    >
                      We optimize your website for search engines, ensuring
                      maximum visibility and organic traffic.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* About Section */}
        <section className="py-20 bg-gray-100" id="about">
          <Container maxWidth="lg">
            <Box className="max-w-3xl mx-auto">
              <Typography
                variant="h2"
                component="h2"
                className="text-3xl font-bold mb-6 text-center"
              >
                About Us
              </Typography>
              <Typography
                variant="body1"
                component="p"
                className="text-lg text-gray-600 mb-8"
              >
                We are a team of passionate designers and developers dedicated to
                creating innovative and effective solutions for small businesses.
                Our goal is to help you stand out in a crowded market and
                attract more customers through stunning websites and effective
                lead generation strategies.
              </Typography>
              <Box className="flex justify-center">
                <Button
                  variant="contained"
                  color="primary"
                  href="#contact"
                  className="bg-indigo-500 text-white hover:bg-white hover:text-indigo-500"
                >
                  Get in Touch
                </Button>
              </Box>
            </Box>
          </Container>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-100" id="contact">
          <Container maxWidth="lg">
            <div className="max-w-3xl mx-auto">
              <Typography
                variant="h2"
                component="h2"
                className="text-3xl font-bold mb-6 text-center"
              >
                Get in Touch
              </Typography>
              <Typography
                variant="body1"
                component="p"
                className="text-lg text-gray-600 mb-8 text-center"
              >
                Fill out the form below, and we'll get back to you as soon as
                possible.
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!formErrors.name}
                    helperText={formErrors.name}
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!formErrors.email}
                    helperText={formErrors.email}
                  />
                  <TextField
                    required
                    id="outlined-multiline-static"
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    error={!!formErrors.message}
                    helperText={formErrors.message}
                  />
                </div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </Button>
              </Box>
            </div>
          </Container>
        </section>
      </main>
      <Snackbar
        open={!!successMessage}
        autoHideDuration={6000}
        onClose={() => setSuccessMessage('')}
      >
        <SnackbarContent
          message={successMessage}
          style={{
            backgroundColor: 'green',
            color: 'white',
          }}
        />
      </Snackbar>

      {/* Error Snackbar */}
      <Snackbar
        open={!!errorMessage}
        autoHideDuration={6000}
        onClose={() => setErrorMessage('')}
      >
        <SnackbarContent
          message={errorMessage}
          style={{
            backgroundColor: 'red',
            color: 'white',
          }}
        />
      </Snackbar>
    </div>
  )
}