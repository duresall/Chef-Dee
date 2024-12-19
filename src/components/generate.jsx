import { FaDeleteLeft } from "react-icons/fa6";
import RecipeResponse from "./recipe";
import { useState } from "react";

export default function Generate({ ingridents, setIngridents, getRecipe }) {
  const [showrecipe, setShowrecipe] = useState(false);
  const [recipe, setRecipe] = useState(null); // State to store the generated recipe

  // Trigger recipe generation when the button is clicked
  const handleGenerateRecipe = async () => {
    setShowrecipe((prevState) => !prevState); // Toggle recipe visibility
    const generatedRecipe = await getRecipe(); // Get the recipe asynchronously
    setRecipe(generatedRecipe); // Save the generated recipe in the state
  };

  return (
    <>
      <div className="ingrident-section">
        <h1 className="title">Ingridents on hand</h1>
        <ul>
          {/* starting list */}
          {ingridents.map((ingrident, index) => (
            <div className="list-span" key={index}>
              <li className="ingrident-list-item">{ingrident}</li>
              <FaDeleteLeft
                className="delete-icon"
                color="red"
                onClick={() => {
                  setIngridents(
                    (prevIngridents) =>
                      prevIngridents.filter((__, i) => i !== index)
                  );
                }}
              />
            </div>
          ))}
          {/* ending list */}
        </ul>
      </div>

      {ingridents.length > 3 && (
        <>
          <div className="generate-recipe-section">
            <div className="inner-info">
              <h3>Ready for a recipe?</h3>
              <h5>Generate a recipe from your list of ingridents</h5>
            </div>
            <button
              onClick={handleGenerateRecipe} // Call the handleGenerateRecipe function
              className="generate-btn"
            >
              Generate a recipe
            </button>
          </div>

          {showrecipe && recipe && <RecipeResponse recipe={recipe} />} {/* Pass the recipe data */}
        </>
      )}
    </>
  );
}
