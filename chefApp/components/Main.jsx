export default function Main(){
    return(
        <main>
            <form className="formClass">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add Ingrediants"
                    className="inputFeild"
                />
                <button className="addIngredientBtn">+ Add ingredient</button>
            </form>
        </main>
    )
}