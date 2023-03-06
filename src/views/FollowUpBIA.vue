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
      <b-step-item step="3" label="แบบบันทึกการประเมิน" :clickable="true">
        <h1 class="title">BIA</h1>
        <b-field label="น้ำหนัก">
          <b-input type="number" step="0.1" placeholder="กก." v-model="form.record.personal.weight"></b-input>
        </b-field>
        <b-field label="ส่วนสูง">
          <b-input type="number" step="0.1" placeholder="ซม." v-model="form.record.personal.height"></b-input>
        </b-field>
        <b-field label="BMI">
          <b-input type="number" :readonly="true" :value="bmi"></b-input>
        </b-field>
        <b-field label="Skeletal Muscle Mass">
          <b-input type="number" step="0.1" :value="form.record.evaluation.muscleMass"
                   @input="updateMuscleMass"></b-input>
        </b-field>
        <b-field label="Skeletal Muscle Mass Index">
          <b-input type="number" :readonly="true" :value="form.record.evaluation.smmIndex | toFixed"></b-input>
        </b-field>
        <b-field label="Soft Lean Mass">
          <b-input type="number" step="0.1" v-model="form.record.evaluation.slm"></b-input>
        </b-field>
        <b-field label="Lean Body Mass">
          <b-input type="number" step="0.1" v-model="form.record.evaluation.lbm"></b-input>
        </b-field>
        <b-field label="Total Body Water">
          <b-input type="number" step="0.1" v-model="form.record.evaluation.tbw"></b-input>
        </b-field>
        <b-field label="Intracellular Water">
          <b-input type="number" step="0.1" v-model="form.record.evaluation.icw"></b-input>
        </b-field>
        <b-field label="Fat free Mass">
          <b-input type="number" step="0.1" v-model="form.record.evaluation.fatFreeMass"></b-input>
        </b-field>
        <b-field label="Percentage Body Fat">
          <b-input type="number" step="0.1" v-model="form.record.evaluation.pbf"></b-input>
        </b-field>
        <h1 class="title">Muscle Strength</h1>
        <b-field label="Grip strength">
          <b-radio v-model="form.record.evaluation.hand" native-value="ถนัดแขนซ้าย">ถนัดแขนซ้าย</b-radio>
          <b-radio v-model="form.record.evaluation.hand" native-value="ถนัดแขนขวา">ถนัดแขนขวา</b-radio>
        </b-field>
        <div class="notification">
          <b-icon pack="fas" icon="thumbs-up" v-if="form.record.evaluation.hand=='ถนัดแขนซ้าย'" size="is-large" type="is-success"></b-icon>
          <b-field label="แขนซ้าย">
            <b-input type="number" step="0.1" placeholder="ครั้งที่ 1 (กก.)"
                     v-model="form.record.evaluation.gripLeft1"></b-input>
          </b-field>
          <b-field>
            <b-input type="number" step="0.1" placeholder="ครั้งที่ 2 (กก.)"
                     v-model="form.record.evaluation.gripLeft2"></b-input>
          </b-field>
          <b-field>
            <b-input type="number" step="0.1" placeholder="ครั้งที่ 3 (กก.)"
                     v-model="form.record.evaluation.gripLeft3"></b-input>
          </b-field>
        </div>
        <div class="notification">
          <b-icon pack="fas" icon="thumbs-up" v-if="form.record.evaluation.hand=='ถนัดแขนขวา'" type="is-success" size="is-large"></b-icon>
          <b-field label="แขนขวา">
            <b-input type="number" step="0.1" placeholder="ครั้งที่ 1 (กก.)"
                     v-model="form.record.evaluation.gripRight1"></b-input>
          </b-field>
          <b-field>
            <b-input type="number" step="0.1" placeholder="ครั้งที่ 2 (กก.)"
                     v-model="form.record.evaluation.gripRight2"></b-input>
          </b-field>
          <b-field>
            <b-input type="number" step="0.1" placeholder="ครั้งที่ 3 (กก.)"
                     v-model="form.record.evaluation.gripRight3"></b-input>
          </b-field>
        </div>
        <b-field label="Quadriceps strength">
        </b-field>
        <div class="notification">
          <b-icon pack="fas" icon="thumbs-up" v-if="form.record.evaluation.leg=='ถนัดขาซ้าย'" size="is-large" type="is-success"></b-icon>
          <b-field label="ขาซ้าย">
            <b-input type="number" step="0.1" placeholder="ครั้งที่ 1 (กก.)"
                     v-model="form.record.evaluation.quadLeft1"></b-input>
          </b-field>
          <b-field>
            <b-input type="number" step="0.1" placeholder="ครั้งที่ 2 (กก.)"
                     v-model="form.record.evaluation.quadLeft2"></b-input>
          </b-field>
          <b-field>
            <b-input type="number" step="0.1" placeholder="ครั้งที่ 3 (กก.)"
                     v-model="form.record.evaluation.quadLeft3"></b-input>
          </b-field>
        </div>
        <div class="notification">
          <b-icon pack="fas" icon="thumbs-up" v-if="form.record.evaluation.leg=='ถนัดขาขวา'" type="is-success" size="is-large"></b-icon>
          <b-field label="ขาขวา">
            <b-input type="number" step="0.1" placeholder="ครั้งที่ 1 (กก.)"
                     v-model="form.record.evaluation.quadRight1"></b-input>
          </b-field>
          <b-field>
            <b-input type="number" step="0.1" placeholder="ครั้งที่ 2 (กก.)"
                     v-model="form.record.evaluation.quadRight2"></b-input>
          </b-field>
          <b-field>
            <b-input type="number" step="0.1" placeholder="ครั้งที่ 3 (กก.)"
                     v-model="form.record.evaluation.quadRight3"></b-input>
          </b-field>
        </div>
        <b-field label="เส้นรอบวงแขน"></b-field>
        <div class="notification">
          <b-field label="ซ้าย">
            <b-input type="number" step="0.1" placeholder="ซม."
                     v-model="form.record.evaluation.leftArmCircumference"></b-input>
          </b-field>
          <b-field label="ขวา">
            <b-input type="number" step="0.1" placeholder="ซม."
                     v-model="form.record.evaluation.rightArmCircumference"></b-input>
          </b-field>
        </div>
        <b-field label="เส้นรอบวงน่อง"></b-field>
        <div class="notification">
          <b-field label="ซ้าย">
            <b-input type="number" step="0.1" placeholder="ซม."
                     v-model="form.record.evaluation.leftCalfCircumference"></b-input>
          </b-field>
          <b-field label="ขวา">
            <b-input type="number" step="0.1" placeholder="ซม."
                     v-model="form.record.evaluation.rightCalfCircumference"></b-input>
          </b-field>
        </div>
        <h1 class="title">Short Physical Performance Battery Test</h1>
        <b-field label="ลุกจากเก้าอี้และนั่ง 5 ครั้ง">
          <b-numberinput placeholder="วินาที" step="1" v-model="form.record.evaluation.ftsts"></b-numberinput>
        </b-field>
        <br>
        <b-field label="Timed Up and Go">
          เวลาที่ใช้
          <b-numberinput placeholder="วินาที" step="0.1" v-model="form.record.evaluation.tug"></b-numberinput>
        </b-field>
        <br>
        <b-field label="Gait speed">
          Walk time เวลาที่ใช้ในการเดิน 6 เมตร
          <b-numberinput placeholder="ครั้งที่ 1" step="0.1" v-model="form.record.evaluation.gait1_6min"></b-numberinput>
        </b-field>
        <b-field>
          <b-numberinput placeholder="ครั้งที่ 2" step="0.1" v-model="form.record.evaluation.gait2_6min"></b-numberinput>
        </b-field>
        <b-field label="Gait speed">
          Walk time เวลาที่ใช้ในการเดิน 4 เมตร
          <b-numberinput placeholder="ครั้งที่ 1" step="0.1" v-model="form.record.evaluation.gait1_4min"></b-numberinput>
        </b-field>
        <b-field>
          <b-numberinput placeholder="ครั้งที่ 2" step="0.1" v-model="form.record.evaluation.gait2_4min"></b-numberinput>
        </b-field>
        <h1 class="title is-size-5">ทดสอบการทรงตัว ท่าละ 10 วินาที</h1>
        <b-field label="เท้าขนานกัน side-by-side">
          <b-radio native-value="1" v-model="form.record.evaluation.sideBySide">Held for 10 seconds</b-radio>
          <b-radio native-value="2" v-model="form.record.evaluation.sideBySide">Not held for 10 seconds</b-radio>
          <b-radio native-value="3" v-model="form.record.evaluation.sideBySide">Not attempt</b-radio>
        </b-field>
        <b-field label="ยืนเท้าเหลื่อมกัน semi tandem">
          <b-radio native-value="1" v-model="form.record.evaluation.semiTandemStand">Held for 10 seconds</b-radio>
          <b-radio native-value="2" v-model="form.record.evaluation.semiTandemStand">Not held for 10 seconds</b-radio>
          <b-radio native-value="3" v-model="form.record.evaluation.semiTandemStand">Not attempt</b-radio>
        </b-field>
        <b-field label="ยืนต่อเท้ากัน tandem stand">
          <b-radio native-value="1" v-model="form.record.evaluation.tandemStand">Held for 10 seconds</b-radio>
          <b-radio native-value="2" v-model="form.record.evaluation.tandemStand">Not held for 10 seconds</b-radio>
          <b-radio native-value="3" v-model="form.record.evaluation.tandemStand">Not attempt</b-radio>
        </b-field>
        <b-field label="One foot stand">
          <b-radio native-value="1" v-model="form.record.evaluation.oneFootStand">Held for 10 seconds</b-radio>
          <b-radio native-value="2" v-model="form.record.evaluation.oneFootStand">Not held for 10 seconds</b-radio>
          <b-radio native-value="3" v-model="form.record.evaluation.oneFootStand">Not attempt</b-radio>
        </b-field>
        <b-field label="หมายเหตุ">
          <b-input v-model="form.record.evaluation.note"></b-input>
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
      <router-link :to="{name: 'FollowUpFRAILScale'}" class="button is-success">
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
  name: "Evaluation",
  components: {Navigation},
  computed: {
    ...mapState(['form']),
    bmi: function() {
      if (this.form.record.personal.weight > 0 && this.form.record.personal.height > 0) {
        let bmi = this.form.record.personal.weight/(this.form.record.personal.height*0.01)**2.0
        return bmi.toFixed(2)
      } else {
        return null
      }
    },
  },
  watch: {
    "form.record.evaluation.sideBySide" (newValue) {
      if (newValue !== null) {
        this.form.record.evaluation.sideBySideScore = parseInt(newValue) > 1 ? 0 : 1
      }
    },
    "form.record.evaluation.semiTandemStand" (newValue) {
      if (newValue !== null) {
        this.form.record.evaluation.semiTandemStandScore = parseInt(newValue) > 1 ? 0 : 1
      }
    },
    "form.record.evaluation.tandemStand" (newValue) {
      if (newValue !== null) {
        this.form.record.evaluation.tandemStandScore = parseInt(newValue) > 1 ? 0 : 1
      }
    },
    "form.record.evaluation.oneFootStand" (newValue) {
      if (newValue !== null) {
        this.form.record.evaluation.oneFootStandScore = parseInt(newValue) > 1 ? 0 : 1
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
    },
    updateMuscleMass(value) {
      this.$store.dispatch('updateSMMIndex', value)
    }
  },
}
</script>

<style scoped>

</style>