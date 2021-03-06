import React, { useContext } from "react";
import PropTypes from "prop-types";
import classes from "./Person.css";
import Aux from "../../../hoc/Aux";
import WithClass from "../../../hoc/WithClass";
import AuthContext from "../../../context/auth-context";

const person = (props) => {
  const authContext = useContext(AuthContext);

  return (
    <WithClass classes={classes.Person}>
      {authContext.authenticated ? <p>Authenticated!</p> : <p>Please Login!</p>}

      <p onClick={props.click}>
        I am {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </WithClass>
  );
};

person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changes: PropTypes.func,
};

export default person;
