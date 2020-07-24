<template>
    <panel title="Youtube">
        <youtube 
        :video-id="youtubeID"
        :player-width="750"
        :player-height="300"></youtube>
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
