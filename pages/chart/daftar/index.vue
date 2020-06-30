<template>
  <v-card class="pa-5" outlined>
    <v-row>
      <v-col> <v-icon>mdi-chart-timeline-variant</v-icon>&nbsp; Chart </v-col>
    </v-row>
    <v-row>
      <v-col>
        <daftar></daftar>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import Daftar from '~/components/Chart/chart.vue'
export default {
  components: {
    Daftar
  }
}
</script>
