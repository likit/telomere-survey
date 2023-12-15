<template>
  <section class="section">
    <Navigation></Navigation>
    <br>
    <div class="container">
      <div class="columns">
        <div class="column is-two-thirds is-offset-2">
          <h1 class="title has-text-centered">แบบสอบถามข้อมูลทั่วไป</h1>
          <b-field label="ชื่อ">
            <b-input placeholder="ชื่อ" v-model="form.record.personal.firstname"></b-input>
          </b-field>
          <b-field label="นามสกุล">
            <b-input placeholder="นามสกุล" v-model="form.record.personal.lastname"></b-input>
          </b-field>
          <b-field label="หมายเลขบัตรประชาชน">
            <b-input placeholder="หมายเลขบัตรประชาชน" v-model="form.record.personal.id"></b-input>
          </b-field>
          <b-field label="อายุ">
            <b-numberinput v-model="form.record.personal.age"></b-numberinput>
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
            <b-radio native-value="หย่าร้าง/แยกทาง" v-model="form.record.personal.maritalStatus">หย่าร้าง/แยกทาง
            </b-radio>
          </b-field>
          <b-field>
            <b-radio native-value="หม้าย" v-model="form.record.personal.maritalStatus">หม้าย</b-radio>
          </b-field>
          <b-field>
            <b-radio native-value="อื่น ๆ" v-model="form.record.personal.maritalStatus">อื่น ๆ</b-radio>
          </b-field>
          <b-field v-if="form.record.personal.maritalStatus=='อื่น ๆ'">
            <b-input placeholder="โปรดระบุ" v-model="form.record.personal.maritalStatusOther"></b-input>
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
          <b-field v-if="form.record.personal.education=='อื่น ๆ'">
            <b-input placeholder="โปรดระบุ" v-model="form.record.personal.educationOther"></b-input>
          </b-field>
          <b-field label="จำนวนปีที่ได้รับการศึกษา"
                   v-if="form.record.personal.education != 'ไม่ได้รับการศึกษา' && form.record.personal.education">
            <b-input v-model="form.record.personal.educationYear"></b-input>
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
          <b-field v-if="form.record.personal.living=='อื่น ๆ'">
            <b-input placeholder="โปรดระบุ" v-model="form.record.personal.livingOther"></b-input>
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
              <b-input placeholder="จำนวนมวนต่อสัปดาห์" v-model="form.record.personal.currentSmokingPerWeek"></b-input>
            </b-field>
            <b-field label="สูบทุกวัน">
              <b-input placeholder="จำนวนมวนต่อวัน" v-model="form.record.personal.currentSmokingPerDay"></b-input>
            </b-field>
            <br>
          </div>
          <b-field>
            <b-radio native-value="เคยสูบ" v-model="form.record.personal.smoking">เคยสูบ (ตอนนี้เลิกแล้ว)</b-radio>
          </b-field>
          <div v-if="form.record.personal.smoking=='เคยสูบ'" class="notification is-light is-success">
            <b-field label="จำนวนมวนที่เคยสูบ">
              <b-input placeholder="จำนวนมวนต่อวัน" v-model="form.record.personal.smokingPerDay"></b-input>
            </b-field>
            <b-field label="เป็นเวลา (ปี)">
              <b-numberinput v-model="form.record.personal.smokingYears"></b-numberinput>
            </b-field>
            <b-field label="เลิกมาเป็นเวลา (ปี)">
              <b-numberinput v-model="form.record.personal.quitSmokingYears"></b-numberinput>
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
              <b-numberinput v-model="form.record.personal.currentDrinkPerDay"></b-numberinput>
            </b-field>
            <b-field label="จำนวนขวดต่อวัน">
              <b-numberinput v-model="form.record.personal.currentDrinkPerDayBottle"></b-numberinput>
            </b-field>
          </div>
          <b-field>
            <b-radio native-value="เคยดื่ม" v-model="form.record.personal.alcohol">เคยดื่ม</b-radio>
          </b-field>
          <div class="notification is-light" v-if="form.record.personal.alcohol=='เคยดื่ม'">
            <b-field label="จำนวนแก้วต่อวัน">
              <b-numberinput v-model="form.record.personal.drinkPerDay"></b-numberinput>
            </b-field>
            <b-field label="จำนวนขวดต่อวัน">
              <b-numberinput v-model="form.record.personal.drinkPerDayBottle"></b-numberinput>
            </b-field>
            <b-field label="เป็นเวลา (ปี)">
              <b-numberinput v-model="form.record.personal.drinkYears"></b-numberinput>
            </b-field>
            <b-field label="เลิกมา (ปี)">
              <b-numberinput v-model="form.record.personal.quitDrinkYears"></b-numberinput>
            </b-field>
          </div>
          <b-field label="โรคประจำตัว">
            <b-checkbox @input="updateDisease($event, 'ไม่มี')" v-model="d0">ไม่มี</b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox @input="updateDisease($event, 'โรคเบาหวาน')" v-model="d1">โรคเบาหวาน</b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox @input="updateDisease($event, 'โรคไขมันในเลือดผิดปกติ')" v-model="d2">โรคไขมันในเลือดผิดปกติ
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox @input="updateDisease($event, 'โรคหัวใจ')" v-model="d3">โรคหัวใจ</b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox @input="updateDisease($event, 'โรคความดันโลหิตสูง')" v-model="d4">ความดันโลหิตสูง</b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox @input="updateDisease($event, 'โรคปอดอุดกั้นเรื้อรัง')" v-model="d5">โรคปอดอุดกั้นเรื้อรัง
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox @input="updateDisease($event, 'โรคมะเร็ง')" v-model="d7">โรคมะเร็ง</b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox @input="updateDisease($event, 'อื่น ๆ')" v-model="d6">อื่น ๆ</b-checkbox>
          </b-field>
          <b-field label="โปรดระบุ" v-if="d6 == true">
            <b-input v-model="form.record.personal.underlyingDisOther" placeholder="โปรดระบุ"></b-input>
          </b-field>
          <b-field label="หลักประกันสุขภาพ">
            <b-checkbox @input="updateHealthCoverage($event, 'สิทธิรักษาสุขภาพถ้วนหน้า/30 บาท')" v-model="c1">
              สิทธิรักษาสุขภาพถ้วนหน้า / 30 บาท
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox @input="updateHealthCoverage($event, 'สิทธิข้าราชการ')" v-model="c2">สิทธิข้าราชการ</b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox @input="updateHealthCoverage($event, 'สิทธิประกันสังคม')" v-model="c3">สิทธิประกันสังคม
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox @input="updateHealthCoverage($event, 'อื่น ๆ')" v-model="c4">อื่น ๆ</b-checkbox>
          </b-field>
          <b-field v-if="c4 === true">
            <b-input placeholder="โปรดระบุ" v-model="form.record.personal.healthCoverageOther"></b-input>
          </b-field>
          <b-field label="ประวัติการเข้ารับการรักษาเป็นผู้ป่วยในโรงพยาบาลในระยะเวลา 1 ปี ที่ผ่านมา">
            <b-radio native-value="ไม่มี" v-model="form.record.personal.hospitalized">ไม่มี</b-radio>
          </b-field>
          <b-field>
            <b-radio native-value="มี" v-model="form.record.personal.hospitalized">มี</b-radio>
          </b-field>
          <b-field label="รายละเอียดเข้ารับการรักษา">
            <b-input v-if="form.record.personal.hospitalized === 'มี'"
                     v-model="form.record.personal.hospitalizationDetail"></b-input>
          </b-field>
          <b-field label="ประวัติการพลัดหกล้มในระยะ 0-6 เดือนที่ผ่านมา">
            <b-radio native-value="ไม่มี" v-model="form.record.personal.fell0">ไม่มี</b-radio>
          </b-field>
          <b-field>
            <b-radio native-value="มี" v-model="form.record.personal.fell0">มี</b-radio>
          </b-field>
          <b-field label="ประวัติการพลัดหกล้มในระยะ 6 เดือนถึง 1 ปีที่ผ่านมา">
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
            <b-numberinput placeholder="จำนวนกี่ชนิด" v-model="form.record.personal.medicationTypes"></b-numberinput>
          </b-field>
          <b-field label="น้ำหนัก">
            <b-field label="1 ปีย้อนหลัง">
              <b-numberinput placeholder="1 ปีย้อนหลัง" v-model="form.record.personal.pastYearWeight"></b-numberinput>
            </b-field>
          </b-field>
          <b-field label="ปัจจุบัน">
            <b-numberinput placeholder="ปัจจุบัน" v-model="form.record.personal.weight"></b-numberinput>
          </b-field>
          <label class="label">ประวัติการทำงาน</label>
          <b-field label="ก่อนการเกษียณอายุหรือก่อนอายุ 60 ปี">
            <b-radio native-value="งานบ้าน" v-model="form.record.personal.job.jobBeforeRetirement">งานบ้าน</b-radio>
            <b-radio native-value="เกษตรกร" v-model="form.record.personal.job.jobBeforeRetirement">เกษตรกร</b-radio>
          </b-field>
          <b-field>
            <b-radio native-value="รับจ้างแรงงาน" v-model="form.record.personal.job.jobBeforeRetirement">รับจ้างแรงงาน
            </b-radio>
            <b-radio native-value="รับจ้างสำนักงาน" v-model="form.record.personal.job.jobBeforeRetirement">
              รับจ้างสำนักงาน
            </b-radio>
          </b-field>
          <b-field>
            <b-radio native-value="ข้าราชการ/รัฐวิสาหกิจ" v-model="form.record.personal.job.jobBeforeRetirement">
              ข้าราชการ/รัฐวิสาหกิจ
            </b-radio>
            <b-radio native-value="การเมือง" v-model="form.record.personal.job.jobBeforeRetirement">การเมือง</b-radio>
          </b-field>
          <b-field>
            <b-radio native-value="ค้าขาย" v-model="form.record.personal.job.jobBeforeRetirement">ค้าขาย</b-radio>
            <b-radio native-value="ธุรกิจบริการ" v-model="form.record.personal.job.jobBeforeRetirement">ธุรกิจบริการ
            </b-radio>
          </b-field>
          <b-field>
            <b-radio native-value="อยู่บ้านเฉย ๆ" v-model="form.record.personal.job.jobBeforeRetirement">อยู่บ้านเฉย ๆ
            </b-radio>
            <b-radio native-value="อื่น ๆ" v-model="form.record.personal.job.jobBeforeRetirement">อื่น ๆ</b-radio>
          </b-field>
          <b-field label="งานอื่น ๆ" v-if="form.record.personal.job.jobBeforeRetirement=='อื่น ๆ'">
            <b-input v-model="form.record.personal.job.jobBeforeRetirementOther"></b-input>
          </b-field>
          <b-field label="หลังการเกษียณอายุหรือหลังอายุ 60 ปี">
            <b-radio native-value="งานบ้าน" v-model="form.record.personal.job.jobAfterRetirement">งานบ้าน</b-radio>
            <b-radio native-value="เกษตรกร" v-model="form.record.personal.job.jobAfterRetirement">เกษตรกร</b-radio>
          </b-field>
          <b-field>
            <b-radio native-value="รับจ้างแรงงาน" v-model="form.record.personal.job.jobAfterRetirement">รับจ้างแรงงาน
            </b-radio>
            <b-radio native-value="รับจ้างสำนักงาน" v-model="form.record.personal.job.jobAfterRetirement">
              รับจ้างสำนักงาน
            </b-radio>
          </b-field>
          <b-field>
            <b-radio native-value="ข้าราชการ/รัฐวิสาหกิจ" v-model="form.record.personal.job.jobAfterRetirement">
              ข้าราชการ/รัฐวิสาหกิจ
            </b-radio>
            <b-radio native-value="การเมือง" v-model="form.record.personal.job.jobAfterRetirement">การเมือง</b-radio>
          </b-field>
          <b-field>
            <b-radio native-value="ค้าขาย" v-model="form.record.personal.job.jobAfterRetirement">ค้าขาย</b-radio>
            <b-radio native-value="ธุรกิจบริการ" v-model="form.record.personal.job.jobAfterRetirement">ธุรกิจบริการ
            </b-radio>
          </b-field>
          <b-field>
            <b-radio native-value="อยู่บ้านเฉย ๆ" v-model="form.record.personal.job.jobAfterRetirement">อยู่บ้านเฉย ๆ
            </b-radio>
            <b-radio native-value="อื่น ๆ" v-model="form.record.personal.job.jobAfterRetirement">อื่น ๆ</b-radio>
          </b-field>
          <b-field label="งานอื่น ๆ" v-if="form.record.personal.job.jobAfterRetirement=='อื่น ๆ'">
            <b-input v-model="form.record.personal.job.jobAfterRetirementOther"></b-input>
          </b-field>
          <div v-if="form.record.personal.job.jobAfterRetirement!=='อื่น ๆ'">
            <b-field label="ยังทำงานอยู่">
              <b-field label="ทำมาแล้วกี่ปี">
                <b-numberinput placeholder="ทำมาแล้วกี่ปี"
                               v-model="form.record.personal.job.currentJob.duration"></b-numberinput>
              </b-field>
            </b-field>
            <b-field label="ทำงานอยู่">
              <b-field label="หยุดมาแล้วกี่ปี">
                <b-numberinput placeholder="หยุดมาแล้วกี่ปี"
                               v-model="form.record.personal.job.currentJob.quit"></b-numberinput>
              </b-field>
            </b-field>
            <b-field label="เพราะ">
              <b-input placeholder="เหตุผลที่หยุดงาน"
                       v-model="form.record.personal.job.currentJob.quitReason"></b-input>
            </b-field>
          </div>
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
            <router-link :to="{name: 'FRAILScale'}" class="button is-success">
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
import {mapState} from 'vuex';

export default {
  name: "Personal",
  components: {Navigation},
  data() {
    return {
      d0: null,
      d1: null,
      d2: null,
      d3: null,
      d4: null,
      d5: null,
      d6: null,
      d7: null,
      c1: null,
      c2: null,
      c3: null,
      c4: null,
    }
  },
  computed: {
    ...mapState(['form'])
  },
  methods: {
    updateDisease: function (event, disease) {
      this.$store.commit('updateUnderlyingDisease', disease)
    },
    updateHealthCoverage: function (event, coverage) {
      this.$store.commit('updateHealthCoverages', coverage)
    },
    saveData() {
      let self = this
      if (self.form.record.code == null) {
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
        if (self.form.record.personal.job.jobAfterRetirement == 'อื่น ๆ') {
          self.form.record.personal.job.currentJob.duration = null
          self.form.record.personal.job.currentJob.quit = null
          self.form.record.personal.job.currentJob.quitReason = null
        } else {
          self.form.record.personal.job.jobAfterRetirementOther = null
        }
        if (self.form.record.personal.maritalStatus !== 'อื่น ๆ') {
          self.form.record.personal.maritalStatusOther = null
        }
        if (self.form.record.personal.education !== 'อื่น ๆ') {
          self.form.record.personal.educationOther = null
        }
        if (self.form.record.personal.living !== 'อื่น ๆ') {
          self.form.record.personal.livingOther = null
        }
        if (self.form.record.personal.underlyingDis !== 'อื่น ๆ') {
          self.form.record.personal.underlyingDisOther = null
        }
        if (self.form.record.personal.medication !== 'มี') {
          self.form.record.personal.medicationTypes = null
        }
        self.$store.dispatch('saveForm')
      }
    }
  },
  mounted() {
    if (this.form.record.personal.healthCoverage != null &&
        this.form.record.personal.healthCoverages.indexOf(this.form.record.personal.healthCoverage) == -1) {
      this.form.record.personal.healthCoverages.push(this.form.record.personal.healthCoverage)
      this.form.record.personal.healthCoverage = null
    }
    this.form.record.personal.healthCoverages.forEach((c) => {
      switch (c) {
        case "สิทธิรักษาสุขภาพถ้วนหน้า/30 บาท":
          this.c1 = true
          break;
        case "สิทธิข้าราชการ":
          this.c2 = true
          break;
        case "สิทธิประกันสังคม":
          this.c3 = true
          break;
        case "อื่น ๆ":
          this.c4 = true
          break;
      }
    })
    if (this.form.record.personal.underlyingDis != null &&
        this.form.record.personal.underlyingDiseases.indexOf(this.form.record.personal.underlyingDis) == -1) {
      this.form.record.personal.underlyingDiseases.push(this.form.record.personal.underlyingDis)
      this.form.record.personal.underlyingDis = null
    }
    this.form.record.personal.underlyingDiseases.forEach((d) => {
      switch (d) {
        case "ไม่มี":
          this.d0 = true;
          break;
        case "โรคเบาหวาน":
          this.d1 = true;
          break;
        case "โรคไขมันในเลือดผิดปกติ":
          this.d2 = true;
          break;
        case "โรคหัวใจ":
          this.d3 = true;
          break;
        case "โรคความดันโลหิตสูง":
          this.d4 = true;
          break;
        case "โรคปอดอุดกั้นเรื้อรัง":
          this.d5 = true;
          break;
        case "โรคมะเร็ง":
          this.d7 = true;
          break;
        case "อื่น ๆ":
          this.d6 = true;
          break;
      }
    })
  },
  watch: {
    d6: function (newValue) {
      if (newValue != true) {
        this.form.record.personal.underlyingDisOther = null
      }
    },
    c4: function (newValue) {
      if (newValue != true) {
        this.form.record.personal.healthCoverageOther = null
      }
    },
  }
}
</script>

<style scoped>

</style>