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
      <b-step-item step="6" label="กิจวัตรประจำวัน (ADL)" :clickable="true">
        <b-field label="Feeding (รับประทานอาหารเมื่อเตรียมสำรับไว้ให้เรียบร้อย)">
          <b-radio native-value=0 v-model="form.record.adl.one">ไม่สามารถตักอาหารเข้าปากได้ ต้องมีคนป้อนให้</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=1 v-model="form.record.adl.one">ตักอาหารได้เองแต่ต้องมีคนช่วย เช่น ช่วยใช้ช้อนตักเตรียมไว้ให้หรือตัดเป็นคำเล็ก ๆ ไว้ล่วงหน้า</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=2 v-model="form.record.adl.one">ตักอาหารและช่วยตัวเองได้เป็นปกติ</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ form.record.adl.one }}</span>
        <b-field label="Grooming (ล้างหน้า หวีผม แปรงฟัน โกนหนวด ในระยะเวลา 24-48 ชั่วโมงที่ผ่านมา">
          <b-radio native-value=0 v-model="form.record.adl.two">ต้องการความช่วยเหลือ</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=1 v-model="form.record.adl.two">ทำเองได้ (รวมทั้งที่ทำได้เองถ้าเตรียมอุปกรณ์ไว้ให้)</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ form.record.adl.two }}</span>
        <b-field label="Transfer (ลุกนั่งจากที่นอน หรือจากเตียงไปยังเก้าอี้)">
          <b-radio native-value=0 v-model="form.record.adl.three">ไม่สามารถนั่งได้ (นั่งแล้วจะล้มเสมอ) หรือต้องใช้คนสองคนช่วยกันยกขึ้น</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=1 v-model="form.record.adl.three">ต้องการความช่วยเหลืออย่างมากจึงจะนั่งได้ เช่น ต้องใช้คนที่แข็งแรงหรือมีทักษะ 1 คนหรือใช้คนทั่วไป 2 คนพยุงหรือดันขึ้นมาจึงจะนั่งอยู่ได้</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=2 v-model="form.record.adl.three">ต้องการความช่วยเหลือบ้าง เช่น บอกให้ทำตามหรือช่วยพยุงเล็กน้อยหรือต้องมีคนดูแลเพื่อความปลอดภัย</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=3 v-model="form.record.adl.three">ทำได้เอง</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ form.record.adl.three }}</span>
        <b-field label="Toilet use (ใช้ห้องน้ำ)">
          <b-radio native-value=0 v-model="form.record.adl.four">ช่วยตัวเองไม่ได้</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=1 v-model="form.record.adl.four">ทำเองได้บ้างอย่างน้อยทำความสะอาดตัวเองได้หลังจากเสร็จธุระ แต่ต้องการความช่วยเหลือในบางสิ่ง</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=2 v-model="form.record.adl.four">ช่วยตัวเองได้ดี (ขึ้นนั่งและลงจากโถส้วมเองได้ ทำความสะอาดได้เรียบร้อยหลังจากเสร็จธุระ ถอดใส่เสื้อผ้าได้เรียบร้อย)</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ form.record.adl.four }}</span>
        <b-field label="Mobility (การเคลื่อนที่ภายในห้องหรือบ้าน)">
          <b-radio native-value=0 v-model="form.record.adl.five">เคลื่อนที่ไปไหนไม่ได้</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=1 v-model="form.record.adl.five">ต้องใช้รถเข็นช่วยตัวเองให้เคลื่อนที่ได้เอง (ไม่ต้องมีคนเข็นให้) และจะต้องเข้าออกมุมห้องหรือประตูได้</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=2 v-model="form.record.adl.five">เดินหรือเคลื่อนที่โดยมีคนช่วยเช่น พยุง หรือบอกให้ทำตามหรือต้องให้ความสนใจดูแลเพื่อความปลอดภัย</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=3 v-model="form.record.adl.five">เดินหรือเคลื่อนที่ได้เอง</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ form.record.adl.five }}</span>
        <b-field label="Dressing (การสวมใส่เสื้อผ้า)">
          <b-radio native-value=0 v-model="form.record.adl.six">ต้องมีคนสวมใส่ให้ ช่วยตัวเองแทบไม่ได้หรือได้น้อย</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=1 v-model="form.record.adl.six">ช่วยตัวเองได้ประมาณร้อยะ 50 ที่เหลือต้องมีคนช่วย</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=2 v-model="form.record.adl.six">ช่วยตัวเองได้ดี (รวมทั้งการติดกระดุม รูดซิบ หรือใช้เสื้อผ้าที่ดัดแปลงเหมาะสมก็ได้)</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ form.record.adl.six }}</span>
        <b-field label="Stairs (การขึ้นลงบันได)">
          <b-radio native-value=0 v-model="form.record.adl.seven">ไม่สามารถทำได้</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=1 v-model="form.record.adl.seven">ต้องการคนช่วย</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=2 v-model="form.record.adl.seven">ขึ้นลงเอง (ถ้าต้องการใช้เครื่องเดิน เช่น walker จะต้องเอาขึ้นลงด้วย)</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ form.record.adl.seven }}</span>
        <b-field label="Bathing (การอาบน้ำ)">
          <b-radio native-value=0 v-model="form.record.adl.eight">ต้องมีคนช่วยหรือทำให้</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=1 v-model="form.record.adl.eight">อาบน้ำเองได้</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ form.record.adl.eight }}</span>
        <b-field label="Bowels (การกลั้นการถ่ายอุจจาระในระยะ 1 สัปดาห์ที่ผ่านมา">
          <b-radio native-value=0 v-model="form.record.adl.nine">กลั้นไม่ได้หรือต้องการสวนอุจจาระเสมอ</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=1 v-model="form.record.adl.nine">กลั้นไม่ได้บางครั้ง (เป็นน้อยกว่า 1 ครั้งต่อสัปดาห์)</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=2 v-model="form.record.adl.nine">กลั้นได้เป็นปกติ</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ form.record.adl.nine }}</span>
        <b-field label="Bladder (การกลั้นปัสสาวะในระยะ 1 สัปดาห์ที่ผ่านมา)">
          <b-radio native-value=0 v-model="form.record.adl.ten">กลั้นไม่ได้หรือใส่สายสวนปัสสาวะแต่ไม่สามารถดูแลตัวเองได้</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=1 v-model="form.record.adl.ten">กลั้นไม่ได้บางครั้ง (เป็นน้อยกว่า 1 ครั้งต่อสัปดาห์)</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=2 v-model="form.record.adl.ten">กลั้นได้เป็นปกติ</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ form.record.adl.ten }}</span>
        <h1 class="title has-text-centered is-size-4">คะแนนรวม {{ score }}</h1>
      </b-step-item>
    </b-steps>
    <div class="buttons is-centered">
      <button class="button is-light" @click="$router.back()">
        <span class="icon">
          <i class="fas fa-chevron-left"></i>
        </span>
      </button>
      <button class="button is-primary" @click="saveData">
        <span class="icon">
          <i class="far fa-save"></i>
        </span>
        <span>Save</span>
      </button>
      <router-link :to="{ name: 'IADL' }" class="button is-success">
        <span class="icon">
          <i class="fas fa-chevron-right"></i>
        </span>
      </router-link>
    </div>
  </div>
</section>

</template>

<script>
import Navigation from "@/components/navigation";
import {mapState} from "vuex";

export default {
  name: "ADL",
  components: {Navigation},
  computed: {
    ...mapState(['form']),
    score: function() {
      let total = parseInt(this.form.record.adl.one) + parseInt(this.form.record.adl.two) +
          parseInt(this.form.record.adl.three) + parseInt(this.form.record.adl.four) +
          parseInt(this.form.record.adl.five) + parseInt(this.form.record.adl.six) +
          parseInt(this.form.record.adl.seven) + parseInt(this.form.record.adl.eight) +
          parseInt(this.form.record.adl.nine) + parseInt(this.form.record.adl.ten)
      if (isNaN(total)) {
        return "N/A"
      } else {
        return total
      }
    }
  },
  methods: {
    saveData() {
      let self = this
      if (this.form.record.code == null) {
        self.$buefy.dialog.alert({
          message: 'กรุณาระบุหมายเลขรหัสวิจัย',
          type: 'is-danger',
          hasIcon: true,
          icon: 'times-circle',
          iconPack: 'fa',
          ariaRole: 'alertdialog',
          ariaModal: true
        })
      } else {
        this.$store.dispatch('saveForm').then(() => {
          self.$buefy.toast.open({
            message: 'บันทึกข้อมูลเรียบร้อยแล้ว',
            type: 'is-success',
          })
        }).catch(() => {
          self.$buefy.toast.open({
            message: 'โปรแกรมไม่สามารถบันทึกข้อมูลได้ โปรดลองใหม่อีกครั้ง',
            type: 'is-danger',
          })
        })
      }
    }
  }
}
</script>

<style scoped>

</style>