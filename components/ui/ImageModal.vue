<template>
    <b-modal v-model="localValue" size="xl" hide-header hide-footer centered dialog-class="w-fit" content-class="bg-dark"
        @hide="localValue = false">
        <b-img :src="src" :alt="alt" class="rounded-lg max-vh-85 mw-100" />
    </b-modal>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        src: {
            type: String,
            default: '',
        },
        alt: {
            type: String,
            default: '',
        },
    },
    computed: {
        localValue: {
            get() { return this.value },
            set(newValue) { this.$emit('input', newValue) },
        }
    },
}
</script>
