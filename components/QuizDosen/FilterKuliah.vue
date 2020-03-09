<template>
  <v-row>
    <!-- Kuliah -->
    <v-col>
      <v-overflow-btn
        class="my-2"
        :items="dropdown_edit"
        label="Kuliah"
        editable
        item-value="nomor"
        item-text="matakuliah.matkul"
      ></v-overflow-btn>
    </v-col>
  </v-row>
</template>
<script>
import axios from 'axios'

export default {
  data: () => ({
    dropdown_edit: []
  }),
  mounted() {
    axios
      .get(
        'http://localhost:8000/kuliah/cari_all?user=' + this.$auth.user.nomor
      )
      .then((resp) => {
        this.dropdown_edit = resp.data
      })
  }
}
</script>
