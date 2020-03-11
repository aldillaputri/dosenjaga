<template>
  <v-card class="pa-5">
    <v-row>
      <v-col>
        <create-quiz></create-quiz>
      </v-col>

      <!-- <v-col cols="4">
        <insert-bank-soal></insert-bank-soal>
      </v-col>-->
    </v-row>
  </v-card>
</template>

<script>
import CreateQuiz from '~/components/QuizDosen/MultipleGenerator.vue'
// import InsertBankSoal from '~/components/QuizDosen/InsertBankSoal.vue'
export default {
  components: {
    CreateQuiz
    // InsertBankSoal
  }
}
</script>
