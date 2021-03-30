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
            <b-checkbox v-model="d1" @input="updateScore($event, 1, 'โรคกล้ามเนื้อหัวใจตาย')">
              โรคกล้ามเนื้อหัวใจตาย</b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox v-model="d2" @input="updateScore($event, 1, 'ภาวะหัวใจล้มเหลว')">ภาวะหัวใจล้มเหลว
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox v-model="d3" @input="updateScore($event, 1, 'โรคหลอดเลือดส่วนปลาย')">โรคหลอดเลือดส่วนปลาย
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox v-model="d4" @input="updateScore($event, 1, 'โรคหลอดเลือดสมอง')">โรคหลอดเลือดสมอง
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox v-model="d5" @input="updateScore($event, 1, 'โรคความจำเสื่อม')">โรคความจำเสื่อม
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox v-model="d6" @input="updateScore($event, 1, 'โรคปอดเรื้อรัง')">โรคปอดเรื้อรัง
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox v-model="d7" @input="updateScore($event, 1, 'โรคของเนื้อเยื่อเกี่ยวพัน')">โรคของเนื้อเยื่อเกี่ยวพัน
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox v-model="d8" @input="updateScore($event, 1, 'โรคแผลในกระเพาะอาหาร')">โรคแผลในกระเพาะอาหาร
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox v-model="d9" @input="updateScore($event, 1, 'โรคตับชนิดไม่รุนแรง')">โรคตับชนิดไม่รุนแรง
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox v-model="d10" @input="updateScore($event, 1, 'โรคเบาหวาน')">โรคเบาหวาน
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox v-model="d11" @input="updateScore($event, 1, 'โรคความดันโลหิตสูง')">โรคความดันโลหิตสูง
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox v-model="d12" @input="updateScore($event, 1, 'ผู้ป่วยที่ได้รับยา warfarin หรือยา coumarin')">
              ผู้ป่วยที่ได้รับยา warfarin หรือยา coumarin
            </b-checkbox>
          </b-field>
        </div>
        <div class="notification">
          <b-field label="ค่าคะแนน 2">
            <b-checkbox v-model="d13" @input="updateScore($event, 2, 'โรคอัมพาต')">โรคอัมพาต
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox v-model="d14" @input="updateScore($event, 2, 'โรคเบาหวานที่มีภาวะแทรกซ้อน')">โรคเบาหวานที่มีภาวะแทรกซ้อน
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox v-model="d15" @input="updateScore($event, 2, 'โรคไตชนิดรุนแรงปานกลาง')">โรคไตชนิดรุนแรงปานกลาง
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox v-model="d16" @input="updateScore($event, 2, 'ผู้ป่วยที่มีก้อนมะเร็งแบบยังไม่แพร่กระจาย')">ผู้ป่วยที่มีก้อนมะเร็งแบบยังไม่แพร่กระจาย
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox v-model="d17" @input="updateScore($event, 2, 'ผู้ป่วยที่มีแผลกดทับ')">ผู้ป่วยที่มีแผลกดทับ
            </b-checkbox>
          </b-field>
        </div>
        <div class="notification">
          <b-field label="ค่าคะแนน 3">
            <b-checkbox v-model="d18" @input="updateScore($event, 3, 'โรคตับแข็งชนิดรุนแรงปานกลาง')">โรคตับแข็งชนิดรุนแรงปานกลาง
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox v-model="d19" @input="updateScore($event, 3, 'โรคตับแข็งชนิดรุนแรงมาก')">โรคตับแข็งชนิดรุนแรงมาก
            </b-checkbox>
          </b-field>
        </div>
        <div class="notification">
          <b-field label="ค่าคะแนน 6">
            <b-checkbox v-model="d20" @input="updateScore($event, 6, 'โรคมะเร็งที่มีการแพร่กระจาย')">โรคมะเร็งที่มีการแพร่กระจาย
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox v-model="d21" @input="updateScore($event, 6, 'โรคเอดส์')">โรคเอดส์
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
    <router-link :to="{ name: 'MiniCog' }" class="button is-success">
        <span class="icon">
          <i class="fas fa-chevron-right"></i>
        </span>
    </router-link>
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
    updateScore: function (event, score, disease) {
      this.$store.commit('updateCharlsonDisease', {disease: disease, score: score})
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
        this.$store.dispatch('saveForm')
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