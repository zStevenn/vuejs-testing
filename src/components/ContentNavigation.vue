<template>
  <div class="bg-slate-50 p-4 rounded shadow-sm">
    <ul class="flex flex-wrap gap-4 text-gray-700 cursor-pointer">
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="{
          'hover:text-red-500': true,
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
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      active: null,
    };
  },
  created() {
    this.active = this.items[0].id;
  },
  methods: {
    updateActive(id) {
      this.active = id;
    },
  },
};
</script>
