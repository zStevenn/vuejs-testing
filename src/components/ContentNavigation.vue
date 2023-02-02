<template>
  <div class="bg-slate-50 p-4 my-4 rounded shadow-sm">
    <ul class="flex gap-4 text-gray-700 cursor-pointer">
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="{
          'text-red-500 underline underline-offset-8 decoration-4':
            active === item.id,
        }"
        @click="updateActive(item.id)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 'home',
      items: [{ id: 'home', name: 'Home' }],
    };
  },
  methods: {
    updateActive(id) {
      this.active = id;
    },
  },
};
</script>
