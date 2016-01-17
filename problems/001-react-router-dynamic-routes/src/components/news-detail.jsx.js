import React from 'react';

import backend from '../news-backend';

class NewsDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            news: null
        };
    }

    componentWillMount() {
        this.loadNews = this.loadNews.bind(this);
    }

    loadNews(id) {
        this.setState({
            isLoading: true
        });

        backend.detail(id).then(news => {
            this.setState({
                isLoading: false,
                news: news
            });
        });
    }

    componentDidMount() {
        const id = this.props.params.id;

        this.loadNews(id);
    }

    componentWillUpdate(nextProps) {
        if(nextProps.params.id !== this.props.params.id) {
            this.loadNews(nextProps.params.id);
        }
    }

    renderNews() {
        if(this.state.isLoading) {
            return null;
        }

        return (
            <div>
                <h2>{this.state.news.title}</h2>
                <div>{this.state.news.details}</div>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.state.isLoading ?
                    'Loading...' : null}
                {this.renderNews()}
            </div>
        );
    }
}

export default NewsDetail;
