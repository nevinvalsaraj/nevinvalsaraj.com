<template>
  <div class="projectHeader">
    <div class="headerText">
      <h1 v-for="word in projectName" :key="word">{{ word }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectHeader",
  props: {
    route: String,
    name: String,
  },
  computed: {
    projectName: function () {
      return this.name.split(" ");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.projectHeader {
  width: 100%;
  background: lightseagreen;
  background: linear-gradient(
    42deg,
    rgba(32, 223, 154, 1) 0%,
    rgb(32, 178, 142) 100%
  );
  min-height: 10rem;
  display: grid;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  padding: 20px;
}
.projectHeader .headerText {
  display: flex;
}
.projectHeader h1 {
  margin: 0 0;
  font-size: 4rem;
  color: #333;
}

@media only screen and (max-width: 600px) {
  .projectHeader h1 {
    font-size: 3rem;
  }
  .projectHeader .headerText {
    width: 80%;
    flex-direction: column;
  }
}
</style>
