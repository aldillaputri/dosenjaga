<template>
  <v-simple-table fixed-header height="300px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Nama Mahasiswa</th>
          <th class="text-left">Tanggal</th>
          <th class="text-left">Nilai</th>
          <th class="text-left">Keterangan</th>
          <th class="text-left">Detail</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in hasil" :key="item.name">
          <td>{{ item.user.nama }}</td>
          <td>{{ item.kuis.date_created }}</td>
          <td>{{ item.nilai }}</td>
          <td>Tidak Lulus</td>
          <td>
            <!-- <v-btn icon :to="link + '?hasil=' + item._id"> -->
            <v-btn icon :to="link">
              <v-icon color="info">mdi-eye</v-icon>
            </v-btn>
          </td>
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
      link: '/quiz/detail',
      hasil: []
    }
  },
  mounted() {
    let params = ''
    if (this.$auth.user.role === 1) {
      params = '?user=' + this.$auth.user.nomor
    }
    axios.get('http://localhost:8000/hasil/cari_all' + params).then((resp) => {
      this.hasil = resp.data
      console.log(this.hasil)
    })
  },
  methods: {
    getColor(keterangan) {
      if (keterangan === 'Lulus') return 'green'
      else if (keterangan === 'Tidak Lulus') return 'red'
      else return 'orange'
    }
  }
}
</script>
