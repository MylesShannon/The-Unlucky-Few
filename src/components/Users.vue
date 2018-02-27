<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="orange" dark>
          <v-toolbar-title>{{ "\{\{Your Team Name Here\}\}" }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="users.shuffleUsers()">
            <v-icon>shuffle</v-icon>
          </v-btn>
        </v-toolbar>
        <div class="px-2 pt-1">
          <v-form @submit="users.addUser($event, userInput); userInput = ''">
            <v-text-field
              color="blue darken-4"
              v-model="userInput"
              name="user-input"
              label="Stand Up Member"
            ></v-text-field>
          </v-form>
        </div>
        <v-list>
          <v-list-tile v-if="users.users.length === 0">
            <v-list-tile-content>
               <v-list-tile-title><i>Add a Member!</i></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile v-for="(user, index) in users.users" :key="index">
            <v-list-tile-content>
               <v-list-tile-title v-if="index >= 0">{{ index+1+'. '+user.username }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action @click="$data.removeUser(user)">
              <v-btn icon>
                <v-icon>close</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
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
    return {
      removeUser: this.users.removeUser,
      userInput: ''
    }
  }
}
</script>