# Export Types

- Default Export/ Import
export default Componet;
import Component from ....

- Named Export/Import
export const Component;
import {component} from ....


# Hooks
 (Normal JS Utiliy Functions)
 - UseState -> Superpowerful State Variabe

- UseEffect
    - if no dependency array in useEffect, it is called on every render.

    - if dependency array in empty, it will call initial render (only one)

    - if dependency array, then change in dependency it will call..

# Route 
- Client Side Routing
- i} create createBrowerRouter
- ii) RouterProvoder to provide the routing paths
- iii) for children routing the another children routing is mention with router keyword and in a nested mannner..

        const appRouter = createBrowserRouter([
        {
            path: "/",
            Element: <App />,
            errorElement: <Error />,
            children: [
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            ],
        },
        ]);


# Outlet
- we never change into the part outlet will be fill in that path
- outlet will be replaced by the path components

# Anchor Tag
- <a href="">  --> ❌❌
- Never use Anchor tag in React page because it will re-render the  whole page 
- Instead of Anchor tag use Link tag because it just refresh the  components

          <li className="p-2 m-2">
            <a href="/home">Home</a>            // Don't use this way
          </li>

          <li className="p-2 m-2">
            <Link to="/about">About us</Link>
          </li>

          <li className="p-2 m-2">
            <Link to="/contact">Contact us</Link>
          </li>



- Linking every restorent with specific Id
![alt text](<Screenshot (146).png>)