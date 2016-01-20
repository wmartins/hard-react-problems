import React from 'react';
import Level1 from './level-1.jsx';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'William Martins'
        };
    }

    componentWillMount() {
        this.onChangeName = this.onChangeName.bind(this);
    }

    getChildContext() {
        return {
            name: this.state.name
        };
    }

    onChangeName(e) {
        this.setState({
            name: e.nativeEvent.target.value
        });
    }

    render() {
        return (
            <div>
                <div className="container">
                    Name:
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.onChangeName} />
                </div>
                <Level1 />
            </div>
        );
    }
}

Main.childContextTypes = {
    name: React.PropTypes.string
};

export default Main;
