<template>
  <div class="siteHeader">
    <ul>
      <router-link to="/">
        <h1>~/&nbsp;</h1>
        <h1>nevin&nbsp;</h1>
        <h1>valsaraj</h1>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.siteHeader {
  width: 100%;
  background: lightseagreen;
  background: linear-gradient(
    42deg,
    rgba(32, 223, 154, 1) 0%,
    rgba(32, 178, 170, 1) 100%
  );
  min-height: 25rem;
  display: grid;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}
.siteHeader a {
  text-decoration: none;
  color: #333;
  display: flex;
  flex-direction: row;
}
.siteHeader ul {
  padding: 0 0;
}
.siteHeader ul h1 {
  margin: 0 0;
  font-size: 7rem;
}

@media only screen and (max-width: 600px) {
  .siteHeader a {
    flex-direction: column;
  }
  .siteHeader ul h1 {
    font-size: 4rem;
  }
}
</style>
