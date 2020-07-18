<template>
  <panel title="Lyrics">
    <textarea label="Lyrics" v-model="lyrics"></textarea>
  </panel>    
</template>

<script>
export default {
  props: [
      'lyrics'
  ]
}
</script>

<style scoped>
textarea{
  width: 100%;
  border: none;
  height: 300px;
  border-color: none;
  border-style: none;
  overflow: auto;
}
</style>
