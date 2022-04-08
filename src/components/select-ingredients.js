import { notCountryList, hotCountryList, cookMethodList } from "./library";
import { useState } from "react";

const SelectIngredients = ({ setRecipeInfoObj }) => {
  const [newProtein, setNewProtein] = useState("");
  const [newVeg1, setNewVeg1] = useState("");
  const [newVeg2, setNewVeg2] = useState("");
  const [newCarb, setNewCarb] = useState("");
  const [newIsHot, setNewIsHot] = useState("");

  const randomNumberGenerator = (num) => {
    return Math.floor(Math.random() * num);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setRecipeInfoObj((currRecipeObj) => {
      return {
        ...currRecipeObj,
        protein: newProtein,
        veg1: newVeg1,
        veg2: newVeg2,
        carb: newCarb,
        isHot: newIsHot,
        cookMethod:
          cookMethodList[randomNumberGenerator(cookMethodList.length)],
        country: newIsHot
          ? hotCountryList[randomNumberGenerator(hotCountryList.length)]
          : notCountryList[randomNumberGenerator(notCountryList.length)],
      };
    });
    setNewProtein("");
    setNewVeg1("");
    setNewVeg2("");
    setNewCarb("");
    setNewIsHot("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="protein">Protein:</label>
      <input
        type="text"
        id="protein"
        name="protein"
        value={newProtein}
        onChange={(event) => {
          setNewProtein(event.target.value);
        }}
      ></input>
      <label htmlFor="veg1">First Vegetable:</label>
      <input
        type="text"
        id="veg1"
        name="veg1"
        value={newVeg1}
        onChange={(event) => setNewVeg1(event.target.value)}
      ></input>
      <label htmlFor="veg2">Second Vegetable:</label>
      <input
        type="text"
        id="veg2"
        name="veg2"
        value={newVeg2}
        onChange={(event) => setNewVeg2(event.target.value)}
      ></input>
      <label htmlFor="carb">Carbo:</label>
      <input
        type="text"
        id="carb"
        name="carb"
        value={newCarb}
        onChange={(event) => setNewCarb(event.target.value)}
      ></input>
      <label htmlFor="hot">Hot</label>
      <input
        type="radio"
        id="hot"
        name="isHot"
        onChange={(event) => {
          setNewIsHot(true);
        }}
      ></input>
      <label htmlFor="not">Not</label>
      <input
        type="radio"
        id="not"
        name="isHot"
        onChange={(event) => {
          setNewIsHot(false);
        }}
      ></input>
      <button>submit</button>
    </form>
  );
};

export default SelectIngredients;
