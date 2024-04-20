import { useState } from 'react'

function App() {
  let [color, setColor] = useState("red")

  return (
    <div className="w-100% h-screen duration-200"
     style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                <button
                onClick={() => setColor ("olive")}
                 className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                style={{background : 'olive'}}>red</button>
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

export default App;