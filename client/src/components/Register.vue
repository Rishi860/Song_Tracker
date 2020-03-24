<template>
 <div>
     <h1>Register</h1>
     <input type="email"
      name="email"
      v-model="email"
      placeholder="email">
     <br>
     <input type="text"
     name="password"
     v-model="password"
     placeholder="1234">
     <br>
     <button @click="register">Register</button>
 </div>
</template>

<script>

import AuthenticationServices from '@/services/AuthenticationServices'
export default {
  data () {
    return {
      email: 'abc',
      password: '123'
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationServices.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data, this.email, this.password)
    }
  }
}
</script>

<style scoped>

</style>
