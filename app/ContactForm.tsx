"use client"
import React, { useState } from 'react'
import {
    Box,
    Button,
    TextField,
    Typography,
    Container,
    Snackbar,
    SnackbarContent
} from '@mui/material'



export default function ContactForm() {
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
            const response =
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
            if (response.ok && response.status == 200 && response.statusText == 'OK') {
                setSuccessMessage('Contact form submitted successfully!')
                setFormData({ name: '', email: '', message: '' })
            } else {
                throw true
            }
        } catch (err) {
            setErrorMessage('Error submitting contact form. Please try again later.')
        }
    }

    return (
        <><section className="py-20 bg-gray-100" id="contact">
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
                        Fill out the form below, and we&apos;ll get back to you as soon as
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
      </Snackbar></>
    )
}
