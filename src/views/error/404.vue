<template>
  <voting-layout-container v-if="$route.query.metamask">
    <h1 class="title is-2 is-spaced">
      Metamask Not Found!
    </h1>
    <h2 class="subtitle">
      Please install MetaMask extension on your browser.
    </h2>
  </voting-layout-container>
  <voting-layout-container v-else>
    <h1 class="title">Not Found!</h1>
    <h2 class="subtitle">Location not found, please try again.</h2>
  </voting-layout-container>
</template>
<script>
import votingLayoutContainer from '../../layout/container'

export default {
  name: "view-error-404",
  components: {
    votingLayoutContainer
  }
}
</script>
