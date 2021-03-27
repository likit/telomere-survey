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
      <b-step-item step="2" label="ดัชนีโรคร่วมชาร์ลสัน" :clickable="true">
        <div class="notification">
          <b-field label="ค่าคะแนน 1 คะแนน">
            <b-checkbox v-model="d1" @input="updateScore($event, 1, 'โรคกล้ามเนื้อหัวใจตาย', 1)">
              โรคกล้ามเนื้อหัวใจตาย</b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox v-model="d2" @input="updateScore($event, 1, 'ภาวะหัวใจล้มเหลว', 2)">ภาวะหัวใจล้มเหลว
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox v-model="d3" @input="updateScore($event, 1, 'โรคหลอดเลือดส่วนปลาย', 3)">โรคหลอดเลือดส่วนปลาย
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox v-model="d4" @input="updateScore($event, 1, 'โรคหลอดเลือดสมอง', 4)">โรคหลอดเลือดสมอง
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox v-model="d5" @input="updateScore($event, 1, 'โรคความจำเสื่อม', 5)">โรคความจำเสื่อม
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox v-model="d6" @input="updateScore($event, 1, 'โรคปอดเรื้อรัง', 6)">โรคปอดเรื้อรัง
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox v-model="d7" @input="updateScore($event, 1, 'โรคของเนื้อเยื่อเกี่ยวพัน', 7)">โรคของเนื้อเยื่อเกี่ยวพัน
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox v-model="d8" @input="updateScore($event, 1, 'โรคแผลในกระเพาะอาหาร', 8)">โรคแผลในกระเพาะอาหาร
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox v-model="d9" @input="updateScore($event, 1, 'โรคตับชนิดไม่รุนแรง', 9)">โรคตับชนิดไม่รุนแรง
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox v-model="d10" @input="updateScore($event, 1, 'โรคเบาหวาน', 10)">โรคเบาหวาน
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox v-model="d11" @input="updateScore($event, 1, 'โรคความดันโลหิตสูง', 11)">โรคความดันโลหิตสูง
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox v-model="d12" @input="updateScore($event, 1, 'ผู้ป่วยที่ได้รับยา warfarin หรือยา coumarin', 12)">
              ผู้ป่วยที่ได้รับยา warfarin หรือยา coumarin
            </b-checkbox>
          </b-field>
        </div>
        <div class="notification">
          <b-field label="ค่าคะแนน 2">
            <b-checkbox v-model="d13" @input="updateScore($event, 2, 'โรคอัมพาต', 13)">โรคอัมพาต
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox v-model="d14" @input="updateScore($event, 2, 'โรคเบาหวานที่มีภาวะแทรกซ้อน', 14)">โรคเบาหวานที่มีภาวะแทรกซ้อน
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox v-model="d15" @input="updateScore($event, 2, 'โรคไตชนิดรุนแรงปานกลาง', 15)">โรคไตชนิดรุนแรงปานกลาง
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox v-model="d16" @input="updateScore($event, 2, 'ผู้ป่วยที่มีก้อนมะเร็งแบบยังไม่แพร่กระจาย', 16)">ผู้ป่วยที่มีก้อนมะเร็งแบบยังไม่แพร่กระจาย
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox v-model="d17" @input="updateScore($event, 2, 'ผู้ป่วยที่มีแผลกดทับ', 17)">ผู้ป่วยที่มีแผลกดทับ
            </b-checkbox>
          </b-field>
        </div>
        <div class="notification">
          <b-field label="ค่าคะแนน 3">
            <b-checkbox v-model="d18" @input="updateScore($event, 3, 'โรคตับแข็งชนิดรุนแรงปานกลาง', 18)">โรคตับแข็งชนิดรุนแรงปานกลาง
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox v-model="d19" @input="updateScore($event, 3, 'โรคตับแข็งชนิดรุนแรงมาก', 19)">โรคตับแข็งชนิดรุนแรงมาก
            </b-checkbox>
          </b-field>
        </div>
        <div class="notification">
          <b-field label="ค่าคะแนน 6">
            <b-checkbox v-model="d20" @input="updateScore($event, 6, 'โรคมะเร็งที่มีการแพร่กระจาย', 20)">โรคมะเร็งที่มีการแพร่กระจาย
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox v-model="d21" @input="updateScore($event, 6, 'โรคเอดส์', 21)">โรคเอดส์
            </b-checkbox>
          </b-field>
        </div>
        <div class="notification is-light is-primary">
          <b-field label="คะแนนรวม">
            <b-input v-model="form.record.charlson.score"></b-input>
          </b-field>
        </div>
        <div class="notification is-light is-warning">
          คะแนนรวมตั้งแต่ 0-33 คะแนน แบ่งออกเป็น 4 ระดับ
          <ol>
            <li>คะแนนรวม 0 คะแนนเท่ากับ ไม่มีโรคร่วม</li>
            <li>คะแนนรวม 1-2 คะแนนเท่ากับ มีโรคร่วมน้อย</li>
            <li>คะแนนรวม 3-4 คะแนนเท่ากับ มีโรคร่วมปานกลาง</li>
            <li>คะแนนรวม 4 คะแนนขึ้นไปเท่ากับ มีโรคร่วมมาก</li>
          </ol>
        </div>
    </b-step-item>
  </b-steps>
  </div>
  <div class="buttons is-centered">
    <button class="button is-light" @click="$router.back()">Back</button>
    <button class="button is-primary" @click="saveData">
        <span class="icon">
          <i class="far fa-save"></i>
        </span>
      <span>Save</span>
    </button>
    <router-link :to="{ name: 'MiniCog' }" class="button is-success">Next</router-link>
  </div>
</section>
</template>

<script>
import Navigation from "@/components/navigation";
import {mapState} from 'vuex';
export default {
  name: "Charlson",
  components: {Navigation},
  computed: {
    ...mapState(['form']),
  },
  data() {
    return {
      d1: null,
      d2: null,
      d3: null,
      d4: null,
      d5: null,
      d6: null,
      d7: null,
      d8: null,
      d9: null,
      d10: null,
      d11: null,
      d12: null,
      d13: null,
      d14: null,
      d15: null,
      d16: null,
      d17: null,
      d18: null,
      d19: null,
      d20: null,
      d21: null,
    }
  },
  methods: {
    updateScore: function (event, score, disease, code) {
      this.$store.commit('updateCharlsonDisease', {disease: disease, score: score})
      switch (code) {
        case 1:
          if (this.d1) {
            this.d1 = false
          } else {
            this.d1 = true;
          }
          break;
        case 2:
          if (this.d2) {
            this.d2 = false
          } else {
            this.d2 = true;
          }
          break;
        case 3:
          if (this.d3) {
            this.d3 = false
          } else {
            this.d3 = true;
          }
          break;
        case 4:
          if (this.d4) {
            this.d4 = false
          } else {
            this.d4 = true;
          }
          break;
        case 5:
          if (this.d5) {
            this.d5 = false
          } else {
            this.d5 = true;
          }
          break;
        case 6:
          if (this.d6) {
            this.d6 = false
          } else {
            this.d6 = true;
          }
          break;
        case 7:
          if (this.d7) {
            this.d7 = false
          } else {
            this.d7 = true;
          }
          break;
        case 8:
          if (this.d8) {
            this.d8 = false
          } else {
            this.d8 = true;
          }
          break;
        case 9:
          if (this.d9) {
            this.d9 = false
          } else {
            this.d9 = true;
          }
          break;
        case 10:
          if (this.d10) {
            this.d10 = false
          } else {
            this.d10 = true;
          }
          break;
        case 11:
          if (this.d11) {
            this.d11 = false
          } else {
            this.d11 = true;
          }
          break;
        case 12:
          if (this.d12) {
            this.d12 = false
          } else {
            this.d12 = true;
          }
          break;
        case 13:
          if (this.d13) {
            this.d13 = false
          } else {
            this.d13 = true;
          }
          break;
        case 14:
          if (this.d14) {
            this.d14 = false
          } else {
            this.d14 = true;
          }
          break;
        case 15:
          if (this.d15) {
            this.d15 = false
          } else {
            this.d15 = true;
          }
          break;
        case 16:
          if (this.d16) {
            this.d16 = false
          } else {
            this.d16 = true;
          }
          break;
        case 17:
          if (this.d17) {
            this.d17 = false
          } else {
            this.d17 = true;
          }
          break;
        case 18:
          if (this.d18) {
            this.d18 = false
          } else {
            this.d18 = true;
          }
          break;
        case 19:
          if (this.d19) {
            this.d19 = false
          } else {
            this.d19 = true;
          }
          break;
        case 20:
          if (this.d20) {
            this.d20 = false
          } else {
            this.d20 = true;
          }
          break;
        case 21:
          if (this.d21) {
            this.d21 = false
          } else {
            this.d21 = true;
          }
          break;
      }
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
          self.$buefy.dialog.alert({
            title: 'Login Successful',
            message: 'บันทึกข้อมูลเรียบร้อยแล้ว',
            type: 'is-success',
            hasIcon: true,
            icon: 'check-circle',
            iconPack: 'fa',
            ariaRole: 'alertdialog',
            ariaModal: true,
          })
        }).catch(() => {
          self.$buefy.dialog.alert({
            title: 'Error!',
            message: 'โปรแกรมไม่สามารถบันทึกข้อมูลได้ โปรดลองใหม่อีกครั้ง',
            type: 'is-danger',
            hasIcon: true,
            icon: 'times-circle',
            iconPack: 'fa',
            ariaRole: 'alertdialog',
            ariaModal: true
          })
        })
      }
    }
  },
  mounted() {
    this.form.record.charlson.diseases.forEach((d) => {
      switch (d) {
        case "โรคกล้ามเนื้อหัวใจตาย":
          this.d1 = true;
          break;
        case "ภาวะหัวใจล้มเหลว":
          this.d2 = true;
          break;
        case "โรคหลอดเลือดส่วนปลาย":
          this.d3 = true;
          break;
        case "โรคหลอดเลือดสมอง":
          this.d4 = true;
          break;
        case "โรคความจำเสื่อม":
          this.d5 = true;
          break;
        case "โรคปอดเรื้อรัง":
          this.d6 = true;
          break;
        case "โรคของเนื้อเยื่อเกี่ยวพัน":
          this.d7 = true;
          break;
        case "โรคแผลในกระเพาะอาหาร":
          this.d8 = true;
          break;
        case "โรคตับชนิดไม่รุนแรง":
          this.d9 = true;
          break;
        case "โรคเบาหวาน":
          this.d10 = true;
          break;
        case "โรคความดันโลหิตสูง":
          this.d11 = true;
          break;
        case "ผู้ป่วยที่ได้รับยา warfarin หรือยา coumarin":
          this.d12 = true;
          break;
        case "โรคอัมพาต":
          this.d13 = true;
          break;
        case "โรคเบาหวานที่มีภาวะแทรกซ้อน":
          this.d14 = true;
          break;
        case "โรคไตชนิดรุนแรงปานกลาง":
          this.d15 = true;
          break;
        case "ผู้ป่วยที่มีก้อนมะเร็งแบบยังไม่แพร่กระจาย":
          this.d16 = true;
          break;
        case "ผู้ป่วยที่มีแผลกดทับ":
          this.d17 = true;
          break;
        case "โรคตับแข็งชนิดรุนแรงปานกลาง":
          this.d18 = true;
          break;
        case "โรคตับแข็งชนิดรุนแรงมาก":
          this.d19 = true;
          break;
        case "โรคมะเร็งที่มีการแพร่กระจาย":
          this.d20 = true;
          break;
        case "โรคเอดส์":
          this.d21 = true;
          break;
      }
    })
  }
}
</script>

<style scoped>

</style>