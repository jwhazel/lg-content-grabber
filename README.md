> Archive notes: a useful little tool used by several former colleagues during the Gannett/Gatehouse merger. Their platform has since evolved and none of this works anymore. Leaving up for posterity since it is a semi-decent workflow for turning a Vue app into a bookmarklet.

# lg-content-grabber

This is a private repo for an internal tool that allows extraction of legacy Gannett article content. The widget runs as a bookmarklet that can be invoked on any legacy Gannett website including USAT.

You don't have to do anything to make this work. Simply copy `dist/bookmarklet.js` and paste the code into a bookmark.

## If you wish to develop on this:

### Initial Setup
* Install all dependencies
```
npm install
```

### Devlopment

- Runs the mock json server in the background
- Runs a HMR server in the foreground that lets you develop the core component and live reload changes

```
npm run serve
```

### BUILD

- Compiles the core Vue component as a UMD library
- Injects that library into a self executing wrapper script (wrapper/bookmarklet.js)
- Compiles the wrapper script with Vue dependencies
- Prepends it with `javascript:` to make ready for copying into a bookmarklet

```
npm run build
```

## TODO
* Scrape media assets 
