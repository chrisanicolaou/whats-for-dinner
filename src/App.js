import "./App.css";
import GenerateMethod from "./components/generate-method";
import RecipeDetails from "./components/recipe-details";
import SelectIngredients from "./components/select-ingredients";
import Title from "./components/title";
import { useState } from "react";
import muppet from "../src/assets/muppet.png";

function App() {
  const [recipeInfoObj, setRecipeInfoObj] = useState({
    protein: "",
    veg1: "",
    veg2: "",
    carb: "",
    isHot: "",
    country: "",
    cookMethod: "",
    picture: muppet,
  });

  const [cookingDetailsObj, setCookingDetailsObj] = useState({
    cookingDish: "",
    preheatMethod: "",
    spices: [],
  });

  return (
    <div className="App">
      <Title />
      <SelectIngredients
        setRecipeInfoObj={setRecipeInfoObj}
        setCookingDetailsObj={setCookingDetailsObj}
      />
      <RecipeDetails
        country={recipeInfoObj.country}
        cookMethod={recipeInfoObj.cookMethod}
        protein={recipeInfoObj.protein}
        picture={recipeInfoObj.picture}
      />
      <GenerateMethod
        recipeInfoObj={recipeInfoObj}
        cookingDetailsObj={cookingDetailsObj}
      />
    </div>
  );
}

export default App;
