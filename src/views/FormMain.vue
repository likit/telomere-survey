<template>
<section class="section">
  <Navigation></Navigation>
  <br>
  <div class="container">
    <h1 class="title has-text-centered">แบบฟอร์มบันทึกข้อมูล (CASE REPORT FORM)</h1>
    <div class="has-text-centered">
      <b-field label="วันที่เก็บข้อมูล">
        <b-datepicker icon="calendar-today" :locale="undefined" :inline="true" v-model="recordDate"></b-datepicker>
      </b-field>
      <div class="buttons is-centered">
        <b-button type="is-light">Cancel</b-button>
        <b-button type="is-success" @click="nextPage">Start</b-button>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import Navigation from "@/components/navigation";
export default {
  name: "FormMain",
  components: {Navigation},
  data() {
    return {
      recordDate: new Date(), // default to the current date
    }
  },
  methods: {
    nextPage: function() {
      this.$router.push({ name: 'Personal'})
    }
  }
}
</script>

<style scoped>

</style>