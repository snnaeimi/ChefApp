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
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}