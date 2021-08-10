<template>
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
        v-if="isUserLoggedin && !isBookmarked"
        class="ml-1"
        @click="Bookmark"     
        color="indigo"
        dark>
        Bookmark
        </v-btn>

        <v-btn 
        v-if="isUserLoggedin && isBookmarked"
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
</template>

<script>
import BookmarkServices from '../../services/BookmarkServices'
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState([
      'isUserLoggedin'
    ])
  },
  data () {
    return {
      isBookmarked: false
    }
  },
  async mounted () {
    if(!this.isUserLoggedin){
      return;
    }
    console.log(this.$store.state.route.params.songId+''+this.$store.state.user.id)
    const bookmark = (await BookmarkServices.index({
      songId: this.$store.state.route.params.songId,
      userId: this.$store.state.user.id
    })).data
    this.isBookmarked = !!bookmark
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    async Bookmark(){
      try {
        await BookmarkServices.post({
        songId: this.$store.state.route.params.songId,
        userId: this.$store.state.user.id
        })
      } catch (err) {
          console.log(err)
      }
    },
    async unBookmark(){
      try {
        await BookmarkServices.delete({
        songId: this.$store.state.route.params.songId,
        userId: this.$store.state.user.id
        })
      } catch (err) {
          console.log(err)
      }
      console.log('Unbookmarked')
    }
  },
  props: [
    'song'
  ]
}
</script>

<style scoped>
.album-image{
  width: 70%
}
</style>
