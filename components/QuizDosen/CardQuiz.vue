<template>
  <v-row>
    <v-col v-for="card in cards" :key="card.judul" :cols="3">
      <v-card outlined>
        <v-card-title class="subtitle-1" v-text="card.judul"></v-card-title>
        <v-card-text v-text="card.date_created"></v-card-text>
        <v-card-actions>
          <v-row align="left">
            <v-col class="text-center" cols="12" sm="4">
              <div class="my-2">
                <v-btn small color="primary" :to="link + '?kuis=' + card._id"
                  >Test</v-btn
                >
              </div>
            </v-col>
          </v-row>
          <v-spacer></v-spacer>
          <v-btn icon :to="link2">
            <v-icon color="info">mdi-eye</v-icon>
          </v-btn>
          <v-btn icon color="secondary">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <!-- <v-btn icon color="error">
            <v-icon>mdi-delete</v-icon>
          </v-btn> -->
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import axios from 'axios'
export default {
  data: () => ({
    link: '/quiz/test',
    link2: '/quiz/view',
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
