import "./App.css";
import GenerateMethod from "./components/generate-method";
import RecipeDetails from "./components/recipe-details";
import SelectIngredients from "./components/select-ingredients";
import Title from "./components/title";
import { useState } from "react";

function App() {
  const [recipeInfoObj, setRecipeInfoObj] = useState({
    protein: "",
    veg1: "",
    veg2: "",
    card: "",
    isHot: false,
    country: "",
    cookMethod: "",
    picture: "",
  });

  return (
    <div className="App">
      <Title />
      <SelectIngredients setRecipeInfoObj={setRecipeInfoObj} />
      <RecipeDetails
        country={recipeInfoObj.country}
        cookMethod={recipeInfoObj.cookMethod}
        protein={recipeInfoObj.protein}
      />
      <GenerateMethod />
    </div>
  );
}

export default App;
