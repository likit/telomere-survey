<template>
<section class="section">
  <Navigation v-if="form.record.followUpId == null"></Navigation>
  <NavigationTwo v-else></NavigationTwo>
  <br>
  <div class="container">
    <b-steps
        :rounded="true"
        :has-navigation="false"
        mobile-mode="minimalist"
    >
      <b-step-item :step="form.record.followUpId == null ? 5 : 6" label="แบบประเมินภาวะโภชนาการ" :clickable="true">
        <div class="has-text-centered" v-if="form.record.followUpId != null">
          <b-tag rounded type="is-danger">เพิ่มการติดตามผล</b-tag>
        </div>
        <b-field label="ในช่วงสามเดือนที่ผ่านมารับประทานอาหารได้น้อยลง เนื่องจากความอยากอาหารลดลง มีปัญหาการย่อย การเคี้ยว หรือปัญหาการกลืนหรือไม่">
          <b-radio native-value=0 v-model="form.record.mna.one">ความอยากอาหารลดลงอย่างมาก</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=1 v-model="form.record.mna.one">ความอยากอาหารลดลงปานกลาง</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=2 v-model="form.record.mna.one">ความอยากอาหารไม่ลดลง</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ form.record.mna.one }}</span>
        <b-field label="ในช่วงสามเดือนที่ผ่านมาน้ำหนักลดลงหรือไม่ (โดยไม่ตั้งใจลด)">
          <b-radio native-value=0 v-model="form.record.mna.two">น้ำหนักลดลงมากกว่า 3 กิโลกรัม</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=1 v-model="form.record.mna.two">ไม่ทราบ</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=2 v-model="form.record.mna.two">น้ำหนักลดลงระหว่าง 1-3 กิโลกรัม</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=3 v-model="form.record.mna.two">น้ำหนักไม่ลดลง</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ form.record.mna.two }}</span>
        <b-field label="สามารถเคลื่อนไหวได้เองหรือไม่">
          <b-radio native-value=0 v-model="form.record.mna.three">นอนบนเตียง หรือต้องอาศัยรถเข็นตลอดเวลา</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=1 v-model="form.record.mna.three">ลุกจากเตียงหรือรถเข็นได้บ้าง แต่ไม่สามารถไปข้างนอกเองได้</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=2 v-model="form.record.mna.three">เดินและเคลื่อนไหวได้ตามปกติ</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ form.record.mna.three }}</span>
        <b-field label="ในสามเดือนที่ผ่านมามีความเครียดรุนแรงหรือป่วยเฉียบพลันหรือไม่">
          <b-radio native-value=0 v-model="form.record.mna.four">มี</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=1 v-model="form.record.mna.four">ไม่มี</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ form.record.mna.four }}</span>
        <b-field label="มีปัญหาทางจิตประสาทหรือไม่">
          <b-radio native-value=0 v-model="form.record.mna.five">ความจำเสื่อมหรือซึมเศร้าอย่างรุนแรง</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=1 v-model="form.record.mna.five">ความจำเสื่อมเล็กน้อย</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value=2 v-model="form.record.mna.five">ไม่มีปัญหาทางประสาท</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ form.record.mna.five }}</span>
        <b-field v-bind:label="'ดัชนีมวลกาย (=' + bmi.toFixed(2) + ')'">
          <b-radio :readonly="true" native-value=0 v-model="form.record.mna.six">BMI น้อยกว่า 19</b-radio>
        </b-field>
        <b-field>
          <b-radio :readonly="true" native-value=1 v-model="form.record.mna.six">BMI ตั้งแต่ 19 แต่น้อยกว่า 21</b-radio>
        </b-field>
        <b-field>
          <b-radio :readonly="true" native-value=2 v-model="form.record.mna.six">BMI ตั้งแต่ 21 แต่น้อยกว่า 23</b-radio>
        </b-field>
        <b-field>
          <b-radio :readonly="true" native-value=3 v-model="form.record.mna.six">BMI ตั้งแต่ 23 ขึ้นไป</b-radio>
        </b-field>
        <span class="tag is-light is-success">คะแนน {{ form.record.mna.six }}</span>
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
      <router-link :to="{ name: 'ADL' }" class="button is-success" v-if="form.record.followUpId == null">
        <span class="icon">
          <i class="fas fa-chevron-right"></i>
        </span>
      </router-link>
      <router-link :to="{ name: 'FollowUpMiniCog' }" class="button is-success">
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
import NavigationTwo from "@/components/navigationTwo.vue";
import {mapState} from "vuex";
export default {
  name: "MNA",
  components: {Navigation, NavigationTwo},
  computed: {
    ...mapState(['form']),
    bmi: function() {
      return this.form.record.personal.weight/(this.form.record.personal.height*0.01)**2.0
    },
    score: function() {
      let total = parseInt(this.form.record.mna.one) + parseInt(this.form.record.mna.two) +
          parseInt(this.form.record.mna.three) + parseInt(this.form.record.mna.four) +
          parseInt(this.form.record.mna.five) + parseInt(this.form.record.mna.six)
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
          title: 'Error!',
          message: 'กรุณาระบุหมายเลขรหัสวิจัย',
          type: 'is-danger',
          hasIcon: true,
          icon: 'times-circle',
          iconPack: 'fa',
          ariaRole: 'alertdialog',
          ariaModal: true
        })
      } else {
        if (this.form.record.followUpId != null) {
          this.$store.dispatch('saveFollowUpForm')
        } else {
          this.$store.dispatch('saveForm')
        }
      }
    }
  }
}
</script>

<style scoped>

</style>