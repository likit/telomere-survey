<template>
<section class="section">
  <div class="columns">
    <div class="column has-text-centered is-one-third is-offset-4">
      <h1 class="title">ระบบบันทึกข้อมูล</h1>
      <h1 class="subtitle">โครงการวิจัยเรื่องระบบการจัดการโรคไม่ติดต่อเรื้อรังในกลุ่มผู้สูงอายุเปราะบางร่วมกับภาวะมวลกล้ามเนื้อน้อย</h1>
      <div class="panel is-primary">
        <div class="panel-heading">
          โปรดเลือกจังหวัด
        </div>
        <div class="panel-block" v-for="province in provinces" :key="province.name" @click="selectProvince(province)">
          <span class="panel-icon">
            <i class="fas fa-map-marked-alt" aria-hidden="true"></i>
          </span>
          {{ province.name }}
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import {mapState} from "vuex";
import {provinces} from "../firebase"

export default {
  name: "Province",
  data() {
    return {
      provinces: [],
    }
  },
  computed: {
    ...mapState(['form', 'province'])
  },
  methods: {
    selectProvince: function(province) {
      this.$store.commit('setProvince', province)
      this.$router.push({ name: 'MainPage'})
    }
  },
  mounted() {
    let self = this
    provinces.get().then((snapshot)=>{
      snapshot.forEach((d)=> {
        self.provinces.push(d.data())
      })
    })
  }
}
</script>

<style scoped>

</style>