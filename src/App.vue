<template>
  <v-app dark>
    <v-navigation-drawer app></v-navigation-drawer>
    <v-toolbar app></v-toolbar>
    <v-content>
      <Index></Index>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import 'vuetify/dist/vuetify.min.css'
import Index from './components/Index.vue'

export default {
  name: 'app',
  components: {
    Index
  }
}
</script>