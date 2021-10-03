<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
#nav {
  @apply p-8 shadow-md flex gap-4 justify-center mb-4;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #000000;
      @apply text-green-500
    }
  }
}
</style>