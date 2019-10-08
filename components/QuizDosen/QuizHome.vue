<template>
  <v-card class="pa-5">
    <v-form ref="form" v-model="valid" lazy-validation>
      <div>
        <v-icon>mdi-forum</v-icon>
        Buat Kuis
      </div>

      <v-text-field
        v-model="course"
        :counter="10"
        :rules="courseRules"
        label="Course"
        required
      ></v-text-field>

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
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date"
                label="Tanggal Kuis"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <div class="flex-grow-1"></div>
              <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)"
                >OK</v-btn
              >
            </v-date-picker>
          </v-menu>
        </v-col>
      </v-row>

      <!-- timepicker -->
      <template>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-menu
              ref="menu"
              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="start"
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
                v-model="start"
                :max="end"
                no-title
                @click:minute="$refs.menu.save(time)"
              ></v-time-picker>
            </v-menu>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-menu
              ref="menu"
              v-model="menu3"
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
                  label="Waktu Selesai"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-model="end"
                :min="start"
                no-title
              ></v-time-picker>
            </v-menu>
          </v-col>
        </v-row>
      </template>

      <!--     
      <v-select
        v-model="select"
        :items="items"
        :rules="[(v) => !!v || 'Item is required']"
        label="Item"
        required
      ></v-select> -->

      <v-container>
        <v-col>
          <v-btn class="mt-4" color="primary" @click="addQuestion">
            Add Question
          </v-btn>
        </v-col>
        <v-card-actions>
          <b>Total Points: {{ totalPoints }}</b>
          <v-spacer></v-spacer>
          <v-btn color="error" to="/">Cancel</v-btn>
          <v-btn color="normal" @click="reset">Reset</v-btn>
          <v-btn color="success" @click="validate">Create</v-btn>
        </v-card-actions>
      </v-container>
    </v-form>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    // datepicker
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,

    // timepicker
    time: null,
    start: null,
    end: null,

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
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    }
  }
}
</script>
