<template>
  <div class="grid grid-cols-12 h-screen">
    <!-- Sidebar -->
    <div class="col-span-3 bg-gray-200 text-gray-500">
      <sidebar />
    </div>
    <div class="col-span-9 bg-gray-300 px-6 overflow-auto">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';

export default {
  components: {
    Sidebar,
  },
};
</script>
