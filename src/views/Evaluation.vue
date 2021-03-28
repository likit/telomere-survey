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
      <b-step-item step="14" label="แบบบันทึกการประเมิน" :clickable="true">
        <b-field label="Gait speed">
          Walk time เวลาที่ใช้ในการเดิน 6 เมตร
          <b-numberinput placeholder="ครั้งที่ 1" v-model="form.record.evaluation.gait1"></b-numberinput>
        </b-field>
        <b-field>
          <b-numberinput placeholder="ครั้งที่ 2" v-model="form.record.evaluation.gait2"></b-numberinput>
        </b-field>
        <b-field label="ค่าเฉลี่ย">
          <b-input :readonly="true" placeholder="เฉลี่ย" :value="gait.toFixed(2)"></b-input>
        </b-field>
        <b-field label="Grip strength">
          <b-radio v-model="form.record.evaluation.hand" native-value="ถนัดแขนซ้าย">ถนัดแขนซ้าย</b-radio>
          <b-radio v-model="form.record.evaluation.hand" native-value="ถนัดแขนขวา">ถนัดแขนขวา</b-radio>
        </b-field>
        <div class="notification">
          <b-icon pack="fas" icon="thumbs-up" v-if="form.record.evaluation.hand=='ถนัดแขนซ้าย'" size="is-large" type="is-success"></b-icon>
          <b-field label="แขนซ้าย">
            <b-input type="number" placeholder="ครั้งที่ 1 (กก.)"></b-input>
          </b-field>
          <b-field>
            <b-input type="number" placeholder="ครั้งที่ 2 (กก.)"></b-input>
          </b-field>
          <b-field>
            <b-input type="number" placeholder="ครั้งที่ 3 (กก.)"></b-input>
          </b-field>
        </div>
        <div class="notification">
          <b-icon pack="fas" icon="thumbs-up" v-if="form.record.evaluation.hand=='ถนัดแขนขวา'" type="is-success" size="is-large"></b-icon>
          <b-field label="แขนขวา">
            <b-input type="number" placeholder="ครั้งที่ 1 (กก.)"></b-input>
          </b-field>
          <b-field>
            <b-input type="number" placeholder="ครั้งที่ 2 (กก.)"></b-input>
          </b-field>
          <b-field>
            <b-input type="number" placeholder="ครั้งที่ 3 (กก.)"></b-input>
          </b-field>
        </div>
        <b-field label="Quadriceps strength">
        </b-field>
        <div class="notification">
          <b-icon pack="fas" icon="thumbs-up" v-if="form.record.evaluation.leg=='ถนัดขาซ้าย'" size="is-large" type="is-success"></b-icon>
          <b-field label="ขาซ้าย">
            <b-input type="number" placeholder="ครั้งที่ 1 (กก.)"></b-input>
          </b-field>
          <b-field>
            <b-input type="number" placeholder="ครั้งที่ 2 (กก.)"></b-input>
          </b-field>
          <b-field>
            <b-input type="number" placeholder="ครั้งที่ 3 (กก.)"></b-input>
          </b-field>
        </div>
        <div class="notification">
          <b-icon pack="fas" icon="thumbs-up" v-if="form.record.evaluation.leg=='ถนัดขาขวา'" type="is-success" size="is-large"></b-icon>
          <b-field label="ขาขวา">
            <b-input type="number" placeholder="ครั้งที่ 1 (กก.)"></b-input>
          </b-field>
          <b-field>
            <b-input type="number" placeholder="ครั้งที่ 2 (กก.)"></b-input>
          </b-field>
          <b-field>
            <b-input type="number" placeholder="ครั้งที่ 3 (กก.)"></b-input>
          </b-field>
        </div>
        <b-field label="BIA"></b-field>
        <b-field label="น้ำหนัก">
          <b-input type="number" placeholder="กก." v-model="form.record.personal.weight"></b-input>
        </b-field>
        <b-field label="ส่วนสูง">
          <b-input type="number" placeholder="ซม." v-model="form.record.personal.height"></b-input>
        </b-field>
        <b-field label="BMI">
          <b-input type="number" :readonly="true" :value="bmi.toFixed(2)"></b-input>
        </b-field>
        <b-field label="Muscle mass">
          <b-input type="number" :readonly="true" :value="form.record.evaluation.muscleMass"></b-input>
        </b-field>
        <b-field label="Fat free mass">
          <b-input type="number" :readonly="true" :value="form.record.evaluation.fatFreeMass"></b-input>
        </b-field>
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
      <router-link :to="{ name: 'MainPage' }" class="button is-success">Done</router-link>
    </div>
  </div>
</section>

</template>

<script>
import Navigation from "@/components/navigation";
import {mapState} from "vuex";

export default {
  name: "Evaluation",
  components: {Navigation},
  computed: {
    ...mapState(['form']),
    gait: function() {
        return (this.form.record.evaluation.gait1 + this.form.record.evaluation.gait2)/2.0
    },
    bmi: function() {
        return this.form.record.personal.weight/(this.form.record.personal.height*0.01)**2.0
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