<template>
  <div id="app">
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

select{
  background: #171819 !important;
  border: none !important;
  color: #9ea7ac !important;
}

input {
  background: #171819 !important;
  border: none !important;
  color: #9ea7ac !important;
}
</style>
