import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import './style.css';
import App from './App.vue';
import Home from './pages/Home.vue';
import Crm from './pages/Crm.vue';
import Cms from './pages/Cms.vue';
import Ems from './pages/Ems.vue';
import Profile from './pages/Profile.vue';
import Zoeken from './pages/Zoeken.vue';

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAddressCard,
  faGear,
  faHouse,
  faMagnifyingGlass,
  faTable,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// 2. Define some routes
const routes = [
  { path: '/', component: Home },
  { path: '/crm', component: Crm },
  { path: '/ems', component: Ems },
  { path: '/cms', component: Cms },
  { path: '/profile', component: Profile },
  { path: '/zoeken', component: Zoeken },
];

// 3. Create the router instance and pass the `routes` option
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

// Add icon to library
library.add(faHouse, faGear, faTable, faMagnifyingGlass, faUser, faAddressCard);

const app = createApp(App);

app.use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
