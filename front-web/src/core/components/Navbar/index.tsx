import './styles.scss';

const Navbar = () => (
    <nav className="row bg-primary main-nav">
        <div className="col-2">
            <a href="link" className="nav-logo-text">
                <h6>DS Catalog</h6>
            </a>
        </div>
        <div className="col-6 offset-2"></div>
        <ul className="main-menu">
            <li>
                <a href="link" className="active">
                    HOME
                </a>
            </li>
            <li>
                <a href="link">
                    CATÁLOGO
                </a>
            </li>
            <li>
                <a href="link">
                    ADMIN
                </a>
            </li>

        </ul>
    </nav>
);

export default Navbar;