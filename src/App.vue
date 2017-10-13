<template>
  <div id="app">
    <my-header/>
    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from '@/components/Header'
import MyFooter from '@/components/Footer'

export default {
  name: 'app',
  components: {
    MyHeader,
    MyFooter
  }
}
</script>
