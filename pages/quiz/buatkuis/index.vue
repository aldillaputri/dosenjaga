<template>
  <v-card class="pa-5">
    <v-row>
      <v-col cols="7" class="pa-5">
        <quiz-description></quiz-description>
        <!-- <create-quiz></create-quiz> -->
      </v-col>
      <v-divider vertical class="ma-10"></v-divider>
      <v-col cols="4">
        <insert-bank-soal></insert-bank-soal>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
// import CreateQuiz from '~/components/QuizDosen/MultipleGenerator2.vue'
import QuizDescription from '~/components/QuizDosen/QuizDescription.vue'
import InsertBankSoal from '~/components/QuizDosen/InsertBankSoal.vue'
export default {
  components: {
    // CreateQuiz,
    QuizDescription,
    InsertBankSoal
  }
}
</script>
