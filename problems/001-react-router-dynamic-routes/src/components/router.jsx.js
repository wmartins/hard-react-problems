import React from 'react';
import {
    Router,
    Route,
    Link,
    browserHistory
} from 'react-router';

import Main from './main.jsx';
import About from './about.jsx';
import News from './news.jsx';
import NewsDetail from './news-detail.jsx';

export default () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <Route path="about" component={About} />
                <Route path="news" component={News}>
                    <Route
                        path=":id"
                        component={NewsDetail} />
                </Route>
            </Route>
        </Router>
    );
}
