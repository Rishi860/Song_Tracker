<template>
  <v-layout>
    <v-flex class="mx-auto" max-width="500">
      <songs-search-panel>
      </songs-search-panel>
      <songs-panel class="mt-4" />
    </v-flex>
  </v-layout>
</template>

<script>
import SongServices from '@/services/SongServices'
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongSearchPanel'

export default {
  data () {
    return {
      songs:null,
      search: ''
    }
  },
  async mounted () {
    this.songs = (await SongServices.index()).data
  },
  components: {
    SongsPanel,
    SongsSearchPanel
  }
}
</script>

<style scoped>
.song{
  padding: 20px;
}
.album-image{
  width: 70%
}
</style>
