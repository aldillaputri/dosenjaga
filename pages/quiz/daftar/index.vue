<template>
  <v-card class="pa-5" outlined>
    <v-row>
      <v-col cols="9">
        <v-icon>mdi-folder-multiple</v-icon>&nbsp; Data Kuis
      </v-col>
      <v-col cols="3">
        <button-create-quiz></button-create-quiz>
      </v-col>
    </v-row>
    <v-row>
      <drop-down-matkul></drop-down-matkul>
      <card-quiz></card-quiz>
    </v-row>
  </v-card>
</template>

<script>
import DropDownMatkul from '~/components/QuizDosen/DropDownMatkul.vue'
import CardQuiz from '~/components/QuizDosen/CardQuiz.vue'
import ButtonCreateQuiz from '~/components/QuizDosen/ButtonCreateQuiz.vue'
export default {
  components: {
    DropDownMatkul,
    CardQuiz,
    ButtonCreateQuiz
  }
}
</script>
