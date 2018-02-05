import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class Menu extends Component {

    render(){
        return (


    <div id="menu">
        <div className="pure-menu">
            <a className="pure-menu-heading" href="#">Menu</a>

            <ul className="pure-menu-list">
                <li className="pure-menu-item menu-item-divided pure-menu-selected">
                    <a href="#" className="pure-menu-link">Atividades</a>
                </li>

            </ul>
        </div>
    </div>

        );
    }
}
