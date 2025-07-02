import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count:0,
            count2:1,
        }
        console.log("child Constructor")
    }
// Life cycle of Class Based Componenet(Iportant stuf): Whn the Class based Component render or Mounted or its instance is created
//  then at firstly its Construstor() is invocked then render() will invocked and finally componentDidMount() will invoke
    


    componentDidMount() {  // this function used for api calls because this will invoked after our component is rendered
        console.log("Child ComponentDidMount")
    }
    render(){
        console.log("Child render")
        const {count, count2} = this.state
        return(
            <div className="User-Card">
                <h5>Count : {count}</h5>
                <h5>Count : {count2}</h5>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1,
                    })
                }}>
                    Click
                </button>
                
                <h3>Name: {this.props.name}</h3>
                <h3>Location: {this.props.location}</h3>
                <h3>contact: 839398890</h3>
    
            </div>
        );
    }
}

export default UserClass


// life cycle of parent-child class based component
// parent Construstor 
//  parent Render
// child Constructor
// Child render
// Child ComponentDidMount
// parent componentDidMount