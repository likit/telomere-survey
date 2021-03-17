<template>
<section class="section">
  <div class="container">
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
    <br>
    <div class="buttons is-centered">
      <button class="button is-light" @click="$router.back()">Back</button>
      <router-link :to="{ name: 'Clock' }" class="button is-success">Next</router-link>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "Clock",
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