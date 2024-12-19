import ReactMarkdown from "react-markdown";

export default function RecipeResponse({ recipe }) {
  console.log("Recipe in RecipeResponse:", recipe);
  return (
    <section className="suggested-recipe-container">
      <h2>Chef Dee recommends:</h2>
    
      <ReactMarkdown>{recipe}</ReactMarkdown>
    </section>
  );
}
