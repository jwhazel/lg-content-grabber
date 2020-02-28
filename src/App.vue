<template>
  <div class="lg-app-container">
    <div class="lg-app">
      <TitleBar :appTitle="appTitle" @closeApp="closeApp"/>
      <Status v-if="!loadSuccessful" :status="status" :debug="debug" />
      <div v-if="loadSuccessful" class="lg-content-container">
        <MetaContainer :articleData="articleData" class="lg-content-column" />
        <TextContainer :articleData="articleData" class="lg-content-column" />
      </div>
    </div>
  </div>
</template>

<script>
import TitleBar from "./components/TitleBar.vue";
import Status from "./components/Status.vue";
import MetaContainer from "./components/MetaContainer.vue";
import TextContainer from "./components/TextContainer.vue";

import getData from "./lib/get-article-data.js";

export default {
  name: "App",
  components: {
    TitleBar,
    Status,
    MetaContainer,
    TextContainer
  },
  data() {
    return {
      appTitle: "⚙️ Legacy Gannett Content Grabber",
      status: "Loading...",
      debug: null,
      loadSuccessful: false,
      articleData: null
    };
  },
  mounted() {
    getData()
      .then(res => {
        this.articleData = res.data;
        this.loadSuccessful = true;
      })
      .catch(res => {
        this.status = res.errorType;
        this.debug = res.errorMsg;
      });
  },
  methods: {
    closeApp: function() {
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    }
  }
};
</script>

<style scoped>
.lg-app-container {
  background-color: rgba(0, 0, 0, 0.65);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999999999;
}
.lg-app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 80%;
  height: 80vh;
  width: 100%;
  background-color: #fff;
  padding: 0.1em 2em 2em 2em;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.lg-content-container {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
}

.lg-content-column {
  flex: 1;
  padding: 1em;
  border-right: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  flex-basis:50%;
}

.lg-content-column:last-child {
  border-right: none;
}
</style>
