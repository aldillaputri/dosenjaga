<template>
  <v-card max-width="400" class="mx-auto" outlined>
    <v-overflow-btn
      class="my-2"
      :items="dropdown_edit"
      label="Cari Mata Kuliah..."
      editable
      item-value="text"
    ></v-overflow-btn>

    <v-row dense>
      <v-col v-for="(item, i) in items" :key="i" cols="12">
        <v-card>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title
                class="subtitle-2"
                v-text="item.soal"
              ></v-card-title>
              <v-card-text class="caption" v-text="item.author"></v-card-text>
              <v-card-actions>
                <v-btn small color="primary">Tambahkan</v-btn>
              </v-card-actions>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        soal: 'Sebutkan macam-macam constraint di relasi database!',
        author: 'Budi Purnomo'
      },
      {
        soal: 'Apa yang di maksud dengan foreign key?',
        author: 'Larasati'
      }
    ],
    dropdown_edit: [
      { text: 'Keamanan Jaringan' },
      { text: 'Basis Data' },
      { text: 'Pemrograman Framework' },
      { text: 'Agama' },
      { text: 'Bahasa Inggris' },
      { text: 'Pendidikan Kewarganegaraan' },
      { text: 'Metodologi Riset' }
    ]
  })
}
</script>
