import React from 'react';

import { Dropdown } from './dropdown.jsx';

// Simple Navbar. Has a simple brand header, a link sample,
// and renders a dropdown component.

export class Navbar extends React.Component {
    render() {
        return <div className="Navbar">
            <span className="brand"><h2>BBB</h2></span>
            <span ><a className="navbar-link" href="#"><h3>Link</h3></a></span>
            < Dropdown />
        </div>
    }
}
