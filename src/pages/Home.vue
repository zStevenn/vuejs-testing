<template>
  <div class="grid gap-8">
    <!-- Topbar -->
    <top-navbar />
    <!-- Horizontal navbar -->
    <content-navigation :items="items" />
    <!-- Mijn berichten -->
    <my-messages />
    <!-- Mijn visitekaartje -->
    <visit-card />
    <!-- Mijn kladblok -->
    <kladblok />
  </div>
</template>

<script>
import MyMessages from '../components/MyMessages.vue';
import ContentNavigation from '../components/ContentNavigation.vue';
import TopNavbar from '../components/TopNavbar.vue';
import VisitCard from '../components/VisitCard.vue';
import Kladblok from '../components/Kladblok.vue';

export default {
  components: {
    MyMessages,
    ContentNavigation,
    TopNavbar,
    VisitCard,
    Kladblok,
  },
  data() {
    return {
      items: [{ id: 'home', name: 'Home' }],
    };
  },
};
</script>
