import React from 'react';
import Level4 from './level-4.jsx';

class Level3 extends React.Component {
    constructor(props) {
        super(props);
    }

    getChildContext() {
        return {
            name: this.context.name + " Lorem Ipsum"
        };
    }

    render() {
        return (
            <div className="container p2 border">
                Level 3 (will append "Lorem Ipsum" to name in context)
                <div>Name: {this.context.name}</div>
                <Level4 />
            </div>
        );
    }
}

// Inherits context types
Level3.contextTypes = {
    name: React.PropTypes.string
};

// And passes it down to children
Level3.childContextTypes = {
    name: React.PropTypes.string
};

export default Level3;
