<template>
  <div class="lg-app-container">
    <div class="lg-app">
      <TitleBar :appTitle="appTitle" />
      <Status v-if="!loadSuccessful" :status="status" :debug="debug" />
      <div v-if="loadSuccessful">
        <Meta :articleData="articleData"/>
      </div>
    </div>
  </div>
</template>

<script>
import TitleBar from "./components/TitleBar.vue";
import Status from "./components/Status.vue";
import Meta from "./components/Meta.vue";

import getData from "./lib/get-article-data.js";

export default {
  name: "App",
  components: {
    TitleBar,
    Status,
    Meta
  },
  computed: {
    article() {
      return this.articleData.article.body
        .filter(n => n.type === "text")
        .map(n => n.value);
    },
    
    parsedArticleRaw() {
      return this.article
        .map(n => n.replace(/<li>/g, "• "))
        .map(
          n =>
            new DOMParser().parseFromString(n, "text/html").body.textContent ||
            ""
        )
        .map(n => n.trim())
        .join("\n\n");
    }
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
    getData().then(res => {
      this.articleData = res.data;
      this.loadSuccessful = true;
    });
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
  text-align: center;
  max-width: 80%;
  width: 100%;
  background-color: #fff;
  padding: 0.1em 2em 2em 2em;
  margin: 0 auto;
}
</style>
