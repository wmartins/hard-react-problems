import React from 'react';

class Level4 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container p2 border">
                Level 4
                <div>Name: {this.context.name}</div>
            </div>
        );
    }
}

Level4.contextTypes = {
    name: React.PropTypes.string
};

export default Level4;
