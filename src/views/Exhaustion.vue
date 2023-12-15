<template>
  <section class="section">
    <Navigation></Navigation>
    <br>
    <div class="container">
      <div class="columns">
        <div class="column is-two-thirds is-offset-2">
          <h1 class="title has-text-centered">แบบประเมิน Self-report Exhaustion</h1>
          <b-field label="ฉันรู้สึกว่าทุก ๆ สิ่งที่ฉันกระทำต้องฝืนใจทำ">
            <b-radio native-value=0 v-model="form.record.exhaustion.one">ไม่เลยน้อยกว่า 1 วัน/สัปดาห์</b-radio>
          </b-field>
          <b-field>
            <b-radio native-value=1 v-model="form.record.exhaustion.one">นาน ๆ ครั้งน้อยกว่า 1-2 วัน/สัปดาห์</b-radio>
          </b-field>
          <b-field>
            <b-radio native-value=2 v-model="form.record.exhaustion.one">ค่อนข้างบ่อย น้อยกว่า 3-4 วัน/สัปดาห์</b-radio>
          </b-field>
          <b-field>
            <b-radio native-value=3 v-model="form.record.exhaustion.one">บ่อยครั้ง น้อยกว่า 5-7 วัน/สัปดาห์</b-radio>
          </b-field>
          <span class="tag is-light is-success">คะแนน {{ form.record.exhaustion.one }}</span>
          <b-field label="ฉันรู้สึกท้อถอยในชีวิต">
            <b-radio native-value=0 v-model="form.record.exhaustion.two">ไม่เลยน้อยกว่า 1 วัน/สัปดาห์</b-radio>
          </b-field>
          <b-field>
            <b-radio native-value=1 v-model="form.record.exhaustion.two">นาน ๆ ครั้งน้อยกว่า 1-2 วัน/สัปดาห์</b-radio>
          </b-field>
          <b-field>
            <b-radio native-value=2 v-model="form.record.exhaustion.two">ค่อนข้างบ่อย น้อยกว่า 3-4 วัน/สัปดาห์</b-radio>
          </b-field>
          <b-field>
            <b-radio native-value=3 v-model="form.record.exhaustion.two">บ่อยครั้ง น้อยกว่า 5-7 วัน/สัปดาห์</b-radio>
          </b-field>
          <span class="tag is-light is-success">คะแนน {{ form.record.exhaustion.two }}</span>
          <h1 class="title has-text-centered is-size-4">คะแนนรวม {{ score }}</h1>
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
            <router-link :to="{ name: 'GPAQ' }" class="button is-success">
              <span class="icon">
                <i class="fas fa-chevron-right"></i>
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import Navigation from "@/components/navigation";
import {mapState} from "vuex";

export default {
  name: "Exhaustion",
  components: {Navigation},
  computed: {
    ...mapState(['form']),
    score: function () {
      let total = parseInt(this.form.record.exhaustion.one) +
          parseInt(this.form.record.exhaustion.two)
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