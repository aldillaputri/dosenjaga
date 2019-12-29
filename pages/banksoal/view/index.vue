<template>
  <v-card class="pa-5">
    <v-row>
      <v-col class="pa-5">
        <view-bank-soal></view-bank-soal>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import ViewBankSoal from '~/components/BankSoal/ViewBankSoal.vue'
export default {
  components: {
    ViewBankSoal
  }
}
</script>
