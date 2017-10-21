<template>
  <div class="card-container">
    <div class="card">
      <img :src="mediumSrc">
      <div class="caption">
        <caption>{{ photo.title }}</caption>
      </div>
    </div>
  </div>
</template>

<script>
  import { fbDatabase } from '@/firebase'

  export default {
    name: 'photo-with-caption',
    props: ['id'],
    firebase () {
      return {
        photo: {
          source: fbDatabase.ref(`/${this.id - 1}`),
          asObject: true
        }
      }
    },
    computed: {
      mediumSrc () {
        const country = this.photo.country.toLowerCase()
        return `/static/photos/${country}-medium-${this.photo.id}.jpg`
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