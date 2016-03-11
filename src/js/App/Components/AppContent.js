import React, { Component } from 'react';

export default class AppContent extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="app-content">
                <div>This is content</div>
            </div>
        );
    }
}