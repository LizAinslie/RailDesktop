<template>
    <v-layout row align-center>
        <v-flex>
            <v-icon>network_wifi</v-icon>
        </v-flex>
    </v-layout>
</template>

<script lang='ts'>
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class WifiIndicator extends Vue {}
</script>

<style scoped lang='less'></style>