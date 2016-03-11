import React, { Component } from 'react';

import TopBar from './Components/TopBar/TopBar';
import AppContent from './Components/AppContent';
import AppMenu from './Components/AppMenu';

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="app-container">
                <table style={{width: '100%'}} cellSpacing="0" cellPadding="0">
                    <tbody>
                        <tr>
                            <td colSpan="2">
                                <TopBar />
                            </td>
                        </tr>
                        <tr>
                            <td className="app-menu-container">
                                <AppMenu />
                            </td>
                            <td>
                                <AppContent />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}