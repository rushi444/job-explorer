import React, { Component } from 'react'
import telescope from '../assets/telescope.jpg'

export class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                <h1 id='navbarTitle'>Job Explorer <img src={telescope} alt='telescope' /> </h1>
            </div>
        )
    }
}

export default Navbar
