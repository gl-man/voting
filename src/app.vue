<template>
  <main id="app">
    <!-- The Voting Application Header -->
    <voting-header />

    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view />
  </main>
</template>
<script>
import votingHeader from './layout/header'

export default {
  name: 'voting-client',
  components: {
    votingHeader
  }
};
</script>
<style lang="sass">
@import "./assets/main.scss"
</style>
