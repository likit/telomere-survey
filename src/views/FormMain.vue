<template>
<section class="section">
  <Navigation></Navigation>
  <br>
  <div class="container">
    <h1 class="title has-text-centered">แบบฟอร์มบันทึกข้อมูล (CASE REPORT FORM)</h1>
    <div class="has-text-centered">
      <b-field label="รหัสวิจัย" type="is-danger">
        <b-input v-model="form.record.code"></b-input>
      </b-field>
      <b-field label="วันที่เก็บข้อมูล">
        <b-datepicker icon="calendar-today" :locale="undefined" :inline="true" v-model="form.record.recordDate"></b-datepicker>
      </b-field>
      <div class="buttons is-centered">
        <b-button type="is-light" @click="$router.push({name: 'MainPage'})">Cancel</b-button>
        <button class="button is-primary" @click="saveData">
        <span class="icon">
          <i class="far fa-save"></i>
        </span>
          <span>Save</span>
        </button>
        <b-button type="is-success" @click="nextPage">Start</b-button>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import Navigation from "@/components/navigation";
import {mapState} from 'vuex';

export default {
  name: "FormMain",
  components: {Navigation},
  computed: {
    ...mapState(['form']),
  },
  methods: {
    nextPage: function() {
      this.$router.push({ name: 'Personal'})
    },
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
          self.$buefy.dialog.alert({
            title: 'Login Successful',
            message: 'บันทึกข้อมูลเรียบร้อยแล้ว',
            type: 'is-success',
            hasIcon: true,
            icon: 'check-circle',
            iconPack: 'fa',
            ariaRole: 'alertdialog',
            ariaModal: true,
          })
        }).catch(() => {
          self.$buefy.dialog.alert({
            title: 'Error!',
            message: 'โปรแกรมไม่สามารถบันทึกข้อมูลได้ โปรดลองใหม่อีกครั้ง',
            type: 'is-danger',
            hasIcon: true,
            icon: 'times-circle',
            iconPack: 'fa',
            ariaRole: 'alertdialog',
            ariaModal: true
          })
        })
      }
    }
  },
}
</script>

<style scoped>

</style>