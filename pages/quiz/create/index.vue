<template>
  <v-card class="pa-5">
    <v-row>
      <v-col>
        <create-quiz></create-quiz>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import CreateQuiz from '~/components/QuizDosen/MultipleGenerator.vue'
export default {
  components: {
    CreateQuiz
  }
}
</script>
