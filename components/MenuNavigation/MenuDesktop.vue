<template>
  <v-navigation-drawer clipped app permanent hide-overlay>
    <v-list-item class="mt-3">
      <v-list-item-avatar size="60">
        <v-img src="/user.png" />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="subtitle-1 font-weight-bold"
          >Bahrul Amaruddin</v-list-item-title
        >
        <v-list-item-subtitle>Dosen</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-btn rounded class="text-none indigo" dark>Update</v-btn>
      </v-list-item-content>
    </v-list-item>
    <v-divider />
    <v-list nav dense>
      <v-list-item-group color="primary">
        <v-list-item v-for="(menu, i) in menus" :key="i">
          <v-list-item-icon>
            <v-icon v-text="menu.icon" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="body-2" v-text="menu.text" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-logout-variant mdi-rotate-180</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="body-2" v-text="`Keluar`" />
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      menus: [
        { icon: 'mdi-home-outline', text: 'Beranda' },
        { icon: 'mdi-book-outline', text: 'Quiz Online' },
        { icon: 'mdi-question', text: 'Bank Soal' }
      ]
    }
  }
}
</script>
