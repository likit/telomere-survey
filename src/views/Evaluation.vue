<template>
  <section class="section">
    <Navigation></Navigation>
    <br>
    <div class="container">
      <div class="columns">
        <div class="column is-two-thirds is-offset-2">
          <h1 class="title">แบบบันทึกองค์ประกอบสัดส่วนของร่างกายและสมรรถภาพทางกาย</h1>
          <h1 class="title is-size-5">BIA</h1>
          <b-field label="น้ำหนัก">
            <b-input type="number" step="0.1" placeholder="กก." v-model="form.record.personal.weight"></b-input>
          </b-field>
          <b-field label="ส่วนสูง">
            <b-input type="number" step="0.1" placeholder="ซม." v-model="form.record.personal.height"></b-input>
          </b-field>
          <b-field label="BMI">
            <b-input type="number" :readonly="true" :value="bmi"></b-input>
          </b-field>
          <b-field label="Skeletal Muscle Mass (SMM)">
            <b-input type="number" step="0.1" :value="form.record.evaluation.muscleMass"
                     @input="updateMuscleMass"></b-input>
          </b-field>
          <b-field label="Soft Lean Mass (SLM)">
            <b-input type="number" step="0.1" v-model="form.record.evaluation.slm"></b-input>
          </b-field>
          <b-field label="ASMM">
            <b-input type="number" step="0.1" v-model="form.record.evaluation.asmm"></b-input>
          </b-field>
          <b-field label="ผลการประเมิน">
            <b-radio native-value="ปกติ" v-model="form.record.vital.bmiResult">ปกติ</b-radio>
            <b-radio native-value="ผิดปกติ" v-model="form.record.vital.bmiResult">ผิดปกติ</b-radio>
          </b-field>
          <b-field grouped label="รอบเอว">
            <b-input type="number" step="0.1" placeholder="ซม." v-model="form.record.evaluation.waist"></b-input>
            <b-radio native-value="ปกติ" v-model="form.record.vital.waistResult">ปกติ</b-radio>
            <b-radio native-value="ผิดปกติ" v-model="form.record.vital.waistResult">ผิดปกติ</b-radio>
          </b-field>
          <b-field label="เส้นรอบวงแขน Mid Arm Circumference">
          </b-field>
          <div class="notification">
            <b-field label="แขนซ้าย">
              <b-input type="number" step="0.1" placeholder="ครั้งที่ 1 (ซม.)"
                       v-model="form.record.evaluation.leftArmCircumference1"></b-input>
            </b-field>
            <b-field>
              <b-input type="number" step="0.1" placeholder="ครั้งที่ 2 (ซม.)"
                       v-model="form.record.evaluation.leftArmCircumference2"></b-input>
            </b-field>
            <b-field label="แขนขวา">
              <b-input type="number" step="0.1" placeholder="ครั้งที่ 1 (ซม.)"
                       v-model="form.record.evaluation.rightArmCircumference1"></b-input>
            </b-field>
            <b-field>
              <b-input type="number" step="0.1" placeholder="ครั้งที่ 2 (ซม.)"
                       v-model="form.record.evaluation.rightArmCircumference2"></b-input>
            </b-field>
          </div>
          <b-field label="เส้นรอบวงน่อง Mid Calf Circumference">
          </b-field>
          <div class="notification">
            <b-field label="น่องซ้าย">
              <b-input type="number" step="0.1" placeholder="ครั้งที่ 1 (ซม.)"
                       v-model="form.record.evaluation.leftCalfCircumference1"></b-input>
            </b-field>
            <b-field>
              <b-input type="number" step="0.1" placeholder="ครั้งที่ 2 (ซม.)"
                       v-model="form.record.evaluation.leftCalfCircumference2"></b-input>
            </b-field>
            <b-field label="น่องขวา">
              <b-input type="number" step="0.1" placeholder="ครั้งที่ 1 (ซม.)"
                       v-model="form.record.evaluation.rightCalfCircumference1"></b-input>
            </b-field>
            <b-field>
              <b-input type="number" step="0.1" placeholder="ครั้งที่ 2 (ซม.)"
                       v-model="form.record.evaluation.rightCalfCircumference2"></b-input>
            </b-field>
          </div>
          <b-field label="ผลการประเมิน">
            <b-radio native-value="ปกติ" v-model="form.record.vital.circumferenceResult">ปกติ</b-radio>
            <b-radio native-value="ผิดปกติ" v-model="form.record.vital.circumferenceResult">ผิดปกติ</b-radio>
          </b-field>
          <h1 class="title is-size-5">Physical Fitness</h1>
          <h1 class="subtitle is-size-5">ความแข็งแรงของกล้ามเนื้อ (muscle strength)</h1>
          <b-field label="Grip strength">
            <b-radio v-model="form.record.evaluation.hand" native-value="ถนัดแขนซ้าย">ถนัดแขนซ้าย</b-radio>
            <b-radio v-model="form.record.evaluation.hand" native-value="ถนัดแขนขวา">ถนัดแขนขวา</b-radio>
          </b-field>
          <div class="notification">
            <b-icon pack="fas" icon="thumbs-up" v-if="form.record.evaluation.hand=='ถนัดแขนซ้าย'" size="is-large"
                    type="is-success"></b-icon>
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
            <b-icon pack="fas" icon="thumbs-up" v-if="form.record.evaluation.hand=='ถนัดแขนขวา'" type="is-success"
                    size="is-large"></b-icon>
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
          <b-field label="ผลการประเมิน">
            <b-radio native-value="ปกติ" v-model="form.record.vital.gripResult">ปกติ</b-radio>
            <b-radio native-value="ผิดปกติ" v-model="form.record.vital.gripResult">ผิดปกติ</b-radio>
          </b-field>
          <b-field label="Quadriceps strength">
          </b-field>
          <div class="notification">
            <b-icon pack="fas" icon="thumbs-up" v-if="form.record.evaluation.leg=='ถนัดขาซ้าย'" size="is-large"
                    type="is-success"></b-icon>
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
            <b-icon pack="fas" icon="thumbs-up" v-if="form.record.evaluation.leg=='ถนัดขาขวา'" type="is-success"
                    size="is-large"></b-icon>
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
          <b-field label="ผลการประเมิน">
            <b-radio native-value="ปกติ" v-model="form.record.vital.quadResult">ปกติ</b-radio>
            <b-radio native-value="ผิดปกติ" v-model="form.record.vital.quadResult">ผิดปกติ</b-radio>
          </b-field>
          <h1 class="title is-size-5">Short Physical Performance Battery Test (SPPB)</h1>
          <b-field label="Gait speed">
            Walk time เวลาที่ใช้ในการเดิน 4 เมตร
            <b-numberinput placeholder="ครั้งที่ 1" step="0.1" v-model="form.record.evaluation.gait1_4min"></b-numberinput>
          </b-field>
          <b-field>
            <b-numberinput placeholder="ครั้งที่ 2" step="0.1" v-model="form.record.evaluation.gait2_4min"></b-numberinput>
          </b-field>
          <b-field label="ค่าเฉลี่ย">
            <b-input :readonly="true" placeholder="เฉลี่ย" :value="gait4m"></b-input>
          </b-field>
          <b-field label="Gait speed">
            Walk time เวลาที่ใช้ในการเดิน 6 เมตร
            <b-numberinput placeholder="ครั้งที่ 1" step="0.1" v-model="form.record.evaluation.gait1"></b-numberinput>
          </b-field>
          <b-field>
            <b-numberinput placeholder="ครั้งที่ 2" step="0.1" v-model="form.record.evaluation.gait2"></b-numberinput>
          </b-field>
          <b-field label="ค่าเฉลี่ย">
            <b-input :readonly="true" placeholder="เฉลี่ย" :value="gait"></b-input>
          </b-field>
          <b-field label="FTSTS">
            การทดสอบการลุกจากเก้าอี้และนั่ง 5 ครั้ง
            <b-numberinput placeholder="วินาที" step="0.1" v-model="form.record.evaluation.ftsts"></b-numberinput>
          </b-field>
          <b-field label="ผลการประเมิน">
            <b-radio native-value="ปกติ" v-model="form.record.vital.ftstsResult">ปกติ</b-radio>
            <b-radio native-value="ผิดปกติ" v-model="form.record.vital.ftstsResult">ผิดปกติ</b-radio>
          </b-field>
          <br>
          <h1 class="title is-size-5">Balance Test</h1>
          <b-field label="Side-by-side stand">
            <b-radio native-value="1" v-model="form.record.evaluation.sideBySide">Held for 10 seconds</b-radio>
            <b-radio native-value="2" v-model="form.record.evaluation.sideBySide">Not held for 10 seconds</b-radio>
            <b-radio native-value="3" v-model="form.record.evaluation.sideBySide">Not attempt</b-radio>
          </b-field>
          <b-field label="Semi-tandem stand">
            <b-radio native-value="1" v-model="form.record.evaluation.semiTandemStand">Held for 10 seconds</b-radio>
            <b-radio native-value="2" v-model="form.record.evaluation.semiTandemStand">Not held for 10 seconds</b-radio>
            <b-radio native-value="3" v-model="form.record.evaluation.semiTandemStand">Not attempt</b-radio>
          </b-field>
          <b-field label="Tandem stand">
            <b-radio native-value="1" v-model="form.record.evaluation.tandemStand">Held for 10 seconds</b-radio>
            <b-radio native-value="2" v-model="form.record.evaluation.tandemStand">Not held for 10 seconds</b-radio>
            <b-radio native-value="3" v-model="form.record.evaluation.tandemStand">Not attempt</b-radio>
          </b-field>
          <br>
          <h1 class="title is-size-5">Short Physical Performance Battery Test</h1>
          <b-field label="Balance Test">
            <b-numberinput placeholder="คะแนน" step="0.1"
                           v-model="form.record.evaluation.balanceTestScore"></b-numberinput>
          </b-field>
          <b-field label="Gait Speed Test">
            <b-numberinput placeholder="คะแนน" step="0.1"
                           v-model="form.record.evaluation.gaitSpeedScore"></b-numberinput>
          </b-field>
          <b-field label="Chair Stand Test">
            <b-numberinput placeholder="คะแนน" step="0.1"
                           v-model="form.record.evaluation.ChairStandScore"></b-numberinput>
          </b-field>
          <br>
          <h1 class="title is-size-5">TUG</h1>
          <b-field>
            เวลาที่ใช้
            <b-numberinput placeholder="วินาที" step="0.1" v-model="form.record.evaluation.tug"></b-numberinput>
          </b-field>
          <br>
          <h1 class="title is-size-5">ความอ่อนตัว (Flexibility)</h1>
          การทดสอบเอื้อมแขนแตะมือด้านหลัง (Back scratch test)
          <div class="notification">
            <b-field label="แขนซ้าย">
              <b-input type="number" step="0.1" placeholder="ครั้งที่ 1"
                       v-model="form.record.evaluation.backScratchLeft1"></b-input>
            </b-field>
            <b-field>
              <b-input type="number" step="0.1" placeholder="ครั้งที่ 2"
                       v-model="form.record.evaluation.backScratchLeft2"></b-input>
            </b-field>
          </div>
          <div class="notification">
            <b-field label="แขนขวา">
              <b-input type="number" step="0.1" placeholder="ครั้งที่ 1"
                       v-model="form.record.evaluation.backScratchRight1"></b-input>
            </b-field>
            <b-field>
              <b-input type="number" step="0.1" placeholder="ครั้งที่ 2"
                       v-model="form.record.evaluation.backScratchRight2"></b-input>
            </b-field>
          </div>
          การทดสอบความอ่อนตัวของร่างกาย (Sit and reach test)
          <div class="notification">
            <b-field label="ครั้งที่ 1">
              <b-input type="number" step="0.1" placeholder="ครั้งที่ 1"
                       v-model="form.record.evaluation.sitAndReach1"></b-input>
            </b-field>
            <b-field label="ครั้งที่ 2">
              <b-input type="number" step="0.1" placeholder="ครั้งที่ 2"
                       v-model="form.record.evaluation.sitAndReach2"></b-input>
            </b-field>
          </div>
          <b-field label="ผลการประเมิน">
            <b-radio native-value="ปกติ" v-model="form.record.vital.backScratchResult">ปกติ</b-radio>
            <b-radio native-value="ผิดปกติ" v-model="form.record.vital.backScratchResult">ผิดปกติ</b-radio>
          </b-field>
          <b-field label="หมายเหตุ">
            <b-input v-model="form.record.evaluation.note"></b-input>
          </b-field>
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
            <router-link :to="{name: 'ADL'}" class="button is-success">
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
  name: "Evaluation",
  components: {Navigation},
  computed: {
    ...mapState(['form']),
    gait: function () {
      if (this.form.record.evaluation.gait1 != null && this.form.record.evaluation.gait2 != null) {
        let value = (this.form.record.evaluation.gait1 + this.form.record.evaluation.gait2) / 2.0
        return value.toFixed(2)
      } else {
        return null
      }
    },
    gait4m: function () {
      if (this.form.record.evaluation.gait1_4min != null && this.form.record.evaluation.gait2_4min != null) {
        let value = (this.form.record.evaluation.gait1_4min + this.form.record.evaluation.gait2_4min) / 2.0
        return value.toFixed(2)
      } else {
        return null
      }
    },
    bmi: function () {
      if (this.form.record.personal.weight > 0 && this.form.record.personal.height > 0) {
        let bmi = this.form.record.personal.weight / (this.form.record.personal.height * 0.01) ** 2.0
        return bmi.toFixed(2)
      } else {
        return null
      }
    },
  },
  watch: {
    "form.record.evaluation.sideBySide"(newValue) {
      if (newValue !== null) {
        this.form.record.evaluation.sideBySideScore = parseInt(newValue) > 1 ? 0 : 1
      }
    },
    "form.record.evaluation.semiTandemStand"(newValue) {
      if (newValue !== null) {
        this.form.record.evaluation.semiTandemStandScore = parseInt(newValue) > 1 ? 0 : 1
      }
    },
    "form.record.evaluation.tandemStand"(newValue) {
      if (newValue !== null) {
        this.form.record.evaluation.tandemStandScore = parseInt(newValue) > 1 ? 0 : 1
      }
    },
    "form.record.evaluation.oneFootStand"(newValue) {
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