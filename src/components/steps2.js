import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container1 thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">
              Explore the Magic of Our Gardening Products
            </h2>
            <p className="thq-body-large">
              Unlock the wonders of nature with our premium selections that
              enrich your life
            </p>
            <div className="steps2-actions">
              <button className="thq-button-animated thq-button-filled steps2-button">
                <Link to="/privacy" className="steps2-text12 thq-body-small">
                  Data Protection Policy
                </Link>
              </button>
            </div>
          </div>
          <div className="steps2-container3">
            <div className="steps2-container4 thq-card">
              <h2 className="thq-heading-2">
                {props.step1Title ?? (
                  <Fragment>
                    <span className="steps2-text25">
                      Choose Your Plants Wisely
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text14 thq-body-small">
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text30">
                      Select plants that are suitable for your climate and
                      gardening experience level.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text15 thq-heading-3">01</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2 className="thq-heading-2">
                {props.step2Title ?? (
                  <Fragment>
                    <span className="steps2-text29">
                      Prepare Your Outdoor Space
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text17 thq-body-small">
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text31">
                      Clear the area, remove weeds, and ensure proper soil
                      quality for planting.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text18 thq-heading-3">02</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2 className="thq-heading-2">
                {props.step3Title ?? (
                  <Fragment>
                    <span className="steps2-text26">Plant Carefully</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text20 thq-body-small">
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text28">
                      Follow planting instructions, provide adequate water and
                      sunlight, and monitor plant health.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text21 thq-heading-3">03</label>
            </div>
            <div className="steps2-container7 thq-card">
              <h2 className="thq-heading-2">
                {props.step4Title ?? (
                  <Fragment>
                    <span className="steps2-text27">Maintain and Enjoy</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text23 thq-body-small">
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text32">
                      Regularly water, prune, and fertilize your plants to keep
                      your garden thriving. Sit back, relax, and enjoy the
                      beauty of your outdoor space.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text24 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step1Title: undefined,
  step3Title: undefined,
  step4Title: undefined,
  step3Description: undefined,
  step2Title: undefined,
  step1Description: undefined,
  step2Description: undefined,
  step4Description: undefined,
}

Steps2.propTypes = {
  step1Title: PropTypes.element,
  step3Title: PropTypes.element,
  step4Title: PropTypes.element,
  step3Description: PropTypes.element,
  step2Title: PropTypes.element,
  step1Description: PropTypes.element,
  step2Description: PropTypes.element,
  step4Description: PropTypes.element,
}

export default Steps2
