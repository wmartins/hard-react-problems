import React from 'react';

import backend from '../news-backend';
import NewsItem from './news-item.jsx';

class News extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            news: []
        };
    }

    componentDidMount() {
        backend.list().then(news => {
            this.setState({
                isLoading: false,
                news: news
            });
        });
    }

    render() {
        return  (
            <div>
                {this.state.isLoading ?
                    'Loading...' : null}
                {this.state.news.map(news => {
                    return (
                        <NewsItem
                            key={news.id}
                            {...news} />
                    );
                })}
                <hr />
                {this.props.children}
            </div>
        );
    }
}

export default News;
