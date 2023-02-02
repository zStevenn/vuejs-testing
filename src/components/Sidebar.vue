<template>
  <div class="block">
    <img src="https://via.placeholder.com/200x70" class="px-6 py-4" />
    <p class="text-xs pb-1 px-6 text-gray-800">Campaign Content Manager</p>
    <p class="text-xs pb-4 px-6 italic">professional</p>
    <ul class="pl-6 cursor-pointer">
      <li
        v-for="(menu, index) in items"
        :key="index"
        :class="{
          'py-3 pl-3': true,
          'bg-gray-300 rounded-l-lg relative shadow shadow-gray-300':
            index === activeIndex,
        }"
        @click="updateActive(index)"
      >
        <router-link to="{{menu.to}}">
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
        { label: 'Home', icon: 'house', to: '/' },
        { label: 'CRM', icon: 'gear', to: '/CRM' },
        { label: 'CMS', icon: 'table', to: '/' },
        { label: 'EMS', icon: 'table', to: '/' },
        { label: 'Zoeken', icon: 'search', to: '/' },
        { label: 'Mijn CCM', icon: 'user', to: '/' },
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
