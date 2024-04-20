// import React from "react";
// import Basic from "./components/basic";
// import ParentComponent from "./components/ParentComponent";


// function App() {
//   return(
//     <>
//         <Basic></Basic>
//         <ParentComponent></ParentComponent>
//     </>
//   )
  
// }

// export default App;


import { useState } from 'react'
// import BgChange from './components/BgChange'

export default function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-100% h-screen duration-200"
     style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                <button
                onClick={() => setColor ("red")}
                 className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                style={{background : 'red'}}>red</button>
                <button
                onClick={() => setColor ("pink")}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                style={{background : 'pink'}}>pink</button>
                <button
                onClick={() => setColor ("blue")}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                style={{background : 'blue'}}>blue</button>
                <button
                onClick={() => setColor ("gray")} 
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                style={{background : 'gray'}}>gray</button>
            </div>
        </div>
    </div>
  );
}
