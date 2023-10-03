import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../actions/getUser';

const Login = ({ loginUser, isAuthenticated }) => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        loginUser(credentials.username, credentials.password);
    };

    const navigate = useNavigate();

    if (isAuthenticated) {
        navigate("/userpage");
        return;
    }

    return (
        <div>
            <Navigation />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                value={credentials.username}
                                onChange={handleChange} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={credentials.password}
                                onChange={handleChange} />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <button className="sign-in-button" type="submit">Sign In</button>
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    };
};

export default connect(mapStateToProps, { loginUser })(Login);
