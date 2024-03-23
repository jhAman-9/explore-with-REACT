import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import Bag from "./routes/Bag.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./routes/Home.jsx";
import { Provider } from "react-redux"
import myntraStore from "./store/index.js";

// const router = createBrowserRouter( [
//   {
//   path: "/",
//   element: <App />,
//   children: [
//     {
//       path: "/",
//       element: <Home />
//     },
//     {
//       path: "/bag",
//       element : <Bag/>,
//     },
//     ],
//   },
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/bag" element={<Bag />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
