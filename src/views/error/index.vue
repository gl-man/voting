<template>
  <section class="hero is-danger is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <router-view />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "view-error-index"
}
</script>
