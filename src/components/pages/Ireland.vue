<template>
  <main>
    <country-hero :image="image">Ireland</country-hero>

    <country-content>
      We spent three nights in Ireland: one in the Republic of Ireland (Dublin) and then two in Northern Ireland (Belfast). 
    </country-content>

    <country-subheading>Dublin</country-subheading>

    <country-content dropCap="true">
      We flew from Chicago to Dublin on Tuesday evening. We were pretty dead tired when we landed on Wednesday morning, but our room wasn't ready at the hostel yet, so we just dropped our bags and headed out to see the city.
    </country-content>

    <country-content>
      We got lunch at a traditional pub and then walked over to the Guinness Storehouse. The Storehouse was a weird place—pretty cool to see, but also not realy a brewery. Still, getting a pint at the top-floor bar with 360° views of Dublin was great.
    </country-content>

    <country-content>
      We checked in to our hostel after doing Guinness and headed out for an early dinner. It was only around 5:00, but we'd been up since the previous morning and were getting hit with jet lag pretty hard. We got fish and chips at a semi-cafeteria style place. It was fine, but we were too tired to really pay much attention to it.
    </country-content>

    <photo-with-caption id="10"/>
    
    <country-content>
      We spent Thursday morning bumming around Dublin before leaving for Belfast. We had an Irish breakfast—I tried black pudding, and it wasn't awful—and walked around the Trinity College area. We then caught our bus to Belfast.
    </country-content>

    <country-subheading>Belfast</country-subheading>

    <country-content dropCap="true">
      We walked around a bit more once we got to Belfast, including going to check out their public library. The library reminded us a lot of Philadelphia – a really cool old building from the outside, but just a normal library on the inside.
    </country-content>

    <country-content>
      For dinner, we got some very good food at a place run by a Michelin-starred chef. It was a pretty classy place, and felt much more like somewhere that we would have gone to in DC. After dinner, we went to a pub to have more beers and listen to some music. The band was good, and it was a fun evening.
    </country-content>

    <country-content>
      Friday was our trip to the Giant's Causeway. We booked a full day guided tour that went to several sights around Northern Ireland. We started by going to the Causeway itself, which is a set of bizarre rock formations on the northwestern coast. Walking and climbing around there felt otherworldly.
    </country-content>

    <country-content>
      After the Causeway, we stopped at Bushmill's distillery for lunch and a whiskey tasting. The food was OK, but the atmosphere was cool and the whiskey was surprisingly good.
    </country-content>

    <country-content>
      The other major stop for the day was at a rope bridge out to a tiny island. By this point, it had started raining and the wind had picked up. The bridge was narrow shaky, and slick. Not to mention being about 90 feet above jagged rocks. But we did it, and it was great! And as soon as we got back over it, the rain let up, the sun came out, and one of the most vibrant rainbows I've ever seen came out.
    </country-content>

    <country-content>
      For the rest of the tour, we wound our way through small towns and made a couple quick stops before heading back to Belfast.
    </country-content>

    <country-content>
      Belfast was really fun overall, and the Giant's Causeway tour was a highlight of the trip. We had been a little disappointed with Dublin, partially because we were just so tired the whole time we were there. But Belfast and the trip around Northern Ireland really made Ireland feel worthwhile.
    </country-content>

    <page-nav-buttons>
      <router-link-button slot="first-button"
                          to="/photos">View All Photos</router-link-button>

      <router-link-button slot="second-button"
                          to="/scotland"
                          type="primary">Continue to Scotland</router-link-button>
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