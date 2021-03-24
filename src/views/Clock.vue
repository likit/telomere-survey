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
      <b-step-item step="4" label="วาดรูปหน้าปัดนาฬิกา" :clickable="true">
        <div class="notification">
          <label class="label">
            ให้ผู้ถูกทดสอบวาดรูปนาฬิกาโดยใส่ตัวเลขและเข็มนาฬิกาที่เวลา 11.10 น.
          </label>
          <br>
          <b-field class="file is-primary" :class="{'has-name': !!file}">
            <b-upload v-model="form.record.clock.file" class="file-label">
              <span class="file-cta">
                  <b-icon class="file-icon" icon="upload"></b-icon>
                  <span class="file-label">Click to upload</span>
              </span>
              <span class="file-name" v-if="form.record.clock.file">
                  {{ form.record.clock.file.name }}
              </span>
            </b-upload>
          </b-field>
          <b-field label="รวมคะแนน">
            <b-numberinput v-model="form.record.clock.score"></b-numberinput>
          </b-field>
        </div>
      <div class="buttons is-centered">
        <button class="button is-light" @click="$router.back()">Back</button>
        <router-link :to="{ name: 'MNA' }" class="button is-success">Next</router-link>
      </div>
      </b-step-item>
    </b-steps>
  </div>
</section>
</template>

<script>
import Navigation from "@/components/navigation";
import {mapState} from "vuex"

export default {
  name: "Clock",
  components: {Navigation},
  computed: {
    ...mapState(['form'])
  }
}
</script>

<style scoped>

</style>