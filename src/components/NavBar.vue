<template>
  <nav>
    <router-link to="/posts">Posts</router-link>
    <router-link to="/users">Users</router-link>
    <router-link to="/comments">Comments</router-link>
    <router-link to="/albums">Albums</router-link>
    <router-link to="/photos">Photos</router-link>
    <router-link to="/todos">Todos</router-link>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
  background: #eee;
  padding: 1rem;
}
a {
  text-decoration: none;
  color: #333;
}
.router-link-active {
  font-weight: bold;
  color: #42b983;
}
</style>
