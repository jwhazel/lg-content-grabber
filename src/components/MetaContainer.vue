<template>
  <div>
    <h4>META</h4>
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
          <td>{{parsedByline}}</td>
        </tr>
        <tr>
          <td>Social Desc</td>
          <td>{{parsedSocialDescription}}</td>
        </tr>
        <tr>
          <td>Social Img</td>
          <td>
            <a :href="parsedSocialImage" target="_blank">{{parsedSocialImage}}</a>
          </td>
        </tr>
        <tr>
          <td>Origin</td>
          <td>{{parsedOrigin}}</td>
        </tr>
        <tr>
          <td>Word Count</td>
          <td>{{parsedWordCount}}</td>
        </tr>
        <tr>
          <td>Publish Date</td>
          <td>{{parsedPublishDate}}</td>
        </tr>
        <tr>
          <td>Last Update</td>
          <td>{{parsedModifiedDate}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "MetaContainer",
  props: ["articleData"],
  computed: {
    parsedHeadline() {
      return this.articleData.article.metadata.headline;
    },
    parsedSeoHeadline() {
      return this.articleData.metadata.seotitle;
    },
    parsedByline() {
      return this.articleData.metadata.byline;
    },
    parsedSocialDescription() {
      return this.articleData.metadata.description;
    },
    parsedSocialImage() {
      let og = document.querySelector("meta[property='og:image']");
      if (og) og = og.getAttribute("content");
      return og;
    },
    parsedOrigin() {
      return this.articleData.metadata.origin;
    },
    parsedWordCount() {
      return this.articleData.article.body
        .filter(n => n.type === "text")
        .reduce((acc, cur) => acc + cur.word_count, 0);
    },
    parsedPublishDate() {
      return this.formatDate(this.articleData.article.metadata.dates.published);
    },
    parsedModifiedDate() {
      return this.formatDate(
        this.articleData.article.metadata.dates.lastupdated
      );
    }
  },
  methods: {
    formatDate(str) {
      let d = new Date(str);
      let h = d.getHours() < 13 ? d.getHours() : d.getHours() - 12;
      let m = d.getMinutes() >= 10 ? d.getMinutes() : "0" + d.getMinutes();
      let ampm = d.getHours() < 13 ? "am" : "pm";
      return `${d.getMonth() +
        1}/${d.getDate()}/${d.getFullYear()} @ ${h}:${m}${ampm}`;
    }
  }
};
</script>

<style scoped>
table {
  font-size: 14px;
}

.lg-grabber-table td:first-child {
  vertical-align: top;
  font-weight: bold;
  vertical-align: top;
  font-weight: bold;
  width: 100px;
  text-transform: uppercase;
  color: #777;
  font-size: 12px;
}

h4 {
  margin-top: 0;
  font-family: "Unify Sans Bold", Helvetica, sans-serif;
  color: #2196f3;
}
</style>