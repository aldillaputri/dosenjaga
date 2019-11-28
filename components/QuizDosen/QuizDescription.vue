<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <div><v-icon>mdi-forum</v-icon>&nbsp;Deskripsi Kuis</div>

    <v-text-field
      v-model="judul"
      :rules="judulRules"
      label="Judul Kuis"
      required
    ></v-text-field>

    <!--datepicker-->
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <v-menu
          v-model="menuDate"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="date"
              label="Tanggal Mulai Kuis"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            @input="menuDate = false"
          ></v-date-picker>
        </v-menu>
      </v-col>
    </v-row>

    <!-- timepicker -->
    <template>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-menu
            ref="menu"
            v-model="timeStart"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="time"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="time"
                label="Waktu Mulai"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="timeStart"
              v-model="time"
              @click:minute="$refs.menu.save(time)"
            ></v-time-picker>
          </v-menu>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-menu
            ref="menu1"
            v-model="timeEnd"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="time1"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="time1"
                label="Waktu Selesai"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="timeEnd"
              v-model="time1"
              @click:minute="$refs.menu1.save(time1)"
            ></v-time-picker>
          </v-menu>
        </v-col>
      </v-row>
    </template>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    // datepicker
    date: new Date().toISOString().substr(0, 10),
    modal: false,
    menuDate: false,

    // timepicker
    menu: false,
    menu1: false,
    time: null,
    time1: null,
    timeStart: false,
    timeEnd: false,

    // text fields
    valid: true,
    name: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    select: null,
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    checkbox: false
  })
}
</script>
