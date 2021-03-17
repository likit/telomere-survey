<template>
<section class="section">
  <div class="container">
    <b-steps
        :rounded="true"
        :has-navigation="false"
        mobile-mode="minimalist"
    >
      <b-step-item step="6" label="กิจวัตรประจำวันอันซับซ้อน (IADL)" :clickable="true">
        <b-field label="ในกรณีที่ท่านมีโทรศัพท์ ท่านสามารถใช้โทรศัพท์ได้เองหรือไม่">
          <b-radio native-value="0" v-model="one">ไม่สามารถใช้โทรศัพท์ได้เลย</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="1" v-model="one">ทำได้ถ้ามีคนช่วย (สามารถพูดโทรศัพท์ได้หรือเรียกโอเปอเรเตอร์ในกรณีฉุกเฉินได้)</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="2" v-model="one">ทำได้โดยไม่ต้องมีใครช่วย รวมทั้งการหาเบอร์โทรศัพท์และหมุนหมายเลขเองแต่ต้องมีคนช่วยหาเบอร์และหมุนหมายเลขให้)</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="9" v-model="one">ไม่ตอบ (กรณีไม่มีโทรศัพท์)</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ one }}</span>
        <b-field label="ท่านสามารถไปไหนมาไหนโดยใช้หรือไม่ใช้ยานพาหนะ">
          <b-radio native-value="0" v-model="two">ท่านสามารถเดินทางไปไหนมาไหนได้</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="1" v-model="two">ทำได้ถ้ามีคนช่วยเหลือ</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="2" v-model="two">ทำได้โดยไม่ต้องมีคนช่วยเหลือ</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ two }}</span>
        <b-field label="ท่านสามารถเลือกซื้อเสื้ออาหารหรือเสื้อผ้าในร้านค้าหรือร้านขายของชำได้หรือไม่">
          <b-radio native-value="0" v-model="three">ไม่สามารถซื้อของได้เองเลย</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="1" v-model="three">ทำได้โดยต้องมีคนช่วยเหลือ</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="2" v-model="three">ทำได้โดยไม่ต้องมีใครช่วย</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ three }}</span>
        <b-field label="ท่านหุงหา/อุ่นอาหารได้เองหรือไม่">
          <b-radio native-value="0" v-model="four">ไม่สามารถเตรียมอาหารได้เลย</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="1" v-model="four">ทำได้โดยต้องมีคนช่วย (สามารถเตรียมเครื่องปรุงบางอย่างได้)</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="2" v-model="four">ทำได้โดยไม่ต้องมีคนช่วย (สามารถทำได้ด้วยตนเอง)</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ four }}</span>
        <b-field label="ท่านจัดการเรื่องเงินหรือใช้จ่ายเงินที่ลูกหลานให้ได้หรือไม่">
          <b-radio native-value="0" v-model="five">ไม่สามารถจัดการเรื่องเงินทองได้เลย</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="1" v-model="five">ทำได้โดยไม่ต้องมีคนช่วย (สามารถจัดการเรื่องซื้อวันต่อวันได้แต่ต้องมีคนช่วยจัดการเรื่องการชำระเงินให้)</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="2" v-model="five">ทำได้โดยไม่ต้องมีคนช่วย (จ่ายเงินสดด้วยตนเอง)</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ five }}</span>
        <b-field label="ท่านสามารถทำความสะอาดบ้านได้ด้วยตนเองหรือไม่">
          <b-radio native-value="0" v-model="six">ทำเองไม่ได้เลย/ต้องมีคนอื่นช่วยทำให้ทั้งหมด</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="1" v-model="six">ต้องมีคนช่วยบางส่วน</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="2" v-model="six">ทำด้วยตนเองได้ทั้งหมด</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ six }}</span>
        <h1 class="title has-text-centered is-size-4">คะแนนรวม {{ score }}</h1>
      </b-step-item>
    </b-steps>
    <div class="buttons is-centered">
      <button class="button is-light" @click="$router.back()">Back</button>
      <router-link :to="{ name: 'MNA' }" class="button is-success">Next</router-link>
    </div>
  </div>
</section>

</template>

<script>
export default {
  name: "ADL",
  data() {
    return {
      one: "2",
      two: "0",
      three: "2",
      four: "2",
      five: "2",
      six: "2",
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