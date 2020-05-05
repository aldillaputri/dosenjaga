<template>
  <v-row>
    <!-- Mata Kuliah -->
    <v-col v-for="card in cards" :key="card.judul" :cols="3">
      <v-card>
        <v-card-title class="subtitle-1" v-text="card.judul"></v-card-title>
        <v-card-text v-text="card.date_created"></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :loading="loading3"
            :disabled="loading3"
            color="primary"
            class="ma-2 white--text"
            :to="link + '?kuis=' + card._id"
          >
            Join
            <v-icon>mdi-arrow-up-bold</v-icon>
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
    link: '/quiz-mahasiswa/join',
    cards: []
  }),
  created() {
    axios.get('http://localhost:8000/kuis/cari_all').then((resp) => {
      this.cards = resp.data
      console.log(this.cards)
    })
  }
}
</script>
