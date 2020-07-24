<template>
  <div>
    <v-toolbar
      color="indigo"
      dark
      height="100px"
      fixed
    >
    <v-toolbar-title
      @click="navigateTo({name:'songs'})"
      class="root">
      Tab Tracker
    </v-toolbar-title>
    <v-btn
        depressed dark
        color="indigo"
        @click="navigateTo({name:'songs'})">
         Browse
    </v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedin"
        depressed dark
        color="indigo"
        @click="navigateTo({name:'login'})">
         Login
      </v-btn>
      <v-btn
        v-if="!$store.state.isUserLoggedin"
        depressed dark
        color="indigo"
        @click="navigateTo({name:'register'})">
         Sign Up 
      </v-btn>
      <v-btn
        v-if="$store.state.isUserLoggedin"
        depressed dark
        color="indigo"
        @click="logout">
         Log Out 
      </v-btn>
    </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>

export default {
  methods:{
    navigateTo(route) {
      this.$router.push(route)
    },
    logout() {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({name: 'songs'})
    }
  }
}
</script>

<style scoped>
.root:hover{
 cursor: pointer;
}
</style>
