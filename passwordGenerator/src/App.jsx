import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("");

  // for showing the copied part of clipboard use useRef  
  const passwordRef = useRef(null)

  // functiom for generating password according to their array element condition
  // useCallback is used to change the function condition according to their array element
  const passGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()_+{}|:<>?/`"

    for(let i=0; i<length; i++){
      let char = Math.floor(Math.random() * str.length + 1)   // +1, if the random value is something like 0.1
      pass += str[char]
    }

    setPassword(pass);

  },[length, numAllowed, charAllowed, setPassword])

  // dependences of passGenerator function for calling
  // useEffect is used to call function if there is any change in the given array elements
  // Generaly, useCallback is used to optimized the code
  useEffect( ()=> {
    passGenerator();
  },[length,numAllowed, charAllowed, passGenerator])

  // To copy password
  const copyPasswordToClipboard = useCallback (()=>{
    passwordRef.current ?.select();
    // this is for range of copied clipboard
    passwordRef.current ?.setSelectionRange(1,length-1);
    window.navigator.clipboard.writeText(password);
  },[password])  
  
  return (
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>

    <h1 className=' text-yellow-200 text-center my-3'>Password Generator</h1>

    <div className='flex shawdow rounded-lg overflow-hidden mb-4 text-white'>
      <input type="text" value={password} className='outline-none w-full py-1 px-3 bg-gray-400 rounded-md' placeholder='Password' readOnly ref={passwordRef} />
      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>Copy</button>
    </div>

    <div className='flex text-lg gap-x-2'>
      <div>
        <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}} />
        <label htmlFor="">Length: {length}</label>
      </div>

      <div>
        <input type="checkbox" name="" id="numberInput" onChange={ ()=> {setNumAllowed((prev)=> !prev)}} />
        <label htmlFor="numberInput">Number</label>
      </div>

      <div>
        <input type="checkbox" name="" id="charInput" onChange={ ()=>{setCharAllowed((prev)=> !prev)}} />
        <label htmlFor="charInput">Charactor</label>
      </div>
    </div>

   </div>
  )
}

export default App
