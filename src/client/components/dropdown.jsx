import React from 'react';

// Simple dropdown component. On click, renders a menu of 
// lyrics to the rasputin song. Static, should be updated to 
// take in a variable menu element.

export class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

     renderMenu() {
         if (this.state.isToggleOn) {
             return <div className="Dropdown-menu">
                 <div>RAH RAH</div>
                 <div>RASPUTIN</div>
                 <div>LOVER OF THE RUSSIAN QUEEN</div>
             </div>
         }
     }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return <span className="Dropdown">
            <button className="Dropdown-button"
                    onClick={this.handleClick}>
                <h3>Drop it!</h3>
            </button>
            { this.renderMenu() }
        </span>
    }
}
