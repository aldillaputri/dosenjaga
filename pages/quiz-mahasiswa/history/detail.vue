<template>
  <v-card class="pa-5">
    <v-row>
      <v-col cols="9">
        <v-icon>mdi-file-multiple</v-icon>&nbsp; Detail Jawaban Anda
      </v-col>
      <v-col right cols="3">
        <v-btn color="primary" class="white--text" to="/quiz-mahasiswa/history">
          <v-icon left dark>mdi-backup-restore</v-icon>Kembali
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-5">
        <detail-history></detail-history>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import DetailHistory from '~/components/QuizMahasiswa/DetailHistory.vue'
export default {
  components: {
    DetailHistory
  }
}
</script>
