import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact8.css'

const Contact8 = (props) => {
  return (
    <div className="contact8-container1 thq-section-padding">
      <div className="contact8-max-width thq-section-max-width">
        <div className="contact8-content1 thq-flex-row">
          <div className="contact8-content2">
            <h2 className="thq-heading-2 contact8-text10">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact8-text21">Contact Us</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large contact8-text11">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact8-text17">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact8-content3 thq-flex-row">
          <div className="contact8-container2">
            <h3 className="contact8-text12 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact8-text20">Bucharest</span>
                </Fragment>
              )}
            </h3>
            <p className="contact8-text13 thq-body-large">
              {props.location1Details ?? (
                <Fragment>
                  <span className="contact8-text18">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact8-container3"></div>
          </div>
          <div className="contact8-container4">
            <h3 className="contact8-text14 thq-heading-3">
              {props.location2 ?? (
                <Fragment>
                  <span className="contact8-text16">Cluj - Napoca</span>
                </Fragment>
              )}
            </h3>
            <p className="contact8-text15 thq-body-large">
              {props.location2Details ?? (
                <Fragment>
                  <span className="contact8-text19">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact8-container5"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact8.defaultProps = {
  location2: undefined,
  content1: undefined,
  location1Details: undefined,
  location2Details: undefined,
  location1: undefined,
  heading1: undefined,
}

Contact8.propTypes = {
  location2: PropTypes.element,
  content1: PropTypes.element,
  location1Details: PropTypes.element,
  location2Details: PropTypes.element,
  location1: PropTypes.element,
  heading1: PropTypes.element,
}

export default Contact8
