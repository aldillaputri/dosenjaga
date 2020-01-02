<template>
  <v-data-table
    :headers="headers"
    :items="soal"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>
          <v-icon>mdi-file-multiple</v-icon>&nbsp;Kelola Soal
        </v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on"
              >Tambah Soal</v-btn
            >
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-textarea
                      v-model="editedItem.pertanyaan"
                      auto-grow
                      rows="2"
                      label="Pertanyaan"
                    ></v-textarea>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      v-model="editedItem.jawaban1"
                      label="Jawaban A"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model="editedItem.jawaban2"
                      label="Jawaban B"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      v-model="editedItem.jawaban3"
                      label="Jawaban C"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model="editedItem.jawaban4"
                      label="Jawaban D"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-select
                      v-model="editedItem.kunci"
                      :items="items"
                      label="Kunci Jawaban"
                      dense
                    ></v-select>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model="editedItem.bobot"
                      label="Bobot"
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row></v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Batal</v-btn>
              <v-btn color="blue darken-1" text @click="save">Simpan</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon small @click="editItem(item)">mdi-lead-pencil edit</v-icon>
      <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    items: ['Jawaban A', 'Jawaban B', 'Jawaban C', 'Jawaban D'],
    dialog: false,
    headers: [
      {
        text: 'Pertanyaan',
        align: 'left',
        sortable: false,
        value: 'pertanyaan'
      },
      { text: 'Matakuliah', value: 'matakuliah.matkul' },
      { text: 'Tipe', value: 'tipe' },
      { text: 'Jawaban A', value: 'jawaban1' },
      { text: 'Jawaban B', value: 'jawaban2' },
      { text: 'Jawaban C', value: 'jawaban3' },
      { text: 'Jawaban D', value: 'jawaban4' },
      { text: 'Kunci', value: 'kunci' },
      { text: 'Bobot', value: 'bobot' },
      { text: 'Actions', value: 'action', sortable: false }
    ],
    soal: [],
    editedIndex: -1,
    editedItem: {
      pertanyaan: '',
      matakuliah: '',
      tipe: 'pilgan',
      jawaban1: '',
      jawaban2: '',
      jawaban3: '',
      jawaban4: '',
      kunci: '',
      bobot: '',
      creator: ''
    },
    defaultItem: {
      pertanyaan: '',
      matakuliah: '',
      tipe: 'pilgan',
      jawaban1: '',
      jawaban2: '',
      jawaban3: '',
      jawaban4: '',
      kunci: '',
      bobot: '',
      creator: ''
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Tambah Soal' : 'Edit Soal'
    }
  },

  watch: {
    dialog(val) {
      val || this.close()
    }
  },

  created() {
    this.initialize()
    this.editedItem.matakuliah = this.$route.query.matakuliah
    axios
      .get(
        'http://localhost:8000/soal/cari_all?matakuliah=' +
          this.$route.query.matakuliah +
          '&user=' +
          this.$auth.user._id
      )
      .then((resp) => {
        this.soal = resp.data
        console.log(this.soal)
      })
  },

  methods: {
    initialize() {
      this.editedItem.tipe = 'pilgan'
      this.defaultItem.tipe = 'pilgan'
      this.editedItem.creator = this.$auth.user._id
      this.defaultItem.creator = this.$auth.user._id
      this.soal = []
    },

    editItem(item) {
      // axios.post('http://localhost:8000/soal/'+)
      this.editedIndex = this.soal.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      const index = this.soal.indexOf(item)
      confirm('Are you sure you want to delete this item?') &&
        this.soal.splice(index, 1)
    },

    close() {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.soal[this.editedIndex], this.editedItem)
      } else {
        this.soal.push(this.editedItem)
      }
      this.close()
      axios.post('http://localhost:8000/soal', this.editedItem).then((resp) => {
        // console.log(resp)
      })
    }
  }
}
</script>
