<template>
  <!-- Body starts-->
  <div class="tile is-parent is-10">
    <article
      class="tile is-child has-background-black-ter has-text-white notification"
    >
      <!-- Filter starts-->
      <div
        class="is-flex is-align-items-center is-justify-content-space-between container is-fullhd has-text-black mb-5"
      >
        <div>
          <img :src="filterIcon" alt="" />
          <span class="ml-1">criare | Ordenar por</span>
        </div>

        <div class="field has-addons filter">
          <p class="control">
            <button class="button">
              <span>Data</span>
            </button>
          </p>

          <p class="control">
            <button class="button has-background-black-bis">
              <span>Nome</span>
            </button>
          </p>

          <p class="control">
            <button class="button has-background-black-bis">
              <span>Atualização</span>
            </button>
          </p>
        </div>
      </div>
      <!-- Filter ends-->

      <!-- DottedLine starts-->
      <div class="dottedLine">Grupos</div>
      <!-- DottedLine ends-->

      <!-- Body Content starts-->
      <section class="bodyContent"></section>
      <!-- Body Content ends-->

      <!-- Footer starts -->
      <footer class="bodyFooter is-flex mt-5">
        <div class="footerBox"><span>&lt;&lt;</span></div>
        <div class="footerBox"><span>&lt;</span></div>
        <div class="footerBox"><span>1</span></div>
        <div class="footerBox"><span>2</span></div>
        <div class="footerBox"><span>3</span></div>
        <div class="footerBox"><span>4</span></div>
        <span class="mr-3"><span>...</span></span>
        <div class="footerBox"><span>20</span></div>
        <div class="footerBox"><span>&gt;</span></div>
        <div class="footerBox"><span>&gt;&gt;</span></div>
      </footer>
      <!-- Footer ends -->
    </article>
  </div>
  <!-- Body ends-->
</template>

<script>
import filterIcon from "../assets/Sidemenu/filterIcon.svg";

export default {
  name: "CreateGroup",
  props: {},
  data() {
    return {
      filterIcon,
    };
  },
};
</script>