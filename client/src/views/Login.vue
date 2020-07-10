<template>
  <v-card
    class="mx-auto"
    max-width="500"
  >

    <v-toolbar
      color="indigo"
      dark
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>Login</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-toolbar>
    <v-col>
      <v-text-field
        label="Email"
        v-model="email"
      ></v-text-field>
    </v-col>
    <v-col>
      <v-text-field
        label="Password"
        v-model="password"
      ></v-text-field>
    </v-col>
    <div class="error" v-html="error"/>
    <div class="text-center pad">
      <v-btn @click="login" rounded color="indigo" dark>Register</v-btn>
    </div>

  </v-card>
</template>

<script>

import AuthenticationServices from '@/services/AuthenticationServices'

export default {
  name: 'Register',
  data () {
    return {
      error: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async login () {
      try {
        await AuthenticationServices.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pad{
    padding-bottom: 5px;
}
</style>
