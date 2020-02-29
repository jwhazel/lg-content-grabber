import Vue from "vue";
import App from "../vue-dist/bookmarklet.umd.js";

/**
 * This is a wrapper for the second build step to incorporate our component
 * into a self executing javavscript file 
 */

//Append an entry point to the current page
let appContainer = document.createElement("DIV");
appContainer.setAttribute("id", "lg-grabber-container");
document.body.appendChild(appContainer);

//Render the vue component
new Vue({
  render: h => h(App)
}).$mount("#lg-grabber-container");
