import React from 'react';

// MenuItem component for use in dropdown menus.

export class MenuItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div
            className='MenuItem'
            key={this.props.key_name}
            onClick={this.props.onClick}>
            { this.props.title }
        </div>
    }
}

MenuItem.propTypes = {
    title: React.PropTypes.string,
    onClick: React.PropTypes.func
};
