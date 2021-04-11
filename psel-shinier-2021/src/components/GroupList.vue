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
          <span class="ml-1">Filtros | Ordenar por</span>
        </div>

        <div class="field has-addons filter">
          <p class="control">
            <button class="button has-background-black-bis">
              <span class="icon is-small">
                <i class="fas fa-align-left"></i>
              </span>
              <span>Left</span>
            </button>
          </p>

          <p class="control">
            <button class="button has-background-black-bis">
              <span class="icon is-small">
                <i class="fas fa-align-center"></i>
              </span>
              <span>Center</span>
            </button>
          </p>

          <p class="control">
            <button class="button has-background-black-bis">
              <span class="icon is-small">
                <i class="fas fa-align-right"></i>
              </span>
              <span>Right</span>
            </button>
          </p>
        </div>
      </div>
      <!-- Filter ends-->

      <!-- DottedLine starts-->
      <div class="dottedLine">Grupos</div>
      <!-- DottedLine ends-->

      <!-- Body Content starts-->
      <section class="bodyContent">
        <div class="has-background-black-bis">
          <div>
            <span>Super Admin</span>
            <div class="bodyContentBollCard">
              <div></div>
              <div></div>
            </div>
          </div>
          <div></div>
          <div class="is-flex is-justify-content-space-between">
            <div>
              <p>Todos os usuarios com todas as permissões...</p>
              <p>2 hours ago</p>
            </div>

            <b-button class="is-dark is-rounded">Ver Mais</b-button>
          </div>
        </div>

        <div class="has-background-black-bis">
          <div>
            <span>Técnicos</span>
            <div class="bodyContentBollCard">
              <div></div>
              <div></div>
            </div>
          </div>
          <div></div>
          <div class="is-flex is-justify-content-space-between">
            <div>
              <p>Todos os usuarios que são desenvolvedores da ...</p>
              <p>2 hours ago</p>
            </div>

            <b-button class="is-dark is-rounded">Ver Mais</b-button>
          </div>
        </div>
      </section>
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
  name: "GroupList",
  props: {},
  data() {
    return {
      filterIcon,
    };
  },
};
</script>
