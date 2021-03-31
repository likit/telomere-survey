<template>
<section class="section">
  <Navigation></Navigation>
  <br>
  <div class="container">
    <h1 class="title has-text-centered">แบบฟอร์มบันทึกข้อมูล (CASE REPORT FORM)</h1>
    <h1 class="title has-text-centered is-size-4">ณ จังหวัด{{ $store.state.province.name }}</h1>
    <div class="has-text-centered">
      <b-field label="รหัสวิจัย" type="is-danger">
        <b-input v-model="form.record.code" :readonly="currCode != null"></b-input>
      </b-field>
      <b-field label="ชื่อ" v-if="form.record.personal.firstname">
        <b-input :value="fullname" :readonly="true"></b-input>
      </b-field>
      <b-field label="วันที่เก็บข้อมูล">
        <b-datepicker icon="calendar-today" :locale="undefined" :inline="true" v-model="form.record.recordDate"></b-datepicker>
      </b-field>
      <div class="notification is-light is-link">
        <span class="help is-info"><strong>บันทึกเมื่อ</strong> {{ $store.state.form.record.recordDate.toLocaleString() }}</span>
        <span class="help is-info">
          <strong>โดย</strong> {{ form.record.creator }}
        </span>
        <span class="help is-link" v-if="form.record.lastUpdate.length > 0">
          <strong>แก้ไขล่าสุดเมื่อ</strong> {{ form.record.lastUpdate[form.record.lastUpdate.length - 1].datetime.toDate().toLocaleString() }}
        </span>
        <span class="help is-link">
          <strong>โดย</strong> {{ form.record.lastUpdate[form.record.lastUpdate.length - 1].creator }}
        </span>
      </div>
      <div class="buttons is-centered">
        <b-button type="is-light" @click="$router.push({name: 'MainPage'})">
          <span class="icon">
            <i class="fas fa-chevron-left"></i>
          </span>
        </b-button>
        <button class="button is-primary" @click="saveData">
        <span class="icon">
          <i class="far fa-save"></i>
        </span>
          <span>Save</span>
        </button>
        <b-button type="is-success" @click="nextPage">
          <span class="icon">
            <i class="fas fa-chevron-right"></i>
          </span>
        </b-button>
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
    ...mapState(['form', 'currCode']),
    fullname: function() {
      return this.form.record.personal.firstname + ' ' + this.form.record.personal.lastname
    }
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
        this.$store.dispatch('saveForm')
      }
    }
  },
}
</script>

<style scoped>

</style>