import {Link} from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>couldn't find this webpage</p>
            <Link to="/">back to the homepage</Link>
        </div>
     );
}
 
export default NotFound
