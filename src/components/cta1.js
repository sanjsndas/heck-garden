import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta1.css'

const CTA1 = (props) => {
  return (
    <div className="cta1-container thq-section-padding">
      <div className="cta1-max-width thq-section-max-width">
        <div className="cta1-content">
          <h2 className="cta1-heading1 thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="cta1-text2">
                  Ready to Transform Your Garden?
                </span>
              </Fragment>
            )}
          </h2>
          <p className="cta1-content1 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="cta1-text1">
                  Discover expert tips and advice on caring for a variety of
                  plants to keep your garden thriving.
                </span>
              </Fragment>
            )}
          </p>
          <div className="cta1-actions"></div>
        </div>
      </div>
    </div>
  )
}

CTA1.defaultProps = {
  content1: undefined,
  heading1: undefined,
}

CTA1.propTypes = {
  content1: PropTypes.element,
  heading1: PropTypes.element,
}

export default CTA1
