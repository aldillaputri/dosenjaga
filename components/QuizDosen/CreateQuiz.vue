<template>
  <v-row>
    <v-col cols="5">
      <v-form id="form-tambah-soal" ref="form" lazy-validation>
        <div><v-icon>mdi-forum</v-icon>&nbsp;Buat Kuis</div>
        <v-select
          v-model="form.kuliah"
          :items="kuliah"
          item-text="matakuliah.matkul"
          item-value="nomor"
          label="Kuliah"
        />
        <v-text-field v-model="form.judul" label="Judul Kuis" />
        <!--datepicker-->
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-menu
              v-model="menuDatePicker"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="form.date_created"
                  label="Tanggal Mulai Kuis"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="form.date_created"
                @input="menuDatePicker = false"
              />
            </v-menu>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="form.durasi"
              label="Durasi(menit)"
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
                    <v-row v-if="line.tipe == 'Pilihan Ganda'" no-gutters>
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
                        v-model="line.pertanyaan"
                        label="Pertanyaan"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-text-field
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
                        :items="kuncis"
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
          <v-radio-group v-model="tipe_soal" row>
            <v-radio label="Pilihan Ganda" value="Pilihan Ganda"></v-radio>
            <v-radio label="Essay" value="Essay"></v-radio>
          </v-radio-group>
          <v-btn outlined color="indigo" small @click="addQuestion"
            >Tambah Soal</v-btn
          >
        </v-col>
        <v-checkbox v-model="form.isPublished" label="Publish"></v-checkbox>

        <v-card-actions>
          <b>Total Point:</b>
          <v-spacer></v-spacer>
          <v-btn color="error" to="/">Batal</v-btn>
          <v-btn color="normal">Reset</v-btn>
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
        <v-col v-for="(soal, i) in soal_tersedia" :key="i" cols="12">
          <v-card outlined>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="subtitle-2"
                  v-text="soal.pertanyaan"
                ></v-card-title>
                <v-card-text class="caption" v-text="soal.author"></v-card-text>
                <v-card-actions>
                  <v-btn small color="primary" @click="insert_existing(soal)"
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
    menuDatePicker: false,
    kuncis: ['A', 'B', 'C', 'D'],
    tipe_soal: '',
    radio1: '',
    form: {
      soal: [],
      kuliah: null,
      judul: '',
      date_created: '',
      durasi: '',
      creator: null,
      isPublished: false
    },
    // expansion panels
    lines: [],
    soal_tersedia: []
  }),
  watch: {
    'form.kuliah'(v) {
      if (v && process.browser) {
        axios
          .get(
            'http://localhost:8000/soal/cari_all?user=' +
              this.$auth.user.nomor +
              '&matakuliah=' +
              v
          )
          .then((resp) => {
            this.soal_tersedia = resp.data
          })
      }
    }
  },
  mounted() {
    this.form.creator = this.$auth.user.nomor
    axios
      .get(
        'http://localhost:8000/kuliah/cari_all?user=' + this.$auth.user.nomor
      )
      .then((resp) => {
        this.kuliah = resp.data
      })
  },

  methods: {
    insert_existing(data) {
      this.lines.push(data)
    },
    addQuestion() {
      if (this.tipe_soal === 'Pilihan Ganda') {
        this.lines.push({
          tipe: 'Pilihan Ganda'
        })
      } else if (this.tipe_soal === 'Essay') {
        this.lines.push({
          tipe: 'Essay'
        })
      }
    },
    removeQuestion(lineId) {
      if (this.form.soal.length > 1) this.lines.splice(lineId, 1)
    },
    save() {
      const data = { ...this.form }
      data.pertanyaans = this.lines
      data.pertanyaans.forEach((element, idx) => {
        data.pertanyaans[idx].matakuliah = data.kuliah
        if (data.pertanyaans[idx].creator === undefined) {
          data.pertanyaans[idx].creator = this.$auth.user.nomor
        }
      })
      axios.post('http://localhost:8000/kuis', data).then((resp) => {})(
        (window.location = 'daftar')
      )
    }
  }
}
</script>
