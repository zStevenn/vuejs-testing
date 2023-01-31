<template>
  <div class="grid grid-cols-12 h-screen">
    <!-- Sidebar -->
    <div class="col-span-3 bg-gray-200 text-gray-500">
      <sidebar />
    </div>
    <div class="col-span-9 bg-gray-300 px-6 overflow-y-scroll">
      <!-- Topbar -->
      <div class="flex justify-between pt-4 pb-12">
        <!-- Gebruikersdetails -->
        <div class="flex text-gray-700 gap-4">
          <p>sellvation.stevenli (Gebruiker)</p>
          <p class="px-2 bg-slate-400 text-gray-700 rounded">PLUS Retail</p>
          <p>Uitloggen</p>
        </div>
        <!-- Tijd & Versie -->
        <div class="flex gap-2 text-gray-700">
          <current-time />
          <p>Versie 2.0.1</p>
        </div>
      </div>
      <!-- Horizontal navbar -->
      <div class="bg-slate-50 p-4 my-4 rounded shadow-sm">
        <ul class="flex gap-4 text-gray-700">
          <li class="text-red-500 underline underline-offset-8 decoration-4">
            Home
          </li>
          <li>Home 1</li>
          <li>Home 2</li>
        </ul>
      </div>
      <!-- Mijn berichten -->
      <div class="bg-slate-50 p-4 my-4 rounded shadow-sm divide-y">
        <h3 class="uppercase text-slate-700 font-semibold py-2">
          mijn berichten
        </h3>
        <table class="table-auto w-full">
          <thead>
            <tr class="divide-y">
              <th>Van</th>
              <th>Ontvangen</th>
              <th>Onderwerp</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="divide-y"
              title="CCM professional constateerd een probleem"
            >
              <td>CCM Professional</td>
              <td>26-11-2022 08:00:14</td>
              <td>Probleem geconstateerd</td>
            </tr>
            <tr
              class="divide-y"
              title="CCM professional constateerd een probleem"
            >
              <td>CCM Professional</td>
              <td>26-11-2022 08:00:14</td>
              <td>Probleem geconstateerd</td>
            </tr>
            <tr
              class="divide-y"
              title="CCM professional constateerd een probleem"
            >
              <td>CCM Professional</td>
              <td>26-11-2022 08:00:14</td>
              <td>Probleem geconstateerd</td>
            </tr>
          </tbody>
        </table>
      </div>
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

export default {
  components: {
    CurrentTime,
    Sidebar,
  },
};
</script>
