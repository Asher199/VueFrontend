<template>
  <div>
    <h1>Users</h1>
    <div v-if="loading">Loading...</div>
    <div v-else class="grid">
      <div v-for="user in users" :key="user.id" class="card">
        <h3>{{ user.name }}</h3>
        <p>{{ user.email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      users: [],
      loading: true,
    };
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      this.users = res.data;
      this.loading = false;
    });
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}
.card {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
}
</style>
