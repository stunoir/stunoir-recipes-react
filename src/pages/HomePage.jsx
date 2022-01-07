import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import RecipeList from '../components/recipes/RecipeList'
import Loader from '../components/UI/Loader'
import sideImage from '../../src/assets/img/layout/img-fish.png'

function HomePage() {
  const API_ID = '9bfcdf83'
  const API_KEY = 'bbd2def059267da91aa57a455093f912'
  const API_URL = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${API_ID}&app_key=${API_KEY}&q=salad&mealType=dinner&dishType=main%20course`

  const [loading, setLoading] = useState(true)
  const [recipes, setRecipes] = useState(null)

  useEffect(() => {
    getData(API_URL)
    // eslint-disable-next-line
  }, [])

  const getData = (url) => {
    Axios.get(url)
      .then((response) => {
        setRecipes(response.data.hits)
        setLoading(false)
      })
      .catch((error) => {
        console.error('There was an error getting the recipes: ', error)
      })
  }

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
                <img alt='Salmon salad dish' className='hero-img' src={sideImage} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='wrapper-section wrapper-section--white'>
        <div className='grid-container'>
          <div className='grid-x grid-padding-x'>
            <div className='medium-6 cell'>
              <h2 className='section-title'>Popular recipes</h2>
              <div className='section-intro'>
                <p>Some of our popular salad recipes for meal time...</p>
              </div>
            </div>
            <div className='medium-6 text-left medium-text-right align-self-middle cell'>
              <Link to='/recipes' className='btn btn--primary'>
                View more recipes
              </Link>
            </div>
          </div>
          <br />

          {/* LIST */}
          {!loading ? <RecipeList count='8' recipes={recipes}></RecipeList> : <Loader />}
        </div>
      </div>
    </main>
  )
}

export default HomePage
