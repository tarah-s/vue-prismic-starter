# vue-prismic-starter
Ready-made starting point for [Vue.js](https://vuejs.org) and [Prismic](https://prismic.io) blog 
using modal with custom router url.
Before we begin, you will need to create a custom type called article 
in your new project in Prismic [here](https://prismic.io/)

## Creating Custom Types to Prismic

in ./custom_types folder you can copy the article.json to 
your custom type called article in the Prismic Dashboard.
This is a pre-configured file to get you up and running fast.
You are now able to create prismic content using the article template.


## Adding endpoint to index.html
Replace the prismic endpoint in ./public/index.html to your newly created articles
```
    window.prismic = {
        endpoint: '[YOUR_PRISMIC_ENDPOINT]'
    }
```

## Project setup
``` bash
npm install
```

### Compiles and hot-reloads for development
``` bash
npm run serve
```

### Compiles and minifies for production
``` bash
npm run build
```

### Lints and fixes files
``` bash
npm run lint
```