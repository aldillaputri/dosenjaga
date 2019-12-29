<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="mahasiswa" :search="search">
      <template v-slot:item.keterangan="{ item }">
        <v-chip :color="getColor(item.keterangan)" dark>{{
          item.keterangan
        }}</v-chip>
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'Nama Mahasiswa',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Tanggal', value: 'tanggal' },
        { text: 'Benar', value: 'benar' },
        { text: 'Salah', value: 'salah' },
        { text: 'Kosong', value: 'kosong' },
        { text: 'Nilai', value: 'nilai' },
        { text: 'Keterangan', value: 'keterangan' }
      ],
      mahasiswa: [
        {
          name: 'Aldilla Putri',
          tanggal: '22 Desember 2019',
          benar: 15,
          salah: 3,
          kosong: 2,
          nilai: 80,
          keterangan: 'Lulus'
        },
        {
          name: 'Rizka Rahayu',
          tanggal: '22 Desember 2019',
          benar: 10,
          salah: 9,
          kosong: 1,
          nilai: 60,
          keterangan: 'Tidak Lulus'
        }
      ]
    }
  },
  methods: {
    getColor(keterangan) {
      if (keterangan === 'Lulus') return 'green'
      else if (keterangan === 'Tidak Lulus') return 'red'
      else return 'orange'
    }
  }
}
</script>
