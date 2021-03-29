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
      <b-step-item step="9" label="ภาวะเปราะบาง Kihon" :clickable="true">
        <b-field label="รายละเอียดคำถาม">
          <b-switch v-model="form.record.kihon.one">
            คุณเดินทางออกจากบ้านโดยรถเมล์หรือรถระบบราง (เช่น รถไฟหรือรถไฟฟ้า) ด้วยตนเองหรือไม่
          </b-switch>
        </b-field>
        <b-field>
          <b-switch v-model="form.record.kihon.two">
            คุณออกไปซื้อของใช้ที่จำเป็นในชีวิตประจำวันด้วยตนเองหรือไม่
          </b-switch>
        </b-field>
        <b-field>
          <b-switch v-model="form.record.kihon.three">
            คุณจัดการเงินฝากของคุณเองและฝากเงินที่ธนาคารหรือไม่
          </b-switch>
        </b-field>
        <b-field>
          <b-switch v-model="form.record.kihon.four">
            บางครั้งคุณไปเยี่ยมเพื่อนของคุณหรือไม่
          </b-switch>
        </b-field>
        <b-field>
          <b-switch v-model="form.record.kihon.five">
            ปกติคุณขอคำปรึกษาจากครอบครัวหรือเพื่อนของคุณหรือไม่
          </b-switch>
        </b-field>
        <b-field>
          <b-switch v-model="form.record.kihon.six">
            ปกติคุณขึ้นบันไดโดยไม่ต้องใช้ราวจับหรือเกาะผนังเพื่อพยุงตัวหรือไม่
          </b-switch>
        </b-field>
        <b-field>
          <b-switch v-model="form.record.kihon.seven">
            ปกติคุณลุกขึ้นยืนจากเก้าอี้โดยไม่ต้องมีการช่วยเหลือใด ๆ หรือไม่
          </b-switch>
        </b-field>
        <b-field>
          <b-switch v-model="form.record.kihon.eight">
            ปกติคุณเดินติดต่อกันได้นาน 15 นาทีหรือไม่
          </b-switch>
        </b-field>
        <b-field>
          <b-switch v-model="form.record.kihon.nine">
            คุณเคยหกล้มในปีที่ผ่านมาหรือไม่
          </b-switch>
        </b-field>
        <b-field>
          <b-switch v-model="form.record.kihon.ten">
            ขณะที่เดินคุณรู้สึกกลัวว่าจะหกล้มหรือไม่
          </b-switch>
        </b-field>
        <b-field>
          <b-switch v-model="form.record.kihon.eleven">
            น้ำหนักตัวของคุณลดลง 2 กิโลกรัม หรือกมากกว่าในช่วง 6 เดือนที่ผ่านมาหรือไม่
          </b-switch>
        </b-field>
        <b-field>
          <b-switch v-model="form.record.kihon.twelve">
            ดัชนีมวลกายน้อยกว่า 18.5 <strong>(={{bmi}})</strong>
          </b-switch>
        </b-field>
        <b-field>
          <b-switch v-model="form.record.kihon.thirteen">
            คุณมีความลำบากอยู่บ้างในการรับประทานอาหารแข็ง (เหนียว) เมื่อเทียบกับ 6 เดือนก่อนหรือไม่
          </b-switch>
        </b-field>
        <b-field>
          <b-switch v-model="form.record.kihon.forteen">
            ระยะนี้เวลาคุณดื่มน้ำชาหรือน้ำแกงมีอาการสำลักหรือไม่
          </b-switch>
        </b-field>
        <b-field>
          <b-switch v-model="form.record.kihon.fifteen">
            คุณมักมีอาการปากแห้งใช่หรือไม่
          </b-switch>
        </b-field>
        <b-field>
          <b-switch v-model="form.record.kihon.sixteen">
            คุณออกนอกบ้านสัปดาห์ละครั้ง ใช่หรือไม่
          </b-switch>
        </b-field>
        <b-field>
          <b-switch v-model="form.record.kihon.seventeen">
            คุณออกนอกบ้านน้อยลงเมื่อเทียบกับปีที่แล้ว ใช่หรือไม่
          </b-switch>
        </b-field>
        <b-field>
          <b-switch v-model="form.record.kihon.eighteen">
            ครอบครัวคุณหรือเพื่อนคุณ ทักว่าคุณมีความจำหลงลืมใช่ไหม เช่น คุณถามคำถามเดิม ๆ ซ้ำ ๆ กันหลายครั้ง
          </b-switch>
        </b-field>
        <b-field>
          <b-switch v-model="form.record.kihon.nineteen">
            คุณโทรศัพท์โดยที่คุณต้องคอยมองเลขโทรศัพท์ที่จดไว้หรือไม่
          </b-switch>
        </b-field>
        <b-field>
          <b-switch v-model="form.record.kihon.twenty">
            คุณพบว่าคุณไม่ทราบว่าวันนี้เป็นวันที่เท่าไหร่
          </b-switch>
        </b-field>
        <b-field>
          <b-switch v-model="form.record.kihon.twentyone">
            ในช่วง 2 สัปดาห์ที่ผ่านมาคุณรู้สึกขาดความสำเร็จในการดำเนินชีวิตประจำวันใช่หรือไม่
          </b-switch>
        </b-field>
        <b-field>
          <b-switch v-model="form.record.kihon.twentytwo">
            ในช่วง 2 สัปดาห์ที่ผ่านมา คุณรู้สึกขาดความสนุกเมื่อทำสิ่งที่คุณเคยทำแล้วมีความสนุก ใช่หรือไม่
          </b-switch>
        </b-field>
        <b-field>
          <b-switch v-model="form.record.kihon.twentythree">
            ในช่วง 2 สัปดาห์ที่ผ่านมา คุณรู้สึกลำบากที่จะทำสิ่งที่คุณเคยทำได้ง่าย ๆ เมื่อก่อนหน้านี้ ใช่หรือไม่
          </b-switch>
        </b-field>
        <b-field>
          <b-switch v-model="form.record.kihon.twentyfour">
            ในช่วง 2 สัปดาห์ที่ผ่านมา คุณรู้สึกว่าคุณเป็นคนไม่มีประโยชน์ ใช่หรือไม่
          </b-switch>
        </b-field>
        <b-field>
          <b-switch v-model="form.record.kihon.twentyfive">
            ในช่วง 2 สัปดาห์ที่ผ่านมา คุณรู้สึกเหนื่อยเพลียโดยไม่มีเหตุผลหรือไม่
          </b-switch>
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
      <router-link :to="{ name: 'EQ-5D-5L' }" class="button is-success">
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
  name: "Kihon",
  components: {Navigation},
  computed: {
    ...mapState(['form']),
    bmi: function() {
      let currentBmi = this.form.record.personal.weight/(this.form.record.personal.height*0.01)**2
      if (isNaN(currentBmi)) {
        return "N/A"
      } else {
        return currentBmi.toFixed(2)
      }
    },
    score: function() {
      return parseInt(this.one) + parseInt(this.two) +
          parseInt(this.three) + parseInt(this.four) +
          parseInt(this.five) + parseInt(this.six) +
          parseInt(this.seven) + parseInt(this.eight) +
          parseInt(this.nine)
    }
  },
  mounted() {
    if (this.bmi < 18.5) {
      this.form.record.kihon.twelve = true;
    } else {
      this.form.record.kihon.twelve = false;
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