<template>
  <div class="card-container">
    <div class="card">
      <img :src="photoSrc">
      <div class="caption">
        <caption>{{ photo.title }}</caption>
      </div>
    </div>
  </div>
</template>

<script>
  import PhotoData from '@/photoData.json'

  export default {
    name: 'photo-with-caption',
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
  .card-container {
    margin: 0 1rem;
  }
  .card {
    max-width: 600px;
    margin: 2rem auto;
    box-sizing: border-box;
    border-radius: 2px;
  }

  img {
    max-width: 100%;
    border-radius: 2px 2px 0 0;
  }

  .caption {
    background-color: var(--color__primary);
    color: var(--color__background);
    padding: 1rem 2rem;
    margin-top: -3px;
    border-radius: 0 0 2px 2px;
  }

  caption {
    display: inline;
  }
</style>