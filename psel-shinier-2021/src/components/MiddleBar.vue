<template>
  <!-- Middle bar starts -->
  <section class="title is-flex mx-2 mb-0">
    <div class="tile is-parent is-2"></div>

    <div class="tile is-parent is-10">
      <article class="tile is-child has-text-white">
        <p>{{ msg }}</p>
      </article>

      <b-button type="is-success" class="is-size-6" v-on:click="paodoce">{{
        msgButton
      }}</b-button>
    </div>
  </section>
  <!-- Middle bar ends -->
</template>

<script>
import App from "../App.vue"

export default {
  name: "MiddleBar",
  props: {
    msg: String,
    msgButton: String,
    joao: Function,
  },
  methods: {
    paodoce() {
      App.methods.toggle()
    },
  },
};
</script>