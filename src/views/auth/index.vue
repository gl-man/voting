<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            <h1 class="title is-2 is-spaced">
              Connecting to MetaMask...
            </h1>
            <h2 class="subtitle">
              Unlock your Ether account in MetaMask to continue.
            </h2>
          </div>
          <div class="column">
            <img src="/metamask.png" alt="Meta Mask">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "view-auth-index",
  async mounted() {
    /**
     * Check if MetaMask is enabled on the website
     * Whitelist this website to use the account
     */
    if (window.ethereum) {
      let address
      try {
        address = await window.ethereum.request({
          method: 'eth_requestAccounts'
        });

        this.$store.commit('setUser', {
          address: address[0]
        })

        return this.$router.push({ name: 'home' })
      } catch (e) {
        return this.$router.push({ name: 'error/401' })
      }
    }
  }
}
</script>
<style scoped></style>
