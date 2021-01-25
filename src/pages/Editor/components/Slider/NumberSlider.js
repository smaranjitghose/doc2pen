import "./Slider.css";
import React, { useState } from "react";

const NumberSliders = props => {
  const [Value, setValue] = useState(props.initialValue);

  function setValuePromise(newValue) {
    return new Promise((resolve, reject) => {
      setValue(newValue);
      resolve(true);
    });
  }

  const handleClickValueChange = async event => {
    const isDecrement = event.target.classList.contains("decrement");
    const inputElement = isDecrement ? event.target.nextSibling : event.target.previousSibling;

    const min = inputElement.min;
    const max = inputElement.max;
    let value = inputElement.value;

    if (value === "") {
      inputElement.value = min;
    }

    // console.log(min, max, name, value)

    if (isDecrement && Number(value) > Number(min)) {
      await setValuePromise(Number(value) - 1).then(() => {
        props.editContext.onValueChange(inputElement);
      });
    } else if (!isDecrement && Number(value) <= Number(max)) {
      await setValuePromise(Number(value) + 1).then(() => {
        props.editContext.onValueChange(inputElement);
      });
    }
  };

  const handleManualValueChange = event => {
    const inputElement = event.target;
    const min = inputElement.min;
    const max = inputElement.max;
    let value = inputElement.value;
    if (Number(value) >= Number(min) && Number(value) <= Number(max)) {
      setValue(Number(value));
      props.editContext.onValueChange(event.target);
    } else {
      console.log("not allowed bro");
    }
  };

  return (
    <div className={"control-container"}>
      <label for="left">{props.label}</label>
      <div className="control-wrap">
        <button onClick={handleClickValueChange} className="decrement">
          -
        </button>
        <input
          type="number"
          name={props.name}
          min={props.min}
          max={props.max}
          value={Value}
          className="form-control"
          onChange={handleManualValueChange}
        />
        <button onClick={handleClickValueChange} className="increment">
          +
        </button>
      </div>
    </div>
  );
};

export default NumberSliders;
