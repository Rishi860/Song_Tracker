<template>
  <panel title="Search">
    <div slot="action" >
    </div>
    <v-text-field label="Search song by song title, artist, or genre" v-model="search">
    </v-text-field>
  </panel>
</template>

<script>
import _ from 'lodash'

export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: _.debounce(async function (){
      const route = {
        name: "songs"
      }

      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style scoped>

</style>
