import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Sven", age: 29 },
      { name: "Leon", age: 22 },
      { name: "Eileen", age: 29 },
    ],
  });

  const switchNameHandler = () => {
    //console.log("Was clicked");
    setPersonsState({
      persons: [
        { name: "Sven Kusebauch", age: 29 },
        { name: "Leon Mooy", age: 22 },
        { name: "Eileen Mooy", age: 29 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi I am a React-App</h1>
      <p>this is really working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My hobbies: football
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  //return React.createElement(
  //  "div",
  //  { className: "App" },
  //  React.createElement("h1", null, "Hello test")
  //);
};

export default app;

//state = {
//  persons: [
//    { name: "Sven", age: 29 },
//    { name: "Leon", age: 22 },
//    { name: "Eileen", age: 29 },
//  ],
//};

//// Event Handler
