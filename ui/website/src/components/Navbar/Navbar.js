import React, { Component } from 'react';
import { MenuItems } from "./Menuitems"
import { Button } from "./Button.js"
import './Navbar.css'
import logo from './img/gf-logo.jpeg'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <img className="navbar-logo" src={logo} alt="logo"/>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button><a href="http://localhost:3000/signup">Sign Up</a></Button>
            </nav>
        )
    }
}

export default Navbar 
