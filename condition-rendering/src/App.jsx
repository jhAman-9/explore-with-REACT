import './App.css'

// export default function App() {
//   let food = ['roti', 'dal', 'chawal', 'sabji']
//   let isfood = food.length === 0 ? <h1>please enter the food</h1> : null
//   return (
//     <>
//     <h1>Food Cart</h1>
//     {isfood}
//     <ul className="list-group">
//       {food.map((item) => (
//         <li className="list-group-item"> {item}</li>
//       ))}
//     </ul>
//     </>
//   )
// }



export default function App() {
  let food = ['roti', 'dal', 'chawal', 'sabji']
  return (
    <>
    <h1>Food  cart</h1>
    {food.length === 0 && <h1>Please the food item</h1>}
    <ul>
      <li>
        {food.map((item) =>(
          <li>{item}</li>
        ))}
      </li>
    </ul> 
    </>
  )
}