<template>
  <v-row>
    <!-- Kuliah -->
    <v-col>
      <v-overflow-btn
        class="my-2"
        :items="dropdown_edit"
        label="Kuliah"
        editable
        item-value="text"
      ></v-overflow-btn>
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
    ]
  })
}
</script>
