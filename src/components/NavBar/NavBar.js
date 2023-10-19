import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';
import Footer from '../../components/Footer/Footer';

export default function NavBar({isMenuOpen, setIsMenuOpen, user, setUser}) {
    const location = useLocation();
    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const logOut = () => {
        setUser(null)
    }
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top border-bottom border-danger border-4">
            <div className="container-fluid">
                <Link className="navbar-brand text-decoration-none text-light" to="#">
                track<span className='text-success'>.</span><span className='text-warning'>.</span><span className='text-danger'>.</span>it
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`text-bg-dark offcanvas offcanvas-end ${isMenuOpen ? 'show' : ''}`}>
                    <div className="offcanvas-header text-warning">
                        <h5 id="welcome-user" className="offcanvas-title m-2 ps-4">Welcome, {user.name}!</h5>
                        <button
                            type="button"
                            className="btn-close btn-close-white"
                            onClick={toggleMenu}
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-2">
                            <li className="nav-item p-1">
                                <Link className={`text-decoration-none nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to={{
                                        pathname: '/',
                                        state: { isMenuOpen: isMenuOpen } // Pass your custom props here
                                    }} onClick={toggleMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item p-1">
                                <Link className={`text-decoration-none nav-link ${location.pathname === '/todos' ? 'active' : ''}`} to="/todos" onClick={toggleMenu}>
                                    My Current Tasks
                                </Link>
                            </li>
                            <li className="nav-item p-1">
                                <Link className={`text-decoration-none nav-link ${location.pathname === '/todos/add' ? 'active' : ''}`} to="/todos/add" onClick={toggleMenu}>
                                    Add a New Task
                                </Link>
                            </li>
                            <li className="nav-item p-1">
                                <Link className="text-decoration-none nav-link" to="/" onClick={logOut}>
                                    Log Out
                                </Link>
                            </li>
                        </ul>
                        <Footer />
                    </div>
                </div>
            </div>
        </nav>
    );
}
