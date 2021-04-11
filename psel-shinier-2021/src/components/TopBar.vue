<template>
  <!-- Top bar starts -->
  <nav class="hero-head is-flex is-align-items-center mx-2 mt-2">
    <div class="tile is-parent is-2">
      <img src="../assets/Logo_analytics.png" alt="Logo da Analytics" />
    </div>

    <div class="tile is-parent is-10 is-flex is-justify-content-space-between">
      <b-field>
        <b-input
          placeholder="Buscar Funcionalidade"
          type="search"
          icon-pack="fas"
          icon="search"
          class="searchBar"
          style="background-color: black"
        >
        </b-input>
      </b-field>

      <div class="is-flex is-justify-content-center mr-6">
        <span class="box"></span>
        <div>
          <p class="has-text-white ml-5 is-size-6">Super Admin</p>
          <p class="has-text-white ml-5 is-size-7">Super Admin</p>
        </div>
      </div>
    </div>
  </nav>
  <!-- Top bar ends -->
</template>

<script>
export default {
  name: "TopBar",
  props: {},
};
</script>

<style scoped>
@import "../styles/topBar.css";
</style>