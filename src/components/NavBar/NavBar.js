import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand text-decoration-none" to="#">
                    Task Manager
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className={`text-bg-dark offcanvas offcanvas-end ${isMenuOpen ? 'show' : ''}`}
                >
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title">Manage Tasks</h5>
                        <button
                            type="button"
                            className="btn-close btn-close-white"
                            onClick={toggleMenu}
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link className={`text-decoration-none nav-link ${location.pathname === '/home' ? 'active' : ''}`} aria-current="page" to="/home" onClick={toggleMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`text-decoration-none nav-link ${location.pathname === '/todos' ? 'active' : ''}`} to="/todos" onClick={toggleMenu}>
                                    Todos
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
