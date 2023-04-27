import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 400,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 550,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 350,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 280,
  },
];

export default function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((item) => (
    <MealItem key={item.id} id={item.id} name={item.name} description={item.description} price={item.price}></MealItem> 
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}
