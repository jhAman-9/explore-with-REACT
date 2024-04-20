import {useParams} from "react-router-dom"
const User = () => {
    const {name} = useParams();
  return (
    <h1>user {name} page</h1>
  )
}

// const User = ({}) => {
//     const {name} = useParams();
//   return (
//     <h1>user {name} page</h1>  
//   )
// }

export default User