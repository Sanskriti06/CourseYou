import React from "react"; 
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "../content_option"
import './Contact.js';

export default function ContactUs() {
  

  return (
    <div className="cntt">
      <Container>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact US</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              {/* <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a> */}
              CourseU@gmail.com
              <br />
              <br />
              {/* {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ""
              )} */}
              <strong>Phone:</strong>{" "} 7435764583

            </address>
            <p>Contact Us here. Feel free to ask your queries. We shall revert back to your 
                within 24 hours. Kindly fill your details and send your message to us.
            </p>
            <p>You can also send us the review of the course.</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form  className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name" 
                    type="text"
                    required 
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email" 
                    required 
                  />
                </Col>
                <br></br>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5" 
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn btn-primary" type="submit"> 
                  Send
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
        <hr className="t_border my-4 ml-0 text-left" />
      </Container>
      <h5>Locate us here using Google Maps:</h5>
      <div className="mapp">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109743.01958078149!2d76.70938005820312!3d30.733314800000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1665047634456!5m2!1sen!2sin" width="1000px" height="450"></iframe>
      </div>

      </div>
  );
}

