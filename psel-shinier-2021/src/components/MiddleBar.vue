<template>
  <!-- Middle bar starts -->
  <section class="title is-flex mx-2 mb-0">
    <div class="tile is-parent is-2"></div>

    <div class="tile is-parent is-10">
      <article class="tile is-child has-text-white">
        <p>{{ msg }}</p>
      </article>
      
      <router-link :to="link">
        <b-button type="is-success" class="is-size-6">{{ msgButton }}</b-button>
      </router-link>
    </div>
  </section>
  <!-- Middle bar ends -->
</template>

<script>

export default {
  name: "MiddleBar",
  props: {
    msg: String,
    msgButton: String,
    link: String,
  },
};
</script>