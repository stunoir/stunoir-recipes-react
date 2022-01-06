function RecipesDetailPage() {
  return (
    <main id='maincontent'>
      <div className='wrapper-section'>
        <div className='grid-container'>
          <div className='grid-x grid-padding-x'>
            <div className='medium-12 cell'>
              <p className='section-subtitle'>Recipe</p>
              <h1 className='section-title'>Fully Loaded Vegan Baked Potato Soup</h1>
              <div className='section-intro'>
                <p>
                  See full recipe on: <a href='/'>Serious Eats</a>
                </p>
              </div>
              <hr />
            </div>
            <div className='medium-12 cell'>
              <div className='grid-x grid-padding-x'>
                <div className='medium-6 cell'>
                  <div className='card-feature'>
                    <div className='content'>
                      <h2 className='title'>
                        12 Ingredients <span className='sicon-restaurant'></span>
                      </h2>
                      <ul className=''>
                        <li>1 head cauliflower, split in half</li>
                        <li>2 large (or 3 medium) russet potatoes, about 1 1/4 pounds total</li>
                        <li>3 tablespoons vegetable or canola oil</li>
                        <li>3 tablespoons coconut or palm oil or vegetable shortening</li>
                        <li>1 large leek, chopped</li>
                        <li>2 stalks celery, finely chopped</li>
                        <li>6 scallions, thinly sliced, white and green parts reserved separately</li>
                        <li>4 medium cloves garlic, thinly sliced</li>
                        <li>Kosher salt and freshly ground black pepper</li>
                        <li>1 teaspoon paprika</li>
                        <li>1 chipotle pepper packed in adobo sauce, finely chopped, plus 1 teaspoon adobo sauce</li>
                        <li>1 cup roasted cashews</li>
                        <li>1 quart almond or cashew milk</li>
                        <li>1/2 teaspoon liquid smoke (optional)</li>
                        <li>Up to 2 cups Hearty Vegetable Stock or water</li>
                        <li>1 bunch minced fresh chives</li>
                        <li>1 recipe chopped Crispy Vegan Mushroom "Bacon", for serving</li>
                        <li>1 cup steamed broccoli florets, for serving</li>
                        <li>Vegan sour cream, for serving (if desired)</li>
                        <li>Extra-virgin olive oil, for serving</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='medium-3 cell'>
                  <div className='card-feature'>
                    <div className='content'>
                      <h3 className='title'>
                        Preparation <span className='sicon-info_outline'></span>
                      </h3>
                      <a href='/' className='btn btn--filter'>
                        View instructions
                      </a>
                    </div>
                  </div>

                  <div className='card-feature'>
                    <div className='content'>
                      <h3 className='title'>
                        Nutrition <span className='sicon-dinner_dining'></span>
                      </h3>
                      <ul className=''>
                        <li>213 calories</li>
                        <li>15% daily value</li>
                      </ul>
                    </div>
                  </div>

                  <div className='card-feature'>
                    <div className='content'>
                      <h3 className='title'>
                        Categories <span className='sicon-set_meal'></span>
                      </h3>
                      <ul className=''>
                        <li>Vegan</li>
                        <li>Egg free</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='medium-3 cell'>
                  <img
                    className='recipe-image'
                    alt='Fully Loaded Vegan Baked Potato Soup'
                    src='https://www.edamam.com/web-img/ba9/ba9150c5f482f19c407f74cbb6933049.jpg'
                  />
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
