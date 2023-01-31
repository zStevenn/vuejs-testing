<template>
  <div class="grid grid-cols-12 h-screen">
    <!-- Sidebar -->
    <div class="col-span-3 bg-gray-200 text-gray-500 text-[13px]">
      <sidebar />
    </div>
    <div class="col-span-9 bg-gray-300">
      <!-- Topbar -->
      <div class="flex justify-between px-6 py-4 text-[13px]">
        <!-- Gebruikersdetails -->
        <div class="flex text-gray-700 gap-4">
          <p>sellvation.stevenli (Gebruiker)</p>
          <p class="px-2 bg-slate-400 text-gray-700 rounded">PLUS Retail</p>
          <p>Uitloggen</p>
        </div>
        <!-- Tijd & Versie -->
        <div class="flex gap-4">
          <current-time />
        </div>
      </div>
      <!-- Horizontal navbar -->
      <div></div>
      <!-- Mijn berichten -->
      <div></div>
      <!-- Mijn visitekaartje -->
      <div></div>
      <!-- Mijn kladblok -->
      <div></div>
    </div>
  </div>
</template>

<script>
import CurrentTime from './components/CurrentTime.vue';
import Sidebar from './components/Sidebar.vue';

export default {
  components: {
    CurrentTime,
    Sidebar,
  },
};
</script>
