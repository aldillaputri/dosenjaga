<template>
  <v-card class="pa-5" outlined>
    <v-row>
      <v-col cols="9">
        <v-icon>mdi-folder-multiple</v-icon>&nbsp; Data Kuis
      </v-col>
    </v-row>
    <v-row>
      <enrolled-kuis></enrolled-kuis>
    </v-row>
  </v-card>
</template>

<script>
import EnrolledKuis from '~/components/QuizMahasiswa/EnrolledKuis.vue'
export default {
  components: {
    EnrolledKuis
  }
}
</script>
