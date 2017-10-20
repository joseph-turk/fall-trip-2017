<template>
  <main>
    <country-hero id="12">Ireland</country-hero>

    <country-content>
      Our journey began in Ireland. We spent three nights on the island: one in the Republic of Ireland (Dublin) and then two in Northern Ireland (Belfast).
    </country-content>

    <country-subheading>Dublin</country-subheading>

    <country-content dropCap="true">
      We flew from Chicago to Dublin on Tuesday evening. Neither of us slept much on the plane, so we were dead tired when we landed on Wednesday morning. Our room wasn't ready at the hostel, though, so we just dropped our bags and headed out to see the city.
    </country-content>

    <country-content>
      We got lunch at a pub just south of the Temple Bar area and then walked over to the Guinness Storehouse. The Storehouse was a weird place—more of a Guinness museum than a brewery. We walked through and learned about the history of Guinness (including the 9,000 year lease that Arthur Guinness signed for the St. James Gate brewery in 1759). We ended the tour by having a pint at the top-floor bar with 360° views of Dublin.
    </country-content>

    <photo-with-caption id="3"/>

    <country-content>
      We checked in to our hostel after doing Guinness and headed out for an early dinner. It was only around 5:00 PM, but we'd been up since the previous morning and the jet lag was hitting us hard. We got fish and chips and another pint at a restaurant down near the river. The food was decent, but we were too tired to pay much attention to it.
    </country-content>
    
    <country-content>
      We spent Thursday morning bumming around Dublin before leaving for Belfast. We had an Irish breakfast, walked around the Trinity College area, and then caught our bus to Belfast.
    </country-content>

    <country-subheading>Belfast</country-subheading>

    <country-content dropCap="true">
      We walked around a bit more after we got in to Belfast, including going to check out their public library. The library reminded us a lot of the one in Philadelphia—a really cool old building from the outside (Victorian-era, for the Belfast library), but a surprisingly normal library on the inside.
    </country-content>

    <country-content>
      For dinner, we got some very good food at a place run by one of Northern Ireland's top chefs. It was a seafood-focused restuarant that felt much more like somewhere that we would have gone to in DC than the places we ate at in Dublin. After dinner, we went to a pub to have more beers and listen to some Irish music. The band was good, and we got to try some different Irish beers.
    </country-content>

    <country-content>
      On Friday, we took a full day guided tour that went to several sights around Northern Ireland, including the Giant's Causeway. We started by going to the Causeway itself, which is a set of bizarre hexagonal rock formations on the northwestern coast. According to Irish legend, they are part of a bridge that used to connect Ireland and Scotland before two giants fought and tore it down. Walking and climbing around felt otherworldly.
    </country-content>

    <photo-with-caption id="14"/>

    <country-content>
      After the Causeway, we stopped at Bushmills distillery for lunch and a whiskey tasting. The food was just OK, but the atmosphere was cool and the whiskey was surprisingly good—we had been more excited for the Scotch than the Irish whiskey when planning the trip, but we both enjoyed sitting for a bit on a couch in the tasting room and sampling three different kinds of Bushmills.
    </country-content>

    <country-content>
      The other major stop for the day was at a rope bridge out to a tiny island. By this point, it had started raining and the wind had picked up. The bridge was narrow, shaky, and slick. Not to mention being about 100 feet above jagged rocks.
    </country-content>

    <photo-with-caption id="39"/>

    <country-content>
      Needless to say, we safely made it across and back, and it was great! And as soon as we got back over the bridge, the rain let up, the sun came out, and one of the most vibrant rainbows we've ever seen came out.
    </country-content>

    <photo-with-caption id="43"/>

    <country-content>
      Belfast was really fun overall, and the Giant's Causeway tour was a highlight of the trip. We had been so tired the whole time we were in Dublin that we were worried we weren't going to be able to really enjoy our time in Ireland. But Belfast and the trip around Northern Ireland made us feel like we made the most of our time on the island.
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