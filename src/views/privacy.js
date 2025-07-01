import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import CTA1 from '../components/cta1'
import ContentList1 from '../components/content-list1'
import Footer4 from '../components/footer4'
import './privacy.css'

const Privacy = (props) => {
  return (
    <div className="privacy-container">
      <Helmet>
        <title>Privacy - Hopeful Heartfelt Vulture</title>
        <meta
          property="og:title"
          content="Privacy - Hopeful Heartfelt Vulture"
        />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="privacy-text10">Privacy Policy</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="privacy-text11">Terms of Use</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="privacy-text12">Data Privacy Notice</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="privacy-text13">HECK YOUR GARDEN</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="privacy-text14">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="privacy-text15">Plants</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="privacy-text16">Outdoor Spaces</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="privacy-text17">Landscaping</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="privacy-text18">Cookie Preferences</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="privacy-text19">Discover More</span>
          </Fragment>
        }
        logoSrc="https://images.unsplash.com/photo-1658553620109-ce3b27a757bf?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTMzOTY0Nnw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
        page1Description={
          <Fragment>
            <span className="privacy-text20">
              Welcome to Heckyourgarden, your ultimate gardening resource!
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="privacy-text21">
              Discover a variety of plants and learn how to care for them.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="privacy-text22">
              Get inspired to create stunning outdoor spaces with our tips and
              ideas.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="privacy-text23">
              Transform your garden with our landscaping guides and techniques.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <CTA1
        content1={
          <Fragment>
            <span className="privacy-text24">
              Explore expert tips and advice on nurturing various plants to
              ensure your garden flourishes.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="privacy-text25">HECK YOUR GARDEN</span>
          </Fragment>
        }
      ></CTA1>
      <ContentList1
        content1={
          <Fragment>
            <span className="privacy-text26">
              Explore our detailed privacy policy to understand how we handle
              your personal information.
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="privacy-text27">
              Get informed about our data protection measures to ensure the
              security of your information.
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="privacy-text28">
              Discover our confidentiality guidelines to safeguard your privacy.
            </span>
          </Fragment>
        }
        content4={
          <Fragment>
            <span className="privacy-text29">
              Choose from our privacy assurance plans to enhance your online
              experience.
            </span>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="privacy-text30">
              This website is committed to protecting your privacy. We do not
              collect any personal information without your consent. Any data
              shared with us is securely stored and will not be shared with
              third parties. Your trust is important to us, and we are dedicated
              to maintaining the confidentiality of your information.
            </span>
          </Fragment>
        }
        content6={
          <Fragment>
            <span className="privacy-text31">
              This website is committed to protecting your privacy. We do not
              collect any personal information without your consent. Any data
              provided by you will be securely stored and will not be shared
              with third parties. Your trust is important to us, and we are
              dedicated to maintaining the confidentiality of your information.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="privacy-text32">Privacy Policy</span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="privacy-text33">Data Protection Measures</span>
          </Fragment>
        }
        heading3={
          <Fragment>
            <span className="privacy-text34">Confidentiality Guidelines</span>
          </Fragment>
        }
        heading4={
          <Fragment>
            <span className="privacy-text35">Privacy Assurance</span>
          </Fragment>
        }
        heading5={
          <Fragment>
            <span className="privacy-text36">Online Privacy</span>
          </Fragment>
        }
        heading6={
          <Fragment>
            <span className="privacy-text37">Data Collection</span>
          </Fragment>
        }
      ></ContentList1>
      <Footer4></Footer4>
    </div>
  )
}

export default Privacy
