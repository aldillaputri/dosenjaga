<template>
  <v-card class="pa-5">
    <v-row>
      <v-col cols="12" class="pa-5">
        <create-soal></create-soal>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import CreateSoal from '~/components/BankSoal/MultipleGenerator.vue'
export default {
  components: {
    CreateSoal
  }
}
</script>
