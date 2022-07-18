
import React from "react";

function Header(props) {
    // variables in this function
    let logo = props.logo;
    const topic = props.topic;
    let state = {

    };

    return (
        <header className="App-header">
            <img src={props.logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
            className="App-link"
            href="/login.html"
            rel="noopener noreferrer"
            >
                {props.topic}
            </a>
        </header>
    );
}

export default Header;