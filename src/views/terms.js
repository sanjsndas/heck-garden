import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Navbar22 from '../components/navbar22'
import CTA11 from '../components/cta11'
import ContentList4 from '../components/content-list4'
import Footer4 from '../components/footer4'
import './terms.css'

const Terms = (props) => {
  return (
    <div className="terms-container">
      <Helmet>
        <title>Terms - Hopeful Heartfelt Vulture</title>
        <meta property="og:title" content="Terms - Hopeful Heartfelt Vulture" />
      </Helmet>
      <Link to="/" className="terms-navlink1">
        <Navbar8
          link1={
            <Fragment>
              <span className="terms-text10">Security Protocols</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="terms-text11">Terms of Use</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="terms-text12">Privacy Policy</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="terms-text13">HECK YOUR GARDEN</span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="terms-text14">Home</span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="terms-text15">Plants</span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="terms-text16">Outdoor Spaces</span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="terms-text17">Landscaping</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="terms-text18">Personalize Cookie Settings</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="terms-text19">Read More</span>
            </Fragment>
          }
          logoSrc="https://images.unsplash.com/photo-1723701118696-3ad6986b2618?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTMzOTYyNXw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
          page1Description={
            <Fragment>
              <span className="terms-text20">
                Welcome to Heckyourgarden, your ultimate gardening resource!
              </span>
            </Fragment>
          }
          page2Description={
            <Fragment>
              <span className="terms-text21">
                Discover a variety of plants and learn how to care for them.
              </span>
            </Fragment>
          }
          page3Description={
            <Fragment>
              <span className="terms-text22">
                Get inspired to create stunning outdoor spaces with our tips and
                ideas.
              </span>
            </Fragment>
          }
          page4Description={
            <Fragment>
              <span className="terms-text23">
                Transform your garden with our landscaping guides and
                techniques.
              </span>
            </Fragment>
          }
          className="terms-component1"
        ></Navbar8>
      </Link>
      <Link to="/" className="terms-navlink2">
        <Navbar22
          link1={
            <Fragment>
              <span className="terms-text24">Home</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="terms-text25">Plant Care Guides</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="terms-text26">Landscaping Tips</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="terms-text27">Outdoor Design Ideas</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="terms-text28">Pricing Plans</span>
            </Fragment>
          }
          link1Url="/"
          className="terms-component2"
        ></Navbar22>
      </Link>
      <CTA11
        content1={
          <Fragment>
            <span className="terms-text29">
              Discover our wide range of plant care resources to nurture your
              plants&apos; development.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="terms-text30">Heck Your Garden</span>
          </Fragment>
        }
      ></CTA11>
      <ContentList4
        content10={
          <Fragment>
            <span className="terms-text31">
              This section contains the Terms and Conditions of using our
              website. Please read these carefully before accessing or using our
              services.
            </span>
          </Fragment>
        }
        content11={
          <Fragment>
            <span className="terms-text32">
              This website is dedicated to providing valuable resources and
              information on gardening, including plant care guides, seasonal
              tips, DIY projects, and expert advice to help users create
              beautiful gardens. Explore design ideas, pricing plans, and find
              solutions to common gardening challenges.
            </span>
          </Fragment>
        }
        content12={
          <Fragment>
            <span className="terms-text33">
              This website is dedicated to providing valuable resources and
              information on gardening, including plant care guides, seasonal
              tips, DIY projects, and expert advice to help users create
              beautiful gardens. Explore various design ideas, pricing plans,
              and find solutions to common gardening challenges.
            </span>
          </Fragment>
        }
        content13={
          <Fragment>
            <span className="terms-text34">
              By accessing this website, you agree to comply with the following
              terms and conditions. The content of the pages of this website is
              for your general information and use only. It is subject to change
              without notice. Neither we nor any third parties provide any
              warranty or guarantee as to the accuracy, timeliness, performance,
              completeness, or suitability of the information and materials
              found or offered on this website for any particular purpose. You
              acknowledge that such information and materials may contain
              inaccuracies or errors, and we expressly exclude liability for any
              such inaccuracies or errors to the fullest extent permitted by
              law. Your use of any information or materials on this website is
              entirely at your own risk, for which we shall not be liable. It
              shall be your own responsibility to ensure that any products,
              services, or information available through this website meet your
              specific requirements. This website contains material which is
              owned by or licensed to us. This material includes, but is not
              limited to, the design, layout, look, appearance, and graphics.
              Reproduction is prohibited other than in accordance with the
              copyright notice, which forms part of these terms and conditions.
              All trademarks reproduced in this website, which are not the
              property of, or licensed to the operator, are acknowledged on the
              website. Unauthorized use of this website may give rise to a claim
              for damages and/or be a criminal offense. From time to time, this
              website may also include links to other websites. These links are
              provided for your convenience to provide further information. They
              do not signify that we endorse the website(s). We have no
              responsibility for the content of the linked website(s). Your use
              of this website and any dispute arising out of such use of the
              website is subject to the laws of the United States of America.
            </span>
          </Fragment>
        }
        heading10={
          <Fragment>
            <span className="terms-text35">Terms And Conditions</span>
          </Fragment>
        }
      ></ContentList4>
      <Footer4></Footer4>
    </div>
  )
}

export default Terms
