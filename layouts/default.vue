<template>
    <div class="min-vh-100 d-flex flex-column">
        <layout-header />
        <nuxt class="flex-grow-1 py-4" />
        <layout-footer />

        <layout-side-menu />

        <ui-loading-overlay />
    </div>
</template>

<script>
import menuList from '~/assets/demo/menu-list.js'

export default {
    name: 'DefaultLayout',

    mounted() {
        setTimeout(() => {
            this.$store.dispatch('setMenuList', menuList)
        }, 500)
    },
}

</script>
