<template>
<section class="section">
  <div class="container">
    <b-steps
        :rounded="true"
        :has-navigation="false"
        mobile-mode="minimalist"
    >
      <b-step-item step="13" label="แบบบันทึกการประเมิน" :clickable="true">
        <b-field label="Gait speed">
          Walk time เวลาที่ใช้ในการเดิน 6 เมตร
          <b-numberinput placeholder="ครั้งที่ 1" v-model="gait1"></b-numberinput>
        </b-field>
        <b-field>
          <b-numberinput placeholder="ครั้งที่ 2" v-model="gait2"></b-numberinput>
        </b-field>
        <b-field label="ค่าเฉลี่ย">
          <b-input :readonly="true" placeholder="เฉลี่ย" :value="gait.toFixed(2)"></b-input>
        </b-field>
        <b-field label="Grip strength">
          <b-radio v-model="hand" native-value="ถนัดแขนซ้าย">ถนัดแขนซ้าย</b-radio>
          <b-radio v-model="hand" native-value="ถนัดแขนขวา">ถนัดแขนขวา</b-radio>
        </b-field>
        <div class="notification">
          <b-field label="แขนซ้าย">
            <b-input type="number" placeholder="ครั้งที่ 1 (กก.)"></b-input>
          </b-field>
          <b-field>
            <b-input type="number" placeholder="ครั้งที่ 2 (กก.)"></b-input>
          </b-field>
          <b-field>
            <b-input type="number" placeholder="ครั้งที่ 3 (กก.)"></b-input>
          </b-field>
        </div>
        <div class="notification">
          <b-field label="แขนขวา">
            <b-input type="number" placeholder="ครั้งที่ 1 (กก.)"></b-input>
          </b-field>
          <b-field>
            <b-input type="number" placeholder="ครั้งที่ 2 (กก.)"></b-input>
          </b-field>
          <b-field>
            <b-input type="number" placeholder="ครั้งที่ 3 (กก.)"></b-input>
          </b-field>
        </div>
        <b-field label="Quadriceps strength">
        </b-field>
        <div class="notification">
          <b-field label="แขนซ้าย">
            <b-input type="number" placeholder="ครั้งที่ 1 (กก.)"></b-input>
          </b-field>
          <b-field>
            <b-input type="number" placeholder="ครั้งที่ 2 (กก.)"></b-input>
          </b-field>
          <b-field>
            <b-input type="number" placeholder="ครั้งที่ 3 (กก.)"></b-input>
          </b-field>
        </div>
        <div class="notification">
          <b-field label="แขนขวา">
            <b-input type="number" placeholder="ครั้งที่ 1 (กก.)"></b-input>
          </b-field>
          <b-field>
            <b-input type="number" placeholder="ครั้งที่ 2 (กก.)"></b-input>
          </b-field>
          <b-field>
            <b-input type="number" placeholder="ครั้งที่ 3 (กก.)"></b-input>
          </b-field>
        </div>
        <b-field label="BIA"></b-field>
        <b-field label="น้ำหนัก">
          <b-input type="number" placeholder="กก." v-model="weight"></b-input>
        </b-field>
        <b-field label="ส่วนสูง">
          <b-input type="number" placeholder="ซม." v-model="height"></b-input>
        </b-field>
        <b-field label="BMI">
          <b-input type="number" :readonly="true" :value="bmi.toFixed(2)"></b-input>
        </b-field>
      </b-step-item>
    </b-steps>
    <div class="buttons is-centered">
      <button class="button is-light" @click="$router.back()">Back</button>
      <router-link :to="{ name: 'MainPage' }" class="button is-success">Done</router-link>
    </div>
  </div>
</section>

</template>

<script>
export default {
  name: "Evaluation",
  data() {
    return {
      gait1: null,
      gait2: null,
      hand: null,
      weight: null,
      height: null,
    }
  },
  computed: {
    gait: function() {
      return (this.gait1 + this.gait2)/2.0
    },
    bmi: function() {
      return this.weight/(this.height*0.01)**2.0
    }
  }
}
</script>

<style scoped>

</style>