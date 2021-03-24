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
      <b-step-item step="1" label="ข้อมูลส่วนบุคคล" :clickable="true">
        <b-field label="อายุ">
          <b-numberinput :value="form.record.personal.age"></b-numberinput>
        </b-field>
        <b-field label="น้ำหนัก">
          <b-input type="number" placeholder="กก." v-model="form.record.personal.weight"></b-input>
        </b-field>
        <b-field label="ส่วนสูง">
          <b-input type="number" placeholder="ซม." v-model="form.record.personal.height"></b-input>
        </b-field>
        <b-field label="เพศ">
          <b-radio native-value="ชาย" v-model="form.record.personal.gender">
            ชาย
          </b-radio>
          <b-radio native-value="หญิง" v-model="form.record.personal.gender">
            หญิง
          </b-radio>
        </b-field>
        <b-field label="อาศัยอยู่ใน">
          <b-radio native-value="เขตเทศบาล" v-model="form.record.personal.address">
            เขตเทศบาล
          </b-radio>
          <b-radio native-value="นอกเขตเทศบาล" v-model="form.record.personal.address">
            นอกเขตเทศบาล
          </b-radio>
        </b-field>
        <b-field label="สถานภาพสมรส">
          <b-radio native-value="แต่งงานแล้ว" v-model="form.record.personal.maritalStatus">แต่งงานแล้ว</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="โสด" v-model="form.record.personal.maritalStatus">โสด</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="หย่าร้าง/แยกทาง" v-model="form.record.personal.maritalStatus">หย่าร้าง/แยกทาง</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="หม้าย" v-model="form.record.personal.maritalStatus">หม้าย</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="อื่น ๆ" v-model="form.record.personal.maritalStatus">อื่น ๆ</b-radio>
        </b-field>
        <b-field label="ระดับการศึกษา">
          <b-radio native-value="ไม่ได้รับการศึกษา" v-model="form.record.personal.education">
            ไม่ได้รับการศึกษา
          </b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="ประถมศึกษา" v-model="form.record.personal.education">
            ประถมศึกษา
          </b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="มัธยมศึกษาตอนต้น" v-model="form.record.personal.education">
            มัธยมศึกษาตอนต้น
          </b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="มัธยมศึกษาตอนปลาย" v-model="form.record.personal.education">
            มัธยมศึกษาตอนปลาย
          </b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="อนุปริญญา" v-model="form.record.personal.education">
            อนุปริญญา
          </b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="ปริญญาตรี" v-model="form.record.personal.education">
            ปริญญาตรี
          </b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="สูงกว่าปริญญาตรี" v-model="form.record.personal.education">
            สูงกว่าปริญญาตรี
          </b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="อื่น ๆ" v-model="form.record.personal.education">
            อื่น ๆ
          </b-radio>
        </b-field>
        <b-field label="การพักอาศัย">
          <b-radio native-value="คนเดียว" v-model="form.record.personal.living">คนเดียว</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="2 คนกับคู่ครอง" v-model="form.record.personal.living">2 คนกับคู่ครอง</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="ครอบครัว/บุตรหลาน" v-model="form.record.personal.living">ครอบครัว/บุตรหลาน</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="อยู่กับผู้ดูแล" v-model="form.record.personal.living">อยู่กับผู้ดูแล</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="อื่น ๆ" v-model="form.record.personal.living">อื่น ๆ</b-radio>
        </b-field>
        <b-field label="ท่านคิดว่ามีรายได้เพียงพอในครอบครัว">
          <b-radio native-value="เหลือเก็บ" v-model="form.record.personal.saving">เหลือเก็บ</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="กำลังพอดี" v-model="form.record.personal.saving">กำลังพอดี</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="ไม่เพียงพอ" v-model="form.record.personal.saving">ไม่เพียงพอ</b-radio>
        </b-field>
        <b-field label="การเป็นสมาชิกชมรมผู้สูงอายุ / อื่น ๆ">
          <b-radio native-value="เป็น" v-model="form.record.personal.club">เป็น</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="ไม่เป็น" v-model="form.record.personal.club">ไม่เป็น</b-radio>
        </b-field>
        <b-field label="ความรู้สึกต่อสุขภาพของตนเองโดยรวม">
          <b-radio native-value="ดีมาก" v-model="form.record.personal.healthStatus">ดีมาก</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="ดี" v-model="form.record.personal.healthStatus">ดี</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="ปานกลาง" v-model="form.record.personal.healthStatus">ปานกลาง</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="แย่" v-model="form.record.personal.healthStatus">แย่</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="แย่มาก" v-model="form.record.personal.healthStatus">แย่มาก</b-radio>
        </b-field>
        <b-field label="การสูบบุหรี่/ยาสูบ">
          <b-radio native-value="ไม่เคยสูบ" v-model="form.record.personal.smoking">ไม่เคยสูบ</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="ปัจจุบันยังสูบ" v-model="form.record.personal.smoking">ปัจจุบันยังสูบ</b-radio>
        </b-field>
        <div v-if="form.record.personal.smoking=='ปัจจุบันยังสูบ'" class="notification is-warning is-light">
          <b-field label="เป็นบางครั้ง">
            <b-input placeholder="จำนวนมวนต่อสัปดาห์"></b-input>
          </b-field>
          <b-field label="สูบทุกวัน">
            <b-input placeholder="จำนวนมวนต่อวัน"></b-input>
          </b-field>
          <br>
        </div>
        <b-field>
          <b-radio native-value="เคยสูบ" v-model="form.record.personal.smoking">เคยสูบ (ตอนนี้เลิกแล้ว)</b-radio>
        </b-field>
        <div v-if="form.record.personal.smoking=='เคยสูบ'" class="notification is-light is-success">
          <b-field label="จำนวนมวนที่เคยสูบ">
            <b-input placeholder="จำนวนมวนต่อวัน"></b-input>
          </b-field>
          <b-field label="เป็นเวลา (ปี)">
            <b-numberinput></b-numberinput>
          </b-field>
          <b-field label="เลิกมาเป็นเวลา (ปี)">
            <b-numberinput></b-numberinput>
          </b-field>
        </div>
        <b-field label="ดื่มแอลกอฮอล์">
          <b-radio native-value="ไม่เคยดื่ม" v-model="form.record.personal.alcohol">ไม่เคยดื่ม</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="ดื่มบางครั้ง" v-model="form.record.personal.alcohol">ดื่มบางครั้ง</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="ดื่มทุกวัน" v-model="form.record.personal.alcohol">ดื่มทุกวัน</b-radio>
        </b-field>
        <div class="notification is-light" v-if="form.record.personal.alcohol=='ดื่มทุกวัน'">
          <b-field label="จำนวนแก้วต่อวัน">
            <b-numberinput></b-numberinput>
          </b-field>
        </div>
        <b-field>
          <b-radio native-value="เคยดื่ม" v-model="form.record.personal.alcohol">เคยดื่ม</b-radio>
        </b-field>
        <div class="notification is-light" v-if="form.record.personal.alcohol=='เคยดื่ม'">
          <b-field label="จำนวนแก้วต่อวัน">
            <b-numberinput></b-numberinput>
          </b-field>
          <b-field label="เป็นเวลา (ปี)">
            <b-numberinput></b-numberinput>
          </b-field>
          <b-field label="เลิกมา (ปี)">
            <b-numberinput></b-numberinput>
          </b-field>
        </div>
        <b-field label="โรคประจำตัว">
          <b-radio native-value="ไม่มี" v-model="form.record.personal.underlyingDis">ไม่มี</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="โรคเบาหวาน" v-model="form.record.personal.underlyingDis">โรคเบาหวาน</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="โรคไขมันในเลือดผิดปกติ" v-model="form.record.personal.underlyingDis">โรคไขมันในเลือดผิดปกติ</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="โรคหัวใจ" v-model="form.record.personal.underlyingDis">โรคหัวใจ</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="โรคปอดอุดกั้นเรื้อรัง" v-model="form.record.personal.underlyingDis">โรคปอดอุดกั้นเรื้อรัง</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="อื่น ๆ" v-model="form.record.personal.underlyingDis">อื่น ๆ</b-radio>
        </b-field>
        <b-field label="หลักประกันสุขภาพ">
          <b-radio native-value="สิทธิรักษาสุขภาพถ้วนหน้า/30 บาท" v-model="form.record.personal.healthCoverage">สิทธิรักษาสุขภาพถ้วนหน้า / 30 บาท</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="สิทธิข้าราชการ" v-model="form.record.personal.healthCoverage">สิทธิข้าราชการ</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="สิทธิประกันสังคม" v-model="form.record.personal.healthCoverage">สิทธิประกันสังคม</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="อื่น ๆ" v-model="form.record.personal.healthCoverage">อื่น ๆ</b-radio>
        </b-field>
        <b-field v-if="form.record.personal.healthCoverage=='อื่น ๆ'">
          <b-input placeholder="โปรดระบุ"></b-input>
        </b-field>
        <b-field label="ประวัติการเข้ารับการรักษาเป็นผู้ป่วยในโรงพยาบาลในระยะเวลา 1 ปี ที่ผ่านมา">
          <b-radio native-value="ไม่มี" v-model="form.record.personal.hospitalized">ไม่มี</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="มี" v-model="form.record.personal.hospitalized">มี</b-radio>
        </b-field>
        <b-field label="ประวัติการพลัดหกล้มในระยะ 1 ปีที่ผ่านมา">
          <b-radio native-value="ไม่มี" v-model="form.record.personal.fell">ไม่มี</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="มี" v-model="form.record.personal.fell">มี</b-radio>
        </b-field>
        <b-field label="ปัจจุบันท่านทานยากี่ชนิด">
          <b-radio native-value="ไม่มียาประจำ" v-model="form.record.personal.medication">ไม่มียาประจำ</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="มี" v-model="form.record.personal.medication">มี</b-radio>
        </b-field>
        <b-field v-if="form.record.personal.medication=='มี'">
          <b-numberinput placeholder="จำนวนกี่ชนิด"></b-numberinput>
        </b-field>
        <b-field label="น้ำหนัก">
          <b-numberinput placeholder="1 ปีย้อนหลัง"></b-numberinput>
        </b-field>
        <b-field>
          <b-numberinput placeholder="ปัจจุบัน"></b-numberinput>
        </b-field>
        <label class="label">ประวัติการทำงาน</label>
        <b-field label="ก่อนการเกษียณอายุหรือก่อนอายุ 60 ปี">
          <b-radio native-value="งานบ้าน" v-model="form.record.personal.job.jobAfterRetirement">งานบ้าน</b-radio>
          <b-radio native-value="เกษตรกร" v-model="form.record.personal.job.jobAfterRetirement">เกษตรกร</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="รับจ้างแรงงาน" v-model="form.record.personal.job.jobAfterRetirement">รับจ้างแรงงาน</b-radio>
          <b-radio native-value="รับจ้างสำนักงาน" v-model="form.record.personal.job.jobAfterRetirement">รับจ้างสำนักงาน</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="ข้าราชการ/รัฐวิสาหกิจ" v-model="form.record.personal.job.jobAfterRetirement">ข้าราชการ/รัฐวิสาหกิจ</b-radio>
          <b-radio native-value="การเมือง" v-model="form.record.personal.job.jobAfterRetirement">การเมือง</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="ค้าขาย" v-model="form.record.personal.job.jobAfterRetirement">ค้าขาย</b-radio>
          <b-radio native-value="ธุรกิจบริการ" v-model="form.record.personal.job.jobAfterRetirement">ธุรกิจบริการ</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="อยู่บ้านเฉย ๆ" v-model="form.record.personal.job.jobAfterRetirement">อยู่บ้านเฉย ๆ</b-radio>
          <b-radio native-value="อื่น ๆ" v-model="form.record.personal.job.jobAfterRetirement">อื่น ๆ</b-radio>
        </b-field>
        <b-field label="หลังการเกษียณอายุหรือหลังอายุ 60 ปี">
          <b-radio native-value="งานบ้าน" v-model="form.record.personal.job.jobAfterRetirement">งานบ้าน</b-radio>
          <b-radio native-value="เกษตรกร" v-model="form.record.personal.job.jobAfterRetirement">เกษตรกร</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="รับจ้างแรงงาน" v-model="form.record.personal.job.jobAfterRetirement">รับจ้างแรงงาน</b-radio>
          <b-radio native-value="รับจ้างสำนักงาน" v-model="form.record.personal.job.jobAfterRetirement">รับจ้างสำนักงาน</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="ข้าราชการ/รัฐวิสาหกิจ" v-model="form.record.personal.job.jobAfterRetirement">ข้าราชการ/รัฐวิสาหกิจ</b-radio>
          <b-radio native-value="การเมือง" v-model="form.record.personal.job.jobAfterRetirement">การเมือง</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="ค้าขาย" v-model="form.record.personal.job.jobAfterRetirement">ค้าขาย</b-radio>
          <b-radio native-value="ธุรกิจบริการ" v-model="form.record.personal.job.jobAfterRetirement">ธุรกิจบริการ</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="อยู่บ้านเฉย ๆ" v-model="form.record.personal.job.jobAfterRetirement">อยู่บ้านเฉย ๆ</b-radio>
          <b-radio native-value="อื่น ๆ" v-model="form.record.personal.job.jobAfterRetirement">อื่น ๆ</b-radio>
        </b-field>
        <b-field label="ยังทำงานอยู่">
          <b-numberinput placeholder="ทำมาแล้วกี่ปี" v-model="form.record.personal.job.currentJob.duration"></b-numberinput>
        </b-field>
        <b-field label="ทำงานอยู่">
          <b-numberinput placeholder="หยุดมาแล้วกี่ปี" v-model="form.record.personal.job.currentJob.quit"></b-numberinput>
        </b-field>
        <b-field label="เพราะ">
          <b-input placeholder="เหตุผลที่หยุดงาน" v-model="form.record.personal.job.currentJob.quitReason"></b-input>
        </b-field>
      </b-step-item>
    </b-steps>
    <div class="buttons is-centered">
      <button class="button is-light" @click="$router.back()">Back</button>
      <router-link :to="{name: 'Charlson'}" class="button is-success">Next</router-link>
    </div>
  </div>
</section>
</template>

<script>
import Navigation from "@/components/navigation";
import {mapState} from 'vuex';

export default {
  name: "Personal",
  components: {Navigation},
  computed: {
    ...mapState(['form'])
  },
}
</script>

<style scoped>

</style>