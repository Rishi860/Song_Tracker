<template>
    <panel title="Youtube">
        <youtube 
        :video-id="youtubeID"
        :player-width="370"
        :player-height="250"></youtube>
    </panel>
</template>

<script>
export default {
    props: [
        'youtubeID'
    ]
}
</script>

<style scoped>

</style>
