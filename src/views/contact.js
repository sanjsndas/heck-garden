import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Navbar21 from '../components/navbar21'
import ContactForm5 from '../components/contact-form5'
import Contact8 from '../components/contact8'
import Footer4 from '../components/footer4'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Hopeful Heartfelt Vulture</title>
        <meta
          property="og:title"
          content="Contact - Hopeful Heartfelt Vulture"
        />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="contact-text10">Security Guidelines</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text11">User Agreement</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact-text12">Data Protection Policy</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact-text13">Get in Touch</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="contact-text14">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="contact-text15">Plants</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="contact-text16">Outdoor Spaces</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="contact-text17">Landscaping</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="contact-text18">Cookie Settings</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="contact-text19">Explore Further</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="contact-text20">
              Welcome to Heckyourgarden, your ultimate gardening resource!
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="contact-text21">
              Discover a variety of plants and learn how to care for them.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="contact-text22">
              Get inspired to create stunning outdoor spaces with our tips and
              ideas.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="contact-text23">
              Transform your garden with our landscaping guides and techniques.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Navbar21
        link1={
          <Fragment>
            <span className="contact-text24">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text25">PRIVACY </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact-text26">Blog</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact-text27">Services</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="contact-text28">Contact</span>
          </Fragment>
        }
        link1Url="/"
      ></Navbar21>
      <ContactForm5
        action={
          <Fragment>
            <span className="contact-text29">Submit</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact-text30">
              For inquiries, please fill out the form below or send us an email
              at info@heckyourgarden.com
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact-text31">Get in touch with us today!</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text32">Contact us</span>
          </Fragment>
        }
      ></ContactForm5>
      <Contact8
        content1={
          <Fragment>
            <span className="contact-text33">
              For inquiries, feedback, or collaborations, please fill out the
              form below or email us at contact@heckyourgarden.com. We look
              forward to hearing from you!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text34">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="contact-text35">NEW YORK</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="contact-text36">CALIFORNIA</span>
          </Fragment>
        }
        location1Details={
          <Fragment>
            <span className="contact-text37">
              <span>69 W 9th St, New York, NY 10011, USA</span>
              <br></br>
              <span>EMAIL : mail@heckyourgarden.com</span>
              <br></br>
              <span>Ph No : +1-288-233-3211</span>
              <br></br>
            </span>
          </Fragment>
        }
        location2Details={
          <Fragment>
            <span className="contact-text44">
              For inquiries or more information, please fill out the form below
              and we will get back to you as soon as possible.
            </span>
          </Fragment>
        }
      ></Contact8>
      <Footer4></Footer4>
    </div>
  )
}

export default Contact
