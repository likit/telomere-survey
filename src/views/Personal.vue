<template>
<section class="section">
  <div class="container">
    <b-steps
      :rounded="true"
      :has-navigation="false"
      mobile-mode="minimalist"
      >
      <b-step-item step="1" label="ข้อมูลส่วนบุคคล" :clickable="true">
        <h1 class="title has-text-centered">ข้อมูลส่วนบุคคล</h1>
        <b-field label="อายุ">
          <b-numberinput :value="age"></b-numberinput>
        </b-field>
        <b-field label="เพศ">
          <b-radio native-value="ชาย" v-model="gender">
            ชาย
          </b-radio>
          <b-radio native-value="หญิง" v-model="gender">
            หญิง
          </b-radio>
        </b-field>
        <b-field label="อาศัยอยู่ใน">
          <b-radio native-value="เขตเทศบาล" v-model="address">
            เขตเทศบาล
          </b-radio>
          <b-radio native-value="นอกเขตเทศบาล" v-model="address">
            นอกเขตเทศบาล
          </b-radio>
        </b-field>
        <b-field label="สถานภาพสมรส">
          <b-radio native-value="แต่งงานแล้ว" v-model="maritalStatus">แต่งงานแล้ว</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="โสด" v-model="maritalStatus">โสด</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="หย่าร้าง/แยกทาง" v-model="maritalStatus">หย่าร้าง/แยกทาง</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="หม้าย" v-model="maritalStatus">หม้าย</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="อื่น ๆ" v-model="maritalStatus">อื่น ๆ</b-radio>
        </b-field>
        <b-field label="ระดับการศึกษา">
          <b-radio native-value="ไม่ได้รับการศึกษา" v-model="education">
            ไม่ได้รับการศึกษา
          </b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="ประถมศึกษา" v-model="education">
            ประถมศึกษา
          </b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="มัธยมศึกษาตอนต้น" v-model="education">
            มัธยมศึกษาตอนต้น
          </b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="มัธยมศึกษาตอนปลาย" v-model="education">
            มัธยมศึกษาตอนปลาย
          </b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="อนุปริญญา" v-model="education">
            อนุปริญญา
          </b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="ปริญญาตรี" v-model="education">
            ปริญญาตรี
          </b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="สูงกว่าปริญญาตรี" v-model="education">
            สูงกว่าปริญญาตรี
          </b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="อื่น ๆ" v-model="education">
            อื่น ๆ
          </b-radio>
        </b-field>
        <b-field label="การพักอาศัย">
          <b-radio native-value="คนเดียว" v-model="living">คนเดียว</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="2 คนกับคู่ครอง" v-model="living">2 คนกับคู่ครอง</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="ครอบครัว/บุตรหลาน" v-model="living">ครอบครัว/บุตรหลาน</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="อยู่กับผู้ดูแล" v-model="living">อยู่กับผู้ดูแล</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="อื่น ๆ" v-model="living">อื่น ๆ</b-radio>
        </b-field>
        <b-field label="ท่านคิดว่ามีรายได้เพียงพอในครอบครัว">
          <b-radio native-value="เหลือเก็บ" v-model="saving">เหลือเก็บ</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="กำลังพอดี" v-model="saving">กำลังพอดี</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="ไม่เพียงพอ" v-model="saving">ไม่เพียงพอ</b-radio>
        </b-field>
        <b-field label="การเป็นสมาชิกชมรมผู้สูงอายุ / อื่น ๆ">
          <b-radio native-value="เป็น" v-model="club">เป็น</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="ไม่เป็น" v-model="club">ไม่เป็น</b-radio>
        </b-field>
        <b-field label="ความรู้สึกต่อสุขภาพของตนเองโดยรวม">
          <b-radio native-value="ดีมาก" v-model="healthStatus">ดีมาก</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="ดี" v-model="healthStatus">ดี</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="ปานกลาง" v-model="healthStatus">ปานกลาง</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="แย่" v-model="healthStatus">แย่</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="แย่มาก" v-model="healthStatus">แย่มาก</b-radio>
        </b-field>
        <b-field label="การสูบบุหรี่/ยาสูบ">
          <b-radio native-value="ไม่เคยสูบ" v-model="smoking">ไม่เคยสูบ</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="ปัจจุบันยังสูบ" v-model="smoking">ปัจจุบันยังสูบ</b-radio>
        </b-field>
        <div v-if="smoking=='ปัจจุบันยังสูบ'" class="notification is-warning is-light">
          <b-field label="เป็นบางครั้ง">
            <b-input placeholder="จำนวนมวนต่อสัปดาห์"></b-input>
          </b-field>
          <b-field label="สูบทุกวัน">
            <b-input placeholder="จำนวนมวนต่อวัน"></b-input>
          </b-field>
          <br>
        </div>
        <b-field>
          <b-radio native-value="เคยสูบ" v-model="smoking">เคยสูบ (ตอนนี้เลิกแล้ว)</b-radio>
        </b-field>
        <div v-if="smoking=='เคยสูบ'" class="notification is-light is-success">
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
          <b-radio native-value="ไม่เคยดื่ม" v-model="alcohol">ไม่เคยดื่ม</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="ดื่มบางครั้ง" v-model="alcohol">ดื่มบางครั้ง</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="ดื่มทุกวัน" v-model="alcohol">ดื่มทุกวัน</b-radio>
        </b-field>
        <div class="notification is-light" v-if="alcohol=='ดื่มทุกวัน'">
          <b-field label="จำนวนแก้วต่อวัน">
            <b-numberinput></b-numberinput>
          </b-field>
        </div>
        <b-field>
          <b-radio native-value="เคยดื่ม" v-model="alcohol">เคยดื่ม</b-radio>
        </b-field>
        <div class="notification is-light" v-if="alcohol=='เคยดื่ม'">
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
          <b-radio native-value="ไม่มี" v-model="underlyingDis">ไม่มี</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="โรคเบาหวาน" v-model="underlyingDis">โรคเบาหวาน</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="โรคไขมันในเลือดผิดปกติ" v-model="underlyingDis">โรคไขมันในเลือดผิดปกติ</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="โรคหัวใจ" v-model="underlyingDis">โรคหัวใจ</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="โรคปอดอุดกั้นเรื้อรัง" v-model="underlyingDis">โรคปอดอุดกั้นเรื้อรัง</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="อื่น ๆ" v-model="underlyingDis">อื่น ๆ</b-radio>
        </b-field>
        <b-field label="หลักประกันสุขภาพ">
          <b-radio native-value="สิทธิรักษาสุขภาพถ้วนหน้า/30 บาท" v-model="healthCoverage">สิทธิรักษาสุขภาพถ้วนหน้า / 30 บาท</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="สิทธิข้าราชการ" v-model="healthCoverage">สิทธิข้าราชการ</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="สิทธิประกันสังคม" v-model="healthCoverage">สิทธิประกันสังคม</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="อื่น ๆ" v-model="healthCoverage">อื่น ๆ</b-radio>
        </b-field>
        <b-field v-if="healthCoverage=='อื่น ๆ'">
          <b-input placeholder="โปรดระบุ"></b-input>
        </b-field>
        <b-field label="ประวัติการเข้ารับการรักษาเป็นผู้ป่วยในโรงพยาบาลในระยะเวลา 1 ปี ที่ผ่านมา">
          <b-radio native-value="ไม่มี" v-model="hospitalized">ไม่มี</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="มี" v-model="hospitalized">มี</b-radio>
        </b-field>
        <b-field label="ประวัติการพลัดหกล้มในระยะ 1 ปีที่ผ่านมา">
          <b-radio native-value="ไม่มี" v-model="fell">ไม่มี</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="มี" v-model="fell">มี</b-radio>
        </b-field>
        <b-field label="ปัจจุบันท่านทานยากี่ชนิด">
          <b-radio native-value="ไม่มียาประจำ" v-model="medication">ไม่มียาประจำ</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="มี" v-model="medication">มี</b-radio>
        </b-field>
        <b-field v-if="medication=='มี'">
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
          <b-radio native-value="งานบ้าน" v-model="jobAfterRetirement">งานบ้าน</b-radio>
          <b-radio native-value="เกษตรกร" v-model="jobAfterRetirement">เกษตรกร</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="รับจ้างแรงงาน" v-model="jobAfterRetirement">รับจ้างแรงงาน</b-radio>
          <b-radio native-value="รับจ้างสำนักงาน" v-model="jobAfterRetirement">รับจ้างสำนักงาน</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="ข้าราชการ/รัฐวิสาหกิจ" v-model="jobAfterRetirement">ข้าราชการ/รัฐวิสาหกิจ</b-radio>
          <b-radio native-value="การเมือง" v-model="jobAfterRetirement">การเมือง</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="ค้าขาย" v-model="jobAfterRetirement">ค้าขาย</b-radio>
          <b-radio native-value="ธุรกิจบริการ" v-model="jobAfterRetirement">ธุรกิจบริการ</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="อยู่บ้านเฉย ๆ" v-model="jobAfterRetirement">อยู่บ้านเฉย ๆ</b-radio>
          <b-radio native-value="อื่น ๆ" v-model="jobAfterRetirement">อื่น ๆ</b-radio>
        </b-field>
        <b-field label="หลังการเกษียณอายุหรือหลังอายุ 60 ปี">
          <b-radio native-value="งานบ้าน" v-model="jobAfterRetirement">งานบ้าน</b-radio>
          <b-radio native-value="เกษตรกร" v-model="jobAfterRetirement">เกษตรกร</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="รับจ้างแรงงาน" v-model="jobAfterRetirement">รับจ้างแรงงาน</b-radio>
          <b-radio native-value="รับจ้างสำนักงาน" v-model="jobAfterRetirement">รับจ้างสำนักงาน</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="ข้าราชการ/รัฐวิสาหกิจ" v-model="jobAfterRetirement">ข้าราชการ/รัฐวิสาหกิจ</b-radio>
          <b-radio native-value="การเมือง" v-model="jobAfterRetirement">การเมือง</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="ค้าขาย" v-model="jobAfterRetirement">ค้าขาย</b-radio>
          <b-radio native-value="ธุรกิจบริการ" v-model="jobAfterRetirement">ธุรกิจบริการ</b-radio>
        </b-field>
        <b-field>
          <b-radio native-value="อยู่บ้านเฉย ๆ" v-model="jobAfterRetirement">อยู่บ้านเฉย ๆ</b-radio>
          <b-radio native-value="อื่น ๆ" v-model="jobAfterRetirement">อื่น ๆ</b-radio>
        </b-field>
        <b-field label="ยังทำงานอยู่">
          <b-numberinput placeholder="ทำมาแล้วกี่ปี"></b-numberinput>
        </b-field>
        <b-field label="ทำงานอยู่">
          <b-numberinput placeholder="หยุดมาแล้วกี่ปี"></b-numberinput>
        </b-field>
        <b-field label="เพราะ">
          <b-input placeholder="เหตุผลที่หยุดงาน"></b-input>
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
export default {
  name: "Personal",
  data() {
    return {
      age: 65,
      gender: null,
      maritalStatus: null,
      address: null,
      education: null,
      living: null,
      saving: null,
      club: null,
      healthStatus: null,
      smoking: null,
      alcohol: null,
      underlyingDis: null,
      healthCoverage: null,
      hospitalized: null,
      fell: null,
      medication: null,
      jobBeforeRetirement: null,
      jobAfterRetirement: null,
      currentJob: null
    }
  }
}
</script>

<style scoped>

</style>