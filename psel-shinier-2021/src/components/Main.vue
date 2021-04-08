<template>
  <div class="hero has-background-black is-fullheight">
    <!-- Top bar starts -->
    <nav class="hero-head is-flex is-align-items-center mx-2 mt-2">
      <div class="tile is-parent is-2">
        <img src="../assets/Logo_analytics.png" alt="Logo da Analytics" />
      </div>

      <div
        class="tile is-parent is-10 is-flex is-justify-content-space-between"
      >
        <b-field>
          <b-input
            placeholder="Buscar Funcionalidade"
            type="search"
            icon="magnify"
            class="searchBar has-background-dark"
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

    <!-- Middle bar starts -->
    <section class="title is-flex mx-2">
      <div class="tile is-parent is-2"></div>

      <div class="tile is-parent is-10">
        <article class="tile is-child has-text-white">
          <p>Grupos com acesso a plataforma</p>
        </article>

        <b-button type="is-success" class="is-size-6">Novo Grupo</b-button>
      </div>
    </section>
    <!-- Middle bar ends -->

    <!-- Bottom bar starts-->
    <main class="tile mx-2 mb-2">
      <div class="tile is-parent is-2">
        <article
          class="tile is-child has-background-dark has-text-white"
        ></article>
      </div>

      <div class="tile is-parent is-10">
        <article class="tile is-child has-background-dark has-text-white">
          <p>dasdsadasdas</p>
        </article>
      </div>
    </main>
    <!-- Bottom bar ends-->
  </div>
</template>

<script>
export default {
  name: "Main",
  props: {},
};
</script>

<style>
::-webkit-scrollbar {
  display: none;
}

.searchBar {
  width: 30.625rem;
  height: 2.5rem;
}

.box {
  width: 2.5rem;
  height: 2.5rem;
}
</style>