import sideImage from '../../src/assets/img/layout/img-pizza-2.png'

function AboutPage() {
  return (
    <main id='maincontent'>
      <div className='wrapper-section'>
        <div className='grid-container'>
          <div className='grid-x grid-padding-x'>
            <div className='medium-6 large-5 align-self-middle cell small-order-2 medium-order-1'>
              <h1 className='section-title'>About</h1>
              <div className='section-intro'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta in mi a tincidunt. Phasellus
                  magna sagittis sit amet sed ante. Fusce leo erat, viverra sed semper non, porttitor condimentum nisl.
                  Suspendisse ut nunc auctor, varius dui eget, pellentesque neque. Curabitur placerat venenatis
                  fringilla. Proin sed velit volutpat, congue nibh nec, commodo elit. Nunc sed feugiat lorem. Donec
                  viverra vitae libero dignissim lobortis. Curabitur dapibus metus nec iaculis faucibus.
                </p>
              </div>
              <ul className='menu feature-skill-icons simple'>
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
            </div>
            <div className='medium-6 large-7 text-center medium-text-right cell small-order-1 medium-order-2'>
              <div className='block-blob block-blob--secondary'>
                <img alt='Pizza slice' className='hero-img' src={sideImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AboutPage
