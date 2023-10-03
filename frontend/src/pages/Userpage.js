import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import EditNameModal from '../components/editNameModal.js';
import { connect } from 'react-redux';
import Account from '../components/Account';

const Userpage = (props) => {
    console.log("Props in Userpage:", props);

    const [isModalOpen, setModalOpen] = useState(false);

    const { userName } = props;
    console.log("Props in Userpage:", props);
    return (
        <div>
            <Navigation />
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />{userName}!</h1>
                    <button className="edit-button" onClick={() => setModalOpen(true)}>Edit Name</button>
                </div>
                <h2 className="sr-only">Accounts</h2>
                <div>
                    {isModalOpen && <EditNameModal onClose={() => setModalOpen(false)} />}
                </div>
                <Account
                    title="Argent Bank Checking (x8349)"
                    amount="$2,082.79"
                    description="Available Balance"
                />

                <Account
                    title="Argent Bank Savings (x6712)"
                    amount="$10,928.42"
                    description="Available Balance"
                />

                <Account
                    title="Argent Bank Credit Card (x8349)"
                    amount="$184.30"
                    description="Current Balance"
                />
            </main>
            <Footer />
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log("State in mapStateToProps:", state);
    return {
        userName: state.auth?.user?.body?.userName
    };
};
export default connect(mapStateToProps)(Userpage);
