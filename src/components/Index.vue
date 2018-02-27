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
    if(!this.$cookie.get('unluckyOnes')) {
      this.$cookie.set('unluckyOnes', JSON.stringify([]));
    }
    this.$data.getUsers();
  },
  data: function() {
    let data = this;
    return {
      users: [],
      getUsers: function() {
        // get list off users from cookie
        this.users = JSON.parse(data.$cookie.get('unluckyOnes').toString());
        return this.users;
      },
      addUser: function(event, username) {
        event.preventDefault();
        // add a new user, return list of new users
        this.users.push({id: Date.now(), username: username});
        data.$cookie.set('unluckyOnes', JSON.stringify(this.users));
        return this.users;
      },
      removeUser: function(user) {
        // remove an existing user by user id
        for(var i = 0; i < data.users.length; i++) {
          if(data.users[i].id == user.id) {
            data.users.splice(i, 1);
            data.$cookie.set('unluckyOnes', JSON.stringify(data.users));
            return data.users;
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
        data.$cookie.set('unluckyOnes', JSON.stringify(array));
        this.users = array;
      }
    }
  }
}
</script>
