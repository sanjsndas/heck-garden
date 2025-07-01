import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial171.css'

const Testimonial171 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial171-max-width thq-section-max-width">
        <div className="testimonial171-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial171-text26">Testimonials</span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial171-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial171-text33">
                  Heckyourgarden has been my go-to resource for all things
                  gardening. The plant care guides are so helpful, and I&apos;ve
                  transformed my outdoor space thanks to their landscaping tips.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial171-card1"
              >
                <div className="testimonial171-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial171-image1"
                  />
                  <div className="testimonial171-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial171-text25">
                            Sarah Johnson
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial171-text29">
                            Gardening Enthusiast
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial171-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial171-text32">
                        I highly recommend Heckyourgarden to anyone looking to
                        enhance their garden. The expert advice provided here is
                        invaluable.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial171-card2"
              >
                <div className="testimonial171-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial171-image2"
                  />
                  <div className="testimonial171-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial171-text28">
                            Michael Smith
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial171-text24">
                            Landscaper
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial171-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial171-text35">
                        I&apos;ve learned so much about different plant species
                        and how to care for them properly. Heckyourgarden has
                        truly elevated my gardening skills.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial171-card3"
              >
                <div className="testimonial171-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial171-image3"
                  />
                  <div className="testimonial171-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial171-text34">
                            Emily Brown
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial171-text30">
                            Plant Lover
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial171-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial171-text37">
                        As a professional in the outdoor design industry, I find
                        Heckyourgarden to be a reliable source of inspiration
                        and ideas for my projects.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial171-card4"
              >
                <div className="testimonial171-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial171-image4"
                  />
                  <div className="testimonial171-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial171-text36">
                            David Wilson
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial171-text27">
                            Outdoor Designer
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial171-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial171-text31">
                        The pricing plans offered by Heckyourgarden are worth
                        every penny. The additional benefits have made a
                        significant difference in the quality of my garden.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial171.defaultProps = {
  author2Position: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1632377082447-899edf0d0124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTMzODQxNnw&ixlib=rb-4.1.0&q=80&w=1080',
  author2Src:
    'https://images.unsplash.com/photo-1660237112663-0cf29c1aa0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTMzODQxNnw&ixlib=rb-4.1.0&q=80&w=1080',
  author3Alt: 'Image of Emily Brown',
  author4Alt: 'Image of David Wilson',
  author1Name: undefined,
  heading1: undefined,
  author4Position: undefined,
  author2Name: undefined,
  author1Position: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1556942057-94aaf3ae5d6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTMzODQxNXw&ixlib=rb-4.1.0&q=80&w=1080',
  author1Alt: 'Image of Sarah Johnson',
  author3Position: undefined,
  review4: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1539125530496-3ca408f9c2d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTMzODQxNnw&ixlib=rb-4.1.0&q=80&w=1080',
  author2Alt: 'Image of Michael Smith',
  review1: undefined,
  content1: undefined,
  author3Name: undefined,
  review2: undefined,
  author4Name: undefined,
  review3: undefined,
}

Testimonial171.propTypes = {
  author2Position: PropTypes.element,
  author4Src: PropTypes.string,
  author2Src: PropTypes.string,
  author3Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  author1Name: PropTypes.element,
  heading1: PropTypes.element,
  author4Position: PropTypes.element,
  author2Name: PropTypes.element,
  author1Position: PropTypes.element,
  author1Src: PropTypes.string,
  author1Alt: PropTypes.string,
  author3Position: PropTypes.element,
  review4: PropTypes.element,
  author3Src: PropTypes.string,
  author2Alt: PropTypes.string,
  review1: PropTypes.element,
  content1: PropTypes.element,
  author3Name: PropTypes.element,
  review2: PropTypes.element,
  author4Name: PropTypes.element,
  review3: PropTypes.element,
}

export default Testimonial171
