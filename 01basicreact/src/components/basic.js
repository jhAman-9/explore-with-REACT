import React, {useState} from "react";      // declearing Hooks


export default function Basic() {
    //define state
    let[mark,setMark] =  useState(1);

    // updating state value
    let increase = () =>{
        if( mark + 1 >= 1 && mark <= 9) {
            setMark(mark+1); 
        }
    }

  const click = () =>{
    alert("clicked");
  };

  const dbclick = ()=>{
    alert('double clicked');
  }

  const onMouseHover = ()=>{
    alert('mouse Hover')
  }

  const onChange  = (e)=>{
    console.log(e);
  }

  let istrue = true;
  return (
    <>
    <h1> Hello and welcome</h1>
      <div >
      <button onClick={click} id="wrapper" >click me</button> <br />
      <button onDoubleClick={dbclick} >Double click</button> <br />

      <button onMouseEnter={onMouseHover}>mouse</button>
      <input type="text" placeholder="Enter Your text"  onChange={onChange} />
      </div> 
      <button onClick={increase}>Increase Marks</button>

    {istrue && <h1> what is your name ?</h1> && <h1> what is Your marks ?</h1>}
    <h1>
        my marks is {mark}
    </h1>

    {istrue && <p> this is your value if true {mark}</p>}
    <h3> Aman Kumar Jha {mark}</h3>
    </>
  );
}

