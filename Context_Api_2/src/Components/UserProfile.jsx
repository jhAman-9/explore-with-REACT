import React,{useContext} from "react";
import { LogInContext } from "../App";


const UserProfile = () => {
  // Now  Destructring the context
  const { isLoggedIn, onLogIn, onLogOut } = useContext(LogInContext);
  return (
    <div>
      <h3>User Profile</h3>
      {isLoggedIn ? (
        <div>
          <p>Welcome, User!</p>
          <button onClick={onLogOut}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please Log In</p>
          <button onClick={onLogIn}>LogIn</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
