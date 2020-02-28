<template>
  <div>
    <h4>TEXT</h4>
    <div>
      <input type="radio" name="lg-text-type" value="raw" v-model="textType" checked /> Raw
      <input type="radio" name="lg-text-type" value="html" v-model="textType" /> HTML
      <input type="radio" name="lg-text-type" value="original" v-model="textType" /> Original
      <button @click="copyText" class="lg-copy-button">{{copyButtonText}}</button>
    </div>
    <textarea id="lg-text-container" :value="getText"></textarea>
  </div>
</template>

<script>
export default {
  name: "TextContainer",
  props: ["articleData"],
  data() {
    return {
      copyButtonText: "copy",
      textType: "raw"
    };
  },
  computed: {
    getText() {
      if (this.textType === "raw") {
        return this.parsedArticleRaw;
      } else if (this.textType === "html") {
        return this.parsedArticleHtml;
      } else {
        return this.parsedArticleOriginal;
      }
    },
    parsedArticle() {
      return this.articleData.article.body
        .filter(n => n.type === "text")
        .map(n => n.value);
    },
    parsedArticleRaw() {
      let parser = new DOMParser();
      return this.parsedArticle
        .map(n => n.replace(/<li>/g, "• "))
        .map(n => parser.parseFromString(n, "text/html").body.textContent || "")
        .map(n => n.trim())
        .join("\n\n");
    },
    parsedArticleHtml() {
      let parser = new DOMParser();
      return this.parsedArticle
        .map(n => {
          let newNode = parser.parseFromString(n, "text/html").body;
          this.traverseDOM(newNode, function(element) {
            if (element.removeAttribute) {
              for (var i = element.attributes.length; i-- > 0; )
                if (element.attributes[i].name !== "href") {
                  element.removeAttribute(element.attributes[i].name);
                }
            }
          });
          return newNode.innerHTML;
        })
        .map(n => n.replace(/&nbsp;/g, " "))
        .map(n => n.trim())
        .join("\n\n");
    },
    parsedArticleOriginal() {
      return this.parsedArticle.join("\n\n");
    }
  },
  methods: {
    copyText: function() {
      let textarea = document.querySelector("#lg-text-container");
      textarea.select();
      document.execCommand("copy");
      this.copyButtonText = "copied";
      textarea.blur();
      setTimeout(
        function() {
          this.copyButtonText = "copy";
        }.bind(this),
        1000
      );
    },
    traverseDOM: function(node, func) {
      func(node);
      node = node.firstChild;
      while (node) {
        this.traverseDOM(node, func);
        node = node.nextSibling;
      }
    }
  }
};
</script>

<style scoped>
#lg-text-container {
  width: 100%;
  font-family: monospace;
  border: 1px solid #ccc;
  border-radius: 3px;
  flex-grow:1;
}
h4 {
  margin-top: 0;
  font-family: "Unify Sans Bold", Helvetica, sans-serif;
  color: #2196f3;
}

.lg-copy-button {
  float: right;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 3px;
}
</style>