// import React from "react"
// import ReactDOM from "react-dom/client"
// const heading = React.createElement("h1",{}, "Hellow world from react")
// //CreateElent crete a react object that furter generate html tag that browser understand
// //CreateElement(Object) ==> HTML(Browser understand)
// // createElement conatin three arguments where:
// // fist definr name of the tag
// //second i.e empty object it define the attributes which that tag hold: could be id or class or style etc
// // third was the Inner Html of the tag
// const root = ReactDOM.createRoot(document.getElementById("root"))
// //createRoot create root element

// //render put the element into the root

// const parent = React.createElement("div",{id: "parent"},

//    [ React.createElement("div",{id: "child", key: "child-1"},
//     //for multiple children we simply have to put each child into an array
//     [React.createElement("h1",{id: "h1-1"},"i am h1 tag"),React.createElement("h2",{id: "h2-1"},"i am h2 tag")]),
//     React.createElement("div",{id: "child2", key:"child-2"},
//         //for multiple children we simply have to put each child into an array
//         [React.createElement("h1",{id: "h1-2"},"i am h1 tag2"),React.createElement("h2",{id: "h2-2"},"i am h2 tag2")])]
// )

// root.render(parent);
// console.log(parent)
// import React from "react";
// import ReactDOM from "react-dom/client";

// Simple heading
// const heading = React.createElement("h1", {}, "Hello world from React");

// // Parent with children that have proper `key` props
// const parent = React.createElement("div", { id: "parent" }, [

//   React.createElement("div", { id: "child", key: "child-1" }, [
//     React.createElement("h1", { key: "h1-1", id: "h1-1" }, "I am h1 tag"),
//     React.createElement("h2", { key: "h2-1", id: "h2-1" }, "I am h2 tag")
//   ]),

//   React.createElement("div", { id: "child2", key: "child-2" }, [
//     React.createElement("h1", { key: "h1-2", id: "h1-2" }, "I am h1 tag2"),
//     React.createElement("h2", { key: "h2-2", id: "h2-2" }, "I am h2 tag2")
//   ])

// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// ========================================================================================================================================
import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement("h1", { id: "hwading" }, "i am ali Mehdi");

// // root.render(heading)
// console.log(root);
// // note : createElement creates react object(heading), and after rendering heading to root that object convert into HTML
// // object, and whatever which is written inside the root taht will me rplaced with the text in the that object heading

// // JSX - HTML like syantax: We use JSX to reduce the complexness of the above Core React code
// const jsxheading = (
//   <h1 id="heading " tabIndex="5">
//     using JSX
//   </h1>
//); // this jsx code is not understand by the JS engine
//therefore this jsx code transpiled before it goes to JS engine
// AND IT IS DOEN BY PARCEL which further used babel
// root.render(jsxheading);
// console.log(heading)
// console.log(jsxheading)
// both are nothing but react objects

// REACT coponents:
// There are two types of React components
// Class based components = Old way  to creating components which is currently not used by the modern developer
// Functional Components = New way of creating components
// Func Com is nthg but just a normal Javascript function that return some peice of JSX or
// it is something(funtion) that return a react element
// name of component should be start from capatial letter

// const Head = () => (
//     <div>
//     <h1 className="head" tabIndex="5">
//       Hi I am ali
//     </h1>
//     </div>
//   );

// // we can put any peice of JS code in JSX code just by writing that code in curly braces {}
// const num = 10000

// this is something called Component composition which is rendering compnent inside a component
// const HeadingComponent = () => (
//      // Component composition
//   <div>

//     {Head()}
//     <Head/>
//     <h1>{num}</h1>

//     <h1>React HeadingComponent</h1>
//   </div>
// );

// // way of rendering component

// const Title = () => (
//     <div>
//         <HeadingComponent/>
//     <h1 className="head" tabIndex="5">
//       Title REACT
//     </h1>
//     </div>
//   );

// root.render(<Title />);

//summary: we can put any react element inside functional component and can put any functional component inside react element
// and we can run any peice of JS code inside {}

// We can put these rect element and components using both syantax because at the end it is normal JS function and
// we have ability to run JS code in {}.
//{Head()}
//<Head/>

import Body from "./src/components/Body";
import Header from "./src/components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children : [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// if we want to pass data to the card dynamically , we have to use something known as props(properties)
// we have pass props to our functional component(just like passing arguments to normal functions)
