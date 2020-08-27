<template>
  <v-card class="pa-5">
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
