const fs = require("fs");

/**
 * Simple script to prepend 'javascript:' onto a file to make it work as a bookmarklet
 */
let bookmarklet =
  "javascript:" + fs.readFileSync("dist/bookmarklet.js", "utf8");
fs.writeFileSync("dist/bookmarklet.js", bookmarklet);
