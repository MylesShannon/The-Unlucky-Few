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
      addUser: function(event, username) {
        event.preventDefault();
        // add a new user, return list of new users
        let newUserId = this.users.length >= 1 ? this.users[this.users.length - 1].id + 1: 0;
        this.users.push({id: newUserId, username: username});
        data.$cookie.set('users', JSON.stringify(this.users));
        return this.users;
      },
      removeUser: function(userId) {
        // remove an existing user by user id
        for(var i =0; i < this.users.length; i++) {
          if(this.users[i].id.toString() == userId) {
            this.users.splice(index, 1);
            this.$cookie.set('users', JSON.stringify(this.users));
            return this.users;
          }
        }
      },
      shuffleUsers: function() {
        const array = this.users.slice(0);
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        this.users = array;
      }
    }
  }
}
</script>
