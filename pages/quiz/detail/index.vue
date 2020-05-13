<template>
  <v-card class="pa-5">
    <v-row>
      <v-col class="pa-5">
        <detail-hasil-quiz></detail-hasil-quiz>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import DetailHasilQuiz from '~/components/QuizDosen/DetailHasilQuiz.vue'
export default {
  components: {
    DetailHasilQuiz
  }
}
</script>
