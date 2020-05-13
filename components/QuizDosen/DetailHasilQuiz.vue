<template>
  <div>
    <v-row>
      <v-col cols="9">
        <v-icon>mdi-file-multiple</v-icon>
        &nbsp; Detail Jawaban {{ detail.user.nama }}
      </v-col>
      <v-col right cols="3">
        <v-btn color="primary" class="white--text" to="/quiz/view">
          <v-icon left dark>mdi-backup-restore</v-icon>Kembali
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
            <th class="text-left">Soal</th>
            <th class="text-left">Jawaban Mahasiswa</th>
            <th class="text-left">Kunci Jawaban</th>
            <th class="text-left">Skor</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in detail.jawaban" :key="item._id">
            <td>{{ item.pertanyaan.pertanyaan }}</td>
            <td v-if="item.pertanyaan.tipe === 'Essay'">
              {{ item.jawabanEssay }}
            </td>
            <td v-else>{{ item.jawabanPilgan }}</td>
            <td v-if="item.pertanyaan.tipe === 'Essay'">
              {{ item.pertanyaan.jawaban1 }}
            </td>
            <td v-else>{{ item.pertanyaan.kunci }}</td>
            <td>{{ item.nilai }}</td>
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
      detail: { jawaban: [], user: { nama: '' } }
    }
  },
  mounted() {
    axios
      .get('http://localhost:8000/hasil/cari/' + this.$route.query.hasil)
      .then((resp) => {
        this.detail = resp.data
      })
  }
}
</script>
