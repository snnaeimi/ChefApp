import React from "react";
import ResultRecipe from "./components/ResultRecipe";
import IngredientsData from "./components/IngredientsData";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  const [recipeShown, setRecipeShown] = React.useState(false);

  function toggleRecipeShown() {
    setRecipeShown((prevRecipeShown) => !prevRecipeShown);
  }

  function handleClick(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    if (newIngredient !== "") {
      setIngredients((prevIng) => [...prevIng, newIngredient]);
    }

    event.target.reset();
  }

  return (
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
      {ingredients.length > 0 && (
        <IngredientsData
          ingredients={ingredients}
          toggleRecipeShown={toggleRecipeShown}
        />
      )}
      {recipeShown && <ResultRecipe />}
    </main>
  );
}
