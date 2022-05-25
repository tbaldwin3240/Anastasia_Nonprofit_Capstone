import React, { Component } from 'react';
import { MenuItem } from "./Menuitems"
import { Button } from "../Button"
import './Navbar.css'



class Narbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    
    render() {
        return (
            <nav className="NarbarItems">
                <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1> 
                <div classname="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-time' : 'fas fa-bars'}></i>

                </div>
                <ul className={this.state.clicked ? 'nar-menu active':
                'nav-menu'}>
                    {MenuItem.map((item, index) => {
                    
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}

                </ul>
                <Button>Sing Up</Button>
            </nav>
        )
    }
}

export default Narbar