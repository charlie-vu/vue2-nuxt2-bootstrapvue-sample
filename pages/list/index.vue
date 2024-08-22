<template>
    <b-container>
        <h2><a href="https://dummyjson.com/docs/products" target="_blank">https://dummyjson.com/docs/products</a></h2>

        <div class="w-50 mt-3">
            <b-form-group label="Size:" label-cols="2">
                <b-select v-model="perPage" :options="perPageOptions" @change="onChangePerPage" />
            </b-form-group>
        </div>

        <p>Showing {{ perPage }} of {{ totalRows }} items</p>

        <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" class="mt-3"
            @input="fetchItems" />

        <b-table :fields="fields" :items="items" :busy="loading" show-empty empty-text="조회 가능한 데이터가 없습니다." hover striped
            class="mt-3 text-nowrap" tbody-tr-class="cursor-pointer" responsive @row-clicked="toDetail">
            <template #table-busy>
                <div class="text-center">
                    <b-spinner class="align-middle" />
                    <strong class="ml-3">데이터를 불러오고 있습니다.</strong>
                </div>
            </template>
        </b-table>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            fields: [
                { key: 'id', label: 'ID', sortable: true, },
                { key: 'title', label: 'TITLE', class: 'text-wrap' },
                { key: 'description', label: 'DESCRIPTION', class: 'text-wrap' },
                { key: 'price', label: 'PRICE', sortable: true, formatter: (val) => this.$common.displayNumber(val, '원') },
                { key: 'discountPercentage', label: 'DISCOUNT', sortable: true, formatter: (val) => `${val || '-'} %` },
                { key: 'rating', label: 'RATING', sortable: true },
                { key: 'stock', label: 'IN STOCK', sortable: true, formatter: (val) => this.$common.displayNumber(val, '건') },
                { key: 'brand', label: 'BRAND', class: 'text-wrap' },
                { key: 'category', label: 'CATEGORY' },

            ],
            items: null,
            currentPage: 1,
            perPage: 10,
            perPageOptions: [5, 10, 15, 20],
            totalRows: 0,
        }
    },
    mounted() {
        this.fetchItems()
    },
    methods: {
        fetchItems() {
            this.loading = true
            const params = {
                limit: this.perPage,
                skip: this.perPage * (this.currentPage - 1),
            }
            this.$axios.get(this.$apiAppend.products, { params }).then((res) => {
                // console.log(res)
                const data = res.data
                console.log(`PRODUCT LIST:: `, data)

                this.totalRows = data.total
                this.items = data.products
            }).finally(() => {
                this.loading = false
            })
        },
        toDetail(item) {
            this.$router.push(`/list/${item.id}`)
        },
        onChangePerPage() {
            this.currentPage = 1
            this.fetchItems()
        }
    },
}
</script>
