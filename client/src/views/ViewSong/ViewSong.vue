<template>
  <div>
    <v-layout>
      <song-metadata :song="song">
      </song-metadata>
    </v-layout>
    <v-layout class="mt-2">
      <v-flex xs5>
        <lyrics :lyrics="song.lyrics"/>
      </v-flex>
      <v-flex xs7 class="ml-2">
        <you-tube :youtubeID="song.youtubeID">
        </you-tube>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongServices from '../../services/SongServices'
import YouTube from './Youtube'
import SongMetadata from './SongMetadata'
import Lyrics from './Lyrics'

export default {
  data () {
    return {
      song:{}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongServices.show(songId)).data
  },
  components: {
    YouTube,
    Lyrics,
    SongMetadata
  }
}
</script>

<style scoped>
</style>
