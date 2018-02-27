<template>
  <div class="Users">
    <ul id="user-list">
      <li v-for="user in users.getUsers()" :key="user.id">
        <p>id: {{ user.id }} username: {{ user.username }}</p>
      </li>
    </ul>
    <form id="offer-form" v-on:submit="newUSer = users.addUser(newUser.username)">  
      <input v-model="newUser.username" />
      <input type="submit"/>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Users',
  props: {
    users: Object
  },
  data: {
    newUser: {
      username: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  font-weight: bold;
}
</style>
