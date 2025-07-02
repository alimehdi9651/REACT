import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component{
    constructor(props){
        super(props)
        console.log("parent Construstor render")
    }
    componentDidMount(){
        console.log("parent componentDidMount")
    }

    render() {
        console.log("parent Render")
        return (
            <div>
                <h1>About Us</h1>
                <UserClass name = {"Ali Mehdi coming from class components"}  location = {"Lucknow coming from Class component"}/>
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