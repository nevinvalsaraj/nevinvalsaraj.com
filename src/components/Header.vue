<template>
  <div class="siteHeader">
    <ul>
      <h1>~/&nbsp;</h1>
      <h1>nevin&nbsp;</h1>
      <h1>valsaraj</h1>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
      return {
          siteName: '~ / nevin valsaraj'
      }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.siteHeader {
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

.siteHeader > ul {
  display: flex;
  flex-direction: row;
  padding: 0 0;
}

.siteHeader > ul > h1 {
  margin: 0 0;
  font-size: 7rem;
}

@media only screen and (max-width: 600px) {
  .siteHeader > ul {
    flex-direction: column;
  }

  .siteHeader > ul > h1 {
    font-size: 4rem;
  }
}

</style>
