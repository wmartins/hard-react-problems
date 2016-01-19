# Dynamic Nested Routes

[http://wmartins.github.io/hard-react-problems/problems/001-react-router-dynamic-routes/dist/#/news/news-1](DEMO)

When using AJAX to load dynamic content, it's a good idea to add a permanent
link (or something like that) to associate with this content. React-router
provides us a complete route solution, but it's not an easy thing to load
dynamic content in nested routes.

For example, imagine that we have a news listing, and we want to click on a
news item and load it's details.

To achieve that, we just need to have a nested route handler and handle the
details rendering (that will make the second AJAX request).
