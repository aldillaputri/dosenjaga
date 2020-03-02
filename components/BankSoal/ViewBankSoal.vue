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
        <v-dialog v-model="dialogEssay" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">
              <v-icon>mdi-plus</v-icon>&nbsp;Essay
            </v-btn>
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
                      v-model="editedItemEssay.pertanyaan"
                      auto-grow
                      rows="2"
                      label="Pertanyaan"
                    ></v-textarea>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItemEssay.jawaban1"
                      label="Kunci Jawaban"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      v-model="editedItemEssay.bobot"
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
              <v-btn color="blue darken-1" text @click="closeEssay"
                >Batal</v-btn
              >
              <v-btn color="blue darken-1" text @click="saveEssay"
                >Simpan</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- <v-spacer></v-spacer> -->
        &nbsp; &nbsp;
        <v-dialog v-model="dialogPilgan" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">
              <v-icon>mdi-plus</v-icon>&nbsp;Pilihan Ganda
            </v-btn>
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
                      v-model="editedItemPilgan.pertanyaan"
                      auto-grow
                      rows="2"
                      label="Pertanyaan"
                    ></v-textarea>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      v-model="editedItemPilgan.jawaban1"
                      label="Jawaban A"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model="editedItemPilgan.jawaban2"
                      label="Jawaban B"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      v-model="editedItemPilgan.jawaban3"
                      label="Jawaban C"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model="editedItemPilgan.jawaban4"
                      label="Jawaban D"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-select
                      v-model="editedItemPilgan.kunci"
                      :items="items"
                      label="Kunci Jawaban"
                      dense
                      chips
                      attach
                      multiple
                    ></v-select>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model="editedItemPilgan.bobot"
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
              <v-btn color="blue darken-1" text @click="closePilgan"
                >Batal</v-btn
              >
              <v-btn color="blue darken-1" text @click="savePilgan"
                >Simpan</v-btn
              >
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
    items: ['A', 'B', 'C', 'D'],
    dialogPilgan: false,
    dialogEssay: false,
    headers: [
      {
        text: 'Pertanyaan',
        align: 'left',
        sortable: false,
        value: 'pertanyaan'
      },
      // { text: 'Matakuliah', value: 'matakuliah.matkul' },
      { text: 'Tipe', value: 'tipe' },
      { text: 'A', value: 'jawaban1' },
      { text: 'B', value: 'jawaban2' },
      { text: 'C', value: 'jawaban3' },
      { text: 'D', value: 'jawaban4' },
      { text: 'Kunci', value: 'kunci' },
      { text: 'Bobot', value: 'bobot' },
      { text: 'Actions', value: 'action', sortable: false }
    ],
    soal: [],
    editedIndex: -1,
    editedItemPilgan: {
      pertanyaan: '',
      matakuliah: '',
      tipe: 'Pilihan Ganda',
      jawaban1: '',
      jawaban2: '',
      jawaban3: '',
      jawaban4: '',
      kunci: '',
      bobot: '',
      creator: ''
    },
    editedItemEssay: {
      pertanyaan: '',
      matakuliah: '',
      tipe: 'Essay',
      jawaban1: '',
      bobot: '',
      creator: ''
    },
    defaultItemEssay: {
      pertanyaan: '',
      matakuliah: '',
      tipe: 'Essay',
      jawaban1: '',
      bobot: '',
      creator: ''
    },
    defaultItemPilgan: {
      pertanyaan: '',
      matakuliah: '',
      tipe: 'Pilihan Ganda',
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
    this.editedItemPilgan.matakuliah = this.$route.query.matakuliah
    this.editedItemEssay.matakuliah = this.$route.query.matakuliah
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
      this.editedItemPilgan.tipe = 'Pilihan Ganda'
      this.defaultItemPilgan.tipe = 'Pilihan Ganda'
      this.editedItemPilgan.creator = this.$auth.user._id
      this.defaultItemPilgan.creator = this.$auth.user._id

      this.editedItemEssay.tipe = 'Essay'
      this.defaultItemEssay.tipe = 'Essay'
      this.editedItemEssay.creator = this.$auth.user._id
      this.defaultItemEssay.creator = this.$auth.user._id

      this.soal = []
    },

    editItem(item) {
      this.editedIndex = this.soal.indexOf(item)
      this.editedItemPilgan = Object.assign({}, item)
      this.editedItemEssay = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      const index = this.soal.indexOf(item)
      confirm('Are you sure you want to delete this item?') &&
        this.soal.splice(index, 1) &&
        axios.delete('http://localhost:8000/soal/' + item._id)
    },

    closePilgan() {
      this.dialogPilgan = false
      setTimeout(() => {
        this.editedItemPilgan = Object.assign({}, this.defaultItemPilgan)
        this.editedIndex = -1
      }, 300)
    },
    closeEssay() {
      this.dialogEssay = false
      setTimeout(() => {
        this.editedItemEssay = Object.assign({}, this.defaultItemEssay)
        this.editedIndex = -1
      }, 300)
    },

    savePilgan() {
      if (this.editedIndex > -1) {
        Object.assign(this.soal[this.editedIndex], this.editedItemPilgan)
      } else {
        this.soal.push(this.editedItemPilgan)
      }
      this.dialogPilgan = false
      axios
        .post('http://localhost:8000/soal', this.editedItemPilgan)
        .then((resp) => {})
    },
    saveEssay() {
      if (this.editedIndex > -1) {
        Object.assign(this.soal[this.editedIndex], this.editedItemEssay)
      } else {
        this.soal.push(this.editedItemEssay)
      }
      // this.close()
      this.dialogEssay = false
      axios
        .post('http://localhost:8000/soal', this.editedItemEssay)
        .then((resp) => {
          // console.log(resp)
        })
    }
  }
}
</script>
