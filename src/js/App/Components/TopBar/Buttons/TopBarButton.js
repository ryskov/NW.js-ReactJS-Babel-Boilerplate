import React, { Component } from 'react';

export default class TopBarButton extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="top-bar-button" onClick={this.props.onClick}>
                <span className={this.props.icon} />
            </div>  
        );
    }
}