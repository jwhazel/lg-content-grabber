<template>
  <div class="lg-status-container">
    <div class="lg-status">{{status}}</div>
    <pre class="lg-status-debug">{{debug}}</pre>
  </div>
</template>

<script>
export default {
  name: "Status",
  props: ["status", "debug"]
};
</script>

<style scoped>
.lg-status {
  text-align: center;
}

.lg-status-debug {
  display: block;
  max-width: 50%;
  margin: 0 auto;
  font-family: monospace;
  background-color: #eee;
  padding: 1.5em;
  text-align: left;
  color: #333;
}
</style>