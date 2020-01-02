<template>
  <v-container class="container-wrapper fill-height" fluid>
    <v-row justify="center" align="center" class="fill-height">
      <v-col cols="12" sm="10" md="4">
        <login-form-mobile class="hidden-md-and-up" />
        <login-form-desktop class="hidden-sm-and-down" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
// import { store } from '~/store/store'
export default {
  layout: 'none',
  head() {
    return {
      title: 'Login'
    }
  }
}
</script>
<style scoped>
.container-wrapper {
  background: #ebf3fc;
  width: 100vw;
  height: 100vh;
}
</style>
