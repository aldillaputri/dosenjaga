<template>
  <v-row>
    <!-- Mata Kuliah -->
    <v-col v-for="card in cards" :key="card.kuis.judul" :cols="3">
      <v-card>
        <v-card-title
          class="subtitle-1"
          v-text="card.kuis.judul"
        ></v-card-title>
        <v-card-text v-text="card.kuis.date_created"></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :loading="loading3"
            :disabled="loading3"
            color="primary"
            class="ma-2 white--text"
            :to="link2 + '?hasil=' + card._id"
            >Detail</v-btn
          >
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
    link2: 'history/detail',
    cards: []
  }),
  created() {
    axios
      .get(
        'http://localhost:8000/hasil/cari_all?user=' +
          this.$auth.user.nomor +
          '&isPublished=true'
      )
      .then((resp) => {
        this.cards = resp.data
        console.log(this.cards)
      })
  }
}
</script>
