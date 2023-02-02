<template>
  <div class="flex justify-between py-4">
    <!-- Gebruikersdetails -->
    <div class="flex text-gray-700 gap-4">
      <p>sellvation.user123 (Gebruiker)</p>
      <p class="px-2 bg-slate-400 text-gray-700 rounded">Omgeving XXXX</p>
      <p>Uitloggen</p>
    </div>
    <!-- Tijd & Versie -->
    <div class="flex gap-2 text-gray-700">
      <current-time />
      <p>Versie 2.0.1</p>
    </div>
  </div>
</template>

<script>
import CurrentTime from './CurrentTime.vue';

export default {
  components: {
    CurrentTime,
  },
};
</script>
