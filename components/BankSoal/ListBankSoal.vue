<template>
  <v-row>
    <v-col v-for="card in cards" :key="card.matkul" :cols="3">
      <v-card outlined>
        <v-card-title class="subtitle-1" v-text="card.matkul"></v-card-title>
        <v-card-text v-text="card.tipe"></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon :to="link + '?matakuliah=' + card._id">
            <v-icon color="info">mdi-eye</v-icon>
          </v-btn>
          <v-btn icon color="error">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import axios from 'axios'
export default {
  data: () => ({
    daftarMatakuliah: [],
    link: '/banksoal/view',
    cards: [],
    editedItem: {
      kuliah: '',
      judul: '',
      date_created: '',
      durasi: ''
    }
  }),
  mounted() {
    // this.addLine()
    this.editedItem.creator = this.$auth.user._id
    axios.get('http://localhost:8000/matakuliah/cari_all').then((resp) => {
      this.daftarMatakuliah = resp.data
      this.cards = resp.data
      console.log(this.matakuliah)
    })
  }
  // created() {
  //   axios.get('http://localhost:8000/matakuliah/cari_all').then((resp) => {
  //     this.cards = resp.data
  //     // console.log(this.cards)
  //   })
  // }
}
</script>
