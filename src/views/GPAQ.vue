<template>
<section class="section">
  <div class="container">
    <b-steps
        :rounded="true"
        :has-navigation="false"
        mobile-mode="minimalist"
    >
      <b-step-item step="11" label="กิจกรรมทางกาย GPAQ" :clickable="true">
        <div class="notification is-light is-primary label">1. กิจกรรมทางกายภาพในการทำงาน</div>
        <span class="tag is-warning">P1</span>
        <b-field>
          <b-checkbox v-model="one">ท่านมีกิจกรรมทางกายระดับหนักซึ่งทำให้หายใจแรงและเร็วกว่าปกติมากหรือหอบติดต่อกัน
          เป็นระยะเวลาอย่างน้อย 10 นาที เช่นการยกหรือแบกของหนัก ๆ การขุดดิน งานก่อสร้าง</b-checkbox>
        </b-field>
        <p class="help is-info">ถ้าไม่ใช่ให้ข้ามไปตอบข้อ P4</p>
        <hr>
        <span class="tag is-warning">P2</span>
        <b-field label="โดยปกติท่านมีกิจกรรมทางกายระดับหนักในแต่ละสัปดาห์จำนวนกี่วัน">
          <b-numberinput></b-numberinput>
        </b-field>
        <hr>
        <span class="tag is-warning">P3</span>
        <b-field label="โดยปกติที่ท่านมีกิจกรรมทางกายระดับหนักนั้น ในแต่ละวันท่านทำเป็นระยะเวลานานเท่าใด นึกถึงเฉพาะงานที่ติดต่อกันเกินสิบนาที">
          <b-numberinput placeholder="ชั่วโมง"></b-numberinput>
        </b-field>
        <b-field>
          <b-numberinput placeholder="นาที"></b-numberinput>
        </b-field>
        <hr>
        <span class="tag is-warning">P4</span>
        <b-field label="ท่านมีกิจกรรมทางกายระดับปานกลาง ซึ่งทำให้หายใจเร็วขึ้นพอควรไม่ถึงกับหอบติดต่อกันเป็นระยะเวลาอย่างน้อยสิบนาที เช่น การก้าวเดินเร็ว ๆ หรือการยกถือของเบา ๆ">
          <b-checkbox v-model="one">ใช่</b-checkbox>
        </b-field>
        <p class="help is-info">ถ้าไม่ใช่ให้ข้ามไปตอบข้อ P7</p>
        <hr>
        <span class="tag is-warning">P5</span>
        <b-field label="โดยปกติท่านมีกิจกรรมทางกายระดับปานกลางในแต่ละสัปดาห์จำนวนกี่วัน">
          <b-numberinput></b-numberinput>
        </b-field>
        <hr>
        <span class="tag is-warning">P6</span>
        <b-field label="โดยปกติที่ท่านมีกิจกรรมทางกายระดับปานกลางนั้น ในแต่ละวันท่านทำเป็นระยะเวลานานเท่าใด นึกถึงเฉพาะงานที่ติดต่อกันเกินสิบนาที">
          <b-numberinput placeholder="ชั่วโมง"></b-numberinput>
        </b-field>
        <b-field>
          <b-numberinput placeholder="นาที"></b-numberinput>
        </b-field>
        <div class="notification is-light is-primary label">2. กิจกรรมทางกายภาพในการเดินทางจากที่หนึ่งไปยังอีกที่หนึ่ง</div>
        <hr>
        <span class="tag is-warning">P7</span>
        <b-field>
          <b-checkbox v-model="one">ท่านเดินหรือถีบจักรยานจากที่หนึ่งไปยังอีกที่หนึ่งติดต่อกันเป็นระยะเวลาอย่างน้อย 10 นาที</b-checkbox>
        </b-field>
        <hr>
        <span class="tag is-warning">P8</span>
        <b-field label="โดยปกติท่านเดินหรือถีบจักรยานจากที่หนึ่งไปยังอีกที่หนึ่งใช้เวลาอย่างน้อยสิบนาทีในแต่ละสัปดาห์จำนวนกี่วัน">
          <b-numberinput placeholder="วันต่อสัปดาห์"></b-numberinput>
        </b-field>
        <hr>
        <span class="tag is-warning">P9</span>
        <b-field label="โดยปกติที่ท่านเดินหรือถีบจักรยานจากที่หนึ่งไปยังอีกที่หนึ่งติดต่อกันเป็นระยะเวลาอย่างน้อยสิบนาทีเป็นระยะเวลานานเท่าใด นึกถึงเฉพาะงานที่ติดต่อกันเกินสิบนาที">
          <b-numberinput placeholder="ชั่วโมง"></b-numberinput>
        </b-field>
        <b-field>
          <b-numberinput placeholder="นาที"></b-numberinput>
        </b-field>
        <hr>
        <div class="notification is-light is-primary label">3. กิจกรรมทางกายภาพที่ทำในเวลาว่างเพื่อการพักผ่อนหย่อนใจ</div>
        <span class="tag is-warning">P10</span>
        <b-field>
          <b-checkbox>ท่านเล่นกีฬา ออกกำลังกายหรือทำกิจกรรมนันทนาการระดับหนัก ซึ่งทำให้หัวใจเต้นเร็วกว่าปกติมาก หรือหอบติดต่อกันเป็นระยะเวลาอย่างน้อยสิบนาที เช่น วิ่ง หรือเล่นฟุตบอล</b-checkbox>
        </b-field>
        <span class="tag is-warning">P11</span>
        <b-field label="โดยปกติท่านเล่นกีฬา ออกกำลังกายหรือทำกิจกรรมนันทราการระดับหนัก ในแต่ละสัปดาห์จำนวนกี่วัน">
          <b-numberinput></b-numberinput>
        </b-field>
        <hr>
        <span class="tag is-warning">P12</span>
        <b-field label="ท่านเล่นกีฬา ออกกำลังกายหรือทำกิจกรรมนันทนาการระดับหนักนั้น ในแต่ละวันท่านใช้ระยะเวลานานเท่าใด">
          <b-numberinput placeholder="ชั่วโมง"></b-numberinput>
        </b-field>
        <b-field>
          <b-numberinput placeholder="นาที"></b-numberinput>
        </b-field>
        <hr>
        <span class="tag is-warning">P13</span>
        <b-field>
          <b-checkbox>ท่านเล่นกีฬา ออกกำลังกายหรือทำกิจกรรมนันทนาการระดับปานกลาง ซึ่งทำให้หัวใจเต้นเร็วพอควร ไม่ถึงกับหอบติดต่อกันเป็นระยะเวลาอย่างน้อยสิบนาที เช่น วิ่ง หรือเล่นฟุตบอล</b-checkbox>
        </b-field>
        <hr>
        <span class="tag is-warning">P14</span>
        <b-field label="โดยปกติท่านเล่นกีฬา ออกกำลังกายหรือทำกิจกรรมนันทราการระดับปานกลาง ในแต่ละสัปดาห์จำนวนกี่วัน">
          <b-numberinput></b-numberinput>
        </b-field>
        <hr>
        <span class="tag is-warning">P15</span>
        <b-field label="ท่านเล่นกีฬา ออกกำลังกายหรือทำกิจกรรมนันทนาการระดับปานกลาง ในแต่ละวันท่านใช้ระยะเวลานานเท่าใด">
          <b-numberinput placeholder="ชั่วโมง"></b-numberinput>
        </b-field>
        <b-field>
          <b-numberinput placeholder="นาที"></b-numberinput>
        </b-field>
        <div class="notification is-light is-primary label">4. พฤติกรรมนั่ง ๆ นอน ๆ</div>
        <b-field label="ท่านนั่งหรือเอนกายเฉย ๆ ติดต่อกันนานเกิน 2 ชั่วโมงหรือไม่อย่างไร">
          <b-radio>1. นั่งหรือเอนกายเฉย ๆ นานเกิน 2 ชั่วโมงทุกวัน</b-radio>
          <span class="tag is-warning">P16</span>
        </b-field>
        <b-field>
          <b-radio>2. นั่งหรือเอนกายเฉย ๆ นานเกิน 2 ชั่วโมงบางวัน</b-radio>
          <span class="tag is-warning">P17</span>
        </b-field>
        <b-field>
          <b-radio>3. ไม่นั่งหรือเอนกายเฉย ๆ นานเกิน 2 ชั่วโมงทุกวัน</b-radio>
          <span class="tag is-warning">P18</span>
        </b-field>
      </b-step-item>
    </b-steps>
    <div class="buttons is-centered">
      <button class="button is-light" @click="$router.back()">Back</button>
      <router-link :to="{ name: 'Evaluation' }" class="button is-success">Next</router-link>
    </div>
  </div>
</section>

</template>

<script>
export default {
  name: "ADL",
  data() {
    return {
      one: "1",
      two: "1",
      three: "1",
      four: "1",
      five: "1",
    }
  },
  computed: {
    score: function() {
      return parseInt(this.one) + parseInt(this.two) +
          parseInt(this.three) + parseInt(this.four) +
          parseInt(this.five)
    }
  }
}
</script>

<style scoped>

</style>