const heading = React.createElement("h1",{}, "Hellow world from react")
//CreateElent crete a react object that furter generate html tag that browser understand
//CreateElement(Object) ==> HTML(Browser understand)
// createElement conatin three arguments where:
// fist definr name of the tag
//second i.e empty object it define the attributes which that tag hold: could be id or class or style etc
// third was the Inner Html of the tag
const root = ReactDOM.createRoot(document.getElementById("root"))
//createRoot create root element 

//render put the element into the root 


const parent = React.createElement("div",{id: "parent"},

   [ React.createElement("div",{id: "child"},
    //for multiple children we simply have to put each child into an array
    [React.createElement("h1",{},"i am h1 tag"),React.createElement("h2",{},"i am h2 tag")]),
    React.createElement("div",{id: "child2"},
        //for multiple children we simply have to put each child into an array
        [React.createElement("h1",{},"i am h1 tag2"),React.createElement("h2",{},"i am h2 tag2")])]
)

    
root.render(parent);
// console.log(parent)