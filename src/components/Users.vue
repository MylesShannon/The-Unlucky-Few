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
          <v-form @submit="users.addUser($event, userInput); userInput = ''">
            <v-text-field
              color="cyan"
              v-model="userInput"
              name="user-input"
              label="Stand Up Member"
            ></v-text-field>
          </v-form>
        </div>
        <v-list>
          <v-list-tile v-for="(user, index) in users.users" :key="index">
            <v-list-tile-content>
               <v-list-tile-title>{{index+1+'. '+user.username }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action @click="$data.removeUser(user.id)">
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
    let data = this;
    return {
      removeUser: this.users.removeUser,
      userInput: ''
    }
  }
}
</script>