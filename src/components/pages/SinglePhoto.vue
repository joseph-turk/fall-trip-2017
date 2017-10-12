<template>
  <main>
    <img :src="photo.bigSrc">
    
    <div class="container" v-if="!edit">
      <h2>{{ photo.title }}</h2>

      <p>Taken in {{ photo.country }}</p>

      <p>{{ photo.description }}</p>
    </div>

    <div class="container">
      <button @click="editPhoto" v-if="!edit">Edit</button>
      
      <form v-if="edit" v-on:submit.prevent="updatePhoto">
        <input type="text" v-model="updatedPhoto.title">
        <textarea v-model="updatedPhoto.description" rows="5"></textarea>
        
        <button type="submit" class="primary">Update</button>
        <button @click="cancelUpdate" type="reset">Close</button>
      </form>
    </div>

    <div class="container">
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
      originalPhoto: {
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
  created () {
    this.updatedPhoto = this.photo
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
  components: { LinkButton, RouterLinkButton, PageNavButtons }
}
</script>

<style scoped>
main {
  padding-top: 64px;
}
img {
  max-width: 100%;
  max-height: calc(80vh - 64px);
  display: block;
  margin: 0 auto 1rem;
}
.container {
  max-width: 800px;
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
  font-size: 3rem;
  height: 48px;
  font-weight: 700;
  margin: 0 0 2.5rem;
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
</style>