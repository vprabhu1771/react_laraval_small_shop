import React from 'react';

import { useAuth } from '../../../context/AuthContext';  // Make sure to import the useAuth hook

const TopBar = ({ isAuthenticated, user }) => {

    const { logout } = useAuth();  // Access the logout function from the AuthContext

    const handleLogout = async () => {
        await logout();  // Call the logout function to log the user out
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <a className="navbar-brand" href="#">Small Shop</a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>

                    {!isAuthenticated ? (
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login / Register</a>
                        </li>
                    ) : (
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {user.name} {/* Display the user's name */}
                                {user.email}
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/cart">Cart</a></li>
                                <li><a className="dropdown-item" href="/order">Order</a></li>
                                <li><a className="dropdown-item" href="/profile">Profile</a></li>
                                <li><a className="dropdown-item" href="/logout">Logout</a></li>
                                <li>
                                  {/* Logout button */}
                                  <button className="dropdown-item" onClick={handleLogout}>
                                    Logout
                                  </button>
                                </li>
                            </ul>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default TopBar;