<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
// @ is an alias to /src
@import "@/styles/mixin.scss";

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
