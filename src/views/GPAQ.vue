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
      <b-step-item step="11" label="กิจกรรมทางกาย GPAQ" :clickable="true">
        <div class="notification is-light is-primary label">1. กิจกรรมทางกายภาพในการทำงาน</div>
        <span class="tag is-warning">P1</span>
        <b-field label="ท่านมีกิจกรรมทางกายระดับหนักซึ่งทำให้หายใจแรงและเร็วกว่าปกติมากหรือหอบติดต่อกัน
          เป็นระยะเวลาอย่างน้อย 10 นาที เช่นการยกหรือแบกของหนัก ๆ การขุดดิน งานก่อสร้าง">
          <b-radio v-model="form.record.gpaq.p1" :native-value="true">ใช่</b-radio>
          <b-radio v-model="form.record.gpaq.p1" :native-value="false">ไม่ใช่</b-radio>
        </b-field>
        <p class="help is-info">ถ้าไม่ใช่ให้ข้ามไปตอบข้อ P4</p>
        <div v-if="form.record.gpaq.p1 == true">
          <hr>
          <span class="tag is-warning">P2</span>
          <b-field label="โดยปกติท่านมีกิจกรรมทางกายระดับหนักในแต่ละสัปดาห์จำนวนกี่วัน">
            <b-numberinput v-model="form.record.gpaq.p2"></b-numberinput>
          </b-field>
          <hr>
          <span class="tag is-warning">P3</span>
          <b-field label="โดยปกติที่ท่านมีกิจกรรมทางกายระดับหนักนั้น ในแต่ละวันท่านทำเป็นระยะเวลานานเท่าใด นึกถึงเฉพาะงานที่ติดต่อกันเกินสิบนาที">
            <b-numberinput placeholder="ชั่วโมง" v-model="form.record.gpaq.p3.hours"></b-numberinput>
          </b-field>
          <b-field>
            <b-numberinput placeholder="นาที" v-model="form.record.gpaq.p3.minutes"></b-numberinput>
          </b-field>
        </div>
        <hr>
        <span class="tag is-warning">P4</span>
        <b-field label="ท่านมีกิจกรรมทางกายระดับปานกลาง ซึ่งทำให้หายใจเร็วขึ้นพอควรไม่ถึงกับหอบติดต่อกันเป็นระยะเวลาอย่างน้อยสิบนาที เช่น การก้าวเดินเร็ว ๆ หรือการยกถือของเบา ๆ">
          <b-radio :native-value="true" v-model="form.record.gpaq.p4">ใช่</b-radio>
          <b-radio :native-value="false" v-model="form.record.gpaq.p4">ไม่ใช่</b-radio>
        </b-field>
        <p class="help is-info">ถ้าไม่ใช่ให้ข้ามไปตอบข้อ P7</p>
        <hr>
        <div v-if="form.record.gpaq.p4 == true">
          <span class="tag is-warning">P5</span>
          <b-field label="โดยปกติท่านมีกิจกรรมทางกายระดับปานกลางในแต่ละสัปดาห์จำนวนกี่วัน">
            <b-numberinput v-model="form.record.gpaq.p5"></b-numberinput>
          </b-field>
          <hr>
          <span class="tag is-warning">P6</span>
          <b-field label="โดยปกติที่ท่านมีกิจกรรมทางกายระดับปานกลางนั้น ในแต่ละวันท่านทำเป็นระยะเวลานานเท่าใด นึกถึงเฉพาะงานที่ติดต่อกันเกินสิบนาที">
            <b-numberinput placeholder="ชั่วโมง" v-model="form.record.gpaq.p6.minutes"></b-numberinput>
          </b-field>
          <b-field>
            <b-numberinput placeholder="นาที" v-model="form.record.gpaq.p6.hours"></b-numberinput>
          </b-field>
        </div>
        <div class="notification is-light is-primary label">2. กิจกรรมทางกายภาพในการเดินทางจากที่หนึ่งไปยังอีกที่หนึ่ง</div>
        <hr>
        <span class="tag is-warning">P7</span>
        <b-field label="ท่านเดินหรือถีบจักรยานจากที่หนึ่งไปยังอีกที่หนึ่งติดต่อกันเป็นระยะเวลาอย่างน้อย 10 นาที">
          <b-radio :native-value="true" v-model="form.record.gpaq.p7">ใช่</b-radio>
          <b-radio :native-value="false" v-model="form.record.gpaq.p7">ไม่ใช่</b-radio>
        </b-field>
        <hr>
        <span class="tag is-warning">P8</span>
        <b-field label="โดยปกติท่านเดินหรือถีบจักรยานจากที่หนึ่งไปยังอีกที่หนึ่งใช้เวลาอย่างน้อยสิบนาทีในแต่ละสัปดาห์จำนวนกี่วัน">
          <b-numberinput placeholder="วันต่อสัปดาห์" v-model="form.record.gpaq.p8"></b-numberinput>
        </b-field>
        <hr>
        <span class="tag is-warning">P9</span>
        <b-field label="โดยปกติที่ท่านเดินหรือถีบจักรยานจากที่หนึ่งไปยังอีกที่หนึ่งติดต่อกันเป็นระยะเวลาอย่างน้อยสิบนาทีเป็นระยะเวลานานเท่าใด นึกถึงเฉพาะงานที่ติดต่อกันเกินสิบนาที">
          <b-numberinput placeholder="ชั่วโมง" v-model="form.record.gpaq.p9.hours"></b-numberinput>
        </b-field>
        <b-field>
          <b-numberinput placeholder="นาที" v-model="form.record.gpaq.p9.minutes"></b-numberinput>
        </b-field>
        <hr>
        <div class="notification is-light is-primary label">3. กิจกรรมทางกายภาพที่ทำในเวลาว่างเพื่อการพักผ่อนหย่อนใจ</div>
        <span class="tag is-warning">P10</span>
        <b-field label="ท่านเล่นกีฬา ออกกำลังกายหรือทำกิจกรรมนันทนาการระดับหนัก ซึ่งทำให้หัวใจเต้นเร็วกว่าปกติมาก หรือหอบติดต่อกันเป็นระยะเวลาอย่างน้อยสิบนาที เช่น วิ่ง หรือเล่นฟุตบอล">
          <b-radio :native-value="true" v-model="form.record.gpaq.p10">ใช่</b-radio>
          <b-radio :native-value="false" v-model="form.record.gpaq.p10">ไม่ใช่</b-radio>
        </b-field>
        <span class="tag is-warning">P11</span>
        <b-field label="โดยปกติท่านเล่นกีฬา ออกกำลังกายหรือทำกิจกรรมนันทราการระดับหนัก ในแต่ละสัปดาห์จำนวนกี่วัน">
          <b-numberinput v-model="form.record.gpaq.p11"></b-numberinput>
        </b-field>
        <hr>
        <span class="tag is-warning">P12</span>
        <b-field label="ท่านเล่นกีฬา ออกกำลังกายหรือทำกิจกรรมนันทนาการระดับหนักนั้น ในแต่ละวันท่านใช้ระยะเวลานานเท่าใด">
          <b-numberinput placeholder="ชั่วโมง" v-model="form.record.gpaq.p12.hours"></b-numberinput>
        </b-field>
        <b-field>
          <b-numberinput placeholder="นาที" v-model="form.record.gpaq.p12.minutes"></b-numberinput>
        </b-field>
        <hr>
        <span class="tag is-warning">P13</span>
        <b-field label="ท่านเล่นกีฬา ออกกำลังกายหรือทำกิจกรรมนันทนาการระดับปานกลาง ซึ่งทำให้หัวใจเต้นเร็วพอควร ไม่ถึงกับหอบติดต่อกันเป็นระยะเวลาอย่างน้อยสิบนาที เช่น วิ่ง หรือเล่นฟุตบอล">
          <b-radio :native-value="true" v-model="form.record.gpaq.p13">ใช่</b-radio>
          <b-radio :native-value="false" v-model="form.record.gpaq.p13">ไม่ใช่</b-radio>
        </b-field>
        <hr>
        <span class="tag is-warning">P14</span>
        <b-field label="โดยปกติท่านเล่นกีฬา ออกกำลังกายหรือทำกิจกรรมนันทราการระดับปานกลาง ในแต่ละสัปดาห์จำนวนกี่วัน">
          <b-numberinput v-model="form.record.gpaq.p14"></b-numberinput>
        </b-field>
        <hr>
        <span class="tag is-warning">P15</span>
        <b-field label="ท่านเล่นกีฬา ออกกำลังกายหรือทำกิจกรรมนันทนาการระดับปานกลาง ในแต่ละวันท่านใช้ระยะเวลานานเท่าใด">
          <b-numberinput placeholder="ชั่วโมง" v-model="form.record.gpaq.p15.hours"></b-numberinput>
        </b-field>
        <b-field>
          <b-numberinput placeholder="นาที" v-model="form.record.gpaq.p15.minutes"></b-numberinput>
        </b-field>
        <div class="notification is-light is-primary label">4. พฤติกรรมนั่ง ๆ นอน ๆ</div>
        <b-field label="ท่านนั่งหรือเอนกายเฉย ๆ ติดต่อกันนานเกิน 2 ชั่วโมงหรือไม่อย่างไร">
          <b-radio v-model="form.record.gpaq.sedentary" native-value="นั่งหรือเอนกายเฉย ๆ นานเกิน 2 ชั่วโมงทุกวัน">นั่งหรือเอนกายเฉย ๆ นานเกิน 2 ชั่วโมงทุกวัน</b-radio>
          <span class="tag is-warning">P16</span>
        </b-field>
        <b-field>
          <b-radio v-model="form.record.gpaq.sedentary" native-value="นั่งหรือเอนกายเฉย ๆ นานเกิน 2 ชั่วโมงบางวัน">นั่งหรือเอนกายเฉย ๆ นานเกิน 2 ชั่วโมงบางวัน</b-radio>
          <span class="tag is-warning">P17</span>
        </b-field>
        <b-field>
          <b-radio v-model="form.record.gpaq.sedentary" native-value="นั่งหรือเอนกายเฉย ๆ ไม่เกิน 2 ชั่วโมงต่อวัน">นั่งหรือเอนกายเฉย ๆ นานไม่เกิน 2 ชั่วโมงต่อวัน</b-radio>
          <span class="tag is-warning">P18</span>
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
      <router-link :to="{ name: 'Exhaustion' }" class="button is-success">
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
  name: "GPAQ",
  components: {Navigation},
  computed: {
    ...mapState(['form']),
    score: function() {
      return parseInt(this.one) + parseInt(this.two) +
          parseInt(this.three) + parseInt(this.four) +
          parseInt(this.five)
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