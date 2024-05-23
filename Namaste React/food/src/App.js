import React, { useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";

function App() {
  const [userName, setUserName] = useState("Aman Kumar Jha");
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <>
        <Header />
        <Outlet />
      </>
    </UserContext.Provider>
  );
}

export default App;
