<template>
  <main>
    <country-hero :image="image">Ireland</country-hero>

    <country-content dropCap="true">
      We spent three nights in Ireland: one in the Republic of Ireland (Dublin) and then two in Northern Ireland (Belfast). Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, alias! Quas exercitationem inventore rem nesciunt impedit, alias id quibusdam praesentium sunt, asperiores labore voluptatum, suscipit rerum in perspiciatis iste doloribus?
    </country-content>

    <country-subheading>Dublin</country-subheading>

    <country-content>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit placeat eaque architecto nesciunt, ullam quis voluptatibus ipsa, corporis, error cumque eos reiciendis nihil impedit repudiandae doloremque consequuntur. Porro, neque aliquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eligendi facilis a, repellat nobis dolor possimus laboriosam? Earum deleniti neque porro praesentium, hic perferendis expedita ratione iusto at est minus!
    </country-content>

    <photo-with-caption id="10"/>
    
    <country-content>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit placeat eaque architecto nesciunt, ullam quis voluptatibus ipsa, corporis, error cumque eos reiciendis nihil impedit repudiandae doloremque consequuntur. Porro, neque aliquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eligendi facilis a, repellat nobis dolor possimus laboriosam? Earum deleniti neque porro praesentium, hic perferendis expedita ratione iusto at est minus!
    </country-content>

    <country-subheading>Belfast</country-subheading>

    <photo-with-caption id="11"/>

    <country-content>
      We spent three nights in Ireland: one in the Republic of Ireland (Dublin) and then two in Northern Ireland (Belfast). Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, alias! Quas exercitationem inventore rem nesciunt impedit, alias id quibusdam praesentium sunt, asperiores labore voluptatum, suscipit rerum in perspiciatis iste doloribus?
    </country-content>

    <page-nav-buttons>
      <router-link-button slot="first-button" to="/photos">View All Photos</router-link-button>
      <router-link-button slot="second-button" to="/scotland" type="primary">Continue to Scotland</router-link-button>
    </page-nav-buttons>
  </main>
</template>

<script>
import CountryHero from '@/components/CountryHero'
import CountryContent from '@/components/CountryContent'
import CountrySubheading from '@/components/CountrySubheading'
import PhotoWithCaption from '@/components/PhotoWithCaption'
import RouterLinkButton from '@/components/RouterLinkButton'
import PageNavButtons from '@/components/PageNavButtons'

export default {
  name: 'ireland',
  data () {
    return {
      image: '/static/dublin-header.png'
    }
  },
  components: {
    CountryHero,
    CountryContent,
    CountrySubheading,
    PhotoWithCaption,
    RouterLinkButton,
    PageNavButtons
  }
}
</script>

<style scoped>
.country-content {
  background-color: var(--color__background);
  padding-top: 2rem;
  padding-bottom: 2rem;
  max-width: 800px;
  margin: auto;
}
</style>
