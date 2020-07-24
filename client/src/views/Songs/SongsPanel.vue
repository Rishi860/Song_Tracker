<template>
  <panel title="Songs">
    <div slot="action" >
      <v-btn class="mx-2"
        fab
        dark 
        color="#3D5AFE"
        @click="navigateTo({name:'create-songs'})">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
    </div>
    <div
    v-for="song in songs" class="song" :key="song.id">

    <v-layout>
      <v-flex xs6>
        <h3>{{song.title}}</h3>
        <h4>{{song.album}}</h4>
        <h5>{{song.artist}}</h5>
        <v-btn 
        @click="navigateTo({
          name:'song',
          params: {
            songId:song.id
          }
        })"     
        color="indigo"
        dark>
        View
        </v-btn>
      </v-flex>
      <v-flex xs6>
        <img class="album-image" :src="song.albumImageUrl"/>
      </v-flex>
    </v-layout>
    </div>
  </panel>
</template>

<script>
import SongServices from '@/services/SongServices'

export default {
  data () {
    return {
      songs:null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongServices.index(value)).data
      }
    }
  }
}
</script>

<style scoped>
.song{
  padding: 20px;
}
.album-image{
  width: 50%
}
</style>
