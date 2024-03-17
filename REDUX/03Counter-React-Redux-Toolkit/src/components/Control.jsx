import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterAction } from "../store/Counter";
import { privacyAction } from "../store/Privacy";

function Control() {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterAction.increment());
  };


  const handleDecrement = () => {
    dispatch(counterAction.decrement());
  };


  const handleAddition = () => {
    dispatch(
      counterAction.add({
        nums: inputElement.current.value,
      })
    );
    inputElement.current.value = "";
  };


  const handleSubtract = () => {
    dispatch(
      counterAction.subtract({
        nums: inputElement.current.value,
      })
    );
    inputElement.current.value = "";
  };


  const handlePrivacy = () => {
    dispatch(
      privacyAction.toggle()
    );
  };

  return (
    <div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>

        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacy}
        >
          Privacy
        </button>
      </div>
      <div className="SpaceFromTop d-grid gap-2 d-sm-flex justify-content-sm-center ">
        <input
          type="text"
          placeholder="Enter Number"
          className="number-input"
          ref={inputElement}
        />
        <button type="button" className="btn btn-info" onClick={handleAddition}>
          Add
        </button>
        <button type="button" className="btn btn-dark" onClick={handleSubtract}>
          Subtract
        </button>
      </div>
    </div>
  );
}

export default Control;
