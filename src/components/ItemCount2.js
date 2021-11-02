import React, { useState } from "react";
import "./itemCount.css";

export default function ItemCount2({ initial, stock }) {
  const [isAdd, setAdd] = useState(initial);

  const onAdd = () => {
    const newValue = isAdd + 1;
    if (newValue <= stock) {
      setAdd(newValue);
    }
  };

  const onSubtract = () => {
    const newValue = isAdd - 1;
    if (newValue >= initial) {
      setAdd(newValue);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between">
      <button
          type="button"
          className="btn btn-light btn-sm"
          onClick={onSubtract}
        >
          -
        </button>
        <h4>{isAdd}</h4>
        <button type="button" className="btn btn-light btn-sm" onClick={onAdd}>
          +
        </button>

      </div>
    </>
  );
}