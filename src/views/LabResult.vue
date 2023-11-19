<template>
<section class="section">
  <Navigation></Navigation>
  <br>
  <div class="container">
    <h1 class="title has-text-centered">แบบบันทึกผลการตรวจทางห้องปฏิบัติการ</h1>
    <div class="columns">
      <div class="column is-two-thirds is-offset-2">
        <b-field label="Chronological Age">
          <b-input expanded type="number" v-model="form.record.personal.age" :readonly=true></b-input>
          <p class="control">
            <span class="button is-static">ปี</span>
          </p>
        </b-field>
        <b-field label="Luteinizing Hormone (LH)">
          <b-input type="number" placeholder="mIU/mL" v-model="form.record.lab.lh"></b-input>
          <b-input type="number" expanded placeholder="Estimated Biological Age" v-model="form.record.lab.lhAge"></b-input>
          <p class="control">
            <span class="button is-static">ปี</span>
          </p>
        </b-field>
        <b-field label="Follicle Stimulating Hormone (FSH)">
          <b-input type="number" placeholder="mIU/mL" v-model="form.record.lab.fsh"></b-input>
          <b-input type="number" expanded placeholder="Estimated Biological Age" v-model="form.record.lab.fshAge"></b-input>
          <p class="control">
            <span class="button is-static">ปี</span>
          </p>
        </b-field>
        <b-field label="Testosterone">
          <b-input type="number" placeholder="ng/mL" v-model="form.record.lab.testosterone"></b-input>
          <b-input type="number" expanded placeholder="Estimated Biological Age" v-model="form.record.lab.testosteroneAge"></b-input>
          <p class="control">
            <span class="button is-static">ปี</span>
          </p>
        </b-field>
        <b-field label="Estradiol">
          <b-input type="number" placeholder="pg/mL" v-model="form.record.lab.estradiol"></b-input>
          <b-input type="number" expanded placeholder="Estimated Biological Age" v-model="form.record.lab.estradiolAge"></b-input>
          <p class="control">
            <span class="button is-static">ปี</span>
          </p>
        </b-field>
        <b-field label="Cholesterol">
          <b-input type="number" placeholder="mg/dL" v-model="form.record.lab.cholesterol"></b-input>
          <b-input type="number" expanded placeholder="Estimated Biological Age" v-model="form.record.lab.cholesterolAge"></b-input>
          <p class="control">
            <span class="button is-static">ปี</span>
          </p>
        </b-field>
        <b-field label="LDL-Cholesterol (Direct)">
          <b-input type="number" placeholder="mg/dL" v-model="form.record.lab.ldl"></b-input>
          <b-input type="number" expanded placeholder="Estimated Biological Age" v-model="form.record.lab.ldlAge"></b-input>
          <p class="control">
            <span class="button is-static">ปี</span>
          </p>
        </b-field>
        <b-field label="Glycated Hb (HbA1c)">
          <b-input type="number" placeholder="percent" v-model="form.record.lab.hba1c"></b-input>
          <b-input type="number" expanded placeholder="Estimated Biological Age" v-model="form.record.lab.hba1cAge"></b-input>
          <p class="control">
            <span class="button is-static">ปี</span>
          </p>
        </b-field>
        <b-field label="Telomere length (Blood)">
          <b-input type="number" placeholder="คู่เบส" v-model="form.record.lab.telomere"></b-input>
          <b-input type="number" expanded placeholder="Estimated Biological Age" v-model="form.record.lab.telomereAge"></b-input>
          <p class="control">
            <span class="button is-static">ปี</span>
          </p>
        </b-field>
      </div>
    </div>
    <div class="buttons is-centered">
      <b-button type="is-primary" @click="saveData">
      <span class="icon">
        <i class="far fa-save"></i>
      </span>
        <span>Save</span>
      </b-button>
    </div>
  </div>
</section>
</template>

<script>
import {mapState} from "vuex";
import Navigation from "@/components/navigation";

export default {
  name: "LabResult",
  components: {Navigation},
  computed: {
    ...mapState(['form']),
  },
  data () {
    return {}
  },
  methods: {
    saveData() {
      this.$store.dispatch('saveFollowUpForm')
    }
  },
}
</script>

<style scoped>

</style>