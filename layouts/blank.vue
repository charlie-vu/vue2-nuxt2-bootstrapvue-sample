<template>
    <div>
        <nuxt />
        <ui-loading-overlay />
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.dispatch('hideMenu')
    }
}
</script>
