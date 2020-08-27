import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Eileen", age: 29 },
    ],
  };

  render() {
    return (
      <div className="App">
        <h1>Hi I am a React-App</h1>
        <p>this is really working</p>
        <button>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My hobbies: football
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    //return React.createElement(
    //  "div",
    //  { className: "App" },
    //  React.createElement("h1", null, "Hello test")
    //);
  }
}

export default App;
