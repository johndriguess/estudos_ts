import { Link } from "react-router-dom";

function NavBar(){
    return(
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/estudos'>Estudos</Link>
            </li>
        </ul>

    );
}

export default NavBar;