import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateGroup from '../views/CreateGroup.vue'
import ListGroup from '../views/ListGroup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ListGroup',
    component: ListGroup
  },
  {
    path: '/CreateGroup',
    name: 'CreateGroup',
    component: CreateGroup
  },
]

const router = new VueRouter({
  routes
})

export default router
