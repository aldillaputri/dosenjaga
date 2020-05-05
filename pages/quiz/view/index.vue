<template>
  <v-card class="pa-5">
    <v-row>
      <v-col cols="9">
        <v-icon>mdi-file-multiple</v-icon>&nbsp; Hasil Kuis
      </v-col>
      <v-col right cols="3">
        <v-btn color="primary" class="white--text">
          <v-icon left dark>mdi-backup-restore</v-icon>Publish Nilai
        </v-btn>
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
export default {
  components: {
    ViewQuiz
  }
}
</script>
