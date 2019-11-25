<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col>
        <create-quiz-essay></create-quiz-essay>
      </v-col>
      <v-col>
        <insert-bank-soal></insert-bank-soal>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CreateQuizEssay from '~/components/QuizDosen/QuizEssayGenerator.vue'
import InsertBankSoal from '~/components/QuizDosen/InsertBankSoal.vue'
export default {
  components: {
    CreateQuizEssay,
    InsertBankSoal
  }
}
</script>
