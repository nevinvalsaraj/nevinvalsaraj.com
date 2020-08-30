<template>
  <div class="projectHeader">
    <ul>
      <router-link to="route" v-for="word in projectName" :key="word">
        <h1>{{ word }}</h1>
      </router-link>
    </ul>
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
    rgba(32, 178, 170, 1) 100%
  );
  min-height: 10rem;
  display: grid;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}
.projectHeader a {
  text-decoration: none;
  color: #333;
}
.projectHeader ul {
  padding: 0 0;
  display: flex;
  flex-direction: row;
}
.projectHeader ul h1 {
  margin: 0 0;
  font-size: 4rem;
}

@media only screen and (max-width: 600px) {
  .projectHeader ul {
    flex-direction: column;
  }
  .projectHeader ul h1 {
    font-size: 3rem;
  }
}
</style>
