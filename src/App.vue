<template>
  <div class="grid grid-cols-12 h-screen">
    <!-- Sidebar -->
    <div class="col-span-3 bg-gray-200 text-gray-500">
      <sidebar />
    </div>
    <div class="col-span-9 bg-gray-300 px-6 overflow-auto">
      <router-view />
    </div>
  </div>
</template>

<script>
import CurrentTime from './components/CurrentTime.vue';
import Sidebar from './components/Sidebar.vue';
import MyMessages from './components/MyMessages.vue';
import ContentNavigation from './components/ContentNavigation.vue';
import TopNavbar from './components/TopNavbar.vue';
import VisitCard from './components/VisitCard.vue';
import Kladblok from './components/Kladblok.vue';

export default {
  components: {
    CurrentTime,
    Sidebar,
    MyMessages,
    ContentNavigation,
    TopNavbar,
    VisitCard,
    Kladblok,
  },
};
</script>
