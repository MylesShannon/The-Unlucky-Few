<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="cyan" dark>
          <v-toolbar-title>User List</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>
        <v-form>
        <v-text-field
          v-model="userInput"
          name="user-input"
          label="Stand Up Member"
        ></v-text-field>
        <v-btn @click="users.addUser(userInput)" color="success">Add</v-btn>
        </v-form>
        <v-list>
          <template v-for="(user, id) in users.getUsers()">
            <v-subheader :key="id">{{ user.username }}</v-subheader>
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
  data: () => ({
    userInput: ''
  })
}
</script>