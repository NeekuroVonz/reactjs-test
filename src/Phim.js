import React from "react";

// instance of class
class Phim extends React.Component {
    // property
    state = {
        count : 0,
    };
    // method
    constructor(props){
        this.state.logo = props.logo;
        this.state.topic = props.topic;
        this.state.version = props.version;
        // setter ??
    }
    render() {
        return (
            <div>
                <h1>Phim</h1>
                <p>{this.state.logo}</p>
                <p>{this.state.topic}</p>
                <p>{this.state.count}</p>
            </div>
        );
    }
}