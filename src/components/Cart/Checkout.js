import React, { useRef } from "react";
import { useState } from "react/cjs/react.development";
import classes from "./Checkout.module.css";

const isEmplty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const PostalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    // console.log("inconfirmHandler ");
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPostalCode = PostalCodeInputRef.current.value;

    const enteredNameIsValid = !isEmplty(enteredName);
    const enteredCityIsValid = !isEmplty(enteredCity);
    const enteredStreetIsValid = !isEmplty(enteredStreet);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
    const formIsValid =
      enteredNameIsValid &&
      enteredCityIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid;
    if (!formIsValid) {
      return console.log("invalid");
    } //submit the data
  };
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="Street">Street</label>
        <input type="text" id="Street" ref={streetInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="PostalCode">Postal Code</label>
        <input type="text" id="PostalCode" ref={PostalCodeInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
