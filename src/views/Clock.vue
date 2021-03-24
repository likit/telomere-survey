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
            <b-upload v-model="file" class="file-label">
              <span class="file-cta">
                  <b-icon class="file-icon" icon="upload"></b-icon>
                  <span class="file-label">Click to upload</span>
              </span>
              <span class="file-name" v-if="file">
                  {{ file.name }}
              </span>
            </b-upload>
          </b-field>
          <b-field label="รวมคะแนน">
            <b-numberinput v-model="score"></b-numberinput>
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
export default {
  name: "Clock",
  components: {Navigation},
  data() {
    return {
      file: null,
      score: 0
    }
  }
}
</script>

<style scoped>

</style>