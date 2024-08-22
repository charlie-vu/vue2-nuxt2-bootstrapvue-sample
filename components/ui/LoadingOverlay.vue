<template>
    <b-modal v-model="$store.getters.loading" dialog-class="alert-modal" content-class="text-center py-4" hide-header hide-footer
        centered size="sm" no-close-on-backdrop no-close-on-esc>
        <b-spinner class="overlay-spinner" />
    </b-modal>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.overlay-spinner {
    $size: 48px;
    width: $size;
    height: $size;
    border-width: 6px;
}
</style>
