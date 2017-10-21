<template>
  <div class="hero" :style="{ backgroundImage: `url('${photoSrc}')`}">
    <div class="hero-overlay"></div>
    <div class="hero-container">
      <h2><slot>City</slot></h2>
    </div>
  </div>
</template>

<script>
import PhotoData from '@/photoData.json'

export default {
  name: 'CountryHero',
  props: ['id'],
  computed: {
    photo () {
      const photoId = parseInt(this.id)
      return PhotoData.filter(photo => photo.id === photoId)[0]
    },
    country () {
      return this.photo.country.toLowerCase()
    },
    photoSrc () {
      const photoId = parseInt(this.id)
      return `/static/photos/${this.country}-medium-${photoId}.jpg`
    }
  }
}
</script>

<style scoped>
h2 {
  color: var(--color__background);
  margin-bottom: 0.5rem;
}

@media (min-width: 1000px) {
  h2 {
    font-size: 4rem;
    margin-bottom: 0.75rem;
  }
}

@media (min-width: 1300px) {
  h2 {
    font-size: 5rem;
    margin-bottom: 1rem;
  }
}

.hero {
  margin-top: -1rem;
  margin-bottom: 2rem;
  height: 75vh;
  background-size: cover;
  background-color: var(--color__primary_text);
  background-position: bottom center;
  display: flex;
  align-items: flex-end;
  position: relative;
}

.hero .hero-container {
  z-index: 2;
  max-width: 1200px;
  padding: 0 1rem;
}

.hero-overlay {
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 30%;
  background: linear-gradient(to top, #333, rgba(0, 0, 0, 0) );
  z-index: 1;
}
</style>
