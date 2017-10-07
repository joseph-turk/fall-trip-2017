<template>
  <a :href="href" :class="type" :download="download"><slot></slot></a>
</template>

<script>
export default {
  name: 'link-button',
  props: ['href', 'type', 'download']
}
</script>

<style scoped>
a {
  padding: 1rem;
  background-color: var(--color__secondary);
  color: var(--color__primary_text);
  border-radius: 2px;
  text-decoration: none;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
}

a:hover {
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
}

.primary {
  background-color: var(--color__primary);
  color: var(--color__background);
}
</style>