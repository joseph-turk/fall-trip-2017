<template>
<div>
  <h3><slot></slot></h3>
</div>
</template>

<script>
export default {
  name: 'coutry-subheading'
}
</script>

<style scoped>
div {
  max-width: 800px;
  margin: auto;
  padding: 0 1rem;
}

h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  margin-top: 1.5rem;
}
</style>