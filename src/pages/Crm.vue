<template>
  <div class="grid gap-8">
    <top-navbar />
    <content-navigation :items="items" />
    <h1>CRM</h1>
  </div>
</template>

<script>
import TopNavbar from '../components/TopNavbar.vue';
import ContentNavigation from '../components/ContentNavigation.vue';
export default {
  components: {
    TopNavbar,
    ContentNavigation,
  },
  data() {
    return {
      items: [
        { id: 'crmkaarten', name: 'CRM-kaarten' },
        { id: 'crmvelden', name: 'CRM-velden' },
        { id: 'crmveldconnectoren', name: 'CRM-veldconnectoren' },
        { id: 'crmprofielen', name: 'CRM-profielen' },
        { id: 'importeren', name: 'Importeren' },
        { id: 'exporteren', name: 'Exporteren' },
      ],
    };
  },
};
</script>
