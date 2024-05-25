import React, { useState } from 'react';
import Image from 'next/image';

const ContactSection = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (<div className='contact flex flex-col flex-grow justify-center items-center'>
    {!showForm ? (<>
    <h1 className="title text-white text-4xl font-bold text-center mb-8" style={{ margin: "0 0 .65em"}} >
      Let&apos;s work together
      </h1>
      <p className="text-center" style={{}}>
        We&apos;re addicts for the high we get when launching apps we&apos;re proud of. If you&apos;re ready to dig in and make some magic together, drop us a line.
        </p>
      <button className="bg-white text-black rounded-full hover:bg-gray-200 transition-colors duration-300" style={{}} onClick={toggleForm} >
        Get in touch
        </button>
        </>
    ) :
      < ContactForm />
    }
  </div>);
}

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    company: '',
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
        setFormData({ name: '', email: '', message: '', company: ''})
      } else {
        throw true
      }
    } catch (err) {
      setErrorMessage('Error submitting contact form. Please try again later.')
    }
  }

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="font-bold mb-8 text-white" style={{ fontSize: "5.75rem" }}>
              <div>
                <p style={{ marginBottom: "0.8em", fontWeight: "400", fontSize: "5.75rem" }}>
                  <span style={{ opacity: "1" }}>
                    <span style={{ display: "inline-flex", overflow: "hidden" }}>
                      <span style={{ position: "relative", opacity: "1", transform: "none" }}>Say Hello</span>
                    </span>
                    {/* <span style={{ display: "inline-flex", overflow: "hidden" }}>
                      <span style={{ position: "relative", opacity: "1", transform: "none" }}>
                        <Image src='/images/namaste.jpg' alt="Namaste" width={100} height={100} />
                      </span>
                    </span> */}
                  </span>
                </p>
              </div>
            </h1>
            <div className="contact-us-desc text-white mb-8">
              <p style={{ fontSize: "1.5rem", color: "rgb(255 255 255 / var(--tw-text-opacity))", transition: "color .5s ease-in-out", marginBottom: "1.3em", fontWeight: "400" }}>Ready to create your dream app?
              </p>
              <p style={{ fontSize: "1.5rem", color: "rgb(255 255 255 / var(--tw-text-opacity))", transition: "color .5s ease-in-out", marginBottom: "1.3em", fontWeight: "400" }}>We&apos;re your one-stop-shop for everything you need to launch a lovable digital product.
              </p>
            </div>
            {/* <div>
              <h2 className="text-white text-xl font-bold mb-2">
                Send us pizza 🍕
              </h2>
              <p className="text-white" style={{ fontSize: "1.25rem", marginBottom: "1.3em", fontWeight: "400" }}>
                10 Victoria Crescent
                <br />Nanaimo, BC V9R 5B9, Canada
                <br />hello@example.com
              </p>
            </div> */}
          </div>
          <form className="contact-form" onSubmit={handleSubmit} >
            <div className="mb-6" style={{ width: "100%", fontSize: "1.125rem", fontWeight: "400" }}>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="off"
                placeholder="Name"
                className="bg-black border-b border-gray-600 text-white px-4 py-2 w-full focus:outline-none"
                maxLength={200}
              />
               {formErrors.name && <p className="text-red-500 mt-1">{formErrors.name}</p>}
            </div>
            <div className="mb-6" style={{ width: "100%", fontSize: "1.125rem", fontWeight: "400" }}>
              <label htmlFor="company" className="sr-only">
                Company
              </label>
              <input
                type="text"
                name="company"
                id="company"
                value={formData.company}
                onChange={handleChange}
                autoComplete="off"
                placeholder="Company"
                className="bg-black border-b border-gray-600 text-white px-4 py-2 w-full focus:outline-none"
                maxLength={200}
              />
            </div>
            <div className="mb-6" style={{ width: "100%", fontSize: "1.125rem", fontWeight: "400" }}>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
                placeholder="Email"
                className="bg-black border-b border-gray-600 text-white px-4 py-2 w-full focus:outline-none"
                maxLength={200}
              />
               {formErrors.email && <p className="text-red-500 mt-1">{formErrors.email}</p>}
            </div>
            <div className="mb-8" style={{ width: "100%", fontSize: "1.125rem", fontWeight: "400" }}>
              <label htmlFor="message" className="sr-only">
                How can we help?
              </label>
              <input
                type="text"
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                autoComplete="off"
                placeholder="How can we help?"
                className="bg-black border-b border-gray-600 text-white px-4 py-2 w-full focus:outline-none"
                maxLength={200}
              />
               {formErrors.message && <p className="text-red-500 mt-1">{formErrors.message}</p>}
            </div>
            {/* <div className="mb-4">
            <div className="flex flex-wrap">
              <div className="mr-4 mb-2">
                <input id="interest0" type="checkbox" name="interests" value="Web Development" className="mr-2" />
                <label htmlFor="interest0" className="text-white">
                  Web Development
                </label>
              </div>
              <div className="mr-4 mb-2">
                <input id="interest1" type="checkbox" name="interests" value="Design" className="mr-2" />
                <label htmlFor="interest1" className="text-white">
                  Design
                </label>
              </div>
              <div className="mr-4 mb-2">
                <input id="interest2" type="checkbox" name="interests" value="App Development" className="mr-2" />
                <label htmlFor="interest2" className="text-white">
                  App Development
                </label>
              </div>
              <div className="mr-4 mb-2">
                <input id="interest3" type="checkbox" name="interests" value="UX Strategy" className="mr-2" />
                <label htmlFor="interest3" className="text-white">
                  UX Strategy
                </label>
              </div>
              <div className="mr-4 mb-2">
                <input id="interest4" type="checkbox" name="interests" value="Product Growth" className="mr-2" />
                <label htmlFor="interest4" className="text-white">
                  Product Growth
                </label>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex">
              <div className="mr-4">
                <input id="budget0" name="budget" type="radio" value="< $50k" className="mr-2" />
                <label htmlFor="budget0" className="text-white">
                  &lt; $50k
                </label>
              </div>
              <div className="mr-4">
                <input id="budget1" name="budget" type="radio" value="$50k - $100k" className="mr-2" />
                <label htmlFor="budget1" className="text-white">
                  $50k - $100k
                </label>
              </div>
              <div className="mr-4">
                <input id="budget2" name="budget" type="radio" value="$100k - $200k" className="mr-2" />
                <label htmlFor="budget2" className="text-white">
                  $100k - $200k
                </label>
              </div>
              <div>
                <input id="budget3" name="budget" type="radio" value="> $200k" className="mr-2" />
                <label htmlFor="budget3" className="text-white">
                  &gt; $200k
                </label>
              </div>
            </div>
          </div> */}
            <button
              type="submit" style={{ margin: "4rem 0 0", padding: ".75rem 2.5rem", fontSize: "20px", border: "1px solid transparent" }}
              className="bg-white text-black px-8 py-3 rounded-md hover:bg-gray-200 transition-colors duration-300"
            >
              Get a quote
            </button>
          </form>
        </div>
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
  );
};

export default ContactSection;