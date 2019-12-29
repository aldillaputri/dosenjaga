<template>
  <v-card class="pa-5">
    <v-row>
      <v-col cols="9">
        <v-icon>mdi-file-multiple</v-icon>&nbsp; Hasil Kuis
      </v-col>
      <v-col right cols="3">
        <button-back></button-back>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-5">
        <view-quiz></view-quiz>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import ViewQuiz from '~/components/QuizDosen/ViewQuiz.vue'
import ButtonBack from '~/components/QuizDosen/ButtonBack.vue'
export default {
  components: {
    ViewQuiz,
    ButtonBack
  }
}
</script>
