import { useState } from "react";
import { Button, Col, Container, Form, Image, Row, Stack } from "react-bootstrap"

import PhoneIcon from './../assets/imgs/phone.png'
import MailIcon from './../assets/imgs/mail.png'
import AddressIcon from './../assets/imgs/address.png'
import InformationIcon from './../assets/imgs/information.png'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  return (
    <Container
    fluid
    className="bg-gradient-blue mt-5 pt-5 px-5"
    style={{ minHeight: "93.2vh" }}
    >
      <h1 className="text-white">Get in touch!</h1>
      <span className="fs-normal text-white">Interested in connecting? Fill the form below and I’ll get in touch with you shortly!</span>
      <Row className="justify-content-center mt-4 mb-4">
        <Col xs={12} md={4} className="bg-white">
          <Form onSubmit={handleSubmit} className="p-4">

            <h4 className="text-dark-gray">Send me email</h4>
            <Form.Group controlId="name" className="mb-4">
              <Form.Label>Name*:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group controlId="email" className="my-4">
              <Form.Label>Email address:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group controlId="message" className="my-4">
              <Form.Label>Message:</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Enter your message"
                required
              />
            </Form.Group>

            <div className="text-center">
              <Button type="submit" className="primary-normal border-0">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
        <Col xs={12} md={4} className="tertiary-normal p-4 position-relative overflow-hidden">
          <h4 className="text-white">Contact information</h4>
          <Stack gap={3} className="p-3">
            <div className="p-2 d-flex align-items-center text-white">
              <Image src={AddressIcon} width={30} className="me-3" />
              <span>Thu Duc City, Ho Chi Minh City, Vietnam</span>
            </div>
            <div className="p-2 d-flex align-items-center text-white">
              <Image src={PhoneIcon} width={30} className="me-3" />
              <span>079 499 6247</span>
            </div>
            <div className="p-2 d-flex align-items-center text-white">
              <Image src={MailIcon} width={30} className="me-3" />
              <span>hhnnttvy@gmail.com</span>
            </div>
          </Stack>
          <div style={{ position: 'absolute', bottom: -30, right: -50, transform: 'rotate(-10deg)'}}>
            <Image src={InformationIcon} width={200} />
          </div>
        </Col>
      </Row>
      
    </Container>
  )
}

export default Contact