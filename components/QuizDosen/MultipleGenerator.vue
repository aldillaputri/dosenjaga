<template>
  <v-row>
    <v-col cols="5">
      <v-form id="form-tambah-soal" ref="form" lazy-validation>
        <div><v-icon>mdi-forum</v-icon>&nbsp;Deskripsi Kuis</div>
        <v-select
          v-model="editedItem.kuliah"
          :items="kuliah"
          item-text="matkul"
          item-value="nomor"
          label="Kuliah"
          @change="refresh_dropdown"
        ></v-select>
        <v-text-field
          v-model="editedItem.judul"
          label="Judul Kuis"
        ></v-text-field>
        <!--datepicker-->
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-menu
              v-model="menuDate"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="editedItem.date_created"
                  label="Tanggal Mulai Kuis"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="editedItem.date_created"
                @input="menuDate = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="editedItem.durasi"
              label="Durasi"
            ></v-text-field>
          </v-col>
        </v-row>
        <!-- expansion panel -->
        <div v-for="(line, index) in lines" :key="index" class="row">
          <template>
            <v-expansion-panels class="ma-3">
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <template v-slot:default="{ open }">
                    <v-row
                      v-if="line.tipe == 'Pilihan Ganda' || 'Essay'"
                      no-gutters
                    >
                      <v-col cols="4">Soal</v-col>
                      <v-col cols="8" class="text--secondary">
                        <v-fade-transition leave-absolute>
                          <span v-if="open" key="0">Ketikkan Soal Disini</span>
                          <span v-else key="1">{{ line.soal }}</span>
                        </v-fade-transition>
                      </v-col>
                    </v-row>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-row id="row-">
                    <v-col>
                      <v-file-input
                        v-if="line.tipe == 'Pilihan Ganda' || 'Essay'"
                        v-model="line.gambar"
                        show-size
                        counter
                        multiple
                        label="Tambahkan Gambar"
                      ></v-file-input>
                    </v-col>
                  </v-row>
                  <v-row id="row-">
                    <v-col>
                      <v-text-field
                        v-if="line.tipe == 'Pilihan Ganda' || 'Essay'"
                        v-model="line.pertanyaan"
                        label="Pertanyaan"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-text-field
                        v-if="line.tipe == 'Pilihan Ganda' || 'Essay'"
                        v-model="line.jawaban1"
                        label="Jawaban"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-text-field
                        v-if="line.tipe == 'Pilihan Ganda'"
                        v-model="line.jawaban2"
                        label="Jawaban"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-text-field
                        v-if="line.tipe == 'Pilihan Ganda'"
                        v-model="line.jawaban3"
                        label="Jawaban"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-text-field
                        v-if="line.tipe == 'Pilihan Ganda'"
                        v-model="line.jawaban4"
                        label="Jawaban"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="3">
                      <v-text-field
                        v-if="line.tipe == 'Pilihan Ganda' || 'Essay'"
                        v-model="line.bobot"
                        label="Bobot"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      <v-select
                        v-if="line.tipe == 'Pilihan Ganda'"
                        v-model="line.kunci"
                        :items="items"
                        label="Kunci Jawaban"
                        dense
                        chips
                        attach
                        multiple
                      ></v-select>
                    </v-col>
                  </v-row>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text color="error" @click="removeQuestion(index)"
                      >Hapus Soal</v-btn
                    >
                  </v-card-actions>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </template>
        </div>
        <v-icon>mdi-chevron-double-down</v-icon>&nbsp;Soal Berikutnya
        <v-col>
          <v-radio-group v-model="radio_grup" row>
            <v-radio
              label="Pilihan Ganda"
              value="Pilihan Ganda"
              @change="getValueRadioGrup('Pilihan Ganda')"
            ></v-radio>
            <v-radio
              label="Essay"
              value="Essay"
              @change="getValueRadioGrup('Essay')"
            ></v-radio>
          </v-radio-group>
          <v-btn outlined color="indigo" small @click="addQuestion"
            >Tambah Soal</v-btn
          >
        </v-col>

        <v-card-actions>
          <b>Total Point:</b>
          <v-spacer></v-spacer>
          <v-btn color="error" to="/">Batal</v-btn>
          <v-btn color="normal" @click="reset">Reset</v-btn>
          <v-btn color="success" @click="save">Buat</v-btn>
        </v-card-actions>
      </v-form>
    </v-col>
    <v-divider vertical class="ma-10"></v-divider>

    <v-col cols="5">
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
                  <v-btn small color="primary" @click="insert_existing(item)"
                    >Tambahkan</v-btn
                  >
                </v-card-actions>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    kuliah: [],
    // matakuliah: [
    //   {
    //     nomor: 1,
    //     nama: 'Konsep Pemrograman'
    //   },
    //   {
    //     nomor: 2,
    //     nama: 'Basis Data'
    //   }
    // ],

    // datepicker
    date: new Date().toISOString().substr(0, 10),
    modal: false,
    menuDate: false,

    select: null,
    items: ['A', 'B', 'C', 'D'],

    checkbox: false,
    radio_grup: 'radio1',
    radio1: ' radio dari data',

    soal: [],
    editedItem: {
      kuliah: '',
      judul: '',
      date_created: '',
      durasi: ''
    },

    // expansion panels
    lines: [],
    blockRemoval: true
  }),
  mounted() {
    // this.addLine()
    this.editedItem.creator = this.$auth.user.nomor
    axios
      .get(
        'http://localhost:8000/matakuliah/cari_all?user=' +
          this.$auth.user.nomor
      )
      .then((resp) => {
        this.kuliah = resp.data
        console.log(this.matakuliah)
      })

    if (this.editedItem.kuliah) {
      axios
        .get(
          'http://localhost:8000/soal/cari_all?user=' +
            this.$auth.user.nomor +
            '&kuliah=' +
            this.editedItem.kuliah
        )
        .then((resp) => {
          this.items = resp.data
        })
    } else {
      axios
        .get(
          'http://localhost:8000/soal/cari_all?user=' + this.$auth.user.nomor
        )
        .then((resp) => {
          this.items = resp.data
        })
    }
  },

  methods: {
    refresh_dropdown(e) {
      if (this.editedItem.kuliah) {
        axios
          .get(
            'http://localhost:8000/soal/cari_all?user=' +
              this.$auth.user.nomor +
              '&matakuliah=' +
              this.editedItem.kuliah
          )
          .then((resp) => {
            this.items = resp.data
          })
      } else {
        axios
          .get(
            'http://localhost:8000/soal/cari_all?user=' + this.$auth.user.nomor
          )
          .then((resp) => {
            this.items = resp.data
          })
      }
    },
    insert_existing(data) {
      this.lines.push(data)
    },

    getValueRadioGrup(v) {
      this.radio1 = v
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    addQuestion() {
      // const checkEmptyLines = this.lines.filter((line) => line.number === null)
      if (
        // checkEmptyLines.length >= 0 &&
        // this.lines.length > 0 &&
        this.radio1 === 'Pilihan Ganda'
      ) {
        this.lines.push({
          tipe: 'Pilihan Ganda'
        })
      } else if (
        // checkEmptyLines.length >= 0 &&
        // this.lines.length > 0 &&
        this.radio1 === 'Essay'
      ) {
        this.lines.push({
          tipe: 'Essay'
        })
      }
    },
    removeQuestion(lineId) {
      if (this.blockRemoval) this.lines.splice(lineId, 1)
    },

    save() {
      console.log('---------------------------------aaaaaaa')
      this.soal.push(this.editedItem)
      // this.close()
      const data = { ...this.editedItem }
      data.pertanyaans = this.lines
      data.pertanyaans.forEach((element, idx) => {
        data.pertanyaans[idx].matakuliah = data.kuliah
        if (data.pertanyaans[idx].creator === undefined) {
          data.pertanyaans[idx].creator = this.$auth.user.nomor
        }
      })
      axios.post('http://localhost:8000/kuis', data).then((resp) => {
        console.log(this.lines)
      })((window.location = 'daftar'))
    }
  }
}
</script>
