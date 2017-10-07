<template>
  <main>
    <country-hero :image="image">England</country-hero>
  </main>
</template>

<script>
import CountryHero from '@/components/CountryHero.vue'

export default {
  name: 'england',
  data () {
    return {
      image: '/static/england-header.jpg'
    }
  },
  components: { CountryHero }
}
</script>

<style scoped>
h1 {
  font-size: 4rem;
  color: red;
}
</style>
