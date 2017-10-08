<template>
  <main>
    <country-hero :image="image">Scotland</country-hero>

    <country-content>
      We spent most of the trip in Scotland, starting and ending in Edinburgh with a tour of the highlands in between.
    </country-content>

    <country-subheading>Edinburgh to Oban</country-subheading>

    <country-content dropCap="true">
      Saturday was another travel day. We had a 6:50 AM flight from Belfast to Edinburgh. The plane was a fairly normal size, but it was a propeller plane rather than a jet, which was a little weird. We picked up our rental car at the Edinburgh airport.
    </country-content>

    <country-content>
      The car was pretty nice, but driving on the wrong side of the road definitely takes some getting used to. And the weirdest thing about the car is that it turns off when you come to a stop. So stopping at an intersection feels like the car stalls, even though it's an automatic.
    </country-content>

    <country-content>
      We drove from Edinburgh to Stirling to take a tour of the castle there. The castle has been added on to and continuously used since around 800, which is pretty crazy. The castle was huge and took a couple hours to walk around.
    </country-content>

    <country-content>
      We then drove from Stirling to Oban, stopping every once in a while to take in the sights. The countryside was beautiful—like a mix of Iceland and Colorado. There were no snow-capped mountains, but everything was covered in golden grass/moss/ferns. And there were streams, lakes, and waterfalls everywhere.
    </country-content>

    <country-content>
      The drive on the first day with the car was really difficult. Driving on the left is one thing, but the roads are also narrow and winding. It takes a lot of effort and thought to find the appropriate place in the lane to not go into oncoming traffic but also not run into the curb at the side of the road—with no shoulder.
    </country-content>

    <country-content>
      We spent Saturday night in Oban. Our guest house was a little outside the main area of town, but we walked down and got dinner there. It was a small, cute town right on the oceanside.
    </country-content>

    <country-subheading>Inverness</country-subheading>

    <country-content dropCap="true">
      On Sunday, we drove from Oban up to Inverness. Most of the drive was along the shore of Loch Ness, which was beautiful. The drive was much easier than the first day, partly due to being used to it, but also from not having an early morning flight to start the day.
    </country-content>

    <country-content>
      Inverness is a bit bigger than Oban, but still a small city. We stayed at a hotel right on the bank of the River Nes. The room was not very nice, but the building was very cool.
    </country-content>

    <country-content>
      We went out for pizza in Inverness, craving something different from the somewhat bland Irish and Scottish traditional food we'd been eating. After, we stopped in at the hotel bar and tried a couple whiskys. We both agreed that the Talisker 10 was great. And cheap—less than £3!
    </country-content>

    <country-subheading>Skye</country-subheading>

    <country-content dropCap="true">
      We drove from Inverness to Skye on Monday. Again, the countryside was breathtaking, adn we stopped often. It rained off and on all day, but we still made the most of time out of the car.
    </country-content>

    <country-content>
      The main stop for Monday was a wildlife hide and otter refuge on the Isle of Skye. We had to drive about 30 minutes up a single-lane mountainside road to get there. The road was challenging, but traffic was minimal and it was a really unique, awesome experience. While there, we took a nice walk and saw a heron, some seals, and an otter from a distance.
    </country-content>

    <country-content>
      Our B&B on Skye was a very pleasant change from the previous nights. It was clean and modern, with white linen and light wood. For dinner, we got really good fish and chips and a burger in Portree.
    </country-content>

    <country-content>
      Our second day on Skye was at a more relaxed pace. We had breakfast at the B&B and then headed out to see some of the sights on the island. We started with a hike up near a rock called the Old Man of Storr. The views were incredible and the wind and rain almost just added to the experience.
    </country-content>

    <country-content>
      For another stop along the way, we went through a scenic drive that had a stopoff about halfway through with a hiking trail. The road was only one lane with passing places, and there was a lot of traffic on it. With all the rain, the shoulders of the road were also quite muddy. There were a bunch of cars that drove off the sides and got stuck. The drive was stressful, but luckily we didn't run into any issues.
    </country-content>

    <country-content>
      For dinner we went to Loch Bay, a very nice restaurant on the other side of the island. The atmosphere was charming, and the food was some of the best we've ever had. We even found out after that they had been awarded a Michelin star one day earlier!
    </country-content>

    <country-content>
      The drive back from dinner was nerve-wracking. It was pitch black, rainy, and windy, and there were no street lights for most of the drive. Plus, the first few miles were again one-lane roads with passing places. But again, we did it without issue, and made it back to the B&B safely.
    </country-content>

    <country-subheading>Edinburgh</country-subheading>

    <country-content dropCap="true">
      We drove from Skye back to Edinburgh on Wednesday. It was the longest day of driving we did the whole trip—about five hours if we hadn't stopped. Everything went OK on the drive, but both Alison and I could feel the tension mounting as we got closer to returning the car. But the return went smoothly, and we felt relieved to no longer have the car.
    </country-content>

    <country-content>
      Edinburgh was rainy and miserable. We'd spent so many days in off-and-on rain that the walk to dinner felt awful. But we stopped in to the public library on the way in, and it was really cool. Alison immediately saw ideas that she's been trying to incorporate into the EFPL renovation design. She even talked with the children's librarian briefly about when their space was last redone.
    </country-content>

    <country-content>
      For dinner, we went to a touristy whisky bar. The food was just OK, but the whisky was good, and we did a tasting flight of Islay malts.
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
import CountrySubheading from '@/components/CountrySubheading.vue'
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
    CountrySubheading,
    PhotoWithCaption,
    RouterLinkButton,
    PageNavButtons
  }
}
</script>