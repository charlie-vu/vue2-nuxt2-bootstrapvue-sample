export default ({ $axios, $config, store, app, route, redirect }) => {
    $axios.defaults.timeout = 10000
    $axios.defaults.baseURL = 'https://dummyjson.com'
    $axios.defaults.withCredentials = false

    $axios.onRequest((config) => {

    })
    $axios.onResponse((res) => {

    })
    // Global catch
    $axios.onError((err) => {
        console.log(err)
        app.$mvModal.msgBoxOk(err.message).then(() => {
            redirect({ name: 'error' })
        })
    })
}
