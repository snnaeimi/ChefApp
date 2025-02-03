import React from "react"

export default function Main(){
    const [ingredients, setIngredients] = React.useState([])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleClick(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        event.target.reset();
        setIngredients(prevIng => [...prevIng, newIngredient])
    }


    return(
        <main>
            <form onSubmit={handleClick} className="formClass">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add Ingrediants"
                    className="inputFeild"
                    name="ingredient"
                />
                <button className="addIngredientBtn">+ Add ingredient</button>
            </form>
            {ingredients.length > 0 && <section className="ingredientsSection">
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                {ingredientsListItems.length > 3 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>}
            </section>}
        </main>
    )
}