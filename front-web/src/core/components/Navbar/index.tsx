import { Link, NavLink } from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
    <nav className="row bg-primary main-nav">
        <div className="col-2">
            <Link to="/" className="nav-logo-text">
                <h4>DS Catalog</h4>
            </Link>
        </div>
        <div className="offset-2"></div>
        <ul className="main-menu">
            <li>
                <NavLink to="/" activeClassName="active" exact>
                    HOME
                </NavLink>
            </li>
            <li>
                <NavLink to="/catalog" activeClassName="active">
                    CATÁLOGO
                </NavLink>
            </li>
            <li>
                <NavLink to="/admin" activeClassName="active">
                    ADMIN
                </NavLink>
            </li>

        </ul>
    </nav>
);

export default Navbar;