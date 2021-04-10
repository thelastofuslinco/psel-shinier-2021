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
            icon-pack="fas"
            icon="search"
            class="searchBar"
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
      <!-- Sidebar starts-->

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
    </main>
    <!-- Bottom bar ends-->
  </div>
</template>

<script>
import dashboardIcon from "../assets/Sidemenu/dashboardIcon.svg";
import groupsIcon from "../assets/Sidemenu/groupsIcon.svg";
import userIcon from "../assets/Sidemenu/userIcon.svg";
import systemIcon from "../assets/Sidemenu/systemIcon.svg";
import categoryIcon from "../assets/Sidemenu/categoryIcon.svg";
import filterIcon from "../assets/Sidemenu/filterIcon.svg";

export default {
  name: "Main",
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

.sideBarElement {
  display: grid;
  grid-template: 1fr /1fr 1.5fr;
}

.filter button {
  color: #90a1ac;
  border: none;
}

.dottedLine {
  display: flex;
  align-items: center;
}

.dottedLine:after {
  content: "";
  flex: 1;
  border-bottom: 2px dashed#000;
}

.dottedLine:after {
  margin-left: 0.25em;
}

.bodyContent {
  height: 50vh;
  overflow-x: scroll;
  display: flex;
  flex-wrap: wrap;
}

.bodyContent > div {
  width: 37.2vw;
  height: 10.75rem;
  margin-left: 1.25rem;
  margin-top: 0.96875rem;

  border-radius: 0.6rem;
}

.bodyContent > div > div:first-child {
  margin: 1.2rem;
  display: flex;
  justify-content: space-between;
}

.bodyContent > div > div:first-child {
  color: #4472c4;
}

.bodyContentBollCard {
  display: flex;
}

.bodyContentBollCard > div:first-child {
  background: #bd1b24;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 2rem;
  margin-right: 0.6rem;
}

.bodyContentBollCard > div:last-child {
  background: #ffc700;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 2rem;
}

.bodyContent > div > div:nth-child(2) {
  content: "";
  flex: 1;
  border-bottom: 2px dashed#000;
  margin: 0 1.2rem;
}

.bodyContent > div > div:nth-child(3) {
  margin: 1.2rem;
}

.bodyContent > div > div:nth-child(3) p:last-child {
  opacity: 50%;
}

.bodyFooter {
  position: absolute;
  bottom: 0;
  right: 0;
}

.footerBox {
  background-color: #68a35d;
  height: 1.87rem;
  width: 1.87rem;
  border-radius: 0.3rem;
  margin-bottom: 0.3125rem;
  margin-right: 0.75rem;

  text-align: center;
}

.footerBox > span {
  font-size: 0.67rem;
}
</style>