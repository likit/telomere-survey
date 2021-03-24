<template>
  <b-navbar :mobile-burger="true" :shadow="false" :fixed-top="true" type="is-primary">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <b-icon icon="home" size="is-medium"></b-icon>
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item href="#">
        Home
      </b-navbar-item>
      <b-navbar-dropdown label="Form">
        <b-navbar-item :to="{ name: 'FormMain'}" tag="router-link">
          หน้าแรก
        </b-navbar-item>
        <b-navbar-item :to="{ name: 'Personal'}" tag="router-link">
          ข้อมูลส่วนตัว
        </b-navbar-item>
        <b-navbar-item :to="{ name: 'Evaluation' }" tag="router-link">
          แบบบันทึกการประเมิน
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "navigation"
}
</script>

<style scoped>

</style>