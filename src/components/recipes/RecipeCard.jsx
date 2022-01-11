import { Link } from 'react-router-dom'

function RecipeCard({ uri, images, label, calories, ingredients }) {
  const getImage = (images) => {
    if (images.REGULAR) {
      return images.REGULAR.url
    } else {
      return './assets/main/img/layout/ph.png'
    }
  }

  const getLink = (uri) => {
    const linkStr = uri.replace('http://www.edamam.com/ontologies/edamam.owl#recipe_', '')
    return linkStr
  }

  return (
    <div className='cell'>
      <Link className='card-recipe' to={`/recipes/${getLink(uri)}`}>
        <div
          className='img'
          style={{
            backgroundImage: `url(${getImage(images)})`,
          }}
        ></div>
        <div className='content'>
          <span className='title'>{label}</span>
          <div className='grid-x grid-padding-x'>
            <div className='medium-6 cell'>
              <span className='meta'>
                <strong>{Math.floor(Number(calories))}</strong> cals
              </span>
            </div>
            <div className='medium-6 cell'>
              <span className='meta'>
                <strong>{ingredients.length}</strong> ingredients
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default RecipeCard
