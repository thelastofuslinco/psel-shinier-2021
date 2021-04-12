<template>
  <div id="app">
    <router-link to="/">Home</router-link> |
    <router-link to="/CreateGroup">group</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
::-webkit-scrollbar {
  display: none;
}

::placeholder {
  color: #9ea7ac !important;
}

input {
  background: #171819 !important;
  border: none !important;
}
</style>
