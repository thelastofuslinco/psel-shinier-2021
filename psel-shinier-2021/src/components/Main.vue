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
    <section class="title is-flex mx-2 mb-0">
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
      <!-- Sidebar ends-->
      <GroupList />
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
import GroupList from "./GroupList.vue";

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
    };
  },
  components: {
    GroupList,
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