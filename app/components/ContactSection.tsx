"use client"
import React, { useState } from 'react'

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4 text-white text-center">Get in Touch</h2>
        <p className="text-lg text-gray-300 mb-8 text-center">
          Fill out the form below, and we&apos;ll get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`w-full bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none ${formErrors.name ? 'border-red-500' : ''}`}
            />
            {formErrors.name && <p className="text-red-500 mt-1">{formErrors.name}</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className={`w-full bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none ${formErrors.email ? 'border-red-500' : ''}`}
            />
            {formErrors.email && <p className="text-red-500 mt-1">{formErrors.email}</p>}
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={4}
              className={`w-full bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none ${formErrors.message ? 'border-red-500' : ''}`}
            />
            {formErrors.message && <p className="text-red-500 mt-1">{formErrors.message}</p>}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-md hover:bg-gradient-to-l hover:from-pink-500 hover:to-purple-500 transition-colors duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Success Snackbar */}
      {successMessage && (
        <div className="fixed bottom-4 left-4 bg-green-500 text-white px-4 py-2 rounded-md">
          {successMessage}
        </div>
      )}

      {/* Error Snackbar */}
      {errorMessage && (
        <div className="fixed bottom-4 left-4 bg-red-500 text-white px-4 py-2 rounded-md">
          {errorMessage}
        </div>
      )}
    </>
  )
}
