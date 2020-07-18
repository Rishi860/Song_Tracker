<template>
  <div>
    <v-card class="mx-auto" max-width="500">
      <panel title="Song MetaData">
        <v-layout>
          <v-flex xs6>
            <h3>{{song.title}}</h3>
            <h4>{{song.album}}</h4>
            <h5>{{song.artist}}</h5>
            <v-btn 
            @click="navigateTo({
              name:'edit',
              params: {
                songId:song.id
              }
            })"     
            color="indigo"
            dark>
            Edit
            </v-btn>
          </v-flex>
          <v-flex xs6>
            <img class="album-image" :src="song.albumImageUrl"/>
          </v-flex>
        </v-layout>
      </panel>
    </v-card>
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
import Lyrics from './Lyrics'
import Panel from '../../components/Panel'

export default {
  data () {
    return {
      song:{}
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongServices.show(songId)).data
  },
  components: {
    YouTube,
    Lyrics,
    Panel
  }
}
</script>

<style scoped>
.album-image{
  width: 70%
}
</style>
