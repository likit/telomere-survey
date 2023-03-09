<template>
<section class="section">
  <NavigationTwo></NavigationTwo>
  <br>
  <div class="container">
    <b-steps
      :rounded="true"
      :has-navigation="false"
      mobile-mode="minimalist"
      >
      <b-step-item step="1" label="ข้อมูลส่วนบุคคล" :clickable="true">
        <div class="has-text-centered">
          <b-tag rounded type="is-danger">เพิ่มการติดตามผล</b-tag>
        </div>
        <b-field label="ชื่อ">
          <b-input placeholder="ชื่อ" v-model="form.record.personal.firstname"></b-input>
        </b-field>
        <b-field label="นามสกุล">
          <b-input placeholder="นามสกุล" v-model="form.record.personal.lastname"></b-input>
        </b-field>
        <b-field label="หมายเลขบัตรประชาชน">
          <b-input placeholder="หมายเลขบัตรประชาชน" v-model="form.record.personal.id"></b-input>
        </b-field>
        <b-field label="อายุ">
          <b-numberinput v-model="form.record.personal.age"></b-numberinput>
        </b-field>
        <b-field label="น้ำหนัก">
          <b-input type="number" placeholder="กก." v-model="form.record.personal.weight"></b-input>
        </b-field>
        <b-field label="ส่วนสูง">
          <b-input type="number" placeholder="ซม." v-model="form.record.personal.height"></b-input>
        </b-field>
        <b-field label="เพศ">
          <b-radio native-value="ชาย" v-model="form.record.personal.gender">
            ชาย
          </b-radio>
          <b-radio native-value="หญิง" v-model="form.record.personal.gender">
            หญิง
          </b-radio>
        </b-field>
        <b-field label="อาศัยอยู่ใน">
          <b-radio native-value="เขตเทศบาล" v-model="form.record.personal.address">
            เขตเทศบาล
          </b-radio>
          <b-radio native-value="นอกเขตเทศบาล" v-model="form.record.personal.address">
            นอกเขตเทศบาล
          </b-radio>
        </b-field>
        <b-field label="ประวัติการเข้ารับการรักษาเป็นผู้ป่วยในโรงพยาบาลในระยะเวลา 1 ปี ที่ผ่านมา">
          <b-radio native-value="ไม่มี" v-model="form.record.personal.hospitalized">ไม่มี</b-radio>
          <b-radio native-value="มี" v-model="form.record.personal.hospitalized">มี</b-radio>
        </b-field>
        <b-field v-if="form.record.personal.hospitalized=='มี'">
          <b-input placeholder="ระบุสาเหตุ" v-model="form.record.personal.hospitalizationDetail"></b-input>
        </b-field>
        <b-field label="ประวัติการพลัดหกล้มในระยะ 1 ปีที่ผ่านมา">
          <b-radio native-value="ไม่มี" v-model="form.record.personal.fell">ไม่มี</b-radio>
          <b-radio native-value="มี" v-model="form.record.personal.fell">มี</b-radio>
        </b-field>
        <b-field label="ประวัติการพลัดหกล้มที่ทำให้กระดูกหักในระยะ 1 ปีที่ผ่านมา">
          <b-radio native-value="ไม่มี" v-model="form.record.personal.fellWithBrokenBone">ไม่มี</b-radio>
          <b-radio native-value="มี" v-model="form.record.personal.fellWithBrokenBone">มี</b-radio>
        </b-field>
        <b-field v-if="form.record.personal.fellWithBrokenBone=='มี'">
          <b-numberinput placeholder="จำนวนครั้ง" v-model="form.record.personal.fellWithBrokenBoneTimes"></b-numberinput>
        </b-field>
        <b-field v-if="form.record.personal.fellWithBrokenBone=='มี'">
          <b-input placeholder="ระบุตำแหน่งที่หัก" v-model="form.record.personal.fellWithBrokenBoneWhere"></b-input>
        </b-field>
        <b-field label="คะแนน ADL">
          <b-field label="1 ปีย้อนหลัง">
            <b-numberinput placeholder="1 ปีย้อนหลัง" :readonly="true" v-model="pastYearAdl"></b-numberinput>
          </b-field>
        </b-field>
        <b-field label="ปัจจุบัน">
          <b-numberinput placeholder="ปัจจุบัน" v-model="form.record.currentAdlScore"></b-numberinput>
        </b-field>
        <b-field label="ประวัติโรคที่เกิดขึ้นใหม่ในระยะ 1 ปีที่ผ่านมา ไม่รวมโรคประจำตัวเดิม">
          <b-checkbox @input="updateDisease($event, 'โรคหลอดเลือดสมอง')" v-model="d1">โรคหลอดเลือดสมอง</b-checkbox>
        </b-field>
        <b-field>
          <b-checkbox @input="updateDisease($event, 'โรคมะเร็ง')" v-model="d2">โรคมะเร็ง</b-checkbox>
        </b-field>
        <b-field>
          <b-checkbox @input="updateDisease($event, 'โรคหัวใจ')" v-model="d3">โรคหัวใจ</b-checkbox>
        </b-field>
        <b-field>
          <b-checkbox @input="updateDisease($event, 'โรคสมองเสื่อม')" v-model="d4">โรคสมองเสื่อม</b-checkbox>
        </b-field>
        <b-field>
          <b-checkbox @input="updateDisease($event, 'อื่น ๆ')" v-model="d5">อื่น ๆ</b-checkbox>
        </b-field>
        <b-field label="โปรดระบุ" v-if="d5 == true">
          <b-input v-model="form.record.personal.followUpDisOther" placeholder="โปรดระบุ"></b-input>
        </b-field>
        <b-field label="กรณีเสียชีวิต">
          <b-input placeholder="ระบุสาเหตุ" v-model="form.record.personal.causeOfDeath"></b-input>
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
import NavigationTwo from "@/components/navigationTwo.vue";
import {mapState} from 'vuex';

export default {
  name: "Personal",
  components: {NavigationTwo},
  data() {
    return {
      d1: null,
      d2: null,
      d3: null,
      d4: null,
      d5: null,
      pastYearAdl: null
    }
  },
  computed: {
    ...mapState(['form'])
  },
  methods: {
    updateDisease: function (event, disease) {
      this.$store.commit('updateFollowUpDiseases', disease)
    },
    saveData() {
      this.$store.dispatch('saveFollowUpForm')
    }
  },
  mounted() {
    this.pastYearAdl = parseInt(this.form.record.adl.one) + parseInt(this.form.record.adl.two) +
        parseInt(this.form.record.adl.three) + parseInt(this.form.record.adl.four) +
        parseInt(this.form.record.adl.five) + parseInt(this.form.record.adl.six) +
        parseInt(this.form.record.adl.seven) + parseInt(this.form.record.adl.eight) +
        parseInt(this.form.record.adl.nine) + parseInt(this.form.record.adl.ten)
    this.form.record.pastYearAdlScore = this.pastYearAdl
    console.log(this.form.record.adl)
    this.form.record.personal.followUpDiseases.forEach((d)=>{
      switch (d) {
        case "โรคหลอดเลือดสมอง":
          this.d1 = true;
          break;
        case "โรคมะเร็ง":
          this.d2 = true;
          break;
        case "โรคหัวใจ":
          this.d3 = true;
          break;
        case "โรคสมองเสื่อม":
          this.d4 = true;
          break;
        case "อื่น ๆ":
          this.d5 = true;
          break;
      }
    })
  },
  watch: {
    d5: function (newValue) {
      if (newValue != true) {
        this.form.record.personal.followUpDisOther = null
      }
    },
  }
}
</script>

<style scoped>

</style>