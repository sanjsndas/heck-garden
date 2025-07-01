import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps21.css'

const Steps21 = (props) => {
  return (
    <div className="steps21-container1 thq-section-padding">
      <div className="steps21-max-width thq-section-max-width">
        <div className="steps21-container2 thq-grid-2">
          <div className="steps21-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="steps21-actions">
              <button className="thq-button-animated thq-button-filled steps21-button">
                <span className="thq-body-small">Main action</span>
              </button>
            </div>
          </div>
          <div className="steps21-container3">
            <div className="steps21-container4 thq-card">
              <h2 className="thq-heading-2">
                {props.step1Title ?? (
                  <Fragment>
                    <span className="steps21-text26">
                      Browse Plant Care Guides
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps21-text14 thq-body-small">
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps21-text30">
                      Explore our extensive collection of plant care guides to
                      learn how to nurture and maintain a variety of plants in
                      your garden.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps21-text15 thq-heading-3">01</label>
            </div>
            <div className="steps21-container5 thq-card">
              <h2 className="thq-heading-2">
                {props.step2Title ?? (
                  <Fragment>
                    <span className="steps21-text29">
                      Discover Landscaping Tips
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps21-text17 thq-body-small">
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps21-text32">
                      Get insider tips and tricks on landscaping to transform
                      your outdoor space into a beautiful and functional area.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps21-text18 thq-heading-3">02</label>
            </div>
            <div className="steps21-container6 thq-card">
              <h2 className="thq-heading-2">
                {props.step3Title ?? (
                  <Fragment>
                    <span className="steps21-text28">Find Design Ideas</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps21-text20 thq-body-small">
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps21-text31">
                      Unleash your creativity with our design ideas that will
                      inspire you to create the outdoor space of your dreams.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps21-text21 thq-heading-3">03</label>
            </div>
            <div className="steps21-container7 thq-card">
              <h2 className="thq-heading-2">
                {props.step4Title ?? (
                  <Fragment>
                    <span className="steps21-text25">
                      Choose Your Pricing Plan
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps21-text23 thq-body-small">
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps21-text27">
                      Select a pricing plan that suits your needs to unlock
                      additional benefits and features for an enhanced gardening
                      experience.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps21-text24 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps21.defaultProps = {
  step4Title: undefined,
  step1Title: undefined,
  step4Description: undefined,
  step3Title: undefined,
  step2Title: undefined,
  step1Description: undefined,
  step3Description: undefined,
  step2Description: undefined,
}

Steps21.propTypes = {
  step4Title: PropTypes.element,
  step1Title: PropTypes.element,
  step4Description: PropTypes.element,
  step3Title: PropTypes.element,
  step2Title: PropTypes.element,
  step1Description: PropTypes.element,
  step3Description: PropTypes.element,
  step2Description: PropTypes.element,
}

export default Steps21
