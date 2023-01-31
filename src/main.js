import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add icon to library
library.add(faPhone, faHouse);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
