import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features241.css'

const Features241 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features241-container2 thq-section-max-width">
        <div className="features241-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features241-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features241-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features241-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features241-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features241-tab-horizontal1"
          >
            <div className="features241-divider-container1">
              {activeTab === 0 && (
                <div className="features241-container3"></div>
              )}
            </div>
            <div className="features241-content1">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features241-text6">Plant Care Guides</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features241-text4">
                      Access detailed care instructions for various plants
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features241-tab-horizontal2"
          >
            <div className="features241-divider-container2">
              {activeTab === 1 && (
                <div className="features241-container4"></div>
              )}
            </div>
            <div className="features241-content2">
              <h2 className="thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features241-text3">Design Ideas</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features241-text5">
                      Explore design ideas for outdoor spaces
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features241-tab-horizontal3"
          >
            <div className="features241-divider-container3">
              {activeTab === 2 && (
                <div className="features241-container5"></div>
              )}
            </div>
            <div className="features241-content3">
              <h2 className="thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features241-text2">Landscaping Tips</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features241-text1">
                      Get expert advice on landscaping
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features241.defaultProps = {
  feature2ImgAlt: 'Design ideas image',
  feature3Description: undefined,
  feature3Title: undefined,
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1680124744811-f779e4ad6985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTMzODQxN3w&ixlib=rb-4.1.0&q=80&w=1080',
  feature2Title: undefined,
  feature1ImgAlt: 'Plant care guide',
  feature1Description: undefined,
  feature2Description: undefined,
  feature3ImgAlt: 'Landscaping tips image',
  feature1Title: undefined,
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1726510508146-4050ee17d898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTMzODQxN3w&ixlib=rb-4.1.0&q=80&w=1080',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1651981715879-50f054782e5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTMzODQxNnw&ixlib=rb-4.1.0&q=80&w=1080',
}

Features241.propTypes = {
  feature2ImgAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature1ImgAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature2Description: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1ImgSrc: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
}

export default Features241
