<template>
  <v-row>
    <div class="ma-5">
      <v-icon>mdi-plus-circle</v-icon>&nbsp;Tambah Dari Bank Soal
    </div>

    <v-row dense>
      <v-col v-for="(item, i) in items" :key="i" cols="12">
        <v-card outlined>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title
                class="subtitle-2"
                v-text="item.pertanyaan"
              ></v-card-title>
              <v-card-text class="caption" v-text="item.author"></v-card-text>
              <v-card-actions>
                <v-btn small color="primary">Tambahkan</v-btn>
              </v-card-actions>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    items: [
      {
        soal: 'Sebutkan macam-macam constraint di relasi database!',
        author: 'Budi Purnomo'
      },
      {
        soal: 'Apa yang di maksud dengan foreign key?',
        author: 'Larasati'
      }
    ],
    dropdown_edit: [
      { text: 'Keamanan Jaringan' },
      { text: 'Basis Data' },
      { text: 'Pemrograman Framework' },
      { text: 'Agama' },
      { text: 'Bahasa Inggris' },
      { text: 'Pendidikan Kewarganegaraan' },
      { text: 'Metodologi Riset' }
    ]
  }),
  mounted() {
    axios
      .get('http://localhost:8000/soal/cari_all?user=' + this.$auth.user.nomor)
      .then((resp) => {
        this.items = resp.data
      })
  }
}
</script>
