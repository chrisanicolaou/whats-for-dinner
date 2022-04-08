const RecipeDetails = (props) => {
  if (props.protein === "") {
    return;
  } else {
    return (
      <div id="recipe-details">
        <img src={props.picture} alt="Chef" />
        <h1>
          {props.country} {props.cookMethod} {props.protein}
        </h1>
      </div>
    );
  }
};

export default RecipeDetails;
