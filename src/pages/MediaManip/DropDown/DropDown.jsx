import React from "react";

import styles from "./drop-down.module.scss";

function DropDown({ type, onChange, value }) {
  const dropDownItems = ["png", "jpg", "webp", "jpeg"];

  return (
    <>
      {type === "Output" ? (
        <select value={value} name="dropdown" className={styles.dropDown} onChange={e => onChange(e.target.value)}>
          <option value={type}>{type}</option>
          {dropDownItems.map(item => (
            <option key={item} value={item}>
              {item.toUpperCase()}
            </option>
          ))}
        </select>
      ) : (
        <div className={styles.input}>{value === "Input" ? "Input" : value.toUpperCase()}</div>
      )}
    </>
  );
}

export default DropDown;
