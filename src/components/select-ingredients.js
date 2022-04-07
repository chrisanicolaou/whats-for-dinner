import { notCountryList, hotCountryList, cookMethodList } from "./library";

const SelectIngredients = (props) => {
  let newProtein;
  let newVeg1;
  let newVeg2;
  let newCarb;
  let newIsHot;

  const randomNumberGenerator = (num) => {
    return Math.floor(Math.random() * num + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setProtein(newProtein);
    props.setVeg1(newVeg1);
    props.setVeg2(newVeg2);
    props.setCarb(newCarb);
    props.setIsHot(newIsHot);
    props.setCookMethod(
      cookMethodList[randomNumberGenerator(cookMethodList.length)]
    );
    props.setCountry((newIsHot) => {
      if (newIsHot === true) {
        return hotCountryList[randomNumberGenerator(hotCountryList.length)];
      } else {
        return notCountryList[randomNumberGenerator(notCountryList.length)];
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for="protein">Protein:</label>
      <input
        type="text"
        id="protein"
        name="protein"
        value={newProtein}
        onChange={(event) => (newProtein = event.target.value)}
      ></input>
      <label for="veg1">First Vegetable:</label>
      <input
        type="text"
        id="veg1"
        name="veg1"
        value={newVeg1}
        onChange={(event) => (newVeg1 = event.target.value)}
      ></input>
      <label for="veg2">Second Vegetable:</label>
      <input
        type="text"
        id="veg2"
        name="veg2"
        value={newVeg2}
        onChange={(event) => (newVeg2 = event.target.value)}
      ></input>
      <label for="carb">Carbo:</label>
      <input
        type="text"
        id="carb"
        name="carb"
        value={newCarb}
        onChange={(event) => (newCarb = event.target.value)}
      ></input>
      <label for="hot">Hot</label>
      <input
        type="radio"
        id="hot"
        name="isHot"
        value={newIsHot}
        onChange={(event) => {
          newIsHot = true;
        }}
      ></input>
      <label for="not">Not</label>
      <input
        type="radio"
        id="not"
        name="isHot"
        value={newIsHot}
        onChange={(event) => {
          newIsHot = false;
        }}
      ></input>
      <button>submit</button>
    </form>
  );
};

export default SelectIngredients;
