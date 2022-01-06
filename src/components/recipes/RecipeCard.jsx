import { Link } from 'react-router-dom'

function RecipeCard({ details }) {
  const getImage = (images) => {
    if (images.REGULAR) {
      return images.REGULAR.url
    } else {
      return './assets/main/img/layout/ph.png'
    }
  }

  return (
    <div className='cell'>
      <Link className='card-recipe' to='/recipes/123'>
        <div
          className='img'
          style={{
            backgroundImage: `url(${getImage(details.recipe.images)})`,
          }}
        ></div>
        <div className='content'>
          <span className='title'>{details.recipe.label}</span>
          <div className='grid-x grid-padding-x'>
            <div className='medium-6 cell'>
              <span className='meta'>
                <strong>{Math.floor(Number(details.recipe.calories))}</strong> cals
              </span>
            </div>
            <div className='medium-6 cell'>
              <span className='meta'>
                <strong>{details.recipe.ingredients.length}</strong> ingredients
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default RecipeCard
