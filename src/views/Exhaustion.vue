<template>
<section class="section">
  <Navigation></Navigation>
  <div class="container">
    <b-steps
        :rounded="true"
        :has-navigation="false"
        mobile-mode="minimalist"
    >
      <b-step-item step="12" label="Self-report exhaustion" :clickable="true">
        <b-field label="ฉันรู้สึกว่าทุก ๆ สิ่งที่ฉันกระทำต้องฝืนใจทำ">
          <b-radio native-value="0" v-model="one">ไม่เลยน้อยกว่า 1 วัน/สัปดาห์</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="1" v-model="one">นาน ๆ ครั้งน้อยกว่า 1-2 วัน/สัปดาห์</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="2" v-model="one">ค่อนข้างบ่อย น้อยกว่า 3-4 วัน/สัปดาห์</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="3" v-model="one">บ่อยครั้ง น้อยกว่า 5-7 วัน/สัปดาห์</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ one }}</span>
        <b-field label="ฉันรู้สึกท้อถอยในชีวิต">
          <b-radio native-value="0" v-model="two">ไม่เลยน้อยกว่า 1 วัน/สัปดาห์</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="1" v-model="two">นาน ๆ ครั้งน้อยกว่า 1-2 วัน/สัปดาห์</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="2" v-model="two">ค่อนข้างบ่อย น้อยกว่า 3-4 วัน/สัปดาห์</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="3" v-model="two">บ่อยครั้ง น้อยกว่า 5-7 วัน/สัปดาห์</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ two }}</span>
        <h1 class="title has-text-centered is-size-4">คะแนนรวม {{ score }}</h1>
      </b-step-item>
    </b-steps>
    <div class="buttons is-centered">
      <button class="button is-light" @click="$router.back()">Back</button>
      <router-link :to="{ name: 'SARCF' }" class="button is-success">Next</router-link>
    </div>
  </div>
</section>

</template>

<script>
import Navigation from "@/components/navigation";
export default {
  name: "ADL",
  components: {Navigation},
  data() {
    return {
      one: "0",
      two: "0",
    }
  },
  computed: {
    score: function() {
      return parseInt(this.one) + parseInt(this.two)
    }
  }
}
</script>

<style scoped>

</style>