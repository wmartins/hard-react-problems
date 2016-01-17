import React from 'react';
import { Link } from 'react-router';

class NewsItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article>
                <h3>
                    <Link to={`news/${this.props.id}`}>
                        {this.props.title}
                    </Link>
                </h3>
            </article>
        );
    }
}

NewsItem.propTypes = {
    id: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired
};

export default NewsItem;
