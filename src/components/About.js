import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
class About extends React.Component{
    constructor(props){
        super(props)
       
    }
    async componentDidMount(){
       
    }

    render() {
        console.log("parent Render")
        return (
            <div>
                <h1>About Us</h1>
                <div>
                    LoggedInUser
                    <UserContext.Consumer>
                        {({loggedInUser}) =><h1 className="font-bold">{loggedInUser}</h1> }
                    </UserContext.Consumer>
                    

                </div>
                <UserClass name = {"First"}  location = {"Lucknow"}/>
            </div>
        );

    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About Us</h1>
//             <UserClass name = {"Ali Mehdi coming from class components"}  location = {"Lucknow coming from Class component"}/>
//         </div>
//     );
// };
export default About





//if there exist multiple childs then what happen is: react batches render phase of all the childrens and then update the dom
// and component did mount render 
// parent Construstor render
// parent Render
// FirstConstructor
// FirstChild render
// secondConstructor
// secondChild render
// FirstComponentDidMount
// secondComponentDidMount
// parent componentDidMount