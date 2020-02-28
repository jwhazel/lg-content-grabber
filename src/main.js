import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//Dynamically append an entry point to the current page
let appContainer = document.createElement("DIV");
appContainer.setAttribute("id", "lg-content-grabber-container");
document.body.appendChild(appContainer);

//Render the vue component
new Vue({
  render: h => h(App),
}).$mount('#lg-content-grabber-container')
