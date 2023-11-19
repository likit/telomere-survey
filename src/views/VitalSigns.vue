<template>
  <section class="section">
    <Navigation></Navigation>
    <br>
    <div class="container">
      <h1 class="title has-text-centered">Vital Signs</h1>
      <b-field grouped label="ความดันโลหิต (Blood Pressure) (มิลลิเมตรปรอท)">
        <b-input type="number" placeholder="Systolic" v-model="form.record.vital.systolic"></b-input>
        <b-input type="number" placeholder="Diastolic" v-model="form.record.vital.diastolic"></b-input>
      </b-field>
      <b-field>
        <b-radio native-value="ปกติ" v-model="form.record.vital.bpResult">ปกติ</b-radio>
        <b-radio native-value="ผิดปกติ" v-model="form.record.vital.bpResult">ผิดปกติ</b-radio>
      </b-field>
      <b-field grouped label="อุณหภูมิร่างกาย (Temperature)">
        <b-input type="number" placeholder="องศาเซลเซียส" v-model="form.record.vital.temperature"></b-input>
      </b-field>
      <b-field>
        <b-radio native-value="ปกติ" v-model="form.record.vital.tempResult">ปกติ</b-radio>
        <b-radio native-value="ผิดปกติ" v-model="form.record.vital.tempResult">ผิดปกติ</b-radio>
      </b-field>
      <b-field grouped label="ชีพจร (Pulse)">
        <b-input type="number" placeholder="ครั้งต่อนาที" v-model="form.record.vital.pulse"></b-input>
      </b-field>
      <b-field>
        <b-radio native-value="ปกติ" v-model="form.record.vital.pulseResult">ปกติ</b-radio>
        <b-radio native-value="ผิดปกติ" v-model="form.record.vital.pulseResult">ผิดปกติ</b-radio>
      </b-field>
      <b-field grouped label="การหายใจ (Respiration)">
        <b-input type="number" placeholder="ครั้งต่อนาที" v-model="form.record.vital.respiration"></b-input>
        <b-input type="number" placeholder="จังหวะ" v-model="form.record.vital.rhythm"></b-input>
      </b-field>
      <b-field>
        <b-radio native-value="ปกติ" v-model="form.record.vital.respResult">ปกติ</b-radio>
        <b-radio native-value="ผิดปกติ" v-model="form.record.vital.respResult">ผิดปกติ</b-radio>
      </b-field>
    </div>
    <div class="buttons is-centered">
      <button class="button is-primary" @click="saveData">
        <span class="icon">
          <i class="far fa-save"></i>
        </span>
        <span>Save</span>
      </button>
    </div>
  </section>
</template>

<script>
import Navigation from "@/components/navigation.vue";
import {mapState} from "vuex";

export default {
  name: "VitalSigns",
  components: {Navigation},
  computed: {
    ...mapState(['form']),
  },
  methods: {
    saveData: function () {
    }
  }
}
</script>

<style scoped>

</style>