<template>
<section class="section">
  <Navigation></Navigation>
  <div class="container">
    <b-steps
        :rounded="true"
        :has-navigation="false"
        mobile-mode="minimalist"
    >
      <b-step-item step="2" label="FRAIL Scale" :clickable="true">
      </b-step-item>
    </b-steps>
    <b-field label="ตลอดเวลา 4 สัปดาห์ที่ผ่านมาท่านรู้สึกเหนื่อยเพลียบ่อยมากแค่ไหน">
      <b-radio native-value="1" v-model="form.record.frail.fatigue">
        ตลอดเวลา
      </b-radio>
      <b-radio native-value="2" v-model="form.record.frail.fatigue">
        เกือบตลอดเวลา
      </b-radio>
      <b-radio native-value="3" v-model="form.record.frail.fatigue">
        บางเวลา
      </b-radio>
      <b-radio native-value="4" v-model="form.record.frail.fatigue">
        ส่วนน้อย
      </b-radio>
      <b-radio native-value="5" v-model="form.record.frail.fatigue">
        ไม่เคยเลย
      </b-radio>
    </b-field>
    <b-field label="เวลาท่านขึ้นบันได 10 ขั้นด้วยตนเองโดยไม่ใช้อุปกรณ์ช่วยเดินท่านต้องพักระหว่างเดินขึ้นบันได">
      <b-radio native-value="ไม่ใช่" v-model="form.record.frail.resistance">ไม่ใช่</b-radio>
      <b-radio native-value="ใช่" v-model="form.record.frail.resistance">ใช่</b-radio>
    </b-field>
    <b-field label="เวลาท่านเดินไปมาเอง โดยไม่ใช้อุปกรณ์ช่วยเดินท่านมีปัญหาเวลาเดินไกลเป็นระยะทางหลายร้อยเมตร">
      <b-radio native-value="ไม่ใช่" v-model="form.record.frail.ambulation">ไม่ใช่</b-radio>
      <b-radio native-value="ใช่" v-model="form.record.frail.ambulation">ใช่</b-radio>
    </b-field>
    <b-field label="หมอที่ดูแลท่านได้บอกว่าท่านมีโรคต่าง ๆ เหล่านี้">
      <b-checkbox @input="updateDisease($event, 'hypertension')" v-model="d1">Hypertension</b-checkbox>
    </b-field>
    <b-field>
      <b-checkbox @input="updateDisease($event, 'diabetes mellitus')" v-model="d2">Diabetes mellitus</b-checkbox>
    </b-field>
    <b-field>
      <b-checkbox @input="updateDisease($event, 'cancer')" v-model="d3">Cancer ไม่รวมมะเร็งผิวหนัง</b-checkbox>
    </b-field>
    <b-field>
      <b-checkbox @input="updateDisease($event, 'chronic lung disease')" v-model="d4">Chronic lung disease</b-checkbox>
    </b-field>
    <b-field>
      <b-checkbox @input="updateDisease($event, 'heart attack')" v-model="d5">Heart attacke</b-checkbox>
    </b-field>
    <b-field>
      <b-checkbox @input="updateDisease($event, 'congestive heart failure')" v-model="d6">Congestive heart failure</b-checkbox>
    </b-field>
    <b-field>
      <b-checkbox @input="updateDisease($event, 'angina')" v-model="d7">Angina</b-checkbox>
    </b-field>
    <b-field>
      <b-checkbox @input="updateDisease($event, 'asthma')" v-model="d8">Asthma</b-checkbox>
    </b-field>
    <b-field>
      <b-checkbox @input="updateDisease($event, 'arthritis')" v-model="d9">Arthritis</b-checkbox>
    </b-field>
    <b-field>
      <b-checkbox @input="updateDisease($event, 'stroke')" v-model="d10">Stroke</b-checkbox>
    </b-field>
    <b-field>
      <b-checkbox @input="updateDisease($event, 'kidney disease')" v-model="d11">Kidney disease</b-checkbox>
    </b-field>
    <b-field label="น้ำหนัก 1 ปีที่ผ่านมาโดยไม่สวมรองเท้า">
      <b-input type="number" placeholder="กก." v-model="form.record.frail.pastYearWeight"></b-input>
    </b-field>
    <b-field label="น้ำหนักปัจจุบันโดยไม่สวมรองเท้า">
      <b-input type="number" placeholder="กก." v-model="form.record.frail.currentWeight"></b-input>
    </b-field>
    <b-field label="ร้อยละน้ำหนักที่เปลี่ยนไป">
      <b-input type="number" placeholder="กก." :readonly="true" v-model="percentWeightChange"></b-input>
    </b-field>
    <div class="buttons is-centered">
      <button class="button is-light" @click="$router.back()">
        <span class="icon">
          <i class="fas fa-chevron-left"></i>
        </span>
      </button>
      <b-button type="is-primary" @click="saveData">
        <span class="icon">
          <i class="far fa-save"></i>
        </span>
        <span>Save</span>
      </b-button>
      <router-link :to="{name: 'FollowUpBIA'}" class="button is-success">
        <span class="icon">
          <i class="fas fa-chevron-right"></i>
        </span>
      </router-link>
    </div>
  </div>
</section>
</template>

<script>
import {mapState} from "vuex";
import Navigation from "@/components/navigation.vue";

export default {
  name: "FrailScale",
  components: {Navigation},
  computed: {
    ...mapState(['form']),
    percentWeightChange: function () {
      let change = ((this.form.record.frail.pastYearWeight - this.form.record.frail.currentWeight) / this.form.record.frail.pastYearWeight) * 100.0
      return change.toFixed(2)
    },
    fatigueScore: function () {
      let score
      if (this.form.record.frail.fatigue == "3" || this.form.record.frail.fatigue == "4" || this.form.record.frail.fatigue == "5") {
        score = 0
      } else if (this.form.record.frail.fatigue == "1" || this.form.record.frail.fatigue == "2") {
        score = 1
      }
      return score
    },
    resistanceScore: function () {
      return this.form.record.frail.resistance == 'ไม่ใช่' ? 0 : 1
    },
    ambulationScore: function () {
      return this.form.record.frail.ambulation == 'ไม่ใช่' ? 0 : 1
    },
    illnessScore: function () {
      return this.form.record.frail.illness.length < 5 ? 0 : 1
    },
    percentWeightChangeScore: function () {
      return this.form.record.frail.percentWeightChange < 5 ? 0 : 1
    },
    totalScore: function () {
      return this.fatigueScore + this.resistanceScore + this.illnessScore + this.ambulationScore + this.percentWeightChangeScore
    }
  },
  data () {
    return {
      d1: null,
      d2: null,
      d3: null,
      d4: null,
      d5: null,
      d6: null,
      d7: null,
      d8: null,
      d9: null,
      d10: null,
      d11: null,
    }
  },
  methods: {
    updateDisease: function (event, disease) {
      this.$store.commit('updateFrailIllness', disease)
    },
    saveData() {
      this.$store.dispatch('saveFollowUpForm')
    }
  },
  mounted() {
    this.form.record.frail.illness.forEach((d)=>{
      switch (d) {
        case "hypertension":
          this.d1 = true;
          break;
        case "diabetes mellitus":
          this.d2 = true;
          break;
        case "cancer":
          this.d3 = true;
          break;
        case "chronic lung disease":
          this.d4 = true;
          break;
        case "heart attack":
          this.d5 = true;
          break;
        case "congestive heart failure":
          this.d6 = true;
          break;
        case "angina":
          this.d7 = true;
          break;
        case "asthma":
          this.d8 = true;
          break;
        case "arthritis":
          this.d9 = true;
          break;
        case "stroke":
          this.d10 = true;
          break;
        case "kidney disease":
          this.d11 = true;
          break;
      }
    })
  },
  watch: {
    percentWeightChange: function (newValue) {
      this.form.record.frail.percentWeightChange = newValue
    },
    totalScore: function (newValue) {
      this.form.record.frail.totalScore = newValue
    }
  }
}
</script>

<style scoped>

</style>