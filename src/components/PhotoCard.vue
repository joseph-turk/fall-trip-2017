<template>
  <div class="outer">
    <div class="inner">
      <img :src="smallSrc" :alt="photo.title">
      <router-link :to="photoLink">
        <div class="overlay">
          <h3>{{ photo.title }}</h3>
          <p>{{ photo.location }}, {{ photo.country }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { fbDatabase } from '@/firebase'

export default {
  name: 'PhotoCard',
  firebase () {
    return {
      photo: {
        source: fbDatabase.ref(`/${this.id - 1}`),
        asObject: true
      }
    }
  },
  props: ['id'],
  computed: {
    photoLink () {
      return `/photo/${this.id}`
    },
    bigSrc () {
      const country = this.photo.country.toLowerCase()
      return `/static/photos/${country}-large-${this.photo.id}.jpg`
    },
    mediumSrc () {
      const country = this.photo.country.toLowerCase()
      return `/static/photos/${country}-medium-${this.photo.id}.jpg`
    },
    smallSrc () {
      const country = this.photo.country.toLowerCase()
      return `/static/photos/${country}-small-${this.photo.id}.jpg`
    }
  }
}
</script>

<style scoped>
h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.outer {
  margin-bottom: 1rem;
  border: 1px solid var(--color__background);
  border-radius: 2px;
  background-size: cover;
  cursor: pointer;
  break-inside: avoid;
  position: relative;
}

img {
  width: 100%;
  height: 100%;
  margin-bottom: -2px;
  border-radius: 2px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
  background-color: var(--color__secondary);
  opacity: 0;
  transition: all 0.2s ease-in-out;
  color: var(--color__primary_text);
}

.overlay:hover {
  opacity: 0.8;
}
</style>
