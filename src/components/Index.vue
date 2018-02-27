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
        let users = JSON.parse(data.$cookie.get('users'));
        this.users = users;
        return users;
      },
      addUser: function(username) {
        // add a new user, return list of new users
        let existingUsers = this.users;
        let newUserId = existingUsers[existingUsers.length - 1].id + 1;
        let newUserList = existingUsers.push({id: newUserId, username: username});
        data.$cookie.set('users', JSON.parse(newUserList));
        return newUserList;
      },
      removeUser: function(userId) {
        // remove an existing user by user id
        let existingUsers = this.users;
        existingUsers.forEach(function(user, index) {
          if(user.id === userId) {
            let newUserList = existingUsers.splice(index, 1);
            data.$cookie.set('users', JSON.parse(newUserList));
            return newUserList;
          }
        })
      }
    }
  }
}
</script>
