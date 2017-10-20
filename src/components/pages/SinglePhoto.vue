<template>
  <main>
    <img :src="bigSrc">
    
    <div class="container" v-if="!edit">
      <div class="photo-nav-buttons">
        <router-link-button :to="previousPhoto.toString()"
                            v-if="previousPhoto">
                            Previous Photo</router-link-button>

        <router-link-button :to="nextPhoto.toString()"
                            v-if="nextPhoto">
                            Next Photo</router-link-button>
      </div>

      <h2>{{ photo.title }}</h2>

      <p class="country">{{photo.location}}, {{ photo.country }}</p>

      <p v-if="photo.description !== 'No description yet.'">{{ photo.description }}</p>
    </div>

    <div class="container">
      <button @click="editPhoto" v-if="!edit">Edit</button>
      
      <form v-if="edit" v-on:submit.prevent="updatePhoto">
        <label for="title">Title</label>
        <input type="text" v-model="updatedPhoto.title" id="title">

        <label for="description">Description</label>
        <textarea v-model="updatedPhoto.description"
                  id="description" rows="5"></textarea>

        <label for="location">Location</label>
        <input type="text" id="location" v-model="updatedPhoto.location">
        
        <button type="submit" class="primary">Update</button>
        <button @click="cancelUpdate" type="reset">Close</button>
      </form>
    </div>

    <div class="container">
      <page-nav-buttons>
        <router-link-button slot="first-button" to="/photos">
                            Back to All Photos</router-link-button>
        <link-button slot="second-button" :href="bigSrc"
                     type="primary"
                     download>Download Photo</link-button>
      </page-nav-buttons>
    </div>

    
  </main>
</template>

<script>
import LinkButton from '@/components/LinkButton'
import RouterLinkButton from '@/components/RouterLinkButton'
import PageNavButtons from '@/components/PageNavButtons'
import { fbDatabase } from '@/firebase'

export default {
  name: 'single-photo',
  firebase () {
    return {
      photo: {
        source: fbDatabase.ref(`/${this.$route.params.id - 1}`),
        asObject: true
      },
      allPhotos: fbDatabase.ref()
    }
  },
  data () {
    return {
      edit: false,
      updatedPhoto: {}
    }
  },
  computed: {
    previousPhoto () {
      return this.photo.id === 1 ? false
                                 : this.photo.id - 1
    },
    nextPhoto () {
      return this.photo.id === 51 ? false : this.photo.id + 1
    },
    bigSrc () {
      const country = this.photo.country.toLowerCase()
      return `/static/photos/${country}-large-${this.photo.id}.jpg`
    },
    mediumSrc () {
      const country = this.photo.country.toLowerCase()
      return `/static/photos/${country}-medium-${this.photo.id}.jpg`
    },
    smallSrc () {
      const country = this.photo.country.toLowerCase()
      return `/static/photos/${country}-small-${this.photo.id}.jpg`
    }
  },
  methods: {
    editPhoto () {
      this.edit = true
      this.updatedPhoto = this.photo
      this.originalPhoto = this.photo
    },
    updatePhoto () {
      const childKey = this.updatedPhoto['.key']
      delete this.updatedPhoto['.key']
      this.$firebaseRefs.allPhotos.child(childKey).set(this.updatedPhoto)
      this.edit = false
    },
    cancelUpdate () {
      this.edit = false
      this.updatedPhoto = this.originalPhoto
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.$unbind('photo')
    this.$bindAsObject('photo', fbDatabase.ref(`/${to.params.id - 1}`))
    next()
  },
  components: { LinkButton, RouterLinkButton, PageNavButtons }
}
</script>

<style scoped>
img {
  max-width: 100%;
  max-height: calc(80vh - 64px);
  display: block;
  margin: 0 auto 1rem;
}
.container {
  max-width: 800px;
}

.country {
  font-size: 1.5rem;
  font-style: italic;
}

input, textarea {
  display: block;
  width: 100%;
  font-size: 1rem;
  background: var(--color__background);
  color: var(--color__primary_text);
  font-family: inherit;
  outline: none;
  border: none;
  box-sizing: border-box;
}

input {
  border-bottom: 1px solid var(--color__primary_text);
  margin: 0 0 1rem;
}

input#title {
  font-size: 2rem;
  font-weight: 700;
  padding: 0;
  border: none;
  border-bottom: 2px solid var(--color__primary_text);
}

textarea {
  font-size: 1rem;
  margin: 1rem 0;
  border: 1px solid var(--color__primary_text);
  resize: none;
}
button {
  padding: 0.5rem 1rem;
  background-color: var(--color__secondary);
  color: var(--color__primary_text);
  border: none;
  border-radius: 2px;
  text-decoration: none;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  margin-top: 1rem;
}

button:hover {
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
}

button:active {
  box-shadow: none;
}

.primary {
  background-color: var(--color__success);
}

.photo-nav-buttons {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1rem;
}
</style>