<template>
    <b-container>
        <h2 v-if="!$store.getters.loading" class="text-center">{{ detail?.title || 'Item not Found!' }}</h2>
        <h4 v-if="detail?.description" class="text-primary font-italic mt-3">{{ detail.description }}</h4>

        <div v-if="detail" class="mt-3 py-4">
            <b-row>
                <b-col cols="8">
                    <b-img :src="detail.thumbnail" class="w-100 rounded-lg" />
                </b-col>
                <b-col>
                    <div class="d-flex flex-column gap-16px">
                        <p><strong>ID:</strong> {{ detail.id }}</p>
                        <p><strong>Price:</strong> {{ $common.displayNumber(detail.price, '원') }}</p>
                        <p><strong>Discount:</strong> {{ detail.discountPercentage || "-" }} %</p>
                        <p><strong>Rating:</strong> {{ detail.rating }}</p>
                        <p><strong>In Stock:</strong> {{ $common.displayNumber(detail.stock, '건') }}</p>
                        <p><strong>Brand:</strong> {{ detail.brand }}</p>
                        <p><strong>Category:</strong> {{ detail.category }}</p>
                    </div>
                </b-col>
            </b-row>

            <div class="border-top border-bottom border-primary mt-4 py-4">
                <b-row cols="6" class="row-gap-32px">
                    <b-col v-for="(item, index) in detail.images" :key="index">
                        <div class="w-100 h-100 d-flex flex-center bg-secondary p-2 rounded-lg cursor-pointer"
                            @click="previewImg(item)">
                            <b-img :src="item" class="w-100" />
                        </div>
                    </b-col>
                </b-row>
            </div>
        </div>

        <ui-image-modal v-model="showPreview" :src="selectedUrl" />
    </b-container>
</template>
<script>
export default {
    data() {
        return {
            detail: null,
            showPreview: false,
            selectedUrl: '',
        }
    },
    mounted() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            this.$store.dispatch('startLoading')
            this.$axios.get(this.$apiAppend.productId(this.$route.params.id)).then((res) => {
                const data = res.data
                console.log(data)
                this.detail = data
            }).finally(() => {
                this.$store.dispatch('stopLoading')
            })
        },
        previewImg(url) {
            this.selectedUrl = url
            this.showPreview = true
        }
    },
}
</script>
