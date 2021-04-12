<template>
  <div class="hero has-background-black is-fullheight">
    <TopBar />
    <MiddleBar
      msg="Grupos com acesso a plataforma"
      msgButton="Salvar"
      link="/"
    />
    <BottomCreate />
  </div>
</template>

<script>
import TopBar from "../components/TopBar.vue";
import MiddleBar from "../components/MiddleBar.vue";
import BottomCreate from "../components/BottomCreate.vue";

export default {
  name: "CreateGroup",
  props: {},
  components: {
    TopBar,
    MiddleBar,
    BottomCreate,
  },
};
</script>