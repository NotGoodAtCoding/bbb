import React from 'react';

import { Dropdown } from './dropdown.jsx';
import { MenuItem } from './menu_item.jsx';

// Simple Navbar. Has a simple brand header, a link sample,
// and renders a dropdown component.

export class Navbar extends React.Component {
    _handleClick(){
        console.log('ahhh')
    }

    render() {
        return <div className="Navbar">
            <span className="brand"><h2>BBB</h2></span>
            <span ><a className="navbar-link" href="#"><h3>Link</h3></a></span>
            < Dropdown items={[
                <MenuItem title="rah" key="1" onClick={this._handleClick}/>,
                <MenuItem title="rah" key="2" />,
                <MenuItem title="rasputin" key="3" />
                ]}/>
        </div>
    }
}
