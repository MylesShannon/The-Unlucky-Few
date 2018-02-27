<template>
  <v-container>
    <Users :users="$data" />
  </v-container>
</template>

<script>
import Users from './Users.vue'

export default {
  name: 'Index',
  components: {
    Users
  },
  created: function () {
    // console.log('created', this);
    if(!this.$cookie.get('users')) {
      this.$cookie.set('users', JSON.stringify([]));
    }
    this.$data.getUsers();
  },
  data: function() {
    let data = this;
    return {
      users: [],
      getUsers: function() {
        // get list off users from cookie
        this.users = JSON.parse(data.$cookie.get('users').toString());
        return this.users;
      },
      addUser: function(username) {
        // add a new user, return list of new users
        let newUserId = this.users.length >= 1 ? this.users[this.users.length - 1].id + 1: 0;
        this.users.push({id: newUserId, username: username});
        data.$cookie.set('users', JSON.stringify(this.users));
        return this.users;
      },
      removeUser: function(userId) {
        // remove an existing user by user id
        this.users.forEach(function(user, index) {
          if(user.id === userId) {
            this.users = this.users.splice(index, 1);
            data.$cookie.set('users', JSON.stringify(this.users));
            return this.users;
          }
        })
      }
    }
  }
}
</script>
