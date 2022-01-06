import logo from '../../../src/assets/img/layout/logo.png'

function Footer() {
  return (
    <footer className='wrapper-footer'>
      <div className='grid-container'>
        <div className='grid-x grid-padding-x'>
          <div className='medium-10 small-8 align-self-middle cell'>
            <p>&copy; 2022 Stunoir</p>
          </div>
          <div className='medium-2 small-4 text-right cell'>
            <img alt='Food Site home' src={logo} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
