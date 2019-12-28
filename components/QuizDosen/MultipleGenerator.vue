<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <!-- expansion panel -->
    <div v-for="(line, index) in lines" :key="index" class="row">
      <template>
        <v-expansion-panels class="ma-3">
          <v-expansion-panel>
            <v-expansion-panel-header>
              <template v-slot:default="{ open }">
                <v-row no-gutters>
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
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="line.soal"
                    label="Pertanyaan"
                  ></v-text-field>
                </v-col>
                <v-divider vertical class="mx-4"></v-divider>
                <v-col cols="3">
                  <v-text-field v-model="line.poin" label="Poin"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="line.jawaban1"
                    label="Jawaban"
                  ></v-text-field>
                </v-col>
                <v-divider vertical class="mx-4"></v-divider>
                <v-col cols="3">
                  <v-checkbox
                    v-model="line.checkbox1"
                    label="Jawaban Benar"
                    hide-details
                    class="shrink mr-2 mt-0"
                  ></v-checkbox>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="line.jawaban2"
                    label="Jawaban"
                  ></v-text-field>
                </v-col>
                <v-divider vertical class="mx-4"></v-divider>
                <v-col cols="3">
                  <v-checkbox
                    v-model="line.checkbox2"
                    label="Jawaban Benar"
                    hide-details
                    class="shrink mr-2 mt-0"
                  ></v-checkbox>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="line.jawaban3"
                    label="Jawaban"
                  ></v-text-field>
                </v-col>
                <v-divider vertical class="mx-4"></v-divider>
                <v-col cols="3">
                  <v-checkbox
                    v-model="line.checkbox3"
                    label="Jawaban Benar"
                    hide-details
                    class="shrink mr-2 mt-0"
                  ></v-checkbox>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="line.jawaban4"
                    label="Jawaban"
                  ></v-text-field>
                </v-col>
                <v-divider vertical class="mx-4"></v-divider>
                <v-col cols="3">
                  <v-checkbox
                    v-model="line.checkbox4"
                    label="Jawaban Benar"
                    hide-details
                    class="shrink mr-2 mt-0"
                  ></v-checkbox>
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
    <v-col>
      <v-icon>mdi-chevron-double-down</v-icon>&nbsp;Soal Berikutnya
      <v-radio-group v-model="row" row>
        <v-radio label="Pilihan Ganda" value="radio-1"></v-radio>
        <v-radio label="Isian Singkat" value="radio-2"></v-radio>
      </v-radio-group>
      <v-btn outlined color="indigo" small @click="addQuestion"
        >Tambah Soal</v-btn
      >
    </v-col>

    <v-card-actions>
      <b>Total Point: {{ totalPoints }}</b>
      <v-spacer></v-spacer>
      <v-btn color="error" to="/">Batal</v-btn>
      <v-btn color="normal" @click="reset">Reset</v-btn>
      <v-btn color="success" @click="validate">Buat</v-btn>
    </v-card-actions>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    select: null,
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    checkbox: false,

    // expansion panels
    lines: [
      {
        soal: '',
        poin: '',
        jawaban1: '',
        jawaban2: '',
        jawaban3: '',
        jawaban4: '',
        checkbox1: '',
        checkbox2: '',
        checkbox3: '',
        checkbox4: ''
      }
    ],
    blockRemoval: true
  }),

  methods: {
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
      const checkEmptyLines = this.lines.filter((line) => line.number === null)

      if (checkEmptyLines.length >= 1 && this.lines.length > 0) return

      this.lines.push({
        soal: null,
        poin: null,
        jawaban1: null,
        jawaban2: null,
        jawaban3: null,
        jawaban4: null,
        checkbox1: null,
        checkbox2: null,
        checkbox3: null,
        checkbox4: null
      })
    },
    removeQuestion(lineId) {
      if (this.blockRemoval) this.lines.splice(lineId, 1)
    },

    mounted() {
      this.addLine()
    }
  }
}
</script>
