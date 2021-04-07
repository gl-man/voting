<template>
  <voting-layout-container>
    <router-view />
  </voting-layout-container>
</template>
<script>
import votingLayoutContainer from '../../layout/container'

export default {
  name: "view-circle-index",
  components: {
    votingLayoutContainer
  }
}
</script>
