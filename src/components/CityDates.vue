<template>
  <div class="container">
    <p><slot></slot></p>
  </div>
</template>

<script>
export default {
  name: 'city-dates'
}
</script>

<style scoped>
div {
  max-width: 800px;
  margin: auto;
  padding: 0 1rem;
}

p {
  font-size: 1.25rem;
  font-style: italic;
}
</style>