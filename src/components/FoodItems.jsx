import React from "react";
import Foodcards from "./Foodcards";
import FoodData from "./FoodData";
function FoodItems() {
  return (
    <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
      {FoodData.map((food) => {
        return (
          <Foodcards
            key={food}
            name={food.name}
            id={food.id}
            img={food.img}
            rating={food.rating}
            category={food.category}
            desc={food.desc}
            price={food.price}
          />
        );
      })}
    </div>
  );
}

export default FoodItems;
