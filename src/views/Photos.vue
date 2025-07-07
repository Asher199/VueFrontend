<template>
  <div>
    <h1>Photos</h1>
    <div v-if="loading">Loading...</div>
    <div v-else class="grid">
      <div v-for="photo in photos" :key="photo.id" class="card">
        <h3>{{ photo.title }}</h3>
        <p>{{ photo.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      photos: [],
      loading: true,
    };
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/photos').then(res => {
      this.photos = res.data;
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
