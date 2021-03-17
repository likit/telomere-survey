<template>
<section class="section">
  <div class="container">
    <b-steps
        :rounded="true"
        :has-navigation="false"
        mobile-mode="minimalist"
    >
      <b-step-item step="2" label="ดัชนีโรคร่วมชาร์ลสัน" :clickable="true">
        <div class="notification">
          <b-field label="ค่าคะแนน 1 คะแนน">
            <b-checkbox @input="updateScore($event, 1, 'โรคกล้ามเนื้อหัวใจตาย')">
              โรคกล้ามเนื้อหัวใจตาย</b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox @input="updateScore($event, 1, 'ภาวะหัวใจล้มเหลว')">ภาวะหัวใจล้มเหลว
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox @input="updateScore($event, 1, 'โรคหลอดเลือดส่วนปลาย')">โรคหลอดเลือดส่วนปลาย
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox @input="updateScore($event, 1, 'โรคหลอดเลือดสมอง')">โรคหลอดเลือดสมอง
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox @input="updateScore($event, 1, 'โรคความจำเสื่อม')">โรคความจำเสื่อม
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox @input="updateScore($event, 1, 'โรคปอดเรื้อรัง')">โรคปอดเรื้อรัง
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox @input="updateScore($event, 1, 'โรคของเนื้อเยื่อเกี่ยวพัน')">โรคของเนื้อเยื่อเกี่ยวพัน
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox @input="updateScore($event, 1, 'โรคแผลในกระเพาะอาหาร')">โรคแผลในกระเพาะอาหาร
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox @input="updateScore($event, 1, 'โรคตับชนิดไม่รุนแรง')">โรคตับชนิดไม่รุนแรง
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox @input="updateScore($event, 1, 'โรคเบาหวาน')">โรคเบาหวาน
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox @input="updateScore($event, 1, 'โรคความดันโลหิตสูง')">โรคความดันโลหิตสูง
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox @input="updateScore($event, 1, 'ผู้ป่วยที่ได้รับยา warfarin หรือยา coumarin')">
              ผู้ป่วยที่ได้รับยา warfarin หรือยา coumarin
            </b-checkbox>
          </b-field>
        </div>
        <div class="notification">
          <b-field label="ค่าคะแนน 2">
            <b-checkbox @input="updateScore($event, 2, 'โรคอัมพาต')">โรคอัมพาต
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox @input="updateScore($event, 2, 'โรคเบาหวานที่มีอาการแทรกซ้อน')">โรคเบาหวานที่มีอาการแทรกซ้อน
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox @input="updateScore($event, 2, 'โรคไตชนิดรุนแรงปานกลาง')">โรคไตชนิดรุนแรงปานกลาง
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox @input="updateScore($event, 2, 'ผู้ป่วยที่มีก้อนมะเร็งแบบยังไม่แพร่กระจาย')">ผู้ป่วยที่มีก้อนมะเร็งแบบยังไม่แพร่กระจาย
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox @input="updateScore($event, 2, 'ผู้ป่วยที่มีแผลกดทับ')">ผู้ป่วยที่มีแผลกดทับ
            </b-checkbox>
          </b-field>
        </div>
        <div class="notification">
          <b-field label="ค่าคะแนน 3">
            <b-checkbox @input="updateScore($event, 3, 'โรคตับแข็งชนิดรุงแรงปานกลาง')">โรคตับแข็งชนิดรุงแรงปานกลาง
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox @input="updateScore($event, 3, 'โรคตับแข็งชนิดรุงแรงมาก')">โรคตับแข็งชนิดรุนแรงมาก
            </b-checkbox>
          </b-field>
        </div>
        <div class="notification">
          <b-field label="ค่าคะแนน 6">
            <b-checkbox @input="updateScore($event, 6, 'โรคมะเร็งที่มีการแพร่กระจาย')">โรคมะเร็งที่มีการแพร่กระจาย
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox @input="updateScore($event, 6, 'โรคเอดส์')">โรคเอดส์
            </b-checkbox>
          </b-field>
        </div>
        <div class="notification is-light is-primary">
          <b-field label="คะแนนรวม">
            <b-input v-model="score"></b-input>
          </b-field>
        </div>
    </b-step-item>
  </b-steps>
  </div>
  <div class="buttons is-centered">
    <button class="button is-light" @click="$router.back()">Back</button>
    <router-link :to="{ name: 'Personal' }" class="button is-success">Next</router-link>
  </div>
</section>
</template>

<script>
export default {
  name: "Charlson",
  data() {
    return {
      score: 0,
      diseases: [],
    }
  },
  methods: {
    updateScore: function (event, score, disease) {
      if (event) {
        this.score += score
        this.diseases.push(disease)
      } else {
        this.score -= score
        let idx = this.diseases.indexOf(disease)
        this.diseases.splice(idx, 1)
      }
    }
  }
}
</script>

<style scoped>

</style>