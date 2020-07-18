<template>
    <panel title="Youtube">
        <youtube 
        :video-id="youtubeID"
        :player-width="370"
        :player-height="250"></youtube>
    </panel>
</template>

<script>
import Panel from '../../components/Panel'

export default {
    components: {
        Panel
    },
    props: [
        'youtubeID'
    ]
}
</script>

<style scoped>

</style>
