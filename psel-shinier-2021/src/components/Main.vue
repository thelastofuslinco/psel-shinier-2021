<template>
  <div class="hero has-background-black is-fullheight">
    <!-- Top bar starts -->
    <div class="hero-head is-flex is-align-items-center mx-4 mt-2">
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
    </div>
    <!-- Top bar ends -->

    <div class="tile mx-4 mb-2">
      <div class="tile is-parent is-2">
        <article class="tile is-child notification is-success">
          <div class="content">
            <p class="title">Tall tile</p>
            <p class="subtitle">With even more content</p>
            <div class="content">
              <!-- Content -->
            </div>
          </div>
        </article>
      </div>

      <div class="tile is-parent is-10">
        <article class="tile is-child notification is-success">
          <div class="content">
            <p class="title">Tall tile</p>
            <p class="subtitle">With even more content</p>
            <div class="content">
              <!-- Content -->
            </div>
          </div>
        </article>
      </div>
    </div>
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