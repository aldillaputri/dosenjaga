<template>
  <v-simple-table fixed-header height="300px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Kuis</th>
          <th class="text-left">Tanggal</th>
          <th class="text-left">Oleh</th>
          <th class="text-left">Nilai</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.tanggal }}</td>
          <td>{{ item.dosen }}</td>
          <td>{{ item.nilai }}</td>
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
          tanggal: '22 Desember 2019',
          dosen: 'Nana Ramadijanti',
          nilai: 80
        },
        {
          name: 'D4A Konsep Jaringan',
          tanggal: '21 Desember 2019',
          dosen: 'Dwi Susanto',
          nilai: 95
        },
        {
          name: 'D4A Statistik',
          tanggal: '28 Desember 2019',
          dosen: 'Udin Harun',
          nilai: 88
        }
      ]
    }
  }
}
</script>
