import React from 'react';
import Header from './header.jsx';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container p1">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Main;
