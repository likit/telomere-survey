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
        <b-step-item step="13" label="แบบประเมิน SARC-F" :clickable="true">
          <b-field label="คุณลำบากแค่ไหนในการยกของหนัก 10 ปอนด์ (4.5 กิโลกรัม)">
            <b-radio native-value="0" v-model="one">ไม่ลำบาก</b-radio>
          </b-field>
          <b-field>
            <b-radio native-value="1" v-model="one">ค่อนข้างลำบาก</b-radio>
          </b-field>
          <b-field>
            <b-radio native-value="2" v-model="one">ลำบากมากหรือไม่สามารถทำได้</b-radio>
          </b-field>
          <span class="tag is-light is-success">คะแนน {{ one }}</span>
          <b-field label="คุณลำบากแค่ไหนในการเดินจากห้องหนึ่งไปยังอีกห้องหนึ่ง">
            <b-radio native-value=0 v-model="two">ไม่ลำบาก</b-radio>
          </b-field>
          <b-field>
            <b-radio native-value=1 v-model="two">ค่อนข้างลำบาก</b-radio>
          </b-field>
          <b-field>
            <b-radio native-value=2 v-model="two">ลำบากมากต้องใช้อุปกรณ์ช่วยเดินหรือไม่สามารถทำได้</b-radio>
          </b-field>
          <span class="tag is-light is-success">คะแนน {{ two }}</span>
          <b-field label="คุณลำบากแค่ไหนในการลุกจากเก้าอี้หรือเตียงนอน">
            <b-radio native-value=0 v-model="three">ไม่ลำบาก</b-radio>
          </b-field>
          <b-field>
            <b-radio native-value=1 v-model="three">ค่อนข้างลำบาก</b-radio>
          </b-field>
          <b-field>
            <b-radio native-value=2 v-model="three">ลำบากมากหรือไม่สามารถทำได้โดยไม่มีความช่วยเหลือ</b-radio>
          </b-field>
          <span class="tag is-light is-success">คะแนน {{ three }}</span>
          <b-field label="คุณลำบากมากแค่ไหนในการเดินขึ้นบันได 10 ขั้น">
            <b-radio native-value=0 v-model="four">ไม่ลำบาก</b-radio>
          </b-field>
          <b-field>
            <b-radio native-value=1 v-model="four">ค่อนข้างลำบาก</b-radio>
          </b-field>
          <b-field>
            <b-radio native-value=2 v-model="four">ลำบากหรือไม่สามารถทำได้</b-radio>
          </b-field>
          <span class="tag is-light is-success">คะแนน {{ four }}</span>
          <b-field label="คุณหกล้มกี่ครั้งในช่วง 1 ปีที่ผ่านมา">
            <b-radio native-value=0 v-model="five">ไม่เคยหกล้ม</b-radio>
          </b-field>
          <b-field>
            <b-radio native-value=1 v-model="five">1-3 ครั้ง</b-radio>
          </b-field>
          <b-field>
            <b-radio native-value=2 v-model="five">4 ครั้งหรือมากกว่า</b-radio>
          </b-field>
          <span class="tag is-light is-success">คะแนน {{ five }}</span>
          <h1 class="title has-text-centered is-size-4">คะแนนรวม {{ score }}</h1>
        </b-step-item>
      </b-steps>
      <div class="buttons is-centered">
        <button class="button is-light" @click="$router.back()">Back</button>
        <router-link :to="{ name: 'Evaluation' }" class="button is-success">Next</router-link>
      </div>
    </div>
  </section>

</template>
<script>
import Navigation from "@/components/navigation";
export default {
  name: "SARCF",
  components: {Navigation},
  data() {
    return {
      one: null,
      two: null,
      three: null,
      four: null,
      five: null,
    }
  },
  computed: {
    score: function() {
      let total = parseInt(this.one) + parseInt(this.two) +
          parseInt(this.three) + parseInt(this.four) +
          parseInt(this.five)
      if (isNaN(total)) {
        return "N/A"
      } else {
        return total
      }
    }
  }
}
</script>

<style scoped>

</style>