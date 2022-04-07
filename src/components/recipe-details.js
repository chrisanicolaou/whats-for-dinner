const RecipeDetails = (props) => {
  return (
    <h1>
      {props.country} {props.cookMethod} {props.protein}
    </h1>
  );
};

export default RecipeDetails;
