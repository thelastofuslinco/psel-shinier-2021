<template>
  <div id="app" class="hero has-background-black is-fullheight">
    <TopBar />
    <div>
      <component v-bind:is="component" />
      <button v-on:click="toggle">Toggle</button>
    </div>
    <MiddleBar
      msg="Grupos com acesso a plataforma"
      msgButton="Novo Grupo"
      v-on:click="toggle"
    />
    <BottomBarList />
  </div>
</template>

<script>
import TopBar from "./components/TopBar.vue";
import MiddleBar from "./components/MiddleBar.vue";
import BottomBarList from "./components/BottomBarList.vue";

export default {
  name: "App",
  props: {},
  components: {
    TopBar,
    MiddleBar,
    BottomBarList,
  },
  data() {
    return {
      component: "MiddleBar",
    };
  },
  methods: {
    toggle() {
      if (this.component === TopBar) {
        console.log(this.component);
        this.component = MiddleBar;
      } else {
        console.log(this.component);
        this.component = TopBar;
      }
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
