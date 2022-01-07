import { useEffect, useState } from 'react'
import Axios from 'axios'
import RecipeList from '../components/recipes/RecipeList'
import Loader from '../components/UI/Loader'
import SearchForm from '../components/UI/SearchForm'

function RecipesPage() {
  const [loading, setLoading] = useState(true)
  const [recipes, setRecipes] = useState(null)
  const [pageQuery, setPageQuery] = useState('')

  const API_ID = '9bfcdf83'
  const API_KEY = 'bbd2def059267da91aa57a455093f912'

  useEffect(() => {
    getData('')
    // eslint-disable-next-line
  }, [])

  const getData = (query) => {
    const url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${API_ID}&app_key=${API_KEY}&q=${query}&mealType=dinner&dishType=main%20course`

    Axios.get(url)
      .then((response) => {
        setRecipes(response.data.hits)
        setLoading(false)
      })
      .catch((error) => {
        console.error('There was an error getting the recipes: ', error)
      })
  }

  const handleSearch = () => {
    getData(pageQuery)
  }

  return (
    <main id='maincontent'>
      <div className='wrapper-section wrapper-section--white'>
        <div className='grid-container'>
          <div className='grid-x grid-padding-x'>
            <div className='medium-8 cell'>
              <h1 className='section-title'>Recipes</h1>
              <div className='section-intro'>
                <p>Use the search form to find a meal...</p>
              </div>
              <br />
            </div>
            <div className='medium-4 cell'>
              <SearchForm query={pageQuery} setQuery={setPageQuery} handleSearch={handleSearch}></SearchForm>
              <ul className='menu align-right menu-filters hide'>
                <li>
                  <a href='/' className='btn btn--filter is-active'>
                    All
                  </a>
                </li>
                <li>
                  <a href='/' className='btn btn--filter'>
                    Vegetarian
                  </a>
                </li>
                <li>
                  <a href='/' className='btn btn--filter'>
                    Vegan
                  </a>
                </li>
                <li>
                  <a href='/' className='btn btn--filter'>
                    Paleo
                  </a>
                </li>
                <li>
                  <a href='/' className='btn btn--filter'>
                    High-Fiber
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* LIST */}
          {!loading ? <RecipeList count='20' recipes={recipes}></RecipeList> : <Loader />}

          <div className='grid-x grid-padding-x'>
            <div className='medium-12 text-center cell'>
              <br />
              <a href='/' className='btn btn--primary'>
                View more recipes
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default RecipesPage
