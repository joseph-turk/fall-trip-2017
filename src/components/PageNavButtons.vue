<template>
<div>
  <slot name="first-button"></slot>
  <slot name="second-button"></slot>
</div>
</template>

<script>

export default {
  name: 'page-nav-buttons'
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-evenly;
  margin-top: 4rem;
}
</style>