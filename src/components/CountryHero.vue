<template>
  <div class="city-hero" :style="{ backgroundImage: `url('${image}')`}">
    <div class="hero-overlay"></div>
    <div class="hero-container">
      <h2><slot>City</slot></h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountryHero',
  props: ['image']
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
  }
}

.city-content {
  background: var(--color__background);
  padding: 2rem 0;
}

.city-hero {
  margin-top: -1rem;
  margin-bottom: 2rem;
  height: 75vh;
  background-size: cover;
  background-color: var(--color__primary_text);
  background-attachment: fixed;
  display: flex;
  align-items: flex-end;
  position: relative;
}

.city-hero .hero-container {
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
