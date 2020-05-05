<template>
  <v-card class="pa-5">
    <v-row>
      <v-col cols="9">
        <v-icon>mdi-folder-multiple</v-icon>&nbsp; Data Kuis
      </v-col>
      <v-col right cols="3">
        <v-btn color="primary" class="white--text" to="/quiz/create">
          <v-icon left dark>mdi-backup-restore</v-icon>Buat Kuis Baru
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-5">
        <card-quiz></card-quiz>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import CardQuiz from '~/components/QuizDosen/CardQuiz.vue'
export default {
  components: {
    CardQuiz
  }
}
</script>
