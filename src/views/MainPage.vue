<template>
<section class="section">
  <div class="columns">
    <div class="column has-text-centered is-one-third is-offset-4">
      <h1 class="title">ระบบบันทึกข้อมูล</h1>
      <h1 class="subtitle">โครงการวิจัยเรื่องระบบการจัดการโรคไม่ติดต่อเรื้อรังในกลุ่มผู้สูงอายุเปราะบางร่วมกับภาวะมวลกล้ามเนื้อน้อย</h1>
      <br>
      <h1 class="title is-size-4"><strong>พื้นที่</strong> {{ province.name }}</h1>
      <h1 class="subtitle is-size-6"><strong>ผู้จัดเก็บข้อมูล</strong> {{ user.displayName }}</h1>
      <br>
      <b-field label="Search Records">
        <b-input placeholder="research code" v-model="query" type="search" :expanded="true"></b-input>
        <p class="control">
          <b-button class="button is-primary is-light" @click="search">
            <span class="icon">
              <i class="fas fa-search"></i>
            </span>
            <span>Search</span>
          </b-button>
        </p>
      </b-field>
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
import {mapState} from 'vuex'

export default {
  name: "MainPage",
  data() {
    return {
      user: undefined,
      query: null
    }
  },
  computed: {
    ...mapState(['province'])
  },
  mounted() {
    this.user = auth.currentUser;
  },
  methods: {
    search: function() {
      this.$router.push({name: 'RecordSearch', params: { query: this.query}})
    }
  }
}
</script>

<style scoped>

</style>