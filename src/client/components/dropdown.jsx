import React from 'react';

// Simple dropdown component.
// Pass in a list of options from which to select via the 'items' prop

export class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};

        // This binding is necessary to make `this` work in the callback
        this.toggle = this.toggle.bind(this);
        this.off = this.off.bind(this);
        this.renderMenuItems = this.renderMenuItems.bind(this);
    }

     renderMenuItems() {
         if (this.state.open) {
             return <div className="Dropdown-menu">
                 { this.props.items }
                 </div>
         }
     }

    toggle() {
        this.setState(prevState => ({
            open: !prevState.open
        }));
    }

    off() {
        this.setState(prevState => ({
            open: false
        }));
    }

    render() {
        return <span className="Dropdown">
            <button className="Dropdown-button"
                    onClick={this.toggle}>
                <h3>Drop it!</h3>
            </button>
            { this.renderMenuItems() }
        </span>
    }
}
