<template>
  <v-card class="mx-auto" max-width="500">  
    <panel title="Songs">
      <div
      v-for="song in songs" :key="song.id">
      {{song.title}}-
      {{song.artist}}-
      {{song.album}}
      </div>
    </panel>
  </v-card>
</template>

<script>
import Panel from '../components/Panel'
import SongServices from '../services/SongServices'

export default {
  components: {
    Panel
  },
  data () {
    return {
      songs:null
    }
  },
  async mounted () {
    this.songs = (await SongServices.index()).data
  }
}
</script>

<style scoped>
</style>
