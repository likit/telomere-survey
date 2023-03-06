<template>
<section class="section">
  <div class="container">
    <NavigationTwo></NavigationTwo>
    <br>
    <div class="container">
      <b-steps
          :rounded="true"
          :has-navigation="false"
          mobile-mode="minimalist"></b-steps>
      <div class="has-text-centered" v-if="form.record.followUpId != null">
        <b-tag rounded type="is-danger">เพิ่มการติดตามผล</b-tag>
      </div>
      <table class="table is-fullwidth is-striped">
        <thead>
        <th>พฤติกรรมการกิน ออกกำลังกาย และสุขภาพ</th>
        <th>ความถี่ในการปฏิบัติ</th>
        </thead>
        <tbody>
        <tr>
          <td>
            1.ทานอาหารครบ 5 หมู่ (ข้าว ผักผลไม้ เนื้อสัตว์ นมไข่และน้ำมัน)
          </td>
          <td>
            <b-field>
              <b-radio native-value="5" v-model="form.record.behavior.one">ประจำ</b-radio>
              <b-radio native-value="3" v-model="form.record.behavior.one">ครั้งคราว</b-radio>
              <b-radio native-value="0" v-model="form.record.behavior.one">ไม่เคยเลย</b-radio>
            </b-field>
          </td>
        </tr>
        <tr>
          <td>
            2.กินอาหารหลากหลาย ไม่ซ้ำซาก
          </td>
          <td>
            <b-field>
              <b-radio native-value="5" v-model="form.record.behavior.two">ประจำ</b-radio>
              <b-radio native-value="3" v-model="form.record.behavior.two">ครั้งคราว</b-radio>
              <b-radio native-value="0" v-model="form.record.behavior.two">ไม่เคยเลย</b-radio>
            </b-field>
          </td>
        </tr>
        <tr>
          <td>
            3.กินผักมากกว่าวันละ 3 ทัพพี
          </td>
          <td>
            <b-field>
              <b-radio native-value="5" v-model="form.record.behavior.three">ประจำ</b-radio>
              <b-radio native-value="3" v-model="form.record.behavior.three">ครั้งคราว</b-radio>
              <b-radio native-value="0" v-model="form.record.behavior.three">ไม่เคยเลย</b-radio>
            </b-field>
          </td>
        </tr>
        <tr>
          <td>
            4.กินผลไม้วันละ 2-3 ส่วน (1 ส่วนเท่ากับ 6-8 คำ)
          </td>
          <td>
            <b-field>
              <b-radio native-value="5" v-model="form.record.behavior.four">ประจำ</b-radio>
              <b-radio native-value="3" v-model="form.record.behavior.four">ครั้งคราว</b-radio>
              <b-radio native-value="0" v-model="form.record.behavior.four">ไม่เคยเลย</b-radio>
            </b-field>
          </td>
        </tr>
        <tr>
          <td>
            5.กินปลาอย่างน้อยวันละ 1 มื้อ
          </td>
          <td>
            <b-field>
              <b-radio native-value="5" v-model="form.record.behavior.five">ประจำ</b-radio>
              <b-radio native-value="3" v-model="form.record.behavior.five">ครั้งคราว</b-radio>
              <b-radio native-value="0" v-model="form.record.behavior.five">ไม่เคยเลย</b-radio>
            </b-field>
          </td>
        </tr>
        <tr>
          <td>
            6.กินเนื้อสัตว์ไม่ติดมัน สัปดาห์ละ 2-3 มื้อ
          </td>
          <td>
            <b-field>
              <b-radio native-value="5" v-model="form.record.behavior.six">ประจำ</b-radio>
              <b-radio native-value="3" v-model="form.record.behavior.six">ครั้งคราว</b-radio>
              <b-radio native-value="0" v-model="form.record.behavior.six">ไม่เคยเลย</b-radio>
            </b-field>
          </td>
        </tr>
        <tr>
          <td>
            7.ดื่มนมรสจืด หรือนมถั่วเหลืองผสมงาดำรสจืดวันละ 1-2 แก้ว
          </td>
          <td>
            <b-field>
              <b-radio native-value="5" v-model="form.record.behavior.seven">ประจำ</b-radio>
              <b-radio native-value="3" v-model="form.record.behavior.seven">ครั้งคราว</b-radio>
              <b-radio native-value="0" v-model="form.record.behavior.seven">ไม่เคยเลย</b-radio>
            </b-field>
          </td>
        </tr>
        <tr>
          <td>
            8.กินอาหารมื้อเย็นห่างจากเวลานอนไม่น้อยกว่า 4 ชั่วโมง
          </td>
          <td>
            <b-field>
              <b-radio native-value="5" v-model="form.record.behavior.eight">ประจำ</b-radio>
              <b-radio native-value="3" v-model="form.record.behavior.eight">ครั้งคราว</b-radio>
              <b-radio native-value="0" v-model="form.record.behavior.eight">ไม่เคยเลย</b-radio>
            </b-field>
          </td>
        </tr>
        <tr>
          <td>
            9.กินอาหารประเภทต้ม นึ่ง ลวก อบ ยำหรือหมก
          </td>
          <td>
            <b-field>
              <b-radio native-value="5" v-model="form.record.behavior.nine">ประจำ</b-radio>
              <b-radio native-value="3" v-model="form.record.behavior.nine">ครั้งคราว</b-radio>
              <b-radio native-value="0" v-model="form.record.behavior.nine">ไม่เคยเลย</b-radio>
            </b-field>
          </td>
        </tr>
        <tr>
          <td>
            10.หลีกเลี่ยงอาหารไขมันสูง
          </td>
          <td>
            <b-field>
              <b-radio native-value="5" v-model="form.record.behavior.ten">ประจำ</b-radio>
              <b-radio native-value="3" v-model="form.record.behavior.ten">ครั้งคราว</b-radio>
              <b-radio native-value="0" v-model="form.record.behavior.ten">ไม่เคยเลย</b-radio>
            </b-field>
          </td>
        </tr>
        <tr>
          <td>
            11.หลีกเลี่ยงของหวานและขนมที่มีแป้งและน้ำตาลมาก
          </td>
          <td>
            <b-field>
              <b-radio native-value="5" v-model="form.record.behavior.eleven">ประจำ</b-radio>
              <b-radio native-value="3" v-model="form.record.behavior.eleven">ครั้งคราว</b-radio>
              <b-radio native-value="0" v-model="form.record.behavior.eleven">ไม่เคยเลย</b-radio>
            </b-field>
          </td>
        </tr>
        <tr>
          <td>
            12.กินอาหารรสจืด
          </td>
          <td>
            <b-field>
              <b-radio native-value="5" v-model="form.record.behavior.twelve">ประจำ</b-radio>
              <b-radio native-value="3" v-model="form.record.behavior.twelve">ครั้งคราว</b-radio>
              <b-radio native-value="0" v-model="form.record.behavior.twelve">ไม่เคยเลย</b-radio>
            </b-field>
          </td>
        </tr>
        <tr>
          <td>
            13.เลือกดื่มน้ำเปล่าแทนน้ำอัดลมหรือน้ำหวาน
          </td>
          <td>
            <b-field>
              <b-radio native-value="5" v-model="form.record.behavior.thirteen">ประจำ</b-radio>
              <b-radio native-value="3" v-model="form.record.behavior.thirteen">ครั้งคราว</b-radio>
              <b-radio native-value="0" v-model="form.record.behavior.thirteen">ไม่เคยเลย</b-radio>
            </b-field>
          </td>
        </tr>
        <tr>
          <td>
            14.หลีกเลี่ยงเครื่องดื่มแอลกอฮอล์
          </td>
          <td>
            <b-field>
              <b-radio native-value="5" v-model="form.record.behavior.fourteen">ประจำ</b-radio>
              <b-radio native-value="3" v-model="form.record.behavior.fourteen">ครั้งคราว</b-radio>
              <b-radio native-value="0" v-model="form.record.behavior.fourteen">ไม่เคยเลย</b-radio>
            </b-field>
          </td>
        </tr>
        <tr>
          <td>
            15.อารมณ์ดีไม่เครียด
          </td>
          <td>
            <b-field>
              <b-radio native-value="5" v-model="form.record.behavior.fifteen">ประจำ</b-radio>
              <b-radio native-value="3" v-model="form.record.behavior.fifteen">ครั้งคราว</b-radio>
              <b-radio native-value="0" v-model="form.record.behavior.fifteen">ไม่เคยเลย</b-radio>
            </b-field>
          </td>
        </tr>
        <tr>
          <td>
            16.นอนหลับไม่น้อยกว่าวันละ 7-8 ชั่วโมง
          </td>
          <td>
            <b-field>
              <b-radio native-value="5" v-model="form.record.behavior.sixteen">ประจำ</b-radio>
              <b-radio native-value="3" v-model="form.record.behavior.sixteen">ครั้งคราว</b-radio>
              <b-radio native-value="0" v-model="form.record.behavior.sixteen">ไม่เคยเลย</b-radio>
            </b-field>
          </td>
        </tr>
        <tr>
          <td>
            17.ออกกำลังกายสัปดาห์ละ 5 วัน หรือสัปดาห์ละ 5 ครั้ง
          </td>
          <td>
            <b-field>
              <b-radio native-value="5" v-model="form.record.behavior.seventeen">ประจำ</b-radio>
              <b-radio native-value="3" v-model="form.record.behavior.seventeen">ครั้งคราว</b-radio>
              <b-radio native-value="0" v-model="form.record.behavior.seventeen">ไม่เคยเลย</b-radio>
            </b-field>
          </td>
        </tr>
        <tr>
          <td>
            18.ออกกำลังกายอย่างน้อยวันละ 30 นาที
          </td>
          <td>
            <b-field>
              <b-radio native-value="5" v-model="form.record.behavior.eighteen">ประจำ</b-radio>
              <b-radio native-value="3" v-model="form.record.behavior.eighteen">ครั้งคราว</b-radio>
              <b-radio native-value="0" v-model="form.record.behavior.eighteen">ไม่เคยเลย</b-radio>
            </b-field>
          </td>
        </tr>
        <tr>
          <td>
            19.ขณะออกกำลังกายหายใจเร็วขึ้นกว่าปกติ เหงื่อซึม
          </td>
          <td>
            <b-field>
              <b-radio native-value="5" v-model="form.record.behavior.nineteen">ประจำ</b-radio>
              <b-radio native-value="3" v-model="form.record.behavior.nineteen">ครั้งคราว</b-radio>
              <b-radio native-value="0" v-model="form.record.behavior.nineteen">ไม่เคยเลย</b-radio>
            </b-field>
          </td>
        </tr>
        <tr>
          <td>
            20.ทุกครั้งวัดรอบเอวได้ปกติคือน้อยกว่าครึ่งหนึ่งของส่วนสูง
          </td>
          <td>
            <b-field>
              <b-radio native-value="5" v-model="form.record.behavior.twenty">ประจำ</b-radio>
              <b-radio native-value="3" v-model="form.record.behavior.twenty">ครั้งคราว</b-radio>
              <b-radio native-value="0" v-model="form.record.behavior.twenty">ไม่เคยเลย</b-radio>
            </b-field>
          </td>
        </tr>
        </tbody>
      </table>
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
      </div>
    </div>
  </div>
</section>
</template>

<script>
import NavigationTwo from "@/components/navigationTwo.vue";
import {mapState} from "vuex";

export default {
  name: "Behavior",
  components: {NavigationTwo},
  computed: {
    ...mapState(['form']),
  },
  methods: {
    saveData() {
      this.$store.dispatch('saveFollowUpForm')
    }
  }
}
</script>

<style scoped>

</style>