import React from 'react';

import { Link } from 'react-router';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const linkClasses = [
            'inline-block', 'p2', 'aqua'
        ].join(' ');

        return  (
            <div className="bg-black">
                <div className="container px1">
                    <div className="mxn2">
                        <Link
                            to="/"
                            className={linkClasses}>Home</Link>
                        <Link
                            to="about"
                            className={linkClasses}>About</Link>
                        <Link
                            to="news"
                            className={linkClasses}>News</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
