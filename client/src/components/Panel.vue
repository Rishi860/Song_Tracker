<template>
  <div>
    <v-toolbar color="indigo" dark>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <slot name="action"/>
    </v-toolbar>
    <v-col class="text-center">
      <slot>No slot content defined</slot> 
    </v-col>
  </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>

</style>
