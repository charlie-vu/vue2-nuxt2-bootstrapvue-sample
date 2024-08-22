export default ({ app, store, route, from, redirect }) => {
    if (!app.$screen.gt.lg && route.name !== 'screen-error') {
        // Check screen < 1024
        return redirect('/screen-error')
    }
}
