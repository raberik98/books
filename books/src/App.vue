<template>
  <div id="nav" class="container">
    <div class="banner"></div>
    <router-link to="/">Home</router-link> |
    <router-link to="/tablazat">Tablázat</router-link> |
    <router-link to="/tablazat2">Tablázat2</router-link> |
    <router-link to="/tablazat3">Tablázat3</router-link> |
    <router-link to="/ujkonyv">Új könyv</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <div class="container">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  /* padding: 30px; */
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
