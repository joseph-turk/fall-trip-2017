<template>
  <main>
    <country-hero id="150">England</country-hero>

    <country-content>
      We ended our trip in England—London, to be specific. We had only one night there, but we made the most of it.
    </country-content>

    <country-subheading>London</country-subheading>

    <country-content dropCap="true">
      Thursday, our last real day of the trip, we took a train from Edinburgh down to London. It was a bit of a long ride, but it was nice to not be driving for a change.
    </country-content>

    <country-content>
      We arrived at King's Cross station in London and immediately headed to Platform 9 &frac34;, where there's a Harry Potter shop and photo opportunity. Alison was not able to find the Hogwart's Express, in spite of what the photo we took might lead you to believe.
    </country-content>

    <photo-with-caption id="149"/>

    <country-content>
      London was sunny and warm, a much-needed change from the rest of the trip. We were tired, but we decided to walk to see the sights anyway. It was a pleasant reminder of how much we enjoy just wandering and exploring a city as tourists.
    </country-content>

    <country-content>
      We walked a couple miles from our hotel down to Buckingham Palace. On the way, we stopped in a couple shops, including a department store that was opened in 1707. It was charming, and we bought tea and biscuits to bring back. The palace itself was cooler than we expected it to be, and we bought a Cristmas ornament from the palace gift shop.
    </country-content>

    <photo-with-caption id="160"/>

    <country-content>
      From there, we wandered through a garden. There were multiple people feeding pigeons from their hands. That was weird. But the garden was really nice, and the weather was amazing. London felt like a more approachable version of New York. It's not so big, and the pace isn't so fast, so it's more relaxing and easier just wander.
    </country-content>

    <country-content>
      We walked from the garden to Big Ben and Westminster Abbey. Big Ben was under construction, but it was still very cool to see.
    </country-content>

    <photo-with-caption id="170"/>

    <country-content>
      After walking around by Big Ben and Westminster Abbey, we walked along the River Thames. The area down by the river was pleasant and reminded us a bit of walking along the banks of the Seine in Paris.
    </country-content>

    <photo-with-caption id="179"/>

    <country-content>
      We stopped for dinner at an Indian restaurant for dinner. It turned out to be the oldest north Indian restaurantin the UK—opened in 1947—and the food was great! Joe got Chicken Madras and Alison got Tandoori Chicken. The waiter double-checked with Joe that he would be OK with the spice level of the Chicken Madras (the menu called the sauce "fiery"), which is always a good sign.
    </country-content>

    <country-content>
      We walked back from the restaurant to our hotel after dinner and enjoyed a last, relaxing night of the trip. London was a short stop on the trip,  but we were very glad that we spent at least one night there rather than just flying out right away. Given the chance, we'd definitely go back and spend more time.
    </country-content>

    <page-nav-buttons>
      <router-link-button slot="first-button"
                          to="/photos"
                          type="primary">View All Photos</router-link-button>
    </page-nav-buttons>
  </main>
</template>

<script>
import CountryHero from '@/components/CountryHero.vue'
import CountryContent from '@/components/CountryContent.vue'
import CountrySubheading from '@/components/CountrySubheading.vue'
import PhotoWithCaption from '@/components/PhotoWithCaption.vue'
import RouterLinkButton from '@/components/RouterLinkButton.vue'
import PageNavButtons from '@/components/PageNavButtons.vue'

export default {
  name: 'england',
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
