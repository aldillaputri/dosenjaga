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
