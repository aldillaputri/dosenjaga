<template>
  <v-form id="form-tambah-soal" ref="form" lazy-validation>
    <div><v-icon>mdi-forum</v-icon>&nbsp;Deskripsi Kuis</div>
    <v-select
      v-model="editedItem.kuliah"
      :items="daftarMatakuliah"
      item-text="matkul"
      item-value="_id"
      label="Kuliah"
    ></v-select>
    <v-text-field v-model="editedItem.judul" label="Judul Kuis"></v-text-field>
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
        <v-text-field v-model="editedItem.durasi" label="Durasi"></v-text-field>
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
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    // datepicker
    daftarMatakuliah: [],
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
    lines: [
      // {
      //   kuliah: '',
      //   tipe: '',
      //   pertanyaan: '',
      //   jawaban1: '',
      //   jawaban2: '',
      //   jawaban3: '',
      //   jawaban4: '',
      //   kunci: '',
      //   bobot: ''
      // }
    ],
    blockRemoval: true
  }),
  mounted() {
    // this.addLine()
    this.editedItem.creator = this.$auth.user._id
    axios.get('http://localhost:8000/matakuliah/cari_all').then((resp) => {
      this.daftarMatakuliah = resp.data

      console.log(this.matakuliah)
    })
  },
  // created() {
  //   axios.get('http://localhost:8000/kuis/cari_all').then((resp) => {
  //     this.soal = resp.data
  //     console.log(this.soal)
  //   })
  // },

  methods: {
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
      this.soal.push(this.editedItem)
      // this.close()
      const data = { ...this.editedItem }
      data.pertanyaans = this.lines
      data.pertanyaans.forEach((element, idx) => {
        data.pertanyaans[idx].matakuliah = data.kuliah
        if (data.pertanyaans[idx].creator === undefined) {
          data.pertanyaans[idx].creator = this.$auth.user._id
        }
      })
      axios.post('http://localhost:8000/kuis', data).then((resp) => {
        console.log(this.lines)
      })
    }
  }
}
</script>
