import React, { useState} from "react";

export default function ParentComponent(){
    let [color,setColor] = useState('#0101')
    return (
        <div>
            <h3>Pick a Color Sir!</h3>
            <input type="color" onChange={(e) =>{
                setColor(e.target.value)
            }}
            value={color}>
            </input>
        </div>
        

    );
}