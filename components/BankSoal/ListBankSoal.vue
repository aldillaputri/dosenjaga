<template>
  <v-row>
    <!-- Mata Kuliah -->
    <v-col :cols="9">
      <v-overflow-btn
        class="my-2"
        :items="dropdown_edit"
        label="Mata Kuliah"
        editable
        item-value="text"
      ></v-overflow-btn>
    </v-col>
    <v-col :cols="3">
      <v-radio-group v-model="row" row>
        <v-radio label="Pilihan Ganda" value="radio-1"></v-radio>
        <v-radio label="Essay" value="radio-2"></v-radio>
      </v-radio-group>
    </v-col>
    <v-col v-for="card in cards" :key="card.matkul" :cols="3">
      <v-card outlined>
        <v-card-title class="subtitle-1" v-text="card.matkul"></v-card-title>
        <v-card-text v-text="card.tipe"></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon :to="link + '?matakuliah=' + card._id">
            <v-icon color="info">mdi-eye</v-icon>
          </v-btn>
          <v-btn icon color="secondary">
            <v-icon>mdi-pencil</v-icon>
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
    link: '/banksoal/view',
    dropdown_edit: [
      { text: 'Keamanan Jaringan' },
      { text: 'Basis Data' },
      { text: 'Pemrograman Framework' },
      { text: 'Agama' },
      { text: 'Bahasa Inggris' },
      { text: 'Pendidikan Kewarganegaraan' },
      { text: 'Metodologi Riset' }
    ],
    cards: []
  }),

  created() {
    axios.get('http://localhost:8000/matakuliah/cari_all').then((resp) => {
      this.cards = resp.data
      // console.log(this.cards)
    })
  }
}
</script>
