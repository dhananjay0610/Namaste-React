import React from "react";
import ReactDOM from "react-dom/client";

// <div class="header">
//   <h1>Namaste React</h1>
//   <li>
//     <ul> About us</ul>
//     <ul>  Home </ul>
//     <ul>   Contact us </ul>
//   </li>

// </div>

const heading1 = React.createElement(
  "h1",
  {
    id: "title",
    key: "h1",
  },
  "Heading 1"
);
const ul1 = React.createElement("ul", {}, "Home");
const ul2 = React.createElement("ul", {}, "About us");
const ul3 = React.createElement("ul", {}, "Contact Us");
const list = React.createElement("li", {}, [ul1, ul2, ul3]);

const heading2 = React.createElement(
  "h2",
  {
    id: "titles",
    key: "h2",
  },
  "Heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [
    React.createElement(
      "h1",
      {
        id: "title",
      },
      "Heading 1"
    ),
    React.createElement("ul", {}, [
      React.createElement("li", {}, "Home"),
      React.createElement("li", {}, "About us"),
      React.createElement("li", {}, "Contact us"),
    ]),
  ]
);

const heading3 = (
  <h1 title="jsx" key="h3">
    Namaste React from JSX
  </h1>
);
const heading4 = (
  <h1 title="jsx" key="h3">
    {heading3}
    Namaste React from JSX2
  </h1>
);
//root.render(heading3);

const HeadingComponent = () => {
  return (
    <div>
      <h2 title="headingcomponent" key="h4">
        h2 1 component
      </h2>
      <h2 key="h5s">h2 component</h2>
    </div>
  );
};

// const HeadingComponent = (
//   <h1 title="headingcomponent" key="h4">
//     Headnig component
//   </h1>
// );
//root.render(<HeadingComponent/>);

// const heading1 = React.createElement(
//   "h1",
//   {
//     id: "title",
//     key: "h1",
//   },
//   "Heading 1"
// );
// const ul1 = React.createElement("ul", {}, "Home");
// const ul2 = React.createElement("ul", {}, "About us");
// const ul3 = React.createElement("ul", {}, "Contact Us");
// const list = React.createElement("li", {}, [ul1, ul2, ul3]);

// const heading2 = React.createElement(
//   "h2",
//   {
//     id: "titles",
//     key: "h2",
//   },
//   "Heading 2"
// );

// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//   },
//   [heading1, list]
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(container);
//root.render(<HeadingComponent />);
root.render(heading4);
