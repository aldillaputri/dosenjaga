<template>
  <v-card class="pa-5">
    <v-row>
      <v-col>
        <edit-quiz></edit-quiz>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import EditQuiz from '~/components/QuizDosen/EditQuiz.vue'
export default {
  components: {
    EditQuiz
  }
}
</script>
