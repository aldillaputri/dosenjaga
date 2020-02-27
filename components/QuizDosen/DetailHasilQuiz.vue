<template>
  <div>
    <v-stepper v-model="e1" non-linear vertical>
      <template v-for="(j, n) in jawaban">
        <v-stepper-step :key="`${n}-step`" :complete="e1 > n" :step="n" editable
          >Soal {{ n + 1 }}</v-stepper-step
        >
        <v-stepper-content :key="`${n}-content`" :step="n">
          <v-card class="mb-12" outlined>
            <v-row>
              <v-col class="ml-3 mr-3">
                <v-text-field v-model="j.pertanyaan.pertanyaan" readonly>
                  <p class="text ml-3"></p>
                </v-text-field>
              </v-col>
            </v-row>
            <div class="ml-3">
              <v-checkbox
                v-if="j.pertanyaan.tipe === 'Pilihan Ganda'"
                v-model="jawaban[n]"
                :label="j.pertanyaan.jawaban1"
                value="A"
              ></v-checkbox>
              <v-checkbox
                v-if="j.pertanyaan.tipe === 'Pilihan Ganda'"
                v-model="jawaban[n]"
                :label="j.pertanyaan.jawaban2"
                value="B"
              ></v-checkbox>
              <v-checkbox
                v-if="j.pertanyaan.tipe === 'Pilihan Ganda'"
                v-model="jawaban[n]"
                :label="j.pertanyaan.jawaban3"
                value="C"
              ></v-checkbox>
              <v-checkbox
                v-if="j.pertanyaan.tipe === 'Pilihan Ganda'"
                v-model="jawaban[n]"
                :label="j.pertanyaan.jawaban4"
                value="D"
              ></v-checkbox>
              <v-text-field
                v-if="j.pertanyaan.tipe === 'Essay'"
                v-model="j.jawabanEssayUser"
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
      // soals: 10,
      vertical: false,
      altLabels: false,
      editable: true,
      // jawaban: [],
      jawaban: [
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
    axios
      .get('http://localhost:8000/hasil/cari/' + this.$route.query.hasil)
      .then((resp) => {
        console.log(resp.data)
        this.jawaban = resp.data.jawaban
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
    }
  }
}
</script>
