<template>
  <v-card class="pa-5">
    <v-row>
      <v-col class="pa-5">
        <view-quiz></view-quiz>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import ViewQuiz from '~/components/QuizDosen/ViewQuiz.vue'
export default {
  components: {
    ViewQuiz
  }
}
</script>
