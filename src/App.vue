<template>
  <div id="app">
    <vue-mapbox-autocomplete/>
  </div>
</template>

<script>
import VueMapboxAutocomplete from './components/VueMapboxAutocomplete'

export default {
  name: 'app',
  components: {
    VueMapboxAutocomplete
  }
}
</script>

<style lang="scss" src="./styles/main.scss"/>
