<template>
  <header>
    <nav class="navbar">
      <div class="branding">
        <h1>
          <router-link to="/" @click.native="showMenu = false">
            Alison and Joe
          </router-link>
        </h1>
        
        <div class="hamburger" :class="{'burger-open': showMenu}"
             @click="showMenu = !showMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
        
      <div class="nav-links" id="nav-links"
           :class="{'visible': showMenu}">
        <router-link to="/ireland"
          @click.native="showMenu = false">Ireland</router-link>
        <router-link to="/scotland"
          @click.native="showMenu = false">Scotland</router-link>
        <router-link to="/england"
          @click.native="showMenu = false">England</router-link>
        <router-link to="/photos"
          @click.native="showMenu = false">Photos</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'MyHeader',
    data () {
      return {
        showMenu: false
      }
    }
  }
</script>

<style scoped>
header {
  position: fixed;
  width: 100%;
  z-index: 3;
}

.navbar {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color__background);
  width: 100%;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

@media (min-width: 768px) {
  .navbar {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
}

.hamburger {
  width: 36px;
  height: 24px;
  position: relative;
}

@media (min-width: 768px) {
  .hamburger {
    display: none;
  }
}

.hamburger span {
  display: block;
  height: 4px;
  width: 100%;
  border-radius: 2px;
  background-color: var(--color__primary_text);
  position: absolute;
  left: 0;
}

.hamburger span:nth-child(1) {
  top: 0;
}

.hamburger span:nth-child(2) {
  top: 10px;
}

.hamburger span:nth-child(3) {
  bottom: 0;
}

.burger-open span {
  background-color: var(--color__primary);
}

.nav-links {
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: var(--color__background);
  position: absolute;
  top: -112px;
  z-index: 3;
  padding-bottom: 16px;
  overflow: hidden;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  visibility: hidden;
}

.nav-links a {
  width: 100%;
  text-decoration: none;
  color: #222;
  padding: 0.75rem 16px;
}

a {
  text-decoration: none;
  color: var(--color__primary_text);
}

a.router-link-exact-active.router-link-active {
  color: var(--color__primary);
}

.branding h1 a.router-link-exact-active.router-link-active {
  color: var(--color__primary_text);
}

a:hover {
  color: var(--color__primary);
}

h1 a:hover {
  color: var(--color__primary_text);
}

@media (min-width: 768px) {
  .nav-links a {
    width: auto;
  }
}

@media (min-width: 768px) {
  .nav-links a:hover {
    background-color: var(--color__background);
    color: var(--color__primary);
  }
}

@media (min-width: 768px) {
  .nav-links {
    flex-direction: row;
    align-items: center;
    top: 0;
    width: auto;
    height: 100%;
    position: initial;
    padding: 0;
    box-shadow: none;
    visibility: visible;
  }
}

.visible {
  top: 62px;
  visibility: visible;
}

.branding {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  background-color: var(--color__background);
  z-index: 4;
  padding: 0 16px;
}

.branding h1 {
  font-weight: 700;
  font-size: 1.5rem;
}

@media (min-width: 768px) {
  .branding {
    width: auto;
  }
}
</style>

