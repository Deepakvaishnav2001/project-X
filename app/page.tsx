import {
  Box,
  Button,
  Typography,
  Container,
  Grid,
  Card,
  CardContent
} from '@mui/material'
import ContactForm from './ContactForm';

export default function Home() {
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
        <ContactForm />
      </main>
    </div>
  )
}
