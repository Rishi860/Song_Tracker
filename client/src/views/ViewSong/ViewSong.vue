<template>
  <div>
    <v-card class="mx-auto" max-width="900">
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

            <v-btn 
            v-if="isUserLoggedin"
            class="ml-1"
            @click="Bookmark"     
            color="indigo"
            dark>
            Bookmark
            </v-btn>

            <v-btn 
            v-if="isUserLoggedin"
            class="ml-1"
            @click="unBookmark"    
            color="indigo"
            dark>
            Un Bookmark
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
import {mapState} from 'vuex'
import SongServices from '../../services/SongServices'
import YouTube from './Youtube'
import Lyrics from './Lyrics'

export default {
  data () {
    return {
      song:{}
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedin'
    ])
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    Bookmark(){
      console.log('bookmarked')
    },
    unBookmark(){
      console.log('Un bookmarked')
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongServices.show(songId)).data
  },
  components: {
    YouTube,
    Lyrics,
  }
}
</script>

<style scoped>
.album-image{
  width: 70%
}
</style>
