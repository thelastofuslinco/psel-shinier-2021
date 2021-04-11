<template>
  <div id="app" class="hero has-background-black is-fullheight">
    <TopBar />
    <MiddleBar msg="Grupos com acesso a plataforma" msgButton="Novo Grupo" />
    <BottomBar />
  </div>
</template>

<script>
import TopBar from "./components/TopBar.vue";
import MiddleBar from "./components/MiddleBar.vue";
import BottomBar from "./components/BottomBar.vue";

export default {
  name: "App",
  props: {},
  components: {
    TopBar,
    MiddleBar,
    BottomBar,
  },
};
</script>

<style>
::-webkit-scrollbar {
  display: none;
}

::placeholder {
  color: #9ea7ac !important;
}
</style>
