<template>
  <section class="hero is-fullheight-with-navbar" v-if="false">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered is-vcentered">
          <div class="column has-text-centered is-three-fifths">
            <img class="home-circle is-spaced" src="/circles.jpg" alt="Circle">
            <h1 class="title is-1 is-spaced">
              No circles yet?
            </h1>
            <h2 class="subtitle has-text-black is-4">
              Create a new Proposal by pressing the button below and going through the steps to setup your circle
              and invite your members.
            </h2>
            <div class="columns is-centered">
              <div class="column is-two-fifths">
                <b-button tag="router-link" :to="{ name: 'ballot/new' }" type="is-primary" size="is-medium" icon-pack="fas" icon-left="plus-circle" expanded>
                  Create a New Proposal
                </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <main v-else>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
              <h1 class="title">
                Voting Ballots
              </h1>
              <h2 class="subtitle">
                You are logged in as <b-tag>{{ user.address }}</b-tag>
              </h2>
            </div>
            <div class="column has-text-right">
              <b-button tag="router-link" :to="{ name: 'ballot/new' }" type="is-primary" inverted size="is-medium" icon-pack="fas" icon-left="plus-circle">
                Create a New Proposal
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <voting-layout-container >
      <voting-layout-section>
        <b-tabs v-model="activeTab">
          <b-tab-item label="On Going">
            <div class="columns">
              <div class="column">
                <div class="box"></div>
              </div>
              <div class="column">
                <div class="box"></div>
              </div>
            </div>
          </b-tab-item>
          <b-tab-item label="Complete">
            <div class="columns">
              <div class="column">
                <div class="box"></div>
              </div>
              <div class="column">
                <div class="box"></div>
              </div>
            </div>
          </b-tab-item>
        </b-tabs>
      </voting-layout-section>
    </voting-layout-container>
  </main>
</template>
<script>
import { mapState } from 'vuex'

import votingLayoutSection from '../../layout/section'
import votingLayoutContainer from '../../layout/container'

export default {
  name: "view-index-index",
  data() {
    return {
      activeTab: 0,
    }
  },
  components: {
    votingLayoutSection,
    votingLayoutContainer
  },
  computed: mapState(['user'])
}
</script>
<style scoped>
.home-circle {
  max-width: 200px;
}
</style>
