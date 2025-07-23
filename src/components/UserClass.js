import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfor: {
        name: "dummy",
        location: "dummy location",
        avatar_url : "http//:photo.com"
      },
    };
  }
  // Life cycle of Class Based Componenet(Important stuf): Whn the Class based Component render or Mounted or its instance is created
  //  then at firstly its Construstor() is invocked then render() will invocked and finally componentDidMount() will invoke

  async componentDidMount() {
    // this function used for api calls because this will invoked after our component is rendered
    const data = await fetch("https://api.github.com/users/alimehdi9651")
    const json = await data.json()
    console.log(json)
    this.setState({
        userInfor: json
    })
    // console.log(this.props.userInfo.name)
  }
  componentDidUpdate(){  // this runs just after the updating cycle
    console.log("componenet did update")
  }
  componentWillUnmount(){ // this runs when the unmounting begains or we hit towards another page
    console.log("componenet will update")
  }
  render() {
    const {name, location, avatar_url} = this.state.userInfor
    return (
      <div className="User-Card">
        <img className="avtar_img" src={avatar_url} alt="" />
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
        <h3>contact: 8318796290</h3>
      </div>
    );
  }
}

export default UserClass;

// life cycle of parent-child class based component
// parent Construstor
//  parent Render
// child Constructor
// Child render
// Child ComponentDidMount
// parent componentDidMount
