<template>
<section class="section">
  <div class="columns">
    <div class="column has-text-centered is-one-third is-offset-4">
      <h1 class="title">NCD Sarcopenia Survey</h1>
      <h1 class="subtitle">Welcome {{ user.displayName }}</h1>
      <nav class="panel">
        <p class="panel-heading">
          Menu
        </p>
        <router-link class="panel-block" :to="{name: 'Profile'}">
          <span class="panel-icon">
            <i class="fas fa-user-alt" aria-hidden="true"></i>
          </span>
          Profile
        </router-link>
        <a class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
          </span>
          Records
        </a>
        <a class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
          </span>
          New Record
        </a>
      </nav>
    </div>
  </div>
</section>
</template>

<script>
import { auth } from '../firebase'

export default {
  name: "MainPage",
  data() {
    return {
      user: undefined,
    }
  },
  mounted() {
    this.user = auth.currentUser;
  }
}
</script>

<style scoped>

</style>