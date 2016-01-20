import React from 'react';
import Level2 from './level-2.jsx';

class Level1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container p2 border">
                Level 1
                <div>Name: {this.context.name}</div>
                <Level2 />
            </div>
        );
    }
}

Level1.contextTypes = {
    name: React.PropTypes.string
};

export default Level1;
