<template>
  <v-card class="card-wrapper">
    <v-card-text>
      <v-row justify="center">
        <v-col md="8" class="mt-3">
          <v-img src="/logodosenjagabig.png" />
        </v-col>
        <v-col md="11" class="mt-5">
          <v-form>
            <v-text-field
              outlined
              placeholder="Email"
              prepend-inner-icon="mdi-email"
            />
            <v-text-field
              outlined
              :type="showPassword ? 'text' : 'password'"
              placeholder="Password"
              prepend-inner-icon="mdi-key"
            />
            <v-checkbox
              v-model="showPassword"
              class="pt-0 mt-0"
              label="Tampilkan Password"
            />
            <v-btn block large color="success">
              login
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      showPassword: false
    }
  }
}
</script>
<style scoped>
.card-wrapper {
  border-radius: 5px;
}
</style>
