import "./App.css";
import GenerateMethod from "./components/generate-method";
import RecipeDetails from "./components/recipe-details";
import SelectIngredients from "./components/select-ingredients";
import Title from "./components/title";
import { useState } from "react";

function App() {
  const [protein, setProtein] = useState("");
  const [veg1, setVeg1] = useState("");
  const [veg2, setVeg2] = useState("");
  const [carb, setCarb] = useState("");
  const [isHot, setIsHot] = useState(false);
  const [country, setCountry] = useState("");
  const [cookMethod, setCookMethod] = useState("");
  const [picture, setPicture] = useState("");

  return (
    <div className="App">
      <Title />
      <SelectIngredients
        protein={protein}
        setProtein={setProtein}
        veg1={veg1}
        setVeg1={setVeg1}
        veg2={veg2}
        setVeg2={setVeg2}
        carb={carb}
        setCarb={setCarb}
        isHot={isHot}
        setIsHot={setIsHot}
        country={country}
        setCountry={setCountry}
        cookMethod={cookMethod}
        setCookMethod={setCookMethod}
      />
      <RecipeDetails
        country={country}
        cookMethod={cookMethod}
        protein={protein}
      />
      <GenerateMethod />
    </div>
  );
}

export default App;
