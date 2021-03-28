<template>
<section class="section">
  <div class="container">
    <div class="columns">
      <div class="column is-one-third is-offset-4 has-text-centered">
        <h4 class="title">Sign In</h4>
        <div class="card">
          <div class="card-content">
            <b-field label="Email">
              <b-input type="email" icon="email" v-model="email"></b-input>
            </b-field>
            <b-field label="Password">
              <b-input type="password" icon="lock"
                       v-model="password" password-reveal></b-input>
            </b-field>
            <div class="field">
              <div class="buttons is-centered">
                <button class="button is-link is-medium" :disabled="isFormEmpty" @click="login">Submit</button>
                <button class="button is-danger is-medium">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import { auth } from "../firebase";

export default {
  name: "Login",
  data() {
    return {
      password: '',
      email: ''
    }
  },
  computed: {
    isFormEmpty: function() {
      return this.password === '' || this.email === '';
    }
  },
  methods: {
    login: function() {
      let self = this
      auth.signInWithEmailAndPassword(self.email, self.password).then((data)=>{
        console.log(data)
        self.$buefy.toast.open({
          message: 'You have logged in successfully.',
          type: 'is-success',
        })
        self.$router.push({name: 'Province'})
      }).catch((error) => {
        self.$buefy.toast.open({
          message: error.toString(),
          type: 'is-danger',
        })
      })
    }
  }
}
</script>

<style scoped>

</style>