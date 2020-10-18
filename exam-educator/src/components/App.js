import React, {Component} from 'react';
import '../style/App.css';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Login from "./Login";
import {TOKEN_KEY} from '../constants';

class App extends Component {
    state = { //states used to activated login or register form.
        showLoginForm: false,
        showRegisterForm: false,
        isLoggedIn: localStorage.getItem(TOKEN_KEY) !== null,
    }

    showLoginForm = (show) => {
        this.setState({
            showLoginForm: show
        });
    }

    showRegisterForm = (show) => {
        this.setState({
            showRegisterForm: show
        });
    }

    loggedIn = () => {
        this.setState({
            isLoggedIn: true
        });
    }

    loggedOut = () => {
        this.setState({
            isLoggedIn : false
        });
    }

    render() {
        return (
            <div className="App">
                <Header showLoginForm={this.showLoginForm}
                        showRegisterForm={this.showRegisterForm}
                        isLoggedIn={this.state.isLoggedIn}
                        loggedOut={this.loggedOut}
                />

                <Login isLoginForm={this.state.showLoginForm}
                       isRegisterForm={this.state.showRegisterForm}
                       showLoginForm = {this.showLoginForm}
                       showRegisterForm={this.showRegisterForm}
                       loggedIn={this.loggedIn}
                />

                <Main />
                <Footer />
            </div>
        );
    }
}

export default App;