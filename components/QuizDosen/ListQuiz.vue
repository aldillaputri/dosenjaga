<template>
  <v-row>
    <!-- Mata Kuliah -->
    <v-col :cols="9">
      <v-overflow-btn
        class="my-2"
        :items="dropdown_edit"
        label="Mata Kuliah"
        editable
        item-value="text"
      ></v-overflow-btn>
    </v-col>
    <v-col :cols="3">
      <v-radio-group v-model="row" row>
        <v-radio label="Pilihan Ganda" value="radio-1"></v-radio>
        <v-radio label="Essay" value="radio-2"></v-radio>
      </v-radio-group>
    </v-col>
    <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
      <v-card>
        <v-card-title class="subtitle-1" v-text="card.title"></v-card-title>
        <v-card-text v-text="card.subtitle"></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-eye</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-plus-circle</v-icon>
          </v-btn>
          <v-btn icon>
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
    dropdown_edit: [
      { text: 'Keamanan Jaringan' },
      { text: 'Basis Data' },
      { text: 'Pemrograman Framework' },
      { text: 'Agama' },
      { text: 'Bahasa Inggris' },
      { text: 'Pendidikan Kewarganegaraan' },
      { text: 'Metodologi Riset' }
    ],
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
