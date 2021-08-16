import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CreateContact from "../views/CreateContact.vue";
import Edit from "../views/Edit.vue";
import Contact from "../views/Contact.vue";
import Search from "../views/Search.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/create",
    name: "Create-contact",
    component: CreateContact,
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component: Edit,
  },
  {
    path: "/contact/:id",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
