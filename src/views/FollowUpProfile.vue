<template>
  <section class="section">
    <div class="columns">
      <div class="column">
        <h1 class="title has-text-centered">Profile</h1>
        <b-field label="Name">
          <b-input v-model="displayName"></b-input>
        </b-field>
        <div class="buttons is-centered">
          <b-button @click="$router.back()" type="is-light">Back</b-button>
          <b-button @click="saveProfile" type="is-success">Save</b-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { auth } from '../firebase'

export default {
  name: "Profile",
  data() {
    return {
      displayName: '',
      user: null
    }
  },
  mounted() {
    this.user = auth.currentUser;
    if (this.user == null) {
      this.$router.push('/login')
    } else {
      this.displayName = this.user.displayName
    }
  },
  methods: {
    saveProfile: function() {
      let self = this
      self.user.updateProfile({
        displayName: self.displayName,
      }).then(()=>{
        this.$buefy.toast.open({
          message: 'Saved successfully',
          type: 'is-success'
        })
      }).catch(() => {
        this.$buefy.toast.open({
          message: 'Failed to save the data',
          type: 'is-danger'
        })
      })
    }
  }
}
</script>

<style scoped>

</style>