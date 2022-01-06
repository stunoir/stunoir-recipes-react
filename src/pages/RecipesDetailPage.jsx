import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'

function RecipesDetailPage() {
  const API_ID = '9bfcdf83'
  const API_KEY = 'bbd2def059267da91aa57a455093f912'

  const [loading, setLoading] = useState(true)
  const [recipe, setRecipe] = useState(null)

  const params = useParams()

  useEffect(() => {
    if (params.recipeId) {
      const API_URL = `https://api.edamam.com/api/recipes/v2/${params.recipeId}?type=public&app_id=${API_ID}&app_key=${API_KEY}&q=salad&mealType=dinner&dishType=main%20course`

      getData(API_URL)
    }
    // eslint-disable-next-line
  }, [])

  const getData = (url) => {
    Axios.get(url)
      .then((response) => {
        setRecipe(response.data.recipe)
        setLoading(false)
        console.log(response.data.recipe)
      })
      .catch((error) => {
        console.error('There was an error getting the recipe: ', error)
      })
  }

  const getImage = (images) => {
    if (images.REGULAR) {
      return images.REGULAR.url
    } else {
      return './assets/main/img/layout/ph.png'
    }
  }

  return (
    <main id='maincontent'>
      <div className='wrapper-section'>
        <div className='grid-container'>
          <div className='grid-x grid-padding-x'>
            <div className='medium-12 cell'>
              {!loading ? (
                <>
                  <p className='section-subtitle'>Recipe</p>
                  <h1 className='section-title'>{recipe.label}</h1>
                  <div className='section-intro'>
                    <p>{Math.floor(Number(recipe.calories))} Calories</p>
                    <p className='hide'>
                      See full recipe on: <a href={`${recipe.url}`}>{recipe.source}</a>
                    </p>
                  </div>
                </>
              ) : (
                ''
              )}
              <hr />
            </div>
            <div className='medium-12 cell'>
              <div className='grid-x grid-padding-x'>
                <div className='medium-9 cell'>
                  <div className='card-feature'>
                    <div className='content'>
                      {!loading ? (
                        <>
                          <h2 className='title'>
                            {recipe.ingredients.length} Ingredients <span className='sicon-restaurant'></span>
                          </h2>
                          <ul className=''>
                            {recipe.ingredients.map((item, i) => (
                              <li key={i}>{item.text}</li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>

                  <div className='card-feature'>
                    <div className='content'>
                      {!loading && recipe.healthLabels.length ? (
                        <>
                          <h3 className='title'>
                            Health Information <span className='sicon-set_meal'></span>
                          </h3>
                          <ul className=''>
                            {recipe.healthLabels.slice(0, 4).map((item, i) => (
                              <li key={i}>{item.replace('-', ' ')}</li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </div>
                <div className='medium-3 cell'>
                  {!loading ? (
                    <>
                      <img
                        className='recipe-image'
                        alt='Fully Loaded Vegan Baked Potato Soup'
                        src={`${getImage(recipe.images)}`}
                      />
                      <br />
                      &nbsp;
                    </>
                  ) : (
                    ''
                  )}
                  {!loading ? (
                    <>
                      <div className='card-feature'>
                        <div className='content'>
                          <h3 className='title'>
                            Preparation <span className='sicon-info_outline'></span>
                          </h3>
                          <a className='btn btn--filter' href={`${recipe.url}`}>
                            Find out how to prepare
                          </a>
                        </div>
                      </div>
                    </>
                  ) : (
                    ''
                  )}

                  {!loading && recipe.cautions.length ? (
                    <>
                      <div className='card-feature'>
                        <div className='content'>
                          <h3 className='title'>Cautions</h3>
                          <ul className=''>
                            {recipe.cautions.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default RecipesDetailPage
