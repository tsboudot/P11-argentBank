import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/getUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Navigation = ({ isAuthenticated, logout, username }) => {
    const location = useLocation();

    return (
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src="./img/argentBankLogo.webp"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                {
                    isAuthenticated ? (
                        location.pathname === '/' ? (
                            <NavLink to="/userpage" className="main-nav-item">
                                <FontAwesomeIcon icon={faUserCircle} />
                                {username}
                            </NavLink>
                        ) : (
                            <NavLink to="/login" onClick={logout} className="main-nav-item">
                                <FontAwesomeIcon icon={faSignOutAlt} />
                                Logout
                            </NavLink>
                        )
                    ) : (
                        <NavLink to="/login" className="main-nav-item">
                            <FontAwesomeIcon icon={faUserCircle} />
                            Sign In
                        </NavLink>
                    )
                }
            </div>
        </nav>
    );
};


const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    username: state.auth?.user?.body?.userName
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
