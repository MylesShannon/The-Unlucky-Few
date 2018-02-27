<template>
  <div class="Index">
    <Users :users="$data" />
  </div>
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
  },
  data: function() {
    return {
      getUsers: function() {
        // get list off users from 
        return cookie.get('unluckyOnes');
        // return [
        //   {id: 1, username: 'HelloWorld'}
        // ]
      },
      addUser: function(username) {
        // add a new user, return list of new users
        let existingUsers = this.getUsers();
        let newUserId = existingUsers[existingUsers.length - 1].id + 1;
        let newUserList = existingUsers.push({id: newUserId, username: username});
        cookie.set('unluckyOnes', newUserList);
        return newUserList;
      },
      removeUser: function(userId) {
        // remove an existing user by user id
        let existingUsers = this.getUsers();
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
