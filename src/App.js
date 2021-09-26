import React, { useState } from "react";
import "./styles.css";

const fineDine_database = {
  "Paris Panini": ["Authentic French Paninis in Indiranagar", "4.5/5"],
  Chiante: ["Authentic Italian food", "4/5"],
  "Rusty's": ["Italian Cuisine and Pizzeria", "4/5"],
  "Plan B": ["American food. Primarily famous for wings", "4/5"]
};

const fastfood_database = {
  McDonalds: ["World famous Americn burger joint", "3/5"],
  "Taco Bell": ["World famous Americn taco joint", "3/5"],
  "Leon Grill": ["One of Bnagalore's most popular fast food chain", "3/5"],
  Dominos: ["One of the more popular Pizza places in India", "4/5"],
  "Burger King": ["World famous Americn burger joint", "3/5"]
};

const fdh_database = {
  LunchBox: ["Very inexpensive and popular, serving indian cuisine", "3/5"],
  FreshMenu: ["Popular for relatively inexpensive continental food", "4/5"],
  "Bowl Company": [
    "Slightly expensive, but serves variety of different kinds of rice/paratha bowls",
    "4.5/5"
  ],
  "Paratha Box": ["Serves all kinds of stuffed paratha you can imagine", "4/5"]
};

const costEffective_database = {
  "Dosa Canteens": [
    "Very inexpenive serving all kinds of Dosas you can imagine",
    "4/5"
  ],
  "VV Puram Street": [
    "Food street for all kinds of vegetarian and chinese options",
    "3/5"
  ]
};

export default function App() {
  var [name, setName] = useState([]);
  var [info, setInfo] = useState([]);

  function renderLists(data) {
    setName(Object.keys(data));
    setInfo(Object.values(data));
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
              <span className="rest-desc"> {info[index][0]} </span>
              <span className="rest-rating"> {info[index][1]} ⭐ </span>
            </div>
          </li>
        ))}
      </ul>
      <footer>
        <p> Created by Thomas Alex </p>
        <p> As a part of markNine neoGCamp </p>
      </footer>
    </div>
  );
}
