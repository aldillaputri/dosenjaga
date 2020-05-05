<template>
  <div>
    <v-data-table :headers="headers" :items="data_jawaban"></v-data-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      snack: false,
      pagination: {},
      headers: [
        { text: 'No.', value: 'no' },
        { text: 'Soal', value: 'soal' },
        { text: 'Jawaban Anda', value: 'jawaban_mhs' },
        { text: 'Kunci Jawaban', value: 'kunci_jawaban' },
        { text: 'Skor', value: 'skor' }
      ],
      data_jawaban: [
        {
          no: 1,
          soal: 'Soal nomor 1',
          jawaban_mhs: 'Jawaban Mahasiswa ABCDEFGKHJSKJ',
          kunci_jawaban: 'Kunci Jawaban 12387428o6',
          skor: 15
        }
      ]
    }
  },
  mounted() {
    axios
      .get('http://localhost:8000/hasil/cari/' + this.$route.query.hasil)
      .then((resp) => {
        console.log(resp.data)
        this.jawaban = resp.data.jawaban
      })
  },
  methods: {}
}
</script>
