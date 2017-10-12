<template>
  <main>
    <div class="container">
      <h2>Photos</h2>

      <div class="button-container">
        <button :class="{selected: ireland}"
                @click="ireland = !ireland">
                Ireland</button>
        <button :class="{selected: scotland}"
                @click="scotland = !scotland">
                Scotland</button>
        <button :class="{selected: england}"
                @click="england = !england">
                England</button>
      </div>
    </div>
    
    <div class="container photo-grid">
      <photo-card v-for="photo in photos"
        :key="photo.id"
        :id="photo.id"
        v-show="filterPhoto(photo.country)"/>
    </div>
  </main>
</template>

<script>
import PhotoCard from '@/components/PhotoCard.vue'
import { fbDatabase } from '@/firebase'

var photosRef = fbDatabase.ref()

export default {
  name: 'photos',
  firebase: {
    photos: photosRef
  },
  data () {
    return {
      ireland: true,
      scotland: true,
      england: true
    }
  },
  methods: {
    filterPhoto (country) {
      return this[country.toLowerCase()]
    }
  },
  components: { PhotoCard }
}
</script>

<style scoped>
h2 {
  margin: 1rem 0;
}

@media (min-width: 800px) {
  h2 {
    margin-top: 2rem;
  }
}

button {
  padding: 1rem;
  background-color: var(--color__secondary);
  color: var(--color__primary_text);
  border: none;
  border-radius: 2px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  width: 100%;
  cursor: pointer;
  transition: all 0.1s;
  outline: none;
  font-size: 1rem;
  font-weight: 700;
}

button:hover {
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25);
}

.selected {
  background-color: var(--color__primary);
  color: var(--color__background);
  box-shadow: none;
}

.selected:hover {
  box-shadow: none;
}

.button-container {
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
}

.photo-grid {
  column-count: 2;
  padding-bottom: 2rem;
}

@media (min-width: 700px) {
  .photo-grid {
    column-count: 3;
  }
}

@media (min-width: 1000px) {
  .photo-grid {
    column-count: 4;
  }
}
</style>
