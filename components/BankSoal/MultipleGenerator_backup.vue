<template>
  <v-card class="pa-5">
    <v-form ref="form" v-model="valid" lazy-validation>
      <div><v-icon>mdi-comment-question-outline</v-icon>&nbsp;Bank Soal</div>

      <!-- Mata Kuliah -->
      <v-col>
        <v-select
          class="my-2"
          :items="dropdown_edit"
          label="Mata Kuliah"
          editable
          item-value="text"
        ></v-select>
      </v-col>

      <!-- expansion panel -->
      <div v-for="(line, index) in lines" :key="index" class="row">
        <template>
          <v-expansion-panels>
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
                      :rules="[(v) => !!v || 'Pertanyaan harus diisi']"
                    ></v-text-field>
                  </v-col>
                  <v-divider vertical class="mx-4"></v-divider>
                  <v-col cols="3">
                    <v-text-field
                      v-model="line.poin"
                      label="Poin"
                      :rules="[(v) => !!v || 'Poin harus diisi']"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="line.jawaban1"
                      label="Jawaban"
                      :rules="[(v) => !!v || 'Jawaban harus diisi']"
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

      <v-container>
        <v-col>
          <v-btn class="mt-4" color="primary" @click="addQuestion"
            >Tambah Soal</v-btn
          >
        </v-col>
        <v-card-actions>
          <b>Total Points:</b>
          <v-spacer></v-spacer>
          <v-btn color="error" to="/">Cancel</v-btn>
          <v-btn color="normal" @click="reset">Reset</v-btn>
          <v-btn color="success" @click="submit()">Create</v-btn>
        </v-card-actions>
      </v-container>
    </v-form>
  </v-card>
</template>
<script>
export default {
  data: () => ({
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
    dropdown_edit: [
      { text: 'Keamanan Jaringan' },
      { text: 'Basis Data' },
      { text: 'Pemrograman Framework' },
      { text: 'Agama' },
      { text: 'Bahasa Inggris' },
      { text: 'Pendidikan Kewarganegaraan' },
      { text: 'Metodologi Riset' }
    ],
    blockRemoval: true,
    watch: {
      lines() {
        this.blockRemoval = this.lines.length <= 1
      }
    },
    totalPoints() {}
  }),

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('')
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
