import React, { Component } from 'react';
let gui = window.nwDispatcher.requireNwGui();

import TopBarButton from './Buttons/TopBarButton';

export default class TopBar extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <table style={{width: '100%'}} cellPadding="0" cellSpacing="0">
                <tbody>
                    <tr className="top-bar">
                        <td className="top-bar-drag-area">
                            &nbsp;
                        < /td>
                        <td className="top-bar-button-container">
                            <TopBarButton icon="icon-minus-circle" color="#C4E1FF" onClick={() => {gui.Window.get().minimize()}}>_</TopBarButton>
                            <TopBarButton icon="icon-times-circle" color="#C4E1FF" onClick={() => {window.close()}}>X</TopBarButton>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}