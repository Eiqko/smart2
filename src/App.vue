<template>
  <div id="app">
    <div class="nav-bar"></div>
     <div class="container">
       <List/>
     </div>
  </div>
</template>

<script>
import List from './components/List.vue'


export default {
  name: 'App',
  components: {
    List
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
  margin: 0px;

}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
.nav-bar {
  background: linear-gradient(-90deg, rgb(29, 4, 4), rgb(209, 47, 109));
  height: 60px;
}
</style>
