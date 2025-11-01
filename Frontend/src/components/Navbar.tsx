import { Link } from 'react-router-dom';
const Navbar = () => {
    return(
        <div>
            <p>Navbar</p>
            <Link to="/">Home</Link> | <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link>
        </div>
    )
}

export default Navbar