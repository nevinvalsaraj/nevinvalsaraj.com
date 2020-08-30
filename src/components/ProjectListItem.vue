<template>
  <div class="projectListItem">
    <h2>{{title}}</h2>
    <h4>{{subtitle}}</h4>
    <p>{{description}}</p>
    <p v-for="link in links" :key="link.title">
      <a href="link.target" target="_blank" rel="noreferrer">{{link.title}}</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "ProjectListItem",
  props: {
    title: String,
    subtitle: String,
    description: String,
    links: Array,
  },
};
</script>

<style scoped>
.projectListItem {
  font-weight: 400;
  color: #333;
  font-size: 1.2rem;
  line-height: 1.4;
}
.projectListItem * {
  margin: 25px 0;
}
.projectListItem a {
  color: #333;
}

@media only screen and (max-width: 600px) {
  .projectListItem {
    font-size: 0.9rem;
  }
  .projectListItem * {
    margin: 10px 0;
  }
}
</style>
