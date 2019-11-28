<template>
  <v-form ref="form" v-model="valid" lazy-validation>
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
        <b>Total Point: {{ totalPoints }}</b>
        <v-spacer></v-spacer>
        <v-btn color="error" to="/">Batal</v-btn>
        <v-btn color="normal" @click="reset">Reset</v-btn>
        <v-btn color="success" @click="validate">Buat</v-btn>
      </v-card-actions>
    </v-container>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    // datepicker
    date: new Date().toISOString().substr(0, 10),
    modal: false,
    menuDate: false,

    // timepicker
    menu: false,
    menu1: false,
    time: null,
    time1: null,
    timeStart: false,
    timeEnd: false,

    // text fields
    valid: true,
    name: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    select: null,
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    checkbox: false,

    // expansion panels
    lines: [
      {
        soal: '',
        poin: '',
        jawaban1: ''
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
        jawaban1: null
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
