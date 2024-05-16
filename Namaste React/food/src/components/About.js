import React from 'react'
import User from './User'
import UserClass from './UserClass'


// This is function base Component
// const About = () => {
//   return (
//       <div>
//       <User />
//       <UserClass name="Aman Kumar Class" location="Bihar"/>
//     </div>
//   )
// }

// This is class base components
class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor About");
  }

  componentDidMount() {
    console.log("Parent components did mount About");
  }

  render() {
    console.log("About Render method");
    return (
      <div>
        <User />
        <UserClass name="Aman Kumar Class" location="Bihar" />
      </div>
    );
  }
}


export default About