import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './content-list11.css'

const ContentList11 = (props) => {
  return (
    <div className="content-list11-container thq-section-padding">
      <div className="content-list11-max-width thq-section-max-width">
        <div className="content-list11-content thq-flex-column">
          <ul className="content-list11-ul thq-flex-column">
            <li className="list-item thq-flex-column">
              <h2 className="content-list11-heading1 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="content-list11-text15">
                      Plant Care Guides
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-small">
                {props.content1 ?? (
                  <Fragment>
                    <span className="content-list11-text16">
                      Explore our detailed plant care guides to learn how to
                      nurture and maintain a variety of plants in your garden.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading2 ?? (
                  <Fragment>
                    <span className="content-list11-text17">
                      Landscaping Tips
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content2 ?? (
                  <Fragment>
                    <span className="content-list11-text18">
                      Discover expert landscaping tips and techniques to enhance
                      the beauty and functionality of your outdoor space.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading3 ?? (
                  <Fragment>
                    <span className="content-list11-text19">Design Ideas</span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content3 ?? (
                  <Fragment>
                    <span className="content-list11-text20">
                      Get inspired with creative design ideas to transform your
                      outdoor space into a beautiful and inviting garden oasis.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading4 ?? (
                  <Fragment>
                    <span className="content-list11-text12">Pricing Plans</span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content4 ?? (
                  <Fragment>
                    <span className="content-list11-text21">
                      Choose from our pricing plans to unlock additional
                      benefits and features for an enhanced gardening
                      experience.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading5 ?? (
                  <Fragment>
                    <span className="content-list11-text10">
                      Campaign tracking
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content5 ?? (
                  <Fragment>
                    <span className="content-list11-text11">
                      Lorem ipsum dolor sit amet. Ut cumque cupiditate eos
                      perferendis tempora et ullam quis qui fugiat
                      necessitatibus qui quia dolorem 33 earum reprehenderit eum
                      rerum blanditiis. Et vitae distinctio 33 magni ratione ut
                      odit rerum est nihil error et minus dolor quo harum
                      fugiat. Eos quam assumenda id fugit optio aut magni sunt!
                      Ut iure aliquam vel velit modi sit voluptatibus atque ut
                      corporis sint sit omnis enim a pariatur officiis aut nulla
                      voluptate. In facere incidunt aut sapiente maxime qui
                      quibusdam facilis non officia consectetur sit laboriosam
                      libero aut cupiditate possimus ut sunt reiciendis. Et
                      repudiandae magnam aut quaerat ipsam aut repellat
                      laboriosam. Ab facilis deleniti ut voluptas molestiae sed
                      omnis maiores ut aliquid culpa vel nesciunt saepe. Aut
                      placeat aspernatur aut alias nihil vel neque recusandae et
                      corrupti accusantium ab quod temporibus ut nulla eaque et
                      magnam nemo. Ad sunt minus rem earum delectus hic officia
                      iste qui sunt quos non officiis illo vel doloribus
                      perspiciatis. Ab soluta eius sed quidem dolores rem
                      necessitatibus minus 33 minus commodi. Nam repudiandae
                      libero non laboriosam voluptate et saepe fuga vel
                      repudiandae pariatur aut assumenda illo.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading6 ?? (
                  <Fragment>
                    <span className="content-list11-text13">Cookies</span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content6 ?? (
                  <Fragment>
                    <span className="content-list11-text14">
                      Ut doloremque aliquam qui veniam deserunt sit voluptates
                      iusto et unde quod ut quam unde ut nemo eius! Ut saepe
                      consequuntur non quibusdam soluta aut maiores eaque et
                      rerum error nam incidunt saepe aut nihil voluptatem. 33
                      nulla quaerat est doloremque voluptatem ut libero magnam
                      id placeat aliquid. Ea minus totam est inventore minus sed
                      temporibus aperiam At ratione maiores eum libero
                      consequatur aut laborum exercitationem.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ContentList11.defaultProps = {
  heading5: undefined,
  content5: undefined,
  heading4: undefined,
  heading6: undefined,
  content6: undefined,
  heading1: undefined,
  content1: undefined,
  heading2: undefined,
  content2: undefined,
  heading3: undefined,
  content3: undefined,
  content4: undefined,
}

ContentList11.propTypes = {
  heading5: PropTypes.element,
  content5: PropTypes.element,
  heading4: PropTypes.element,
  heading6: PropTypes.element,
  content6: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  heading2: PropTypes.element,
  content2: PropTypes.element,
  heading3: PropTypes.element,
  content3: PropTypes.element,
  content4: PropTypes.element,
}

export default ContentList11
