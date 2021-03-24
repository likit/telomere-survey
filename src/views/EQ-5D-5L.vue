<template>
<section class="section">
  <Navigation></Navigation>
  <br>
  <div class="container">
    <b-steps
        :rounded="true"
        :has-navigation="false"
        mobile-mode="minimalist"
    >
      <b-step-item step="10" label="EQ-5D-5L" :clickable="true">
        <b-field label="การเคลื่อนไหว">
          <b-radio native-value="1" v-model="one">ข้าพเจ้าไม่มีปัญหาในการเดิน</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="2" v-model="one">ข้าพเจ้ามีปัญหาในการเดิมเล็กน้อย</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="3" v-model="one">ข้าพเจ้ามีปัญหาในการเดินปานกลาง</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="4" v-model="one">ข้าพเจ้ามีปัญหาในการเดินอย่างมาก</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="5" v-model="one">ข้าพเจ้าเดินไม่ได้</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ one }}</span>
        <b-field label="การดูแลตนเอง">
          <b-radio native-value="1" v-model="two">ข้าพเจ้าไม่มีปัญหาในการอาบน้ำ หรือใส่เสื้อผ้าด้วยตนเอง</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="2" v-model="two">ข้าพเจ้ามีปัญหาในการอาบน้ำ หรือใส่เสื้อผ้าด้วยตนเองเล็กน้อย</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="3" v-model="two">ข้าพเจ้ามีปัญหาในการอาบน้ำ หรือใส่เสื้อผ้าด้วยตนเองปานกลาง</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="4" v-model="two">ข้าพเจ้ามีปัญหาในการอาบน้ำ หรือใส่เสื้อผ้าด้วยตนเองอย่างมาก</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="5" v-model="two">ข้าพเจ้าอาบน้ำหรือใส่เสื้อผ้าด้วยตนเองไม่ได้</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ two }}</span>
        <b-field label="กิจกรรมที่ทำประจำ (เช่น ทำงาน เรียนหนังสือ ทำงานบ้าน)">
          <b-radio native-value="1" v-model="three">ข้าพเจ้าไม่มีปัญหาในการทำกิจกรรมที่ทำประจำ</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="2" v-model="three">ข้าพเจ้ามีปัญหาในการทำกิจกรรมที่ทำประจำเล็กน้อย</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="3" v-model="three">ข้าพเจ้ามีปัญหาในการทำกิจกรรมที่ทำประจำปานกลาง</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="4" v-model="three">ข้าพเจ้ามีปัญหาในการทำกิจกรรมที่ทำประจำอย่างมาก</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="5" v-model="three">ข้าพเจ้าทำกิจกรรมที่ทำเป็นประจำไม่ได้</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ three }}</span>
        <b-field label="อาการเจ็บปวด/อาการไม่สบายตัว">
          <b-radio native-value="1" v-model="four">ข้าพเจ้าไม่มีอาการเจ็บปวดหรืออาการไม่สบายตัว</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="2" v-model="four">ข้าพเจ้ามีอาการเจ็บปวดหรืออาการไม่สบายตัวเล็กน้อย</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="3" v-model="four">ข้าพเจ้ามีอาการเจ็บปวดหรืออาการไม่สบายตัวปานกลาง</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="4" v-model="four">ข้าพเจ้ามีอาการเจ็บปวดหรืออาการไม่สบายตัวอย่างมาก</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="5" v-model="four">ข้าพเจ้ามีอาการเจ็บปวดหรืออาการไม่สบายตัวอย่างมากที่สุด</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ four }}</span>
        <b-field label="ความวิตกกังวล/ความซึมเศร้า">
          <b-radio native-value="1" v-model="five">ข้าพเจ้าไม่รู้สึกว่าวิตกกังวลหรือซึมเศร้า</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="2" v-model="five">ข้าพเจ้ารู้สึกวิตกกังวลหรือซึมเศร้าเล็กน้อย</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="3" v-model="five">ข้าพเจ้ารู้สึกวิตกกังวลหรือซึมเศร้าปานกลาง</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="4" v-model="five">ข้าพเจ้ารู้สึกวิตกกังวลหรือซึมเศร้าอย่างมาก</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="5" v-model="five">ข้าพเจ้ารู้สึกวิตกกังวลหรือซึมเศร้าอย่างมากที่สุด</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ five }}</span>
        <h1 class="title has-text-centered is-size-4">คะแนนรวม {{ score }}</h1>
      </b-step-item>
    </b-steps>
    <div class="buttons is-centered">
      <button class="button is-light" @click="$router.back()">Back</button>
      <router-link :to="{ name: 'GPAQ' }" class="button is-success">Next</router-link>
    </div>
  </div>
</section>

</template>

<script>
import Navigation from "@/components/navigation";
export default {
  name: "EQ-5D-5L",
  components: {Navigation},
  data() {
    return {
      one: "1",
      two: "1",
      three: "1",
      four: "1",
      five: "1",
    }
  },
  computed: {
    score: function() {
      return parseInt(this.one) + parseInt(this.two) +
          parseInt(this.three) + parseInt(this.four) +
          parseInt(this.five)
    }
  }
}
</script>

<style scoped>

</style>