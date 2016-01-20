import React from 'react';
import Level3 from './level-3.jsx';

class Level2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container p2 border">
                Level 2
                <div>Name: {this.context.name}</div>
                <Level3 />
            </div>
        );
    }
}

Level2.contextTypes = {
    name: React.PropTypes.string
};

export default Level2;
