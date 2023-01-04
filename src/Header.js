import { Outlet, Link } from "react-router-dom";

const Header = () => {

    return (
       <>
        <nav className="navbar navbar-expand-lg fixed-top navbarScroll">
        <div className="container">
           <Link className="navbar-brand" to="/"><img src={process.env.PUBLIC_URL + '/images/logo-image.png'} width="100" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                       <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/blogs">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/NoPage">404</Link>
                    </li>
                </ul>
            </div>
        </div>
       </nav>
       <Outlet />
       </>
    );
}
export default Header;