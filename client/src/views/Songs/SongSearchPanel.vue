<template>
  <panel title="Search">
    <div slot="action" >
      <v-btn class="mx-2"
        fab
        dark 
        color="#3D5AFE"
        @click="navigateTo({name:'create-songs'})">
        <v-icon dark>mdi-magnify</v-icon>
      </v-btn>
    </div>
    <v-text-field label="Search song by song title, artist, or genre" v-model="search">
    </v-text-field>
  </panel>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
