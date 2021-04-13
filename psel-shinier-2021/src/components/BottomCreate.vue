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
        <!-- Forms starts-->
        <div class="is-flex-direction-column mb-5">
          <div class="columns mb-3">
            <div class="column is-3">
              <div class="dottedLine">Key*</div>
              <b-field class="mt-2">
                <b-input
                  placeholder="Palavra que indentifica o grupo"
                ></b-input>
              </b-field>
            </div>

            <div class="column is-3">
              <div class="dottedLine">Tipo*</div>
              <select class="mt-2 selectBoxB">
                <option value="undefined">Selecione um grupo</option>
              </select>
            </div>

            <div class="is-6 column">
              <div class="dottedLine">Descrição*</div>
              <b-field class="mt-2">
                <b-input
                  placeholder="Coloque uma descrição completa para o grupo"
                ></b-input>
              </b-field>
            </div>
          </div>

          <div class="is-flex-direction-column">
            <div class="dottedLine">Grupo Master</div>
            <select class="selectBox mt-2">
              <option value="undefined">
                Super Admin - cargo - Pessoas responsáveis com todas as
                funcionalidades
              </option>
            </select>
          </div>
        </div>
        <!-- Forms ends-->
        <!-- Filter starts-->
        <div
          class="is-flex is-align-items-center is-justify-content-space-between container is-fullhd has-text-black mb-2"
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
                <span>Key</span>
              </button>
            </p>
          </div>
        </div>
        <!-- Filter ends-->

        <!-- DottedLine starts-->
        <div class="dottedLine">Regras</div>
        <!-- DottedLine ends-->

        <!-- Body Content starts-->
        <section class="bodyContent">
          <section class="container">
            <div class="keys">
              <b-checkbox :value="true" type="is-info"> Key </b-checkbox>
              <span>Descrição</span>
            </div>

            <div class="keys has-background-black-bis p-4">
              <b-checkbox :value="true" type="is-info">
                index.dynamo.api
              </b-checkbox>
              <span
                >Funcionalidade que permite um usuário ver todos os dados
                chegando no dynamo</span
              >
            </div>

            <div class="keys has-background-black-bis p-4">
              <b-checkbox :value="true" type="is-info">
                index.dynamo.api
              </b-checkbox>
              <span
                >Funcionalidade que permite um usuário ver todos os dados
                chegando no dynamo</span
              >
            </div>

            <div class="keys has-background-black-bis p-4">
              <b-checkbox :value="true" type="is-info">
                index.dynamo.api
              </b-checkbox>
              <span
                >Funcionalidade que permite um usuário ver todos os dados
                chegando no dynamo</span
              >
            </div>

            <div class="keys has-background-black-bis p-4">
              <b-checkbox :value="true" type="is-info">
                index.dynamo.api
              </b-checkbox>
              <span
                >Funcionalidade que permite um usuário ver todos os dados
                chegando no dynamo</span
              >
            </div>

            <div class="keys has-background-black-bis p-4">
              <b-checkbox :value="true" type="is-info">
                index.dynamo.api
              </b-checkbox>
              <span
                >Funcionalidade que permite um usuário ver todos os dados
                chegando no dynamo</span
              >
            </div>
          </section>
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
  name: "BottomCreate",
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

<style scoped>
@import "../styles/bottomBar.css";

.selectBox {
  width: 100%;
  height: 2.5rem;
  border-radius: 0.225rem;
  padding-left: 0.625rem;
  font-weight: 400;
  font-weight: 400;
  font-size: 1.01rem;
}

.selectBoxB {
  width: 100%;
  height: 2.5rem;
  border-radius: 0.225rem;
  font-weight: 400;
  font-size: 1.01rem;
  padding-left: 0.625rem;
}

.keys {
  display: grid;
  grid-template: 1fr / 1fr 7fr;
  margin-top: 0.6875rem;
  margin-left: 1.135rem;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 8px;
}
</style>