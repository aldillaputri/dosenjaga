<template>
  <v-simple-table fixed-header height="300px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Kuis</th>
          <th class="text-left">Oleh</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.dosen }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
export default {
  data() {
    return {
      desserts: [
        {
          name: 'D4A Pemodelan Simulasi',
          dosen: 'Nana Ramadijanti'
        },
        {
          name: 'D4A Konsep Jaringan',
          dosen: 237
        },
        {
          name: 'D4A Statistik',
          dosen: 262
        }
      ]
    }
  }
}
</script>
