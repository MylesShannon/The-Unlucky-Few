<template>
  <v-app>
    <v-content>
      <Index></Index>
    </v-content>
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

<style>
#app {
  background-color: #e5e3e3;
}
</style>
