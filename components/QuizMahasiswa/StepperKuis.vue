<template>
  <div>
    <v-stepper v-model="e1" non-linear vertical>
      <template v-for="n in soals">
        <v-stepper-step
          :key="`${n}-step`"
          :complete="e1 > n"
          :step="n"
          :rules="[() => false]"
          editable
          >Soal {{ n }}</v-stepper-step
        >

        <v-stepper-content :key="`${n}-content`" :step="n">
          <v-card class="mb-12" outlined>
            <p class="text ml-3">(Pilih 1) Ada berapa relasi database?</p>
            <div class="ml-3">
              <p>{{ selected }}</p>
              <v-checkbox v-model="selected" label="1" value="A"></v-checkbox>
              <v-checkbox v-model="selected" label="2" value="B"></v-checkbox>
              <v-checkbox v-model="selected" label="3" value="C"></v-checkbox>
              <v-checkbox v-model="selected" label="4" value="D"></v-checkbox>
            </div>
          </v-card>

          <v-btn color="primary" @click="nextStep(n)">Continue</v-btn>

          <v-btn text>Cancel</v-btn>
        </v-stepper-content>
      </template>
    </v-stepper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      e1: 1,
      soals: 10,
      vertical: false,
      altLabels: false,
      editable: true
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
