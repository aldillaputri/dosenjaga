<template>
  <v-navigation-drawer clipped app permanent hide-overlay>
    <v-list-item class="mt-3">
      <v-list-item-avatar size="60">
        <v-img src="/user.png" />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="subtitle-1 font-weight-bold">
          {{ email }}
        </v-list-item-title>
        <v-list-item-subtitle>Dosen</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-btn rounded class="text-none indigo" dark>Update</v-btn>
      </v-list-item-content>
    </v-list-item>
    <v-divider />
    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Beranda</v-list-item-title>
      </v-list-item>

      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="subItem in item.items"
          :key="subItem.title"
          v-model="subItem.active"
          :to="subItem.link"
        >
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Keluar</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      email: this.$auth.user.email,
      items: [
        {
          action: 'mdi-forum',
          title: 'Kuis Online',
          items: [
            { title: 'Data Kuis', link: '/quiz/daftar' },
            { title: 'Buat Kuis', link: '/quiz/pilihanganda' }
            // { title: 'Buat Kuis Test', link: '/quiz/buatkuis' }
          ]
        },
        {
          action: 'mdi-forum',
          title: 'Kuis Online (Mhs)',
          items: [
            { title: 'Data Kuis', link: '/quiz-mahasiswa/data' },
            { title: 'History Kuis', link: '/quiz-mahasiswa/history' }
          ]
        },
        {
          action: 'mdi-comment-question-outline',
          title: 'Bank Soal',
          items: [
            { title: 'Daftar Bank Soal', link: '/banksoal/daftar' },
            { title: 'Pilihan Ganda', link: '/banksoal/pilihanganda' },
            { title: 'Essay', link: '/banksoal/essay' }
          ]
        }
      ]
    }
  }
}
</script>
