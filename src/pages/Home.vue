<template>
  <!-- Topbar -->
  <top-navbar />
  <!-- Horizontal navbar -->
  <content-navigation />
  <!-- Mijn berichten -->
  <my-messages />
  <!-- Mijn visitekaartje -->
  <visit-card />
  <!-- Mijn kladblok -->
  <kladblok />
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
};
</script>
