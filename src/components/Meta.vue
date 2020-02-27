<template>
  <table class="lg-grabber-table">
    <tbody>
      <tr>
        <td>Headline</td>
        <td>{{parsedHeadline}}</td>
      </tr>
      <tr>
        <td>Seo Head</td>
        <td>{{parsedSeoHeadline}}</td>
      </tr>
      <tr>
        <td>Byline</td>
        <td>${parsed.byline}</td>
      </tr>
      <tr>
        <td>Social Desc</td>
        <td>${parsed.description}</td>
      </tr>
      <tr>
        <td>Social Img</td>
        <td>
          <a href="${parsed.socialImage}" target="_blank">${parsed.socialImage}</a>
        </td>
      </tr>
      <tr>
        <td>Origin</td>
        <td>${parsed.origin}</td>
      </tr>
      <tr>
        <td>Word Count</td>
        <td>${parsed.story.wordCount}</td>
      </tr>
      <tr>
        <td>Publish Date</td>
        <td>${parsed.published}</td>
      </tr>
      <tr>
        <td>Last Update</td>
        <td>${parsed.modified}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Meta",
  props: ['articleData'],
  computed: {
    parsedHeadline() {
      return this.articleData.article.metadata.headline;
    },
    parsedSeoHeadline() {
      return this.articleData.metadata.seotitle;
    }
  }
};
</script>

<style scoped>
</style>