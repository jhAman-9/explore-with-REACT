/* ReactElement(object) => HTMl(Browser Understand)
 */

const heading1 = React.createElement("h1", { id: "aj" }, "Hello Aman1");
const heading2 = React.createElement("h1", { id: "aj" }, "Hello Aman2");

const heading3 = React.createElement(
  "div",
  { id: "aj" },
  [heading1, heading2],

  React.createElement("div", { id: "aj" }, [heading1, heading2])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root is replaced by heading3
root.render(heading3);
