import React, { useState } from "react";
import "./styles.css";

const fineDine_database = {
  "Paris Panini": "4.5/5",
  Chiante: "4/5",
  "Rusty's": "4/5",
  "Plan B": "4/5"
};

const fastfood_database = {
  McDonalds: "3/5",
  "Taco Bell": "3/5",
  "Leon Grill": "4/5",
  Dominos: "4/5",
  "Burger King": "3/5"
};

const fdh_database = {
  LunchBox: "3/5",
  FreshMenu: "4/5",
  "Bowl Company": "4.5/5",
  "Paratha Box": "4/5"
};

const costEffective_database = {
  "Dosa Canteens": "4/5",
  "VV Puram Street": "4/5"
};

export default function App() {
  var [name, setName] = useState([]);
  var [rating, setRating] = useState([]);

  function renderLists(data) {
    setName(Object.keys(data));
    setRating(Object.values(data));
  }

  return (
    <div className="App">
      <h1>Restaurant Recommendations in Bangalore</h1>
      <p>
        {" "}
        These are my recommendations for restaurants in and around Bangalore{" "}
      </p>
      <p> Choose a category below to get started </p>
      <div
        className="cat-button"
        onClick={() => renderLists(fineDine_database)}
      >
        Fine Dine
      </div>
      <div
        className="cat-button"
        onClick={() => renderLists(fastfood_database)}
      >
        Fast Food
      </div>
      <div className="cat-button" onClick={() => renderLists(fdh_database)}>
        Food delivered home
      </div>
      <div
        className="cat-button"
        onClick={() => renderLists(costEffective_database)}
      >
        Cost-effective
      </div>
      <hr />
      <ul className="no-bullets">
        {name.map((each, index) => (
          <li className="list-entry">
            <div>
              <span className="rest-name"> {each} </span>
              <span className="rest-rating"> {rating[index]} ⭐ </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
