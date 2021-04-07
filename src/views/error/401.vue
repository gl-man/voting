<template>
  <voting-layout-container>
    <h1 class="title">Unauthorized!</h1>
    <h2 class="subtitle">Please check MetaMask for errors or <a href="#" @click="$router.go(-1)"><u>try again</u></a>.</h2>
  </voting-layout-container>
</template>
<script>
import votingLayoutContainer from '../../layout/container'

export default {
  name: "view-error-401",
  components: {
    votingLayoutContainer
  }
}
</script>
