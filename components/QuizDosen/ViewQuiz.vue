<template>
  <div>
    <v-row>
      <v-col cols="9">
        <v-icon>mdi-file-multiple</v-icon>&nbsp; Hasil Kuis
      </v-col>
      <v-col right cols="3">
        <v-btn color="primary" class="white--text" @click="publish_hasil()">
          <v-icon left dark>mdi-backup-restore</v-icon>Publish Nilai
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-5">
        <detail-hasil-quiz></detail-hasil-quiz>
      </v-col>
    </v-row>
    <v-simple-table fixed-header height="300px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Nama Mahasiswa</th>
            <th class="text-left">Tanggal</th>
            <th class="text-left">Nilai</th>
            <th class="text-left">Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in hasil" :key="item.name">
            <td>{{ item.user.nama }}</td>
            <td>{{ item.kuis.date_created }}</td>
            <td>{{ item.nilai }}</td>
            <td>
              <v-btn icon :to="link + '?hasil=' + item._id">
                <v-icon color="info">mdi-eye</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
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
    let params = '?kuis=' + this.$route.query.kuis
    if (this.$auth.user.role === 1) {
      params = '&user=' + this.$auth.user.nomor
    }
    axios.get('http://localhost:8000/hasil/cari_all' + params).then((resp) => {
      this.hasil = resp.data
    })
  },
  methods: {
    publish_hasil() {
      this.hasil.forEach((item) =>
        axios
          .post('http://localhost:8000/hasil/publishHasil/' + item._id)
          .then((resp) => {})
      )
    }
  }
}
</script>
