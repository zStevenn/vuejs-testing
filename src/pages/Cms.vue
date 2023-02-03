<template>
  <div class="grid gap-8">
    <top-navbar />
    <content-navigation :items="items" />
    <h1>CMS</h1>
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
        { id: 'sites', name: 'Sites' },
        { id: 'cookieconsent', name: 'Cookie consent' },
        { id: 'css', name: 'CSS' },
        { id: 'js', name: 'JavaScripts' },
        { id: 'menus', name: 'Menus' },
        { id: 'layouts', name: 'Lay-outs' },
        { id: 'webpagina', name: 'Webpaginas' },
        { id: 'contents', name: 'Contents' },
        { id: 'contentvariabel', name: 'Contentvariabelen' },
        { id: 'acties', name: 'Acties' },
        { id: 'voorwaardenset', name: 'Voorwaarden-sets' },
      ],
    };
  },
};
</script>
