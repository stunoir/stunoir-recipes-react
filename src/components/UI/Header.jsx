import { Link, NavLink } from 'react-router-dom'
import logo from '../../../src/assets/img/layout/logo.png'

function Header() {
  return (
    <header className='wrapper-header'>
      <a className='skip-to-content-link' href='#maincontent'>
        Skip to main content
      </a>

      <div className='grid-container'>
        <div className='grid-x grid-padding-x'>
          <div className='medium-3 small-5 align-self-middle cell'>
            <Link to='/'>
              <img alt='Food Site home' src={logo} />
            </Link>
          </div>
          <div className='medium-6 small-7 align-self-middle cell'>
            <nav>
              <ul className='nav-primary menu align-right show-for-large'>
                <li>
                  <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                  <NavLink to='/recipes'>Recipes</NavLink>
                </li>
                <li>
                  <NavLink to='/contact'>Contact</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className='medium-3 text-right align-self-middle cell hide-for-small-only'>
            <form className='form-search'>
              <label htmlFor='txtSearchInput' className='show-for-sr'>
                Search for a recipe
              </label>
              <input id='txtSearchInput' placeholder='Search here...' type='text' />
              <button id='cmdSearch' type='submit' className='btn-search'>
                <span className='sicon-search'></span>
                <span className='show-for-sr'>Search</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
