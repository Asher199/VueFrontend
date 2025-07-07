<template>
  <div>
    <h1>Comments</h1>
    <div v-if="loading">Loading...</div>
    <div v-else class="grid">
      <div v-for="comment in comments" :key="comment.id" class="card">
        <h3>{{ comment.title }}</h3>
        <p>{{ comment.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      comments: [],
      loading: true,
    };
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/comments').then(res => {
      this.comments = res.data;
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
