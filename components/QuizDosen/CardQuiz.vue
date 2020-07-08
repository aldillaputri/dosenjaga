<template>
  <v-row>
    <v-col :cols="12">
      <v-overflow-btn
        v-model="dropdown_kuliah"
        class="my-2"
        :items="dropdown_edit"
        label="Filter Berdasarkan Kuliah"
        editable
        item-value="matakuliah.nomor"
        item-text="matakuliah.name"
        @change="filter_result"
      ></v-overflow-btn>
    </v-col>
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

            <v-col class="text-center" cols="12" sm="4">
              <div v-if="card.isPublished === false" class="my-2">
                <v-btn small color="warning" @click="publish_kuis(card._id)"
                  >Publish</v-btn
                >
              </div>
            </v-col>
          </v-row>
          <v-spacer></v-spacer>
          <v-btn icon :to="link2 + '?kuis=' + card._id">
            <v-icon color="info">mdi-eye</v-icon>
          </v-btn>
          <v-btn
            v-if="card.isPublished === false"
            icon
            color="secondary"
            :to="link3 + '?kuis=' + card._id"
          >
            <v-icon>mdi-pencil</v-icon>
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
    dropdown_kuliah: '',
    link: '/quiz/test',
    link2: '/quiz/view',
    link3: '/quiz/edit',
    cards: [],
    dropdown_edit: [],
    isPublished: false,
    items: [{ title: 'Test' }, { title: 'Edit' }, { title: 'Detail' }]
  }),
  mounted() {
    axios
      .get('http://localhost:8000/hasil/cari_all?user=' + this.$auth.user.nomor)
      .then((resp) => {
        this.cards = resp.data
      })

    axios
      .get(
        'http://localhost:8000/kuliah/cari_all?user=' + this.$auth.user.nomor
      )
      .then((resp) => {
        this.dropdown_edit = resp.data
      })
  },
  methods: {
    filter_result(value) {
      axios
        .get(
          'http://localhost:8000/kuis/cari_all?user=' +
            this.$auth.user.nomor +
            '&kuliah=' +
            value
        )
        .then((resp) => {
          this.cards = resp.data
        })
    },
    publish_kuis(id) {
      axios
        .post('http://localhost:8000/kuis/publishKuis/' + id)
        .then((resp) => {
          window.alert('Kuis Berhasil di Publish')
          this.filter_result(this.dropdown_kuliah)
        })
    }
  }
}
</script>
