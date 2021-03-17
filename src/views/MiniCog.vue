<template>
<section class="section">
  <div class="container">
    <b-steps
        :rounded="true"
        :has-navigation="false"
        mobile-mode="minimalist"
    >
      <b-step-item step="3" label="สมรรถภาพเบื้องต้น" :clickable="true">
        <label class="label">Three Word Registration</label>
        <b-field label="ให้ตั้งใจฟังดี ๆ เดี๋ยวจะบอกคำ 3 คำ เมื่อพูดจบแล้วให้พูดตามและจำไว้เดี๋ยวจะกลับมาถามซ้ำ">
          <b-checkbox disabled>หลานสาว</b-checkbox>
        </b-field>
        <b-field>
          <b-checkbox disabled>สวรรค์</b-checkbox>
        </b-field>
        <b-field>
          <b-checkbox disabled>ภูเขา</b-checkbox>
        </b-field>
        <b-field label="ให้ตั้งใจฟังดี ๆ เดี๋ยวจะบอกคำ 3 คำ เมื่อพูดจบแล้วให้พูดตามและจำไว้เดี๋ยวจะกลับมาถามซ้ำ">
          <b-checkbox @input="updateScore($event, 'หลานสาว')">หลานสาว</b-checkbox>
        </b-field>
        <b-field>
          <b-checkbox @input="updateScore($event, 'สวรรค์')">สวรรค์</b-checkbox>
        </b-field>
        <b-field>
          <b-checkbox @input="updateScore($event, 'ภูเขา')">ภูเขา</b-checkbox>
        </b-field>
      </b-step-item>
    </b-steps>
    <div class="buttons is-centered">
      <button class="button is-light" @click="$router.back()">Back</button>
      <router-link :to="{ name: 'Clock' }" class="button is-success">Next</router-link>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "MiniCog",
  data() {
    return {
      items: [],
    }
  },
  methods: {
    updateScore: function (event, item) {
      if (event) {
        this.items.push(item)
      } else {
        let idx = this.items.indexOf(item)
        this.items.splice(idx, 1)
      }
      console.log(this.items)
    }
  }
}
</script>

<style scoped>

</style>