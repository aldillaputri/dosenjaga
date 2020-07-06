<template>
  <v-row>
    <v-col :cols="12">
      <v-overflow-btn
        class="my-2"
        :items="schema_filter"
        label="Filter Berdasarkan Skema"
        editable
        item-value="value"
        item-text="label"
        @change="filter_result"
      ></v-overflow-btn>
    </v-col>
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
    cards: [],
    schema_filter: [
      { value: '1', label: 'Reguler' },
      { value: '2', label: 'Lanjut Jenjang' },
      { value: '3', label: 'Pendidikan Jarak Jauh' }
    ]
  }),
  created() {
    axios
      .get('http://localhost:8000/kuis/cari_all?isPublished=true&jenisSchema=')
      .then((resp) => {
        this.cards = resp.data
      })
  },
  methods: {
    filter_result(value) {
      axios
        .get(
          'http://localhost:8000/kuis/cari_all?isPublished=true&jenisSchema=' +
            value
        )
        .then((resp) => {
          this.cards = resp.data
        })
    }
  }
}
</script>
