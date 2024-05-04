import RecipeCard from "./RecipeCard"

export default function Recipes() {
    let recipes = [
        {
            title: "Chicken Tikka", 
            description: "Chicken with some masala"
        }, 
        {
            title: "Tandoori", 
            description: "fluffy bread"
        }, 
        {
            title: "Rasmalai",
            description: "juicy sweet"
        }
    ]
  return (
    <section className="mt-10 w-[100vw] h[90vh] flex flex-col items-center gap-10">
        {recipes.map((recipe, i) => {
            return <RecipeCard key={i} id={i} title={recipe.title} description={recipe.description}/>
        })}
    </section>
  )
}
