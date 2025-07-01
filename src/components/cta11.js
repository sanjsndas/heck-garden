import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta11.css'

const CTA11 = (props) => {
  return (
    <div className="cta11-container thq-section-padding">
      <div className="cta11-max-width thq-section-max-width">
        <div className="cta11-content">
          <h2 className="cta11-heading1 thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="cta11-text2">
                  Get Started on Your Gardening Journey
                </span>
              </Fragment>
            )}
          </h2>
          <p className="cta11-content1 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="cta11-text1">
                  Access our comprehensive plant care guides to help your plants
                  thrive.
                </span>
              </Fragment>
            )}
          </p>
          <div className="cta11-actions"></div>
        </div>
      </div>
    </div>
  )
}

CTA11.defaultProps = {
  content1: undefined,
  heading1: undefined,
}

CTA11.propTypes = {
  content1: PropTypes.element,
  heading1: PropTypes.element,
}

export default CTA11
