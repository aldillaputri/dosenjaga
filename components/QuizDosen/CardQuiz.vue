<template>
  <v-row>
    <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
      <v-card>
        <v-card-title class="subtitle-1" v-text="card.title"></v-card-title>
        <v-card-text v-text="card.subtitle"></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon color="info">mdi-eye</v-icon>
          </v-btn>
          <v-btn icon color="secondary">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    cards: [
      {
        title: 'Kuis Bab Proxy Auth',
        subtitle: '11 November 2019',
        flex: 3
      },
      {
        title: 'Kuis Bab Epidemic Model',
        subtitle: '13 November 2019',
        flex: 3
      },
      {
        title: 'Kuis Bab Distribusi Kontinyu',
        subtitle: '15 November 2019',
        flex: 3
      },
      {
        title: 'Kuis Bab Diagram Pert',
        subtitle: '17 November 2019',
        flex: 3
      }
    ]
  })
}
</script>
