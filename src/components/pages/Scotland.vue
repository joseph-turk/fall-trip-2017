<template>
  <main>
    <country-hero :image="image">Scotland</country-hero>

    <country-content dropCap="true">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit placeat eaque architecto nesciunt, ullam quis voluptatibus ipsa, corporis, error cumque eos reiciendis nihil impedit repudiandae doloremque consequuntur. Porro, neque aliquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eligendi facilis a, repellat nobis dolor possimus laboriosam? Earum deleniti neque porro praesentium, hic perferendis expedita ratione iusto at est minus!
    </country-content>

    <country-content>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit placeat eaque architecto nesciunt, ullam quis voluptatibus ipsa, corporis, error cumque eos reiciendis nihil impedit repudiandae doloremque consequuntur. Porro, neque aliquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eligendi facilis a, repellat nobis dolor possimus laboriosam? Earum deleniti neque porro praesentium, hic perferendis expedita ratione iusto at est minus!
    </country-content>

    <photo-with-caption id="2"/>

    <country-content>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit placeat eaque architecto nesciunt, ullam quis voluptatibus ipsa, corporis, error cumque eos reiciendis nihil impedit repudiandae doloremque consequuntur. Porro, neque aliquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eligendi facilis a, repellat nobis dolor possimus laboriosam? Earum deleniti neque porro praesentium, hic perferendis expedita ratione iusto at est minus!
    </country-content>

    <page-nav-buttons>
      <router-link-button slot="first-button"
                          to="/photos">View All Photos</router-link-button>
      <router-link-button slot="second-button"
                          to="/england"
                          type="primary">Continue to England</router-link-button>
    </page-nav-buttons>
  </main>
</template>

<script>
import CountryHero from '@/components/CountryHero.vue'
import CountryContent from '@/components/CountryContent.vue'
import PhotoWithCaption from '@/components/PhotoWithCaption.vue'
import RouterLinkButton from '@/components/RouterLinkButton.vue'
import PageNavButtons from '@/components/PageNavButtons.vue'

export default {
  name: 'scotland',
  data () {
    return {
      image: '/static/scotland-header.jpg'
    }
  },
  components: {
    CountryHero,
    CountryContent,
    PhotoWithCaption,
    RouterLinkButton,
    PageNavButtons
  }
}
</script>

<style scoped>
h1 {
  font-size: 4rem;
  color: red;
}
</style>
