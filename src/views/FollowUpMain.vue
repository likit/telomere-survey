<template>
<section class="section">
  <NavigationTwo></NavigationTwo>
  <div class="container">
    <h1 class="title has-text-centered">แบบฟอร์มบันทึกข้อมูล (CASE REPORT FORM)</h1>
    <h1 class="subtitle has-text-centered">
      โครงการวิจัยเรื่องระบบการจัดการโรคไม่ติดต่อเรื้อรังในกลุ่มผู้สูงอายุเปราะบางร่วมกับภาวะมวลกล้ามเนื้อน้อย
    </h1>
    <hr>
    <h1 class="title has-text-centered is-size-4">จังหวัด{{ $store.state.province.name }}</h1>
    <div class="has-text-centered">
      <b-tag rounded type="is-danger">เพิ่มการติดตามผล</b-tag>
    </div>
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
        <span class="help is-info" v-if="user != null && form.record.lastUpdate.length == 0">
          <strong>โดย</strong> {{ user.email }}
        </span>
        <span class="help is-info" v-else>
          <strong>โดย</strong> {{ form.record.creator }}
        </span>
        <span class="help is-link" v-if="form.record.lastUpdate.length > 0">
          <strong>แก้ไขล่าสุดเมื่อ</strong> {{ lastEditAt }}
        </span>
        <span class="help is-link" v-if="form.record.lastUpdate.length > 0">
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
import NavigationTwo from "@/components/navigationTwo.vue";
import {mapState} from "vuex";
import {auth} from "@/firebase";

export default {
  name: "FollowUpMain",
  components: {NavigationTwo},
  computed: {
    ...mapState(['form', 'currCode']),
    fullname: function() {
      return this.form.record.personal.firstname + ' ' + this.form.record.personal.lastname
    },
    lastEditAt: function() {
      let dt = null;
      try {
        dt = this.form.record.lastUpdate[this.form.record.lastUpdate.length - 1].datetime.toDate().toLocaleString()
      } catch (e) {
        dt = this.form.record.lastUpdate[this.form.record.lastUpdate.length - 1].datetime.toLocaleString()
      }
      return dt
    }
  },
  data() {
    return {
      user: null
    }
  },
  mounted() {
    this.user = auth.currentUser
  },
  methods: {
    nextPage: function() {
      this.$router.push({ name: 'FollowUpPersonal'})
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
        this.$store.dispatch('saveFollowUpForm')
      }
    }
  },
}
</script>

<style scoped>

</style>