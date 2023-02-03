<template>
  <div class="block">
    <img src="https://via.placeholder.com/200x70" class="px-6 py-4" />
    <p class="text-xs pb-1 px-6 text-gray-800">Campaign Content Manager</p>
    <p class="text-xs pb-4 px-6 italic">professional</p>
    <ul class="pl-6 cursor-pointer">
      <li
        v-for="(menu, index) in items"
        :title="menu.title"
        :key="index"
        :class="{
          'py-3 pl-3 hover:text-blue-400': true,
          'bg-gray-300 rounded-l-lg relative shadow shadow-gray-300 text-blue-400':
            index === activeIndex,
        }"
        @click="updateActive(index)"
      >
        <router-link :to="menu.to">
          <font-awesome-icon class="mr-2" :icon="menu.icon" />
          {{ menu.label }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: 'Home',
          icon: 'house',
          to: '/',
          title: 'Home: startpagina met uw persoonlijke berichten',
        },
        {
          label: 'CRM',
          icon: 'gear',
          to: '/crm',
          title: 'Customer Relationship Management',
        },
        {
          label: 'CMS',
          icon: 'table',
          to: '/cms',
          title: 'Content Management System',
        },
        {
          label: 'EMS',
          icon: 'table',
          to: '/ems',
          title: 'E-mail marketing system',
        },
        {
          label: 'Zoeken',
          icon: 'search',
          to: '/zoeken',
          title:
            'Zoeken: zoeken naar items binnen alle CCM modules tegelijkertijd',
        },
        {
          label: 'Mijn CCM',
          icon: 'user',
          to: '/profile',
          title: 'Mijn CCM: uw persoonlijke instellingen en systeemverbruik',
        },
      ],
      activeIndex: 0,
    };
  },
  methods: {
    updateActive(index) {
      this.activeIndex = index;
    },
  },
};
</script>
