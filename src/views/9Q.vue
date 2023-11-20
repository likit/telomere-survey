<template>
  <section class="section">
    <Navigation></Navigation>
    <br>
    <div class="container">
      <div class="columns">
        <div class="column is-two-thirds is-offset-2">
          <h1 class="title has-text-centered">ประเมินภาวะซึมเศร้า (9Q)</h1>
          <b-field label="เบื่อไม่สนใจไม่อยากทำอะไร">
            <b-radio native-value="0" v-model="form.record.form9q.one">ไม่มีเลย</b-radio>
            <b-radio native-value="1" v-model="form.record.form9q.one">เป็นบางวัน 1-7 วัน</b-radio>
            <b-radio native-value="2" v-model="form.record.form9q.one">เป็นบ่อย >7 วัน</b-radio>
            <b-radio native-value="3" v-model="form.record.form9q.one">เป็นทุกวัน</b-radio>
          </b-field>
          <b-field label="ไม่สบายใจ ซึมเศร้า ท้อแท้">
            <b-radio native-value="0" v-model="form.record.form9q.two">ไม่มีเลย</b-radio>
            <b-radio native-value="1" v-model="form.record.form9q.two">เป็นบางวัน 1-7 วัน</b-radio>
            <b-radio native-value="2" v-model="form.record.form9q.two">เป็นบ่อย >7 วัน</b-radio>
            <b-radio native-value="3" v-model="form.record.form9q.two">เป็นทุกวัน</b-radio>
          </b-field>
          <b-field label="หลับยากหรือหลับ ๆ ตื่น ๆ หรือหลับมากไป">
            <b-radio native-value="0" v-model="form.record.form9q.three">ไม่มีเลย</b-radio>
            <b-radio native-value="1" v-model="form.record.form9q.three">เป็นบางวัน 1-7 วัน</b-radio>
            <b-radio native-value="2" v-model="form.record.form9q.three">เป็นบ่อย >7 วัน</b-radio>
            <b-radio native-value="3" v-model="form.record.form9q.three">เป็นทุกวัน</b-radio>
          </b-field>
          <b-field label="เหนื่อยง่าย หรือไม่ค่อยมีแรง">
            <b-radio native-value="0" v-model="form.record.form9q.four">ไม่มีเลย</b-radio>
            <b-radio native-value="1" v-model="form.record.form9q.four">เป็นบางวัน 1-7 วัน</b-radio>
            <b-radio native-value="2" v-model="form.record.form9q.four">เป็นบ่อย >7 วัน</b-radio>
            <b-radio native-value="3" v-model="form.record.form9q.four">เป็นทุกวัน</b-radio>
          </b-field>
          <b-field label="เบื่ออาหาร หรือกินมากเกินไป">
            <b-radio native-value="0" v-model="form.record.form9q.five">ไม่มีเลย</b-radio>
            <b-radio native-value="1" v-model="form.record.form9q.five">เป็นบางวัน 1-7 วัน</b-radio>
            <b-radio native-value="2" v-model="form.record.form9q.five">เป็นบ่อย >7 วัน</b-radio>
            <b-radio native-value="3" v-model="form.record.form9q.five">เป็นทุกวัน</b-radio>
          </b-field>
          <b-field label="รู้สึกไม่ดีกับตัวเองคิดว่าตัวเองล้มเหลวหรือทำให้ตนเองหรือครอบครัวผิดหวัง">
            <b-radio native-value="0" v-model="form.record.form9q.six">ไม่มีเลย</b-radio>
            <b-radio native-value="1" v-model="form.record.form9q.six">เป็นบางวัน 1-7 วัน</b-radio>
            <b-radio native-value="2" v-model="form.record.form9q.six">เป็นบ่อย >7 วัน</b-radio>
            <b-radio native-value="3" v-model="form.record.form9q.six">เป็นทุกวัน</b-radio>
          </b-field>
          <b-field label="สมาธิไม่ดีเวลาทำอะไร เช่น ดูโทรทัศน์ ฟังวิทยุ หรือทำงานที่ต้องใช้ความตั้งใจ">
            <b-radio native-value="0" v-model="form.record.form9q.seven">ไม่มีเลย</b-radio>
            <b-radio native-value="1" v-model="form.record.form9q.seven">เป็นบางวัน 1-7 วัน</b-radio>
            <b-radio native-value="2" v-model="form.record.form9q.seven">เป็นบ่อย >7 วัน</b-radio>
            <b-radio native-value="3" v-model="form.record.form9q.seven">เป็นทุกวัน</b-radio>
          </b-field>
          <b-field
              label="พูดช้าหรือทำอะไรช้าลงจนคนอื่นสังเกตเห็นได้หรือกระสับกระส่าย ไม่สามารถอยู่นิ่งได้เหมือนที่เคยเป็น">
            <b-radio native-value="0" v-model="form.record.form9q.eight">ไม่มีเลย</b-radio>
            <b-radio native-value="1" v-model="form.record.form9q.eight">เป็นบางวัน 1-7 วัน</b-radio>
            <b-radio native-value="2" v-model="form.record.form9q.eight">เป็นบ่อย >7 วัน</b-radio>
            <b-radio native-value="3" v-model="form.record.form9q.eight">เป็นทุกวัน</b-radio>
          </b-field>
          <b-field label="คิดร้ายตนเอง หรือคิดว่าถ้าตายไปคงดี">
            <b-radio native-value="0" v-model="form.record.form9q.nine">ไม่มีเลย</b-radio>
            <b-radio native-value="1" v-model="form.record.form9q.nine">เป็นบางวัน 1-7 วัน</b-radio>
            <b-radio native-value="2" v-model="form.record.form9q.nine">เป็นบ่อย >7 วัน</b-radio>
            <b-radio native-value="3" v-model="form.record.form9q.nine">เป็นทุกวัน</b-radio>
          </b-field>
          <h1 class="title has-text-centered is-size-4">คะแนนรวม {{ score }}</h1>
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
            <router-link :to="{ name: 'Kihon' }" class="button is-success">
        <span class="icon">
          <i class="fas fa-chevron-right"></i>
        </span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import Navigation from "@/components/navigation";
import {mapState} from "vuex";

export default {
  name: "Form9Q",
  components: {Navigation},
  computed: {
    ...mapState(['form']),
    score: function () {
      return parseInt(this.form.record.form9q.one) + parseInt(this.form.record.form9q.two) +
          parseInt(this.form.record.form9q.three) + parseInt(this.form.record.form9q.four) +
          parseInt(this.form.record.form9q.five) + parseInt(this.form.record.form9q.six) +
          parseInt(this.form.record.form9q.seven) + parseInt(this.form.record.form9q.eight) +
          parseInt(this.form.record.form9q.nine)
    }
  },
  methods: {
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
  }
}
</script>

<style scoped>

</style>