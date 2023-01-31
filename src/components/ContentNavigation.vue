<template>
  <div class="bg-slate-50 p-4 my-4 rounded shadow-sm">
    <ul class="flex gap-4 text-gray-700 cursor-pointer">
      <li
        :class="{
          'text-red-500 underline underline-offset-8 decoration-4':
            active === 'home',
        }"
        @click="active = 'home'"
      >
        Home
      </li>
      <li
        :class="{
          'text-red-500 underline underline-offset-8 decoration-4':
            active === 'home1',
        }"
        @click="active = 'home1'"
      >
        Home 1
      </li>
      <li
        :class="{
          'text-red-500 underline underline-offset-8 decoration-4':
            active === 'home2',
        }"
        @click="active = 'home2'"
      >
        Home 2
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 'home',
    };
  },
};
</script>
