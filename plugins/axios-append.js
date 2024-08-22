export default (context, inject) => {
    const apiAppend = {
        // Product
        products: `/products`,
        productId: (id) => `/products/${id}`,
    }

    inject('apiAppend', apiAppend)
}
