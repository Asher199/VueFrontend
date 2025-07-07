<template>
  <div>
    <h1>Todos</h1>
    <div v-if="loading">Loading...</div>
    <div v-else class="grid">
      <div v-for="todo in todos" :key="todo.id" class="card">
        <h3>{{ todo.title }}</h3>
        <p>{{ todo.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      todos: [],
      loading: true,
    };
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
      this.todos = res.data;
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
