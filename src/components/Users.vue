<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="cyan" dark>
          <v-toolbar-title>{{ "\{\{Your Team Name Here\}\}" }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="users.shuffleUsers()">
            <v-icon>shuffle</v-icon>
          </v-btn>
        </v-toolbar>
        <div class="px-2">
          <v-form @submit="users.addUser($event, userInput)">
            <v-text-field
              color="cyan"
              v-model="userInput"
              name="user-input"
              label="Stand Up Member"
            ></v-text-field>
          </v-form>
        </div>
        <v-list>
          <template v-for="(user, id) in users.users">
            <v-subheader :key="id">
              {{ user.username }}
              <v-spacer></v-spacer>
              <v-btn @click="$data.removeUser(user.id)" icon>
                <v-icon>close</v-icon>
              </v-btn>
            </v-subheader>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Users',
  props: {
    users: Object
  },
  data: function() {
    let data = this;
    return {
      removeUser: this.users.removeUser,
      userInput: ''
    }
  }
}
</script>