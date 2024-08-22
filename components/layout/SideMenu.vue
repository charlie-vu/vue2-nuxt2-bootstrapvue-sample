<template>
    <b-sidebar :visible="$store.getters.showMenu" title="GNB" bg-variant="white-10 blur-15px gradient-white-60-10"
        @hidden="$store.dispatch('hideMenu')">
        <nuxt-link v-for="item in $store.getters.menuList" :key="item.name" :to="item.path"
            exact-active-class="bg-primary text-white fw-700" class="d-block p-3">
            {{ item.name }}
        </nuxt-link>
        <template #footer>
            <p class="py-3 mx-3 fs-12px border-top">
                .bg-white-10<br />.blur-15px<br />.gradient-white-60-10
            </p>
        </template>
    </b-sidebar>
</template>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>
