import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError()// another local state variable for errors
    console.log(err)
    return (
    <div>
        <h1>Opps!!!</h1>
        <h1>there is a problem</h1>
        <h3>{err.status} {err.statusText}</h3>
        
    </div>
)}

export default Error;