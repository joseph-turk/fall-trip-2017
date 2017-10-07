<template>
  <main>
    <img :src="photo.bigSrc">
    
    <div class="container">
      <h2>{{ photo.title }}</h2>

      <p>Taken in {{ photo.country }}</p>

      <p>{{ photo.description }}</p>

      <page-nav-buttons>
        <router-link-button slot="first-button" to="/photos">
                            Back to All Photos</router-link-button>
        <link-button slot="second-button" :href="photo.bigSrc"
                     type="primary"
                     download>Download Photo</link-button>
      </page-nav-buttons>
    </div>
  </main>
</template>

<script>
import PhotoData from '@/photoData.json'
import LinkButton from '@/components/LinkButton'
import RouterLinkButton from '@/components/RouterLinkButton'
import PageNavButtons from '@/components/PageNavButtons'

export default {
  name: 'single-photo',
  computed: {
    photo () {
      const photoId = parseInt(this.$route.params.id)
      return PhotoData.filter(photo => photo.id === photoId)[0]
    }
  },
  components: { LinkButton, RouterLinkButton, PageNavButtons }
}
</script>

<style scoped>
main {
  padding-top: 64px;
}
img {
  max-width: 100%;
  max-height: calc(100vh - 64px);
  display: block;
  margin: 0 auto 1rem;
}
.container {
  max-width: 800px;
}
</style>