import React, { useState } from "react";

const App = () => {
  let dragIndexGlobal;

  let [listItems, setListItems] = useState([
    "dal chawal",
    "sabji roti",
    "khichdi",
    "kadi chawal",
    "rajma chawal",
  ]);

  function handleDrag(e, dragIndex) {
    dragIndexGlobal = dragIndex;
  }

  function handleDrop(e, dropIndex) {
    setListItems(prev => {
      const prevVal = prev[dragIndexGlobal];
      const nextVal = prev[dropIndex];

      const itemState = [...prev];
      itemState[dragIndexGlobal] = nextVal;
      itemState[dropIndex] = prevVal
      return itemState;
    })
  }

  return (
    <div className="flex justify-center items-center gap-[20px] flex-wrap">
      {listItems.map((items, index) => {
        return (
          <p
            className="bg-gray-800 text-white  p-[10px] text-lg h-[250px] w-[250px] flex justify-center items-center"
            key={index}
            draggable
            onDragOver={(e) => e.preventDefault()}
            onDrag={(e) => handleDrag(e, index)}
            onDrop={(e) => handleDrop(e, index)}
          >
            {items}
          </p>
        );
      })}
    </div>
  );
};

export default App;
