<template>
  <b-navbar spaced shadow>
    <template slot="brand">
      <b-navbar-item class="logo" style="">
        <b>Voting</b>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item>
        <router-link :to="{ name: 'index' }">
          <b-icon pack="fas" icon="home" size="is-medium" v-if="user.address"/>
        </router-link>
      </b-navbar-item>
      <b-navbar-dropdown v-if="user.address">
        <template v-slot:label>
          {{ user.address && user.address.slice(0, 9) }}
        </template>
        <b-navbar-item @click="$store.commit('setUser', {})" href="#">
          Logout
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-item tag="div" v-else>
        <div class="buttons" >
          <router-link :to="{ name: 'auth' }" class="button is-primary is-outlined">
            Log in with MetaMask
          </router-link>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'voting-layout-header',
  computed: mapState(['user'])
};
</script>
<style scoped>
.logo {
  display: inline-flex;
  align-items: center;
  cursor: default;
  font-size: 26px;
  font-weight: bold;
  font-family: 'Merriweather', sans-serif;
}

.logo > img {
  max-width: 100px;
  width: 100%;
}
</style>
