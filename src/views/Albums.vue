<template>
  <div>
    <h1>Albums</h1>
    <div v-if="loading">Loading...</div>
    <div v-else class="grid">
      <div v-for="album in albums" :key="album.id" class="card">
        <h3>{{ album.title }}</h3>
        <p>{{ album.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      albums: [],
      loading: true,
    };
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/albums').then(res => {
      this.albums = res.data;
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
