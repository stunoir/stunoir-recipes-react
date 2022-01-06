import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <main id='maincontent'>
      <div className='wrapper-hero'>
        <div className='grid-container'>
          <div className='grid-x grid-padding-x'>
            <div className='medium-6 large-5 align-self-middle cell small-order-2 medium-order-1'>
              <div className='content'>
                <h1 className='title'>
                  A Recipe <br />
                  Search Website
                </h1>
                <p>Build with React, SASS, and other ingredients...</p>
                <ul className='menu feature-skill-icons feature-skill-icons--dark simple'>
                  <li>
                    <span className='sicon-html5'></span>
                  </li>
                  <li>
                    <span className='sicon-react'></span>
                  </li>
                  <li>
                    <span className='sicon-javascript'></span>
                  </li>
                  <li>
                    <span className='sicon-sass'></span>
                  </li>
                  <li>
                    <span className='sicon-accessibility'></span>
                  </li>
                </ul>
                <Link to='/about' className='btn btn--primary'>
                  Find out more
                </Link>
              </div>
            </div>
            <div className='medium-6 large-7 text-center medium-text-right cell small-order-1 medium-order-2'>
              <div className='block-blob'>
                <img alt='Salmon salad dish' className='hero-img' src='./assets/main/img/layout/img-fish.png' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='wrapper-section wrapper-section--white'>
        <div className='grid-container'>
          <div className='grid-x grid-padding-x'>
            <div className='medium-12 cell'>
              <h2 className='section-title'>Popular recipes</h2>
              <div className='section-intro'>
                <p>Build with React, SASS, and other ingredients...</p>
              </div>
              <br />
            </div>
          </div>

          <div className='grid-x grid-padding-x small-up-2 medium-up-2 large-up-4'>
            <div className='cell'>
              <a className='card-recipe' href='recipes-detail.html'>
                <div
                  className='img'
                  style={{
                    backgroundImage: 'url(https://www.edamam.com/web-img/d02/d02658b9ba5a802acf980c07720ce30c.jpg)',
                  }}
                ></div>
                <div className='content'>
                  <span className='title'>Vegan fry-up</span>
                  <div className='grid-x grid-padding-x'>
                    <div className='medium-6 cell'>
                      <span className='meta'>
                        <strong>216</strong> calories
                      </span>
                    </div>
                    <div className='medium-6 cell'>
                      <span className='meta'>
                        <strong>16</strong> ingredients
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className='cell'>
              <a className='card-recipe' href='recipes-detail.html'>
                <div
                  className='img'
                  style={{
                    backgroundImage: 'url(https://www.edamam.com/web-img/d02/d02658b9ba5a802acf980c07720ce30c.jpg)',
                  }}
                ></div>
                <div className='content'>
                  <span className='title'>Fully Loaded Vegan Baked Potato Soup Recipe</span>
                  <div className='grid-x grid-padding-x'>
                    <div className='medium-6 cell'>
                      <span className='meta'>
                        <strong>216</strong> calories
                      </span>
                    </div>
                    <div className='medium-6 cell'>
                      <span className='meta'>
                        <strong>16</strong> ingredients
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className='cell'>
              <a className='card-recipe' href='recipes-detail.html'>
                <div
                  className='img'
                  style={{
                    backgroundImage: 'url(https://www.edamam.com/web-img/d02/d02658b9ba5a802acf980c07720ce30c.jpg)',
                  }}
                ></div>
                <div className='content'>
                  <span className='title'>Vegan fry-up</span>
                  <div className='grid-x grid-padding-x'>
                    <div className='medium-6 cell'>
                      <span className='meta'>
                        <strong>216</strong> calories
                      </span>
                    </div>
                    <div className='medium-6 cell'>
                      <span className='meta'>
                        <strong>16</strong> ingredients
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className='cell'>
              <a className='card-recipe' href='recipes-detail.html'>
                <div
                  className='img'
                  style={{
                    backgroundImage: 'url(https://www.edamam.com/web-img/d02/d02658b9ba5a802acf980c07720ce30c.jpg)',
                  }}
                ></div>
                <div className='content'>
                  <span className='title'>Fully Loaded Vegan Baked Potato Soup Recipe</span>
                  <div className='grid-x grid-padding-x'>
                    <div className='medium-6 cell'>
                      <span className='meta'>
                        <strong>216</strong> calories
                      </span>
                    </div>
                    <div className='medium-6 cell'>
                      <span className='meta'>
                        <strong>16</strong> ingredients
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className='grid-x grid-padding-x'>
            <div className='medium-12 cell'>
              <br />
              <Link to='/recipes' className='btn btn--primary'>
                View more recipes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomePage
