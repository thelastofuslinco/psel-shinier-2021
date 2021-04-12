<template>
  <div class="hero has-background-black is-fullheight">
    <TopBar />
    <MiddleBar msg="Grupos com acesso a plataforma" msgButton="Novo Grupo" />
    <div>cedadsadsa</div>
    <BottomBar />
  </div>
</template>

<script>
import TopBar from "../components/TopBar.vue";
import MiddleBar from "../components/MiddleBar.vue";
import BottomBar from "../components/BottomBar.vue";

export default {
  name: "CreateGroup",
  props: {},
  components: {
    TopBar,
    MiddleBar,
    BottomBar,
  },
};
</script>