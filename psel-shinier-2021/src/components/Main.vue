<template>
  <div class="hero has-background-black is-fullheight">
    <!-- Top bar starts -->
    <nav class="hero-head is-flex is-align-items-center mx-2 mt-2">
      <div class="tile is-parent is-2">
        <img src="../assets/Logo_analytics.png" alt="Logo da Analytics" />
      </div>

      <div class="tile is-parent is-10">
        <b-field>
          <b-input
            placeholder="Buscar Funcionalidades"
            type="search"
            icon="magnify"
          >
          </b-input>
        </b-field>

        <p class="has-text-white mr-6 mt-2">Super Admin</p>
      </div>
    </nav>
    <!-- Top bar ends -->

    <!-- Middle bar starts -->
    <section class="title is-flex mx-2">
      <div class="tile is-parent is-2"></div>

      <div class="tile is-parent is-10">
        <article class="tile is-child has-background-dark has-text-white">
          <p>dasdsadasdas</p>
        </article>
      </div>
    </section>
    <!-- Middle bar ends -->

    <!-- Bottom bar starts-->
    <main class="tile mx-2 mb-2">
      <div class="tile is-parent is-2">
        <article class="tile is-child has-background-dark has-text-white">
          <p>adssdaasda</p>
        </article>
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
</style>