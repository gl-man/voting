<template>
  <voting-layout-section>
    <router-view />
  </voting-layout-section>
</template>
<script>
import votingLayoutSection from '../layout/section'

export default {
  name: 'view',
  components: {
    votingLayoutSection
  }
}
</script>
