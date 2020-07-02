<template>
  <div>
    <v-stepper v-model="e1" non-linear vertical>
      <template v-for="(s, n) in soal">
        <v-stepper-step :key="`${n}-step`" :complete="e1 > n" :step="n" editable
          >Soal {{ n + 1 }}</v-stepper-step
        >

        <v-stepper-content :key="`${n}-content`" :step="n">
          <v-card class="mb-12" outlined>
            <v-row>
              <v-col class="ml-3 mr-3">
                <v-text-field v-model="s.pertanyaan" readonly>
                  <p class="text ml-3"></p>
                </v-text-field>
              </v-col>
            </v-row>
            <div class="ml-3">
              <v-checkbox
                v-if="s.tipe === 'Pilihan Ganda'"
                v-model="jawaban[n]"
                :label="s.jawaban1"
                value="A"
              ></v-checkbox>
              <v-checkbox
                v-if="s.tipe === 'Pilihan Ganda'"
                v-model="jawaban[n]"
                :label="s.jawaban2"
                value="B"
              ></v-checkbox>
              <v-checkbox
                v-if="s.tipe === 'Pilihan Ganda'"
                v-model="jawaban[n]"
                :label="s.jawaban3"
                value="C"
              ></v-checkbox>
              <v-checkbox
                v-if="s.tipe === 'Pilihan Ganda'"
                v-model="jawaban[n]"
                :label="s.jawaban4"
                value="D"
              ></v-checkbox>
              <v-text-field
                v-if="s.tipe === 'Essay'"
                v-model="s.jawabanEssayUser"
              >
                <p class="text ml-3"></p>
              </v-text-field>
            </div>
          </v-card>

          <v-btn color="primary" @click="nextStep(n)">Continue</v-btn>

          <v-btn text>Cancel</v-btn>
        </v-stepper-content>
      </template>
    </v-stepper>
    <v-btn color="primary" @click="submit()">Submit</v-btn>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      e1: 1,
      vertical: false,
      altLabels: false,
      editable: true,
      jawaban: [],
      soal: [
        {
          kuis: '',
          pertanyaan: '',
          jawaban1: '',
          jawaban2: '',
          jawaban3: '',
          jawaban4: ''
        }
      ]
    }
  },
  watch: {
    steps(val) {
      if (this.e1 > val) {
        this.e1 = val
      }
    },
    vertical() {
      this.e1 = 2
      requestAnimationFrame(() => (this.e1 = 1)) // Workarounds
    }
  },
  mounted() {
    window.addEventListener('beforeunload', (event) => {
      this.submit()
      alert('jawaban telah di submit')
      console.log('ignited')
      return null
    })
    axios
      .get(
        'http://localhost:8000/kuis/cari_all?_id=' + this.$route.query.kuis
        // '&user=' +
        // this.$auth.user.nomor
      )
      .then((resp) => {
        console.log('=========================', resp.data[0])
        setTimeout(this.submit, resp.data[0].durasi * 60 * 1000)
        this.soal = resp.data[0].id_pertanyaan
        this.soal.forEach((element, idx) => {
          this.jawaban[idx] = []
        })
      })
  },

  methods: {
    onInput(val) {
      this.steps = parseInt(val)
    },
    nextStep(n) {
      if (n === this.steps) {
        this.e1 = 1
      } else {
        this.e1 = n + 1
      }
    },
    submit() {
      this.soal.forEach((element, idx) => {
        this.soal[idx].jawabanPilganUser = this.jawaban[idx]
      })
      axios
        .post('http://localhost:8000/hasil/hitung', {
          soal: this.soal,
          user: this.$auth.user.nomor,
          kuis: this.$route.query.kuis
        })
        .then((resp) => {
          window.location = '/quiz-mahasiswa/history'
        })
    }
  }
}
</script>
