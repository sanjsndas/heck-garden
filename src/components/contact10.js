import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container1 thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact10-text6">Locations</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact10-text5">
                    For any inquiries or feedback, please feel free to reach out
                    to us by filling out the contact form below. We value your
                    input and look forward to hearing from you!
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <p className="thq-body-large">
              {props.location1Description ?? (
                <Fragment>
                  <span className="contact10-text4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact10-container3"></div>
          </div>
          <div className="contact10-container4">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact10-image2 thq-img-ratio-16-9"
            />
            <div className="contact10-container5"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location1ImageAlt: 'image1Alt',
  location2ImageAlt: 'image2Alt',
  location1Description: undefined,
  content1: undefined,
  heading1: undefined,
  location2ImageSrc:
    'https://images.unsplash.com/photo-1599778150914-88e98e0c3a3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTMyNTg0MXw&ixlib=rb-4.1.0&q=80&w=1080',
  location1ImageSrc:
    'https://images.unsplash.com/photo-1526392587392-d1627b6c134a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTMyNTg0Mnw&ixlib=rb-4.1.0&q=80&w=1080',
}

Contact10.propTypes = {
  location1ImageAlt: PropTypes.string,
  location2ImageAlt: PropTypes.string,
  location1Description: PropTypes.element,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  location2ImageSrc: PropTypes.string,
  location1ImageSrc: PropTypes.string,
}

export default Contact10
