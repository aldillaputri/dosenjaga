<template>
  <!-- <v-container> -->
  <h1>Beranda</h1>

  <!-- </v-container> -->
</template>

<script>
export default {
  mounted() {
    // this.$router.push('/login')
    console.log(this.$auth.user.email)
  }
}
</script>
