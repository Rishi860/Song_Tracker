<template>
  <v-card class="mx-auto" max-width="500">
    <panel title="Login">
      <v-col>
        <v-text-field label="Email" v-model="email">
        </v-text-field>
      </v-col>
      <v-col>
        <v-text-field label="Password" type="password" v-model="password">
        </v-text-field>
      </v-col>
      <div class="error" v-html="error"/>
      <div class="text-center pad">
        <v-btn @click="login" rounded color="indigo" dark>Login</v-btn>
      </div>
    </panel>
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
        const response = await AuthenticationServices.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({ name: 'songs' })
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
