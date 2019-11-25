<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col>
        <create-quiz></create-quiz>
      </v-col>
      <v-col>
        <insert-bank-soal></insert-bank-soal>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CreateQuiz from '~/components/QuizDosen/QuizMultipleGenerator.vue'
import InsertBankSoal from '~/components/QuizDosen/InsertBankSoal.vue'
export default {
  components: {
    CreateQuiz,
    InsertBankSoal
  }
}
</script>
