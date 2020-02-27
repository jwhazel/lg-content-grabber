import Vue from "vue";
import App from "../dist/lg-content-grabber.umd.js";

(() => {
  //Append an entry point to the current page
  let appContainer = document.createElement("DIV");
  appContainer.setAttribute("id", "lg-grabber-container");
  document.body.appendChild(appContainer);

  //Render the vue component
  new Vue({
    render: h => h(App)
  }).$mount("#lg-grabber-container");
})();
