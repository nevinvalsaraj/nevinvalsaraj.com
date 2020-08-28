<template>
  <Header />
  <div class="home">
    <div class="nav">
      <router-link to="/about">about</router-link>
      <router-link to="/projects">projects</router-link>
      <a href="https://github.com/nevinvalsaraj" target="_blank" rel="noreferrer">github</a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>

<style scoped>
.nav {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nav a {
  font-size: 2.8rem;
  font-weight: 600;
  margin: 1rem 1rem;
  color: #333;
}
</style>
