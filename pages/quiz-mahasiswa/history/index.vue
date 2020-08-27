<template>
  <v-card class="pa-5">
    <v-row>
      <v-col cols="9">
        <v-icon>mdi-file-multiple</v-icon>&nbsp; History Kuis Anda
      </v-col>
      <v-col right cols="3">
        <v-btn color="primary" class="white--text" to="/quiz/view">
          <v-icon left dark>mdi-backup-restore</v-icon>Kembali
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-5">
        <history-kuis></history-kuis>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import HistoryKuis from '~/components/QuizMahasiswa/HistoryKuis.vue'
export default {
  components: {
    HistoryKuis
  }
}
</script>
