<template>
  <v-card class="pa-5" outlined>
    <v-row>
      <v-col cols="9">
        <v-icon>mdi-comment-question-outline</v-icon>&nbsp; Bank Soal
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <daftar></daftar>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import Daftar from '~/components/BankSoal/ListBankSoal.vue'
export default {
  components: {
    Daftar
  }
}
</script>
