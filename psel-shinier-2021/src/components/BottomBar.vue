<template>
  <!-- Bottom bar starts-->
  <main class="tile mx-2 mb-2">
    <!-- Sidebar starts-->
    <div class="tile is-parent is-2 mt-5">
      <article class="tile is-child has-text-white">
        <div class="sideBarElement mb-6">
          <img :src="dashboardIcon" class="ml-6" />
          <span>Dashboard</span>
        </div>
        <div class="sideBarElement mb-6">
          <img :src="groupsIcon" class="ml-6" />
          <span>Grupos</span>
        </div>
        <div class="sideBarElement mb-6">
          <img :src="userIcon" class="ml-6" />
          <span>Usuários</span>
        </div>
        <div class="sideBarElement mb-6">
          <img :src="systemIcon" class="ml-6" />
          <span>Sistemas</span>
        </div>
        <div class="sideBarElement">
          <img :src="categoryIcon" class="ml-6" />
          <span>Categoria</span>
        </div>
      </article>
    </div>
    <!-- Sidebar ends-->
    <!-- Body starts-->
    <div class="tile is-parent is-10">
      <article
        class="tile is-child has-background-black-ter has-text-white notification"
      >
        <!-- Filter starts-->
        <div
          class="is-flex is-align-items-center is-justify-content-space-between container is-fullhd has-text-black mb-5"
        >
          <div class="filterText">
            <img :src="filterIcon" alt="" />
            <span class="ml-1 mr-4 has-text-white">Filtros</span>
            <span class="has-text-white">|</span>
            <span class="ml-1 ml-4 has-text-white">Ordenar por</span>
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
  </main>
  <!-- Bottom bar ends-->
</template>

<script>
import dashboardIcon from "../assets/Sidemenu/dashboardIcon.svg";
import groupsIcon from "../assets/Sidemenu/groupsIcon.svg";
import userIcon from "../assets/Sidemenu/userIcon.svg";
import systemIcon from "../assets/Sidemenu/systemIcon.svg";
import categoryIcon from "../assets/Sidemenu/categoryIcon.svg";
import filterIcon from "../assets/Sidemenu/filterIcon.svg";

export default {
  name: "BottomBar",
  props: {},
  data() {
    return {
      dashboardIcon,
      groupsIcon,
      userIcon,
      systemIcon,
      categoryIcon,
      filterIcon,
    };
  },
};
</script>

<style>
@import "../styles/bottomBar.css";
</style>