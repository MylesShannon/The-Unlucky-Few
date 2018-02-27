<template>
  <v-app>
    <v-content>
      <Index></Index>
    </v-content>
    <v-footer class="pa-3">
      <div>Created by Myles Shannon &amp; Stephen Traiforos</div>
    </v-footer>
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
