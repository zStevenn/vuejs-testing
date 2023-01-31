<template>
  <div class="block">
    <img src="https://via.placeholder.com/200x70" class="px-6 py-4" />
    <p class="text-xs pb-1 px-6 text-gray-800">Campaign Content Manager</p>
    <p class="text-xs pb-4 px-6 italic">professional</p>
    <ul class="pl-6 cursor-pointer">
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="{
          'py-2 pl-1': true,
          'bg-gray-300 rounded-l-lg': index === activeIndex,
        }"
        @click="updateActive(index)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['Home', 'CRM', 'CMS', 'EMS', 'Zoeken', 'Mijn CCM'],
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
