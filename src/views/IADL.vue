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
      <b-step-item step="7" label="กิจวัตรประจำวันอันซับซ้อน (IADL)" :clickable="true">
        <b-field label="ในกรณีที่ท่านมีโทรศัพท์ ท่านสามารถใช้โทรศัพท์ได้เองหรือไม่">
          <b-radio native-value=0 v-model="form.record.iadl.one">ไม่สามารถใช้โทรศัพท์ได้เลย</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=1 v-model="form.record.iadl.one">ทำได้ถ้ามีคนช่วย (สามารถพูดโทรศัพท์ได้หรือเรียกโอเปอเรเตอร์ในกรณีฉุกเฉินได้)</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=2 v-model="form.record.iadl.one">ทำได้โดยไม่ต้องมีใครช่วย รวมทั้งการหาเบอร์โทรศัพท์และหมุนหมายเลขเองแต่ต้องมีคนช่วยหาเบอร์และหมุนหมายเลขให้)</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=9 v-model="form.record.iadl.one">ไม่ตอบ (กรณีไม่มีโทรศัพท์)</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ form.record.iadl.one }}</span>
        <b-field label="ท่านสามารถไปไหนมาไหนโดยใช้หรือไม่ใช้ยานพาหนะ">
          <b-radio native-value=0 v-model="form.record.iadl.two">ท่านสามารถเดินทางไปไหนมาไหนได้</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=1 v-model="form.record.iadl.two">ทำได้ถ้ามีคนช่วยเหลือ</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=2 v-model="form.record.iadl.two">ทำได้โดยไม่ต้องมีคนช่วยเหลือ</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ form.record.iadl.two }}</span>
        <b-field label="ท่านสามารถเลือกซื้อเสื้ออาหารหรือเสื้อผ้าในร้านค้าหรือร้านขายของชำได้หรือไม่">
          <b-radio native-value=0 v-model="form.record.iadl.three">ไม่สามารถซื้อของได้เองเลย</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=1 v-model="form.record.iadl.three">ทำได้โดยต้องมีคนช่วยเหลือ</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=2 v-model="form.record.iadl.three">ทำได้โดยไม่ต้องมีใครช่วย</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ form.record.iadl.three }}</span>
        <b-field label="ท่านหุงหา/อุ่นอาหารได้เองหรือไม่">
          <b-radio native-value=0 v-model="form.record.iadl.four">ไม่สามารถเตรียมอาหารได้เลย</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=1 v-model="form.record.iadl.four">ทำได้โดยต้องมีคนช่วย (สามารถเตรียมเครื่องปรุงบางอย่างได้)</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=2 v-model="form.record.iadl.four">ทำได้โดยไม่ต้องมีคนช่วย (สามารถทำได้ด้วยตนเอง)</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ form.record.iadl.four }}</span>
        <b-field label="ท่านจัดการเรื่องเงินหรือใช้จ่ายเงินที่ลูกหลานให้ได้หรือไม่">
          <b-radio native-value=0 v-model="form.record.iadl.five">ไม่สามารถจัดการเรื่องเงินทองได้เลย</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=1 v-model="form.record.iadl.five">ทำได้โดยไม่ต้องมีคนช่วย (สามารถจัดการเรื่องซื้อวันต่อวันได้แต่ต้องมีคนช่วยจัดการเรื่องการชำระเงินให้)</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=2 v-model="form.record.iadl.five">ทำได้โดยไม่ต้องมีคนช่วย (จ่ายเงินสดด้วยตนเอง)</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ form.record.iadl.five }}</span>
        <b-field label="ท่านสามารถทำความสะอาดบ้านได้ด้วยตนเองหรือไม่">
          <b-radio native-value=0 v-model="form.record.iadl.six">ทำเองไม่ได้เลย/ต้องมีคนอื่นช่วยทำให้ทั้งหมด</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=1 v-model="form.record.iadl.six">ต้องมีคนช่วยบางส่วน</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=2 v-model="form.record.iadl.six">ทำด้วยตนเองได้ทั้งหมด</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ form.record.iadl.six }}</span>
        <h1 class="title has-text-centered is-size-4">คะแนนรวม {{ score }}</h1>
      </b-step-item>
    </b-steps>
    <div class="buttons is-centered">
      <button class="button is-light" @click="$router.back()">Back</button>
      <router-link :to="{ name: '9Q' }" class="button is-success">Next</router-link>
    </div>
  </div>
</section>

</template>

<script>
import Navigation from "@/components/navigation";
import {mapState} from "vuex";

export default {
  name: "IADL",
  components: {Navigation},
  computed: {
    ...mapState(['form']),
    score: function() {
      let total = parseInt(this.form.record.iadl.one) +
          parseInt(this.form.record.iadl.two) +
          parseInt(this.form.record.iadl.three) +
          parseInt(this.form.record.iadl.four) +
          parseInt(this.form.record.iadl.five) +
          parseInt(this.form.record.iadl.six)
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