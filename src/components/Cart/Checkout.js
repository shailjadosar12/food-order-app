import React, { useRef } from "react";
import { useState } from "react/cjs/react.development";
import classes from "./Checkout.module.css";

const isEmplty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });
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

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });
    const formIsValid =
      enteredNameIsValid &&
      enteredCityIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid;
    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      street: enteredCity,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };
  const nameControlledClass = `${classes.control} ${
    formInputValidity.name ? "" : classes.invalid
  }`;
  const streetControlledClass = `${classes.control} ${
    formInputValidity.street ? "" : classes.invalid
  }`;
  const postalCodeControlledClass = `${classes.control} ${
    formInputValidity.postalCode ? "" : classes.invalid
  }`;
  const cityconrolledClass = `${classes.control} ${
    formInputValidity.city ? "" : classes.invalid
  }`;
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlledClass}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlledClass}>
        <label htmlFor="Street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={postalCodeControlledClass}>
        <label htmlFor="PostalCode">Postal Code</label>
        <input type="text" id="postalCode" ref={PostalCodeInputRef} />
        {!formInputValidity.postalCode && (
          <p>Please enter a valid postalCode (5 characters)!</p>
        )}
      </div>
      <div className={cityconrolledClass}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>Please enter a valid city name!</p>}
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
