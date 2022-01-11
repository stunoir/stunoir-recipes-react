import RecipeCard from './RecipeCard'

function RecipeList({ count, recipes }) {
  return (
    <div className='grid-x grid-padding-x small-up-2 medium-up-2 large-up-4'>
      {recipes.slice(0, count).map((recipeItem, i) => (
        <RecipeCard key={i} {...recipeItem.recipe}></RecipeCard>
      ))}
    </div>
  )
}

export default RecipeList
