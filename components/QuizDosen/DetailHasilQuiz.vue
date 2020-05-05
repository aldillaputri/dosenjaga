<template>
  <div>
    <v-data-table :headers="headers" :items="data_jawaban">
      <template v-slot:item.skor="props">
        <v-edit-dialog
          :return-value.sync="props.item.skor"
          large
          persistent
          @save="save"
          @cancel="cancel"
          @open="open"
          @close="close"
        >
          <div>{{ props.item.skor }}</div>
          <template v-slot:input>
            <div class="mt-4 title">Update.skor</div>
          </template>
          <template v-slot:input>
            <v-text-field
              v-model="props.item.skor"
              :rules="[max25chars]"
              label="Edit"
              single-line
              counter
              autofocus
            ></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
    </v-data-table>

    <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
      {{ snackText }}
      <v-btn text @click="snack = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      snack: false,
      snackColor: '',
      snackText: '',
      max25chars: (v) => v.length <= 25 || 'Input too long!',
      pagination: {},
      headers: [
        { text: 'No.', value: 'no' },
        { text: 'Soal', value: 'soal' },
        { text: 'Jawaban Mahasiswa', value: 'jawaban_mhs' },
        { text: 'Kunci Jawaban', value: 'kunci_jawaban' },
        {
          text: 'Skor (Editable)',
          align: 'start',
          sortable: false,
          value: 'skor'
        }
      ],
      data_jawaban: [
        {
          no: 1,
          soal: 'Soal nomor 1',
          jawaban_mhs: 'Jawaban Mahasiswa ABCDEFGKHJSKJ',
          kunci_jawaban: 'Kunci Jawaban 12387428o6',
          skor: 15
        }
      ]
    }
  },
  mounted() {
    axios
      .get('http://localhost:8000/hasil/cari/' + this.$route.query.hasil)
      .then((resp) => {
        console.log(resp.data)
        this.jawaban = resp.data.jawaban
      })
  },
  methods: {
    save() {
      this.snack = true
      this.snackColor = 'success'
      this.snackText = 'Data saved'
    },
    cancel() {
      this.snack = true
      this.snackColor = 'error'
      this.snackText = 'Canceled'
    },
    open() {
      this.snack = true
      this.snackColor = 'info'
      this.snackText = 'Dialog opened'
    },
    close() {
      console.log('Dialog closed')
    }
  }
}
</script>
