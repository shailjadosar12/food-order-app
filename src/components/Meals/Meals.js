import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import AvailableMeals from "./AvailableMeals";
import MealsSumary from "./MealsSumary";
import classes from "./MealsSummary.module.css";
const Meals = () => {
  return (
    <Fragment>
      <MealsSumary />
      <AvailableMeals />
    </Fragment>
  );
};
export default Meals;
