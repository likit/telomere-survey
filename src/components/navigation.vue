<template>
  <b-navbar :mobile-burger="true" :shadow="false" :fixed-top="true" type="is-primary">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <b-icon icon="home" size="is-medium"></b-icon>
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item :to="{ name: 'Province' }" tag="router-link">
        จังหวัด
      </b-navbar-item>
      <b-navbar-item :to="{ name: 'MainPage' }" tag="router-link">
        หน้าแรก
      </b-navbar-item>
      <b-navbar-item>
        รหัสวิจัย {{ form.record.code }}
      </b-navbar-item>
      <b-navbar-item :to="{ name: 'RecordSearch' }" tag="router-link">
        รายการทั้งหมด
      </b-navbar-item>
      <b-navbar-dropdown label="Form">
        <b-navbar-item :to="{ name: 'FormMain'}" tag="router-link">
          หน้าแรก
        </b-navbar-item>
        <b-navbar-item :to="{ name: 'Personal'}" tag="router-link">
          ข้อมูลส่วนตัว
        </b-navbar-item>
        <b-navbar-item :to="{ name: 'MiniCog'}" tag="router-link">
          สมรรถภาพเบื้องต้น (Mini Cog)
        </b-navbar-item>
        <b-navbar-item :to="{ name: 'Clock'}" tag="router-link">
          วาดรูปหน้าปัดนาฬิกา
        </b-navbar-item>
        <b-navbar-item :to="{ name: 'MNA'}" tag="router-link">
          แบบประเมินภาวะโภชนาการ (MNA)
        </b-navbar-item>
        <b-navbar-item :to="{ name: 'ADL'}" tag="router-link">
          ADL
        </b-navbar-item>
        <b-navbar-item :to="{ name: 'IADL'}" tag="router-link">
          IADL
        </b-navbar-item>
        <b-navbar-item :to="{ name: '9Q'}" tag="router-link">
          9Q
        </b-navbar-item>
        <b-navbar-item :to="{ name: 'GPAQ'}" tag="router-link">
          GPAQ
        </b-navbar-item>
        <b-navbar-item :to="{ name: 'Exhaustion'}" tag="router-link">
          Self-report Exhaustion
        </b-navbar-item>
        <b-navbar-item :to="{ name: 'SARCF' }" tag="router-link">
          แบบประเมิน SARC-F
        </b-navbar-item>
        <b-navbar-item :to="{ name: 'Evaluation' }" tag="router-link">
          แบบบันทึกการประเมินองค์ประกอบสัดส่วนของร่างกาย
        </b-navbar-item>
        <b-navbar-item :to="{ name: 'FRAILScale' }" tag="router-link">
          FRAIL Scale
        </b-navbar-item>
        <b-navbar-item :to="{ name: 'VitalSigns' }" tag="router-link">
          Vital Signs
        </b-navbar-item>
        <b-navbar-item :to="{ name: 'LabResult' }" tag="router-link">
          แบบบันทึกการตรวจทางห้องปฏิบัติการ
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "navigation",
  computed: {
    ...mapState(['form']),
  }
}
</script>

<style scoped>

</style>