# Context_API

- Conetext Solve the Problem of Props Drilling
- And Always Try to create Context outside of components folder..Like in Utils and other

- How We create Context:

        import { createContext } from 'react';

        const UserContext = createContext({
            loggedInUser : "Aman",
        })

        export default UserContext

# How We use Context:

        import { useContext } from "react";
        import UserContext from "../utils/UserContext";
        function Header() {

            // Extracting Data
            // passing the userContext to decleare that I want data from this UserContext

            const { loggedInUser } = useContext(UserContext);

            return (
                <li className="p-2 m-2">Log In : { loggedInUser}</li>
            );
        }

        export default Header;

# How to change Context Values

    - Need to rape the part to which I want to change the Value

            function App() {
                const [userName, setUserName] = useState("Aman Kumar Jha");
                return (
                    <UserContext.Provider value={{ loggedInUser: userName }}>
                    <>
                        <Header />
                        <Outlet />
                    </>
                    </UserContext.Provider>
                );
            }

# How to change context value through input box

- firstly I have provide the function setUserName throught Context Provider to the components of input field..

1st Step:

      const [userName, setUserName] = useState("Aman Kumar Jha");
        return (
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            <>
                <Header />
                <Outlet />
            </>
            </UserContext.Provider>
        );

2nd Step:

- Extract the value and function through useContext

      const { loggedInUser, setUserName } = useContext(UserContext);

          <label>Change User Name : </label>
          <input value={loggedInUser} onChange={(e) => setUserName(e.target.value)} />

# Provide Different Value At Different Layer of UseContext.Provider

        function App() {
                return (

                    <UserContext.Provider value={{ loggedInUser: "Aman Kumar" }}>
                    <>

                        // Header has "Aman"

                        <UserContext.Provider value={{ loggedInUser: "Aman" }}>
                        <Header />
                        </UserContext.Provider>

                        // Outlet has "Aman Kumar"

                        <Outlet />
                    </>
                    </UserContext.Provider>
                );
            }
