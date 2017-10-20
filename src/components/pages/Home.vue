<template>
  <main>
    <video playsinline autoplay muted loop>
      <source src="/static/home-video.mp4" type="video/mp4">
    </video>

    <div class="text-container">
      <h2>Ireland and UK Adventure</h2>

      <div class="button-container">
        <router-link-button slot="first-button"
                            to="/photos">View Photos</router-link-button>
        <router-link-button slot="second-button"
                            to="/ireland"
                            type="primary">Start Tour</router-link-button>
      </div>
    </div>
  </main>
</template>

<script>
import RouterLinkButton from '@/components/RouterLinkButton.vue'

export default {
  name: 'home',
  components: { RouterLinkButton }
}
</script>

<style scoped>
video {
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  transform: translateX(-50%) translateY(-50%);
}

.text-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

h2 {
  color: var(--color__background);
  text-align: center;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  text-shadow: 0 0 4px var(--color__primary_text);
}

.button-container {
  position: absolute;
  bottom: 20%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}

.button {
  padding: 1rem;
  background-color: var(--color__background);
  color: var(--color__primary_text);
  border: none;
  border-radius: 2px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: all 0.1s;
  outline: none;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  display: inline-block;
}

.button:hover {
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25);
}

.button:active {
  box-shadow: none;
}

.button-primary {
  background-color: var(--color__primary);
  color: var(--color__background);
}
</style>
