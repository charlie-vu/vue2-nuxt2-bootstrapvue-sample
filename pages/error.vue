<template>
    <b-container class="vh-100 d-flex flex-center">
        <b-card class="py-5 text-center flex-grow-1 bg-light">
            <h2 class="fw-700">OOPS! SOMETHING WENT WRONG!</h2>
            <h4 class="mt-3">Please try again later</h4>
            <b-button variant="danger" :to="{ name: 'index' }" class="mt-3">
                Go Home
            </b-button>
        </b-card>
    </b-container>
</template>

<script>
export default {
    layout: 'blank',
}

</script>
