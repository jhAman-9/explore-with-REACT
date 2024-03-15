import { createContext, useState } from "react";

import "./App.css";
import Home from "./Components/Home";

export const LogInContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoggIn = () => {
    setIsLoggedIn(true);
  };
  const handleLogOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <LogInContext.Provider
      value={{ isLoggedIn, onLogin: handleLoggIn, onLogout: handleLogOut }}
    >
      <div className="App">
        <h1>Authentication App</h1>
        <Home
          isLoggedIn={isLoggedIn}
          onLogin={handleLoggIn}
          onLogout={handleLogOut}
        />
      </div>
    </LogInContext.Provider>
  );
}

export default App;
