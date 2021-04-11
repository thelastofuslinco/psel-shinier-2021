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
    <component v-bind:is="component" />
  </main>
  <!-- Bottom bar ends-->
</template>

<script>
import dashboardIcon from "../assets/Sidemenu/dashboardIcon.svg";
import groupsIcon from "../assets/Sidemenu/groupsIcon.svg";
import userIcon from "../assets/Sidemenu/userIcon.svg";
import systemIcon from "../assets/Sidemenu/systemIcon.svg";
import categoryIcon from "../assets/Sidemenu/categoryIcon.svg";
import GroupList from "./GroupList.vue";
import CreateGroup from "./CreateGroup.vue";

export default {
  name: "BottomBar",
  props: {
    msg: Function,
    msgButton: Function,
  },
  data() {
    return {
      dashboardIcon,
      groupsIcon,
      userIcon,
      systemIcon,
      categoryIcon,
      component: "GroupList",
    };
  },
  components: {
    GroupList,
    CreateGroup,
  },
  methods: {
    toggle() {
      if (this.component === CreateGroup) {
        console.log(this.component);
        this.component = GroupList;
      } else {
        console.log(this.component);
        this.component = CreateGroup;
      }
    },
  },
};
</script>

<style>
@import "../styles/bottomBar.css";
</style>