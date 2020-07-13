<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Songs MetaData">
        <v-text-field label="Title" v-model="title"></v-text-field>

        <v-text-field label="Genre" v-model="genre"></v-text-field>

        <v-text-field label="Artist" v-model="artist"></v-text-field>

        <v-text-field label="Album" v-model="album"></v-text-field>

        <v-text-field label="Album Image Url" v-model="albumImageUrl"></v-text-field>

        <v-text-field label="Youtube ID" v-model="youtubeID"></v-text-field>
      </panel>
    </v-flex>

    <v-flex xs8>
      <panel title="Song structure" class="ml-2">
        <v-textarea label="Tab" v-model="tab"></v-textarea>

        <v-textarea label="Lyrics" v-model="lyrics"></v-textarea>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from "../components/Panel";

export default {
  data() {
    return {
      title: null,
      artist: null,
      genre: null,
      album: null,
      lyrics: null,
      albumImageUrl: null,
      tab: null,
      youtubeID: null
    };
  },
  components: {
    Panel
  }
};
</script>

<style scoped>
</style>
