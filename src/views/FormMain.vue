<template>
<section class="section">
  <div class="container">
    <h1 class="title has-text-centered">แบบฟอร์มบันทึกข้อมูล (CASE REPORT FORM)</h1>
    <b-field label="วันที่เก็บข้อมูล">
      <b-datepicker icon="calendar-today" :locale="undefined" :inline="true"></b-datepicker>
    </b-field>
    <div class="buttons is-centered">
      <b-button type="is-warning" @click="nextPage">Cancel</b-button>
      <b-button type="is-primary">Start</b-button>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "FormMain",
  methods: {
    nextPage: function() {
      this.$router.push({ name: 'Personal'})
    }
  }
}
</script>

<style scoped>

</style>