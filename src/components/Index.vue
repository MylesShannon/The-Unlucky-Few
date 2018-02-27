<template>
  <v-container>
    <Users :users="$data" />
  </v-container>
</template>

<script>
import Users from './Users.vue'
import cookie from 'vue-cookie'

export default {
  name: 'Index',
  components: {
    Users
  },
  created: function () {
    console.log('created', this);
    if(cookie.get('unluckyOnes') === undefined) {
      cookie.set('unluckyOnes', {users: [
        {id: 1, username: 'Myles'}
      ]});
    }
    this.$data.getUsers();
  },
  data: function() {
    return {
      users: [
        {id: 0, username: 'Myles'},
        {id: 1, username: 'Stephen'}
      ],
      getUsers: function() {
        // get list off users from cookie
        this.users = cookie.get('unluckyOnes');
        return this.users;
      },
      addUser: function(username) {
        // add a new user, return list of new users
        let existingUsers = this.users;
        let newUserId = existingUsers[existingUsers.length - 1].id + 1;
        let newUserList = existingUsers.push({id: newUserId, username: username});
        cookie.set('unluckyOnes', newUserList);
        return newUserList;
      },
      removeUser: function(userId) {
        // remove an existing user by user id
        let existingUsers = this.users;
        existingUsers.forEach(function(user, index) {
          if(user.id === userId) {
            let newUserList = existingUsers.splice(index, 1);
            cookie.set('unluckyOnes', newUserList);
            return newUserList;
          }
        })
      }
    }
  }
}
</script>
