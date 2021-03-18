<template>
<section class="section">
  <div class="container">
    <b-steps
        :rounded="true"
        :has-navigation="false"
        mobile-mode="minimalist"
    >
      <b-step-item step="8" label="แบบประเมินภาวะเศร้า (9Q)" :clickable="true">
        <b-field label="เบื่อไม่สนใจไม่อยากทำอะไร">
          <b-radio native-value="0" v-model="one">ไม่มีเลย</b-radio>
          <b-radio native-value="1" v-model="one">เป็นบางวัน 1-7 วัน</b-radio>
          <b-radio native-value="2" v-model="one">เป็นบ่อย >7 วัน</b-radio>
          <b-radio native-value="3" v-model="one">เป็นทุกวัน</b-radio>
        </b-field>
        <b-field label="ไม่สบายใจ ซึมเศร้า ท้อแท้">
          <b-radio native-value="0" v-model="two">ไม่มีเลย</b-radio>
          <b-radio native-value="1" v-model="two">เป็นบางวัน 1-7 วัน</b-radio>
          <b-radio native-value="2" v-model="two">เป็นบ่อย >7 วัน</b-radio>
          <b-radio native-value="3" v-model="two">เป็นทุกวัน</b-radio>
        </b-field>
        <b-field label="หลับยากหรือหลับ ๆ ตื่น ๆ หรือหลับมากไป">
          <b-radio native-value="0" v-model="three">ไม่มีเลย</b-radio>
          <b-radio native-value="1" v-model="three">เป็นบางวัน 1-7 วัน</b-radio>
          <b-radio native-value="2" v-model="three">เป็นบ่อย >7 วัน</b-radio>
          <b-radio native-value="3" v-model="three">เป็นทุกวัน</b-radio>
        </b-field>
        <b-field label="เหนื่อยง่าย หรือไม่ค่อยมีแรง">
          <b-radio native-value="0" v-model="four">ไม่มีเลย</b-radio>
          <b-radio native-value="1" v-model="four">เป็นบางวัน 1-7 วัน</b-radio>
          <b-radio native-value="2" v-model="four">เป็นบ่อย >7 วัน</b-radio>
          <b-radio native-value="3" v-model="four">เป็นทุกวัน</b-radio>
        </b-field>
        <b-field label="เบื่ออาหาร หรือกินมากเกินไป">
          <b-radio native-value="0" v-model="five">ไม่มีเลย</b-radio>
          <b-radio native-value="1" v-model="five">เป็นบางวัน 1-7 วัน</b-radio>
          <b-radio native-value="2" v-model="five">เป็นบ่อย >7 วัน</b-radio>
          <b-radio native-value="3" v-model="five">เป็นทุกวัน</b-radio>
        </b-field>
        <b-field label="รู้สึกไม่ดีกับตัวเองคิดว่าตัวเองล้มเหลวหรือทำให้ตนเองหรือครอบครัวผิดหวัง">
          <b-radio native-value="0" v-model="six">ไม่มีเลย</b-radio>
          <b-radio native-value="1" v-model="six">เป็นบางวัน 1-7 วัน</b-radio>
          <b-radio native-value="2" v-model="six">เป็นบ่อย >7 วัน</b-radio>
          <b-radio native-value="3" v-model="six">เป็นทุกวัน</b-radio>
        </b-field>
        <b-field label="สมาธิไม่ดีเวลาทำอะไร เช่น ดูโทรทัศน์ ฟังวิทยุ หรือทำงานที่ต้องใช้ความตั้งใจ">
          <b-radio native-value="0" v-model="seven">ไม่มีเลย</b-radio>
          <b-radio native-value="1" v-model="seven">เป็นบางวัน 1-7 วัน</b-radio>
          <b-radio native-value="2" v-model="seven">เป็นบ่อย >7 วัน</b-radio>
          <b-radio native-value="3" v-model="seven">เป็นทุกวัน</b-radio>
        </b-field>
        <b-field label="พูดช้าหรือทำอะไรช้าลงจนคนอื่นสังเกตเห็นได้หรือกระสับกระส่าย ไม่สามารถอยู่นิ่งได้เหมือนที่เคยเป็น">
          <b-radio native-value="0" v-model="eight">ไม่มีเลย</b-radio>
          <b-radio native-value="1" v-model="eight">เป็นบางวัน 1-7 วัน</b-radio>
          <b-radio native-value="2" v-model="eight">เป็นบ่อย >7 วัน</b-radio>
          <b-radio native-value="3" v-model="eight">เป็นทุกวัน</b-radio>
        </b-field>
        <b-field label="คิดร้ายตนเอง หรือคิดว่าถ้าตายไปคงดี">
          <b-radio native-value="0" v-model="nine">ไม่มีเลย</b-radio>
          <b-radio native-value="1" v-model="nine">เป็นบางวัน 1-7 วัน</b-radio>
          <b-radio native-value="2" v-model="nine">เป็นบ่อย >7 วัน</b-radio>
          <b-radio native-value="3" v-model="nine">เป็นทุกวัน</b-radio>
        </b-field>
        <h1 class="title has-text-centered is-size-4">คะแนนรวม {{ score }}</h1>
      </b-step-item>
    </b-steps>
    <div class="buttons is-centered">
      <button class="button is-light" @click="$router.back()">Back</button>
      <router-link :to="{ name: 'Kihon' }" class="button is-success">Next</router-link>
    </div>
  </div>
</section>

</template>

<script>
export default {
  name: "Form9Q",
  data() {
    return {
      one: "0",
      two: "0",
      three: "0",
      four: "0",
      five: "0",
      six: "0",
      seven: "0",
      eight: "0",
      nine: "0"
    }
  },
  computed: {
    score: function() {
      return parseInt(this.one) + parseInt(this.two) +
          parseInt(this.three) + parseInt(this.four) +
          parseInt(this.five) + parseInt(this.six) +
          parseInt(this.seven) + parseInt(this.eight) +
          parseInt(this.nine)
    }
  }
}
</script>

<style scoped>

</style>