<template>
  <v-row>
    <!-- Mata Kuliah -->
    <v-col :cols="12">
      <v-overflow-btn
        class="my-2"
        :items="dropdown_edit"
        label="Nama Kuis"
        editable
        item-value="text"
      ></v-overflow-btn>
    </v-col>
    <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
      <v-card>
        <v-card-title class="subtitle-1" v-text="card.title"></v-card-title>
        <v-card-text v-text="card.subtitle"></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :loading="loading3"
            :disabled="loading3"
            color="primary"
            class="ma-2 white--text"
            @click="loader = 'loading3'"
          >
            Join
            <v-icon>mdi-arrow-up-bold</v-icon>
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
        title: 'Keamanan Jaringan',
        subtitle: 'Proxy Auth',
        flex: 3
      },
      {
        title: 'Pemodelan dan Simulasi',
        subtitle: 'Konsep Simulasi',
        flex: 3
      },
      {
        title: 'Teori Pemrograman Visual',
        subtitle: 'Connect to SQL Server',
        flex: 3
      },
      {
        title: 'Keamanan Jaringan',
        subtitle: 'Proxy Auth',
        flex: 3
      }
    ]
  })
}
</script>
