<template>
  <div class="lg-title-container">
    <h3>{{appTitle}}</h3>
    <button class="lg-close">×</button>
  </div>
</template>

<script>
export default {
  name: "TitleBar",
  props: ["appTitle"]
};
</script>

<style scoped>
.lg-title-container {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
}

.lg-close {
  background-color: transparent;
  border: none;
  font-size: 26px;
  cursor: pointer;
}

.lg-close:hover {
  font-weight: bold;
}
</style>