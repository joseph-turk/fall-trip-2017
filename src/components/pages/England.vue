<template>
  <main>
    <country-hero :image="image" id="13">England</country-hero>

    <country-content>
      We ended our trip in England—London, to be specific. We had only one night there, but it was still amazing.
    </country-content>

    <country-subheading>London</country-subheading>

    <country-content dropCap="true">
      Thursday, our last real day of the trip, we took a train from Edinburgh down to London. It was a bit of a long ride, but it was nice to not be driving for a change. And we got in to London shortly after 1:00 PM—easily the earliest we got in to any city on the trip.
    </country-content>

    <country-content>
      London was sunny and warm, a much-needed change from the rest of the trip. We were tired, but we decided to walk to see the sights anyway. It was a pleasant reminder of how much we enjoy just wandering and exploring a city as tourists.
    </country-content>

    <country-content>
      We waked a couple miles from our hotel down to Buckingham Palace. It was cooler than we expected, and we bought a Christmas ornament from the palace gift shop. From there, we wandered through a garden. There were multiple people feeding pigeons from their hands. That was weird. But the garden was really nice, and the weather was amazing.
    </country-content>

    <country-content>
      London felt like a more approachable version of New York. It's not so big, and the pace isn't so fast, so it's more relaxing and easier just wander.
    </country-content>

    <country-content>
      On the way down to the palace, we also went in to a couple shops, including a department store that was opened in 1707. It was charming, and we bought tea and biscuits to bring back.
    </country-content>

    <country-content>
      We walked from the palace to Big Ben and Westminster Abbey. Big Ben was under construction, which was disappointing, but they were still very cool to see.
    </country-content>

    <country-content>
      By the time we were heading away from Westminster, both Alison and I were getting extremely tired—we'd been up since 6:15 that morning and had walked about 5 miles already. So we decided to just start heading back to the hotel, with a plan for dinner on the way.
    </country-content>

    <country-content>
      Lindsay had given Alison a recommendation for an Indian restaurant on our way. Unfortunately, the line waiting for a table at the restaurant was huge, so we bailed. Instead, we stopped at another, smaller Indian restaurant that had no wait.
    </country-content>

    <country-content>
      It turned out to be the oldest north Indian restaurantin the UK—opened in 1947. The service was pretty bad, but the food was great! I got Chicken Madras and Alison got Tandoori Chicken. The waiter double-checked with me that I would be OK with the spice level of my dish (the menu called the sauce "fiery"), which is always a good sign.
    </country-content>

    <country-content>
      We walked back from the restaurant to our hotel after dinner and enjoyed a last, relaxing night of the trip. We watched British TV, which features so many panel-formatted shows, and chatted about the trip.
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
  data () {
    return {
      image: '/static/england-header.jpg'
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
