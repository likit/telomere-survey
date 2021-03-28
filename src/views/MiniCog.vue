<template>
<section class="section">
  <Navigation></Navigation>
  <br>
  <div class="container">
    <b-steps
        :rounded="true"
        :has-navigation="false"
        mobile-mode="minimalist"
    >
      <b-step-item step="3" label="สมรรถภาพเบื้องต้น" :clickable="true">
        <label class="label">Three Word Registration</label>
        <b-field label="ให้ตั้งใจฟังดี ๆ เดี๋ยวจะบอกคำ 3 คำ เมื่อพูดจบแล้วให้พูดตามและจำไว้เดี๋ยวจะกลับมาถามซ้ำ">
          <ul>
            <li>หลานสาว</li>
            <li>สวรรค์</li>
            <li>ภูเขา</li>
          </ul>
        </b-field>
        <b-field label="ให้ตั้งใจฟังดี ๆ เดี๋ยวจะบอกคำ 3 คำ เมื่อพูดจบแล้วให้พูดตามและจำไว้เดี๋ยวจะกลับมาถามซ้ำ">
          <b-checkbox @input="updateScore('หลานสาว')" v-model="q1">หลานสาว</b-checkbox>
        </b-field>
        <b-field>
          <b-checkbox @input="updateScore('สวรรค์')" v-model="q2">สวรรค์</b-checkbox>
        </b-field>
        <b-field>
          <b-checkbox @input="updateScore('ภูเขา')" v-model="q3">ภูเขา</b-checkbox>
        </b-field>
      </b-step-item>
    </b-steps>
    <div class="buttons is-centered">
      <button class="button is-light" @click="$router.back()">
        <span class="icon">
          <i class="fas fa-chevron-left"></i>
        </span>
      </button>
      <button class="button is-primary" @click="saveData">
        <span class="icon">
          <i class="far fa-save"></i>
        </span>
        <span>Save</span>
      </button>
      <router-link :to="{ name: 'Clock' }" class="button is-success">
        <span class="icon">
          <i class="fas fa-chevron-right"></i>
        </span>
      </router-link>
    </div>
  </div>
</section>
</template>

<script>
import Navigation from "@/components/navigation";
import {mapState} from "vuex";

export default {
  name: "MiniCog",
  components: {Navigation},
  data() {
    return {
      q1: null,
      q2: null,
      q3: null,
    }
  },
  computed: {
    ...mapState(['form'])
  },
  mounted() {
    let self = this
    console.log(this.form.record.minicog.items, 'mounted')
    this.form.record.minicog.items.forEach((d)=>{
      switch (d) {
        case "หลานสาว":
          self.q1 = true;
          break;
        case "สวรรค์":
          self.q2 = true;
          break;
        case "ภูเขา":
          self.q3 = true;
          break;
      }
    })
  },
  methods: {
    updateScore: function (item) {
      this.$store.commit('updateMiniCogItems', item)
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
          self.$buefy.toast.open({
            message: 'บันทึกข้อมูลเรียบร้อยแล้ว',
            type: 'is-success',
          })
        }).catch(() => {
          self.$buefy.toast.open({
            message: 'โปรแกรมไม่สามารถบันทึกข้อมูลได้ โปรดลองใหม่อีกครั้ง',
            type: 'is-danger',
          })
        })
      }
    }
  }
}
</script>

<style scoped>

</style>