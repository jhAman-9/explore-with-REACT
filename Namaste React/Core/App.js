/* ReactElement(object) => HTMl(Browser Understand)
 */

import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", { id: "aj" }, "Hello Aman1");
const heading2 = React.createElement("h1", { id: "aj" }, "Hello Aman2");

const heading3 = React.createElement(
  "div",
  { id: "aj" },
  [heading1, heading2],

  React.createElement("div", { id: "aj" }, [heading1, heading2])
);

// JSX - createElement using JSX
// JSX is HTMl or XMl like syntax
// JSx (transpiled before it reaches the JS engine) - done by parcle with the help of -> Babel

// JSX => React.createElement => ReactElement - JS Onject => HTMLElement(render)
// to write JSX in multiple lines wirte under small brackets
const JSXHeading = <h1 id="JSX">Jsx is HTML like syntax</h1>;
console.log(JSXHeading);

// Functional Components..
const HeaderComponent = () => {
  return (
    <div id="com">
      /* {} data brower don't run it blindly, {} data is senitaized then run  */
      {200 + 300}
      {/* <heading1/> */}
      {heading1}
      <h1>
        This Is JSX components And we render it with the help of angular
        brackets
      </h1>
    </div>
  );
};

// Same these
const fn = () => true;
/* == */ const fn1 = () => {
  return true;
};

// Note: React Components Function Name starts with capital letter
// same these
const R1 = () => <h1>Hello</h1>;
/* == */ const R2 = () => {
  return <h1>Hello</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root is replaced by heading3
root.render(heading3);
root.render(JSXHeading);

// To render JSX components
root.render(<HeaderComponent></HeaderComponent>);
// root.render(<h1>Hello Everyone</h1>)
