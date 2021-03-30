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
            <b-radio native-value="0" v-model="form.record.sarcf.one">ไม่ลำบาก</b-radio>
          </b-field>
          <b-field>
            <b-radio native-value="1" v-model="form.record.sarcf.one">ค่อนข้างลำบาก</b-radio>
          </b-field>
          <b-field>
            <b-radio native-value="2" v-model="form.record.sarcf.one">ลำบากมากหรือไม่สามารถทำได้</b-radio>
          </b-field>
          <span class="tag is-light is-success">คะแนน {{ form.record.sarcf.one }}</span>
          <b-field label="คุณลำบากแค่ไหนในการเดินจากห้องหนึ่งไปยังอีกห้องหนึ่ง">
            <b-radio native-value=0 v-model="form.record.sarcf.two">ไม่ลำบาก</b-radio>
          </b-field>
          <b-field>
            <b-radio native-value=1 v-model="form.record.sarcf.two">ค่อนข้างลำบาก</b-radio>
          </b-field>
          <b-field>
            <b-radio native-value=2 v-model="form.record.sarcf.two">ลำบากมากต้องใช้อุปกรณ์ช่วยเดินหรือไม่สามารถทำได้</b-radio>
          </b-field>
          <span class="tag is-light is-success">คะแนน {{ form.record.sarcf.two }}</span>
          <b-field label="คุณลำบากแค่ไหนในการลุกจากเก้าอี้หรือเตียงนอน">
            <b-radio native-value=0 v-model="form.record.sarcf.three">ไม่ลำบาก</b-radio>
          </b-field>
          <b-field>
            <b-radio native-value=1 v-model="form.record.sarcf.three">ค่อนข้างลำบาก</b-radio>
          </b-field>
          <b-field>
            <b-radio native-value=2 v-model="form.record.sarcf.three">ลำบากมากหรือไม่สามารถทำได้โดยไม่มีความช่วยเหลือ</b-radio>
          </b-field>
          <span class="tag is-light is-success">คะแนน {{ form.record.sarcf.three }}</span>
          <b-field label="คุณลำบากมากแค่ไหนในการเดินขึ้นบันได 10 ขั้น">
            <b-radio native-value=0 v-model="form.record.sarcf.four">ไม่ลำบาก</b-radio>
          </b-field>
          <b-field>
            <b-radio native-value=1 v-model="form.record.sarcf.four">ค่อนข้างลำบาก</b-radio>
          </b-field>
          <b-field>
            <b-radio native-value=2 v-model="form.record.sarcf.four">ลำบากหรือไม่สามารถทำได้</b-radio>
          </b-field>
          <span class="tag is-light is-success">คะแนน {{ form.record.sarcf.four }}</span>
          <b-field label="คุณหกล้มกี่ครั้งในช่วง 1 ปีที่ผ่านมา">
            <b-radio native-value=0 v-model="form.record.sarcf.five">ไม่เคยหกล้ม</b-radio>
          </b-field>
          <b-field>
            <b-radio native-value=1 v-model="form.record.sarcf.five">1-3 ครั้ง</b-radio>
          </b-field>
          <b-field>
            <b-radio native-value=2 v-model="form.record.sarcf.five">4 ครั้งหรือมากกว่า</b-radio>
          </b-field>
          <span class="tag is-light is-success">คะแนน {{ form.record.sarcf.five }}</span>
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
        <router-link :to="{ name: 'Evaluation' }" class="button is-success">
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
  name: "SARCF",
  components: {Navigation},
  computed: {
    ...mapState(['form']),
    score: function() {
      let total = parseInt(this.form.record.sarcf.one) + parseInt(this.form.record.sarcf.two) +
          parseInt(this.form.record.sarcf.three) + parseInt(this.form.record.sarcf.four) +
          parseInt(this.form.record.sarcf.five)
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
        this.$store.dispatch('saveForm')
      }
    }
  }
}
</script>

<style scoped>

</style>