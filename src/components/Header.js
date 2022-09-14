import React, { useState } from "react";
import {
  Button,
  Table,
  Accordion,
  Card,
  Navbar,
  Container,
  Nav,
} from "react-bootstrap";

const Header = () => {
  const [Smug, setName] = useState("Smug");

  const changeColor = () => {
    setName("Sarath S");
  };

  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter -1);
  };

  return (
    <>
      <h1 className="bg-warning text-white">useState HooK</h1>
      <h2>My name is {Smug}</h2>
      <button onClick={changeColor} className="btn btn-primary">
        Change Name
      </button>

      <h1>Counter is {counter}</h1>
      <button onClick={increment} className="m-2 btn btn-primary">+</button>
      <button onClick={decrement} className="m-2 btn btn-danger">-</button>
    </>
  );
};

export default Header;
