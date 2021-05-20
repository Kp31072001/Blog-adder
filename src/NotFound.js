import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That Page is Not Found</p>
            <Link to="/">Back to The Home Page</Link>
        </div>
    );
}
 
export default NotFound;