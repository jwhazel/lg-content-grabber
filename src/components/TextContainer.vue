<template>
  <div>
    <h4>TEXT</h4>
    <textarea :value="text"></textarea>
  </div>
</template>

<script>
export default {
  name: "TextContainer",
  props: ["articleData"],
  computed: {
    article() {
      return this.articleData.article.body
        .filter(n => n.type === "text")
        .map(n => n.value);
    },
    parsedArticleRaw() {
      let parser = new DOMParser();
      return this.article
        .map(n => n.replace(/<li>/g, "• "))
        .map(n => parser.parseFromString(n, "text/html").body.textContent || "")
        .map(n => n.trim())
        .join("\n\n");
    }
  }
};
</script>

<style scoped>
</style>