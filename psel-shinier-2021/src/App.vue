<template>
  <div id="app" class="hero has-background-black is-fullheight">
    <TopBar />
    <button v-on:click="created">Toggle</button>
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
  methods: {
    created() {
      BottomBar.methods.toggle();
    },
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

input {
  background: #171819 !important;
  border: none !important;
}
</style>
