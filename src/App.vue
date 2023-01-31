<template>
  <div class="grid grid-cols-12 h-screen">
    <!-- Sidebar -->
    <div class="col-span-3 bg-gray-200 text-gray-500">
      <sidebar />
    </div>
    <div class="col-span-9 bg-gray-300 px-6 overflow-y-scroll">
      <!-- Topbar -->
      <top-navbar />
      <!-- Horizontal navbar -->
      <content-navigation />
      <!-- Mijn berichten -->
      <my-messages />
      <!-- Mijn visitekaartje -->
      <div class="bg-slate-50 p-4 my-4 rounded shadow-sm divide-y">
        <h3 class="uppercase font-semibold text-slate-700">
          Mijn visitekaartje
        </h3>
        <div>
          <p>De heer Steven Li</p>
          <p>Bedrijfsnaam: Sellvation marketing BV</p>
          <p>Telefoonnummer: +31 (085) 11 400 40</p>
          <p>Accounttype: Gebruiker</p>
          <p><font-awesome-icon icon="phone" /></p>
          <p><font-awesome-icon icon="house" /></p>
        </div>
      </div>
      <!-- Mijn kladblok -->
      <div></div>
    </div>
  </div>
</template>

<script>
import CurrentTime from './components/CurrentTime.vue';
import Sidebar from './components/Sidebar.vue';
import MyMessages from './components/MyMessages.vue';
import ContentNavigation from './components/ContentNavigation.vue';
import TopNavbar from './components/TopNavbar.vue';

export default {
  components: {
    CurrentTime,
    Sidebar,
    MyMessages,
    ContentNavigation,
    TopNavbar,
  },
};
</script>
