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
        <tr v-for="item in hasil" :key="item.name">
          <td>{{ item.kuis.judul }}</td>
          <td>{{ item.kuis.date_created }}</td>
          <td>{{ item.kuis.creator.nama }}</td>
          <td>{{ item.nilai }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      hasil: []
    }
  },
  mounted() {
    axios
      .get('http://localhost:8000/hasil/cari_all?user=' + this.$auth.user._id)
      .then((resp) => {
        this.hasil = resp.data
        console.log(this.hasil)
      })
  }
}
</script>
