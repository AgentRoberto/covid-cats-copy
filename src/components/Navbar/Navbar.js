import React, {Component}  from 'react'
import { MenuItems } from './MenuItems'
import './Navbar.css'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render () {
        return (
            <nav className='NavbarItems'>
                
                <ul className='nav-menu'>
                <span class="logo-type">CovidCatRescue</span>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.url} className={item.cName} >
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar
