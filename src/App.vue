<template>
  <v-app dark>
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