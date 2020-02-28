# lg-content-grabber
This is a private repo for an internal tool that allows extraction of legacy Gannett article content. The widget runs as a bookmarklet that can be invoked on any legacy Gannett website including USAT.

You don't have to do anything to make this work. Simply copy `bookmarklet.js` out of the /dist folder and paste the code into a bookmark.

## Project setup and development
There are multiple components to this project. The core bookmark component is written in VueJS. That component is then extracted and injected into a new component that that dynamically attaches it to a webpage.

### REQUIRED - Initial Setup
```
npm install
```

### DEV - Mock server
This sets up the mock server that provides a dummy JSON response to test the article data on. Only required if you are developing on the core Vue component.
```
npm run mock
```

### DEV - Compiles and hot-reloads Vue component
```
npm run serve
```

### BUILD - Compiles the core Vue component, compiles the widget code, modifies

```
npm run final
```


## TODO
Need to fix build targets for the second stage. It appears Vue CLI can't dump a working self executing module by itself.