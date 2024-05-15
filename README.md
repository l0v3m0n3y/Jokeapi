# Jokeapi
JavaScript library for official-joke-api.appspot.com
# main
```js
const {jokeapi} = require('./jokeapi');

const joke = new jokeapi();
joke.random_joke().then(jokes => {
    console.log(jokes);
}).catch(error => {
    console.error('Error:', error);
});

```
