<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Songs MetaData">
        <v-text-field label="Title" :rules="[required]" v-model="song.title">{{song.title}}</v-text-field>

        <v-text-field label="Genre" :rules="[required]" v-model="song.genre">{{song.genre}}</v-text-field>

        <v-text-field label="Artist" :rules="[required]" v-model="song.artist">{{song.artist}}</v-text-field>

        <v-text-field label="Album" :rules="[required]" v-model="song.album">{{song.album}}</v-text-field>

        <v-text-field label="Album Image Url" :rules="[required]" v-model="song.albumImageUrl">{{song.albumImageUrl}}</v-text-field>

        <v-text-field label="Youtube ID" :rules="[required]" v-model="song.youtubeID">{{song.youtubeID}}</v-text-field>
      </panel>
    </v-flex>

    <v-flex class="text-center" xs8>
      <panel title="Song structure" class="ml-2">
        <v-textarea label="Tab" :rules="[required]" v-model="song.tab">{{song.tab}}</v-textarea>

        <v-textarea label="Lyrics" :rules="[required]" v-model="song.lyrics">{{song.lyrics}}</v-textarea>
      </panel>
        <div class="error">{{error}}</div>
        <v-btn @click="edit" rounded color="indigo" dark>Edit</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import SongServices from '../services/SongServices'

export default {
  data() {
    return {
      song:{
        title: null,
        artist: null,
        genre: null,
        album: null,
        lyrics: null,
        albumImageUrl: null,
        tab: null,
        youtubeID: null
      },
      required: (value) => !!value || 'Required',
      error: null
    }
  },
  methods: {
    async edit () {
      const areAllFieldsFilledIn = 
      Object.keys(this.song)
      .every((key) => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill all the fields!'
        return
      }
      try {
        const songId = this.$store.state.route.params.songId
        await SongServices.put(this.song)
        this.$router.push({
          name: 'song',
          params: {
            songId
          }})
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongServices.show(songId)).data
  }
};
</script>

<style scoped>
</style>
