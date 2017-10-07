<template>
  <div :class="{dropcap: dropCap}">
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'CountryContent',
    props: {
      dropCap: {
        default: false
      }
    }
  }
</script>

<style scoped>
div {
  background-color: var(--color__background);
  max-width: 800px;
  margin: auto;
  padding: 0 1rem 0;
}

.dropcap p:first-child:first-letter {
  color: var(--color__primary);
  float: left;
  font-size: 3em;
  line-height: 1em;
  padding-right: 8px;
}
</style>