<template>
  <v-app light>
    <v-app-bar app color="primary" dark fixed clipped-left>
      <v-btn icon to="/beranda" class="hidden-sm-and-down">
        <v-avatar size="36">
          <v-img src="/icon.png" alt="Logo DOSENJAGA" />
        </v-avatar>
      </v-btn>
      <v-avatar size="36" class="hidden-md-and-up">
        <v-img src="/icon.png" alt="Logo DOSENJAGA" />
      </v-avatar>
      <v-toolbar-title class="title ml-3">DOSENJAGA</v-toolbar-title>
      <v-app-bar-nav-icon
        class="ml-4 hidden-sm-and-down"
        @click="miniVariant = !miniVariant"
      />
    </v-app-bar>
    <menu-desktop class="hidden-sm-and-down" />
    <menu-mobile class="hidden-md-and-up" />
    <v-content>
      <v-container>
        <!-- <quiz-home /> -->
        <!-- <add /> -->
        <!-- <multiple-create /> -->
        <essay-generator />
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
// import MultipleCreate from '~/components/BankSoal/MultipleCreate.vue'
import EssayGenerator from '~/components/BankSoal/EssayGenerator.vue'
export default {
  components: {
    // QuizHome
    // Add
    EssayGenerator
    // MultipleCreate
  },
  data() {
    return {
      miniVariant: false
    }
  }
}
</script>
