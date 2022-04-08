// cooking dish
// spices based on isHot
//

const GenerateMethod = ({ recipeInfoObj, cookingDetailsObj }) => {
  if (recipeInfoObj.protein === "") {
    return;
  } else {
    return (
      <ol>
        <li>
          Preheat the oven to 180 degrees celsius
          {cookingDetailsObj.preheatMethod}
        </li>
        <li>
          Season the {recipeInfoObj.protein} with a pinch of{" "}
          {cookingDetailsObj.spices[0]}, a dash of {cookingDetailsObj.spices[1]}{" "}
          and a sprinkling of {cookingDetailsObj.spices[2]}.
        </li>
        <li>
          Put {recipeInfoObj.protein} in the {cookingDetailsObj.cookingDish} for
          30 mins, turning occasionally.
        </li>
        <li>
          Roughly chop your {recipeInfoObj.veg1} and dice your{" "}
          {recipeInfoObj.veg2}.
        </li>
        <li>
          After the {recipeInfoObj.protein} has been in for 10 mins, put your{" "}
          {recipeInfoObj.veg1} and {recipeInfoObj.veg2} in the oven.
        </li>
        <li>
          Put your {recipeInfoObj.carb} in a pot of boiling water for 15 mins.
        </li>
        <li>Plate up and enjoy!</li>
      </ol>
    );
  }
};

export default GenerateMethod;
