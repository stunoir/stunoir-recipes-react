import sideImage from '../../src/assets/img/layout/img-food.png'

function NotFound() {
  return (
    <main id='maincontent'>
      <div className='wrapper-section'>
        <div className='grid-container'>
          <div className='grid-x grid-padding-x'>
            <div className='medium-6 large-5 align-self-middle cell small-order-2 medium-order-1'>
              <h1 className='section-title'>Oops!!</h1>
              <div className='section-intro'>
                <p>This page does not exist!! Use the nav to look elsewhere...</p>
              </div>
              <br />
            </div>
            <div className='medium-6 large-7 text-center medium-text-right cell small-order-1 medium-order-2'>
              <div className='block-blob block-blob--tert'>
                <img alt='Healthy salad bowl' className='hero-img' src={sideImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default NotFound
