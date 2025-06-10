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
import React from "react";
import ReactDOM from "react-dom/client";

// Simple heading
const heading = React.createElement("h1", {}, "Hello world from React");

// Parent with children that have proper `key` props
const parent = React.createElement("div", { id: "parent" }, [

  React.createElement("div", { id: "child", key: "child-1" }, [
    React.createElement("h1", { key: "h1-1", id: "h1-1" }, "I am h1 tag"),
    React.createElement("h2", { key: "h2-1", id: "h2-1" }, "I am h2 tag")
  ]),

  React.createElement("div", { id: "child2", key: "child-2" }, [
    React.createElement("h1", { key: "h1-2", id: "h1-2" }, "I am h1 tag2"),
    React.createElement("h2", { key: "h2-2", id: "h2-2" }, "I am h2 tag2")
  ])

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
