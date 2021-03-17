<template>
<section class="section">
  <div class="columns">
    <div class="column has-text-centered is-one-third is-offset-4">
      <h1 class="title">ระบบบันทึกข้อมูล</h1>
      <h1 class="subtitle">โครงการวิจัยเรื่องระบบการจัดการโรคไม่ติดต่อเรื้อรังในกลุ่มผู้สูงอายุเปราะบางร่วมกับภาวะมวลกล้ามเนื้อน้อย</h1>
      <h1 class="subtitle is-size-6"><strong>ผู้จัดเก็บข้อมูล</strong> {{ user.displayName }}</h1>
      <nav class="panel is-success">
        <p class="panel-heading">
          Menu
        </p>
        <router-link class="panel-block" :to="{name: 'Profile'}">
          <span class="panel-icon">
            <i class="fas fa-user-alt" aria-hidden="true"></i>
          </span>
          Profile
        </router-link>
        <router-link class="panel-block" :to="{ name: 'FormMain'}">
          <span class="panel-icon">
            <i class="fas fa-plus" aria-hidden="true"></i>
          </span>
          New Record
        </router-link>
        <a class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
          </span>
          Records
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