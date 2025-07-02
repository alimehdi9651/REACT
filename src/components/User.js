import { useState } from "react";

const User = ({name, location}) => {
    const [count] = useState(0)
    return(
        <div className="User-Card">
            <h3>count : {count}</h3>
            <h3>Name: {name}</h3>
            <h3>Location: {location}</h3>
            <h3>contact: 839398890</h3>

        </div>
    );
}
export default User;