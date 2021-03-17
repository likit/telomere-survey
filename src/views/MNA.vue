<template>
<section class="section">
  <div class="container">
    <b-steps
        :rounded="true"
        :has-navigation="false"
        mobile-mode="minimalist"
    >
      <b-step-item step="5" label="แบบประเมินภาวะโภชนาการ" :clickable="true">
        <b-field label="ในช่วงสามเดือนที่ผ่านมารับประทานอาหารได้น้อยลง เนื่องจากความอยากอาหารลดลง มีปัญหาการย่อย การเคี้ยว หรือปัญหาการกลืนหรือไม่">
          <b-radio native-value="0" v-model="one">ความอยากอาหารลดลงอย่างมาก</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="1" v-model="one">ความอยากอาหารลดลงปานกลาง</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="2" v-model="one">ความอยากอาหารไม่ลดลง</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ one }}</span>
        <b-field label="ในช่วงสามเดือนที่ผ่านมาน้ำหนักลดลงหรือไม่ (โดยไม่ตั้งใจลด)">
          <b-radio native-value="0" v-model="two">น้ำหนักลดลงมากกว่า 3 กิโลกรัม</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="1" v-model="two">ไม่ทราบ</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="2" v-model="two">น้ำหนักลดลงระหว่าง 1-3 กิโลกรัม</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="3" v-model="two">น้ำหนักไม่ลดลง</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ two }}</span>
        <b-field label="สามารถเคลื่อนไหวได้เองหรือไม่">
          <b-radio native-value="0" v-model="three">นอนบนเตียง หรือต้องอาศัยรถเข็นตลอดเวลา</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="1" v-model="three">ลุกจากเตียงหรือรถเข็นได้บ้าง แต่ไม่สามารถไปข้างนอกเองได้</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="2" v-model="three">เดินและเคลื่อนไหวได้ตามปกติ</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ three }}</span>
        <b-field label="ในสามเดือนที่ผ่านมามีความเครียดรุนแรงหรือป่วยเฉียบพลันหรือไม่">
          <b-radio native-value="0" v-model="four">มี</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="1" v-model="four">ไม่มี</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ four }}</span>
        <b-field label="มีปัญหาทางจิตประสาทหรือไม่">
          <b-radio native-value="0" v-model="five">ความจำเสื่อมหรือซึมเศร้าอย่างรุนแรง</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="1" v-model="five">ความจำเสื่อมเล็กน้อย</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="2" v-model="five">ไม่มีปัญหาทางประสาท</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ five }}</span>
        <b-field label="ดัชนีมวลกาย">
          <b-radio native-value="0" v-model="six">BMI น้อยกว่า 19</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="1" v-model="six">BMI ตั้งแต่ 19 แต่น้อยกว่า 21</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="2" v-model="six">BMI ตั้งแต่ 21 แต่น้อยกว่า 23</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="3" v-model="six">BMI ตั้งแต่ 23 ขึ้นไป</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ six }}</span>
        <h1 class="title has-text-centered is-size-4">คะแนนรวม {{ score }}</h1>
      </b-step-item>
    </b-steps>
    <div class="buttons is-centered">
      <button class="button is-light" @click="$router.back()">Back</button>
      <router-link :to="{ name: 'ADL' }" class="button is-success">Next</router-link>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "MNA",
  data() {
    return {
      one: "2",
      two: "3",
      three: "2",
      four: "1",
      five: "2",
      six: "1",
    }
  },
  computed: {
    score: function() {
      return parseInt(this.one) + parseInt(this.two) +
          parseInt(this.three) + parseInt(this.four) +
          parseInt(this.five) + parseInt(this.six)
    }
  }
}
</script>

<style scoped>

</style>