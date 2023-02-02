import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import './style.css';
import App from './App.vue';

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

// 1. Define route components.
const Home = { template: '<div>Home</div>' };
const Crm = { template: '<div>CRM</div>' };

// 2. Define some routes
const routes = [
  { path: '/', component: Home },
  { path: '/Crm', component: Crm },
];

// 3. Create the router instance and pass the `routes` option
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

// Add icon to library
library.add(faHouse, faGear, faTable, faMagnifyingGlass, faUser, faAddressCard);

const app = createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
