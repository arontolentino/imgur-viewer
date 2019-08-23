<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">Image Storage</a>
    {{ isLoggedIn }}
    <div class="right menu">
      <div v-if="isLoggedIn">
        <a href>Galleries</a>
        <a href>Upload</a>
        <a href>Logout</a>
      </div>
      <a v-else href="#" class="ui item" @click="login">Login</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  computed: mapGetters(['isLoggedIn']),
  methods: mapActions(['login'])
  // if multiple methods -> { ...mapActions(), otherMethod() }
};
</script>