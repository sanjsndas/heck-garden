import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact101.css'

const Contact101 = (props) => {
  return (
    <div className="contact101-container1 thq-section-padding">
      <div className="contact101-max-width thq-section-max-width">
        <div className="contact101-content1 thq-flex-row">
          <div className="contact101-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact101-text17">Contact Us</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact101-text20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact101-content3 thq-flex-row">
          <div className="contact101-container2">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact101-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact101-text12 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact101-text18">
                    Address: 123 Garden Street, City, Country
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location1Description ?? (
                <Fragment>
                  <span className="contact101-text19">
                    Visit us at our main office location for any inquiries or
                    assistance.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact101-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="contact101-container4">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact101-image2 thq-img-ratio-16-9"
            />
            <h3 className="contact101-text14 thq-heading-3">
              {props.location2 ?? (
                <Fragment>
                  <span className="contact101-text21">
                    Email: info@heckyourgarden.com
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location2Description ?? (
                <Fragment>
                  <span className="contact101-text16">
                    Send us an email for any questions or feedback, and
                    we&apos;ll get back to you as soon as possible.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact101-container5">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact101.defaultProps = {
  location2Description: undefined,
  heading1: undefined,
  location2ImageAlt: 'Email Contact',
  location1: undefined,
  location1ImageAlt: 'Main Office Location',
  location1Description: undefined,
  content1: undefined,
  location1ImageSrc:
    'https://images.unsplash.com/photo-1687652810159-7c999e4f03a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTMzODQxN3w&ixlib=rb-4.1.0&q=80&w=1080',
  location2ImageSrc:
    'https://images.unsplash.com/photo-1617850687395-620757feb1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTMzODQxNXw&ixlib=rb-4.1.0&q=80&w=1080',
  location2: undefined,
}

Contact101.propTypes = {
  location2Description: PropTypes.element,
  heading1: PropTypes.element,
  location2ImageAlt: PropTypes.string,
  location1: PropTypes.element,
  location1ImageAlt: PropTypes.string,
  location1Description: PropTypes.element,
  content1: PropTypes.element,
  location1ImageSrc: PropTypes.string,
  location2ImageSrc: PropTypes.string,
  location2: PropTypes.element,
}

export default Contact101
