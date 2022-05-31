// import React, { Component } from 'react';
// import { MenuItems } from "/Users/corcoding/Desktop/projects/Anastasia_Nonprofit_Capstone/Anastasia_Nonprofit_Capstone/ui/website/src/Navbar/MenuItems.js"
// import { Button } from "./Button.js"
// import './Navbar.css'

// class Navbar extends Component {
//     state = { clicked: false }

//     handleClick = () => {
//         this.setState({ clicked: !this.state.clicked })
//     }

//     render() {
//         return(
//             <nav className="NavbarItems">
//                 <img className='navbar-logo'></img>
//                 <div className="menu-icon" onClick={this.handleClick}>
//                     <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
//                 </div>
//                 <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
//                     {MenuItems.map((item, index) => {
//                         return (
//                             <li key={index}>
//                                 <a className={item.cName} href={item.url}>
//                                 {item.title}
//                                 </a>
//                             </li>
//                         )
//                     })}
//                 </ul>
//                 <Button>Sign Up</Button>
//             </nav>
//         )
//     }
// }

// export default Navbar 
