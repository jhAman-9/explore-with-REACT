import React from "react";
import { useSelector } from "react-redux";

function DisplayCounter() {
  const { counterVal } = useSelector((store) => store.counter);
  return (
    <p classNameName="lead mb-4 counter-text">
      Counter Current Value : {counterVal}
    </p>
  );
}

export default DisplayCounter;
