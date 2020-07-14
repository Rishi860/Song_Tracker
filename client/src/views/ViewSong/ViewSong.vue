<template>
  <panel title="Song MetaData">
    {{song.title}}-
    {{song.artist}}-
    {{song.album}}
  </panel>
</template>

<script>
import SongServices from '../../services/SongServices'
import Panel from '../../components/Panel'


export default {
  data () {
    return {
      song:null
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongServices.show(songId)).data
  },
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
