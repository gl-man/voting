<template>
  <form action="#" @submit.prevent>
    <div class="modal-card" style="width: 360px">
      <header class="modal-card-head">
        <p class="modal-card-title">Add Member</p>
        <button type="button" class="delete" @click="$emit('close')"/>
      </header>
      <section class="modal-card-body">
        <b-field label="Full Name">
          <b-input type="text" v-model="first_name" :value="first_name" placeholder="Your First name" required />
        </b-field>
        <b-field label="Full Name">
          <b-input type="text" v-model="last_name" :value="last_name" placeholder="Your Last name" required />
        </b-field>
        <b-field label="Email">
          <b-input type="email"  v-model="email" :value="email" placeholder="Your email" required />
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="$emit('close')">Close</button>
        <button class="button is-primary" @click="$emit('add', { first_name, last_name, email }); $emit('close');">
          Add Member
        </button>
      </footer>
    </div>
  </form>
</template>
<script>
export default {
  name: "view-circle-new-members",
  data: function () {
    return {
      first_name: '',
      last_name: '',
      email: ''
    }
  }
}
</script>
