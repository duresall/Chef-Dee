import { useState } from "react";

import { getRecipeFromMistral } from "../ai/ai"; // Import the recipe generation function
import Generate from "./generate";

export default function Form() {
  const [ingridents, setIngridents] = useState([]);

  function handleSubmite(event) {
    event.preventDefault();
    const formDate = new FormData(event.target);
    const ingrident = formDate.get("ingrident");
    setIngridents((prevIngridents) => [...prevIngridents, ingrident]);
    event.target.reset();
  }

  // Function to fetch the recipe using the ingredients
  async function getRecpie() {
    const generatedRecipe = await getRecipeFromMistral(ingridents);
    return generatedRecipe; // Return the recipe
  }

  return (
    <>
      <main>
        <form onSubmit={handleSubmite}>
          <div className="Form-div">
            <input
              type="text"
              className="inputfiled"
              placeholder="eg tomato"
              name="ingrident"
              required
            />
            <input type="submit" value="+ Add ingrident" className="btn-form" />
          </div>
        </form>

        {ingridents.length > 0 && (
          <Generate
            ingridents={ingridents}
            setIngridents={setIngridents}
            getRecipe={getRecpie} // Pass the getRecpie function to Generate
          />
        )}
      </main>
    </>
  );
}


