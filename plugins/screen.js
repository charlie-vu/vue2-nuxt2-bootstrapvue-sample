// Simulate Quasar $q.screen
export default (context, inject) => {
    const getRootVars = (name) => getComputedStyle(document.documentElement).getPropertyValue(name)

    const breakpoints = {
        xs: parseInt(getRootVars('--breakpoint-sx')) || 0,
        sm: parseInt(getRootVars('--breakpoint-sm')),
        md: parseInt(getRootVars('--breakpoint-md')),
        lg: parseInt(getRootVars('--breakpoint-lg')),
        xl: parseInt(getRootVars('--breakpoint-xl')),
    }
    // console.log(breakpoints)

    const screen = {
        width: process.client ? window.innerWidth : 0,
        height: process.client ? window.innerHeight : 0,
        gt: {},
        lt: {},
    }

    function updateScreenSize() {
        screen.width = window.innerWidth
        screen.height = window.innerHeight
        Object.keys(breakpoints).forEach(key => {
            screen.gt[key] = window.innerWidth > breakpoints[key]
            screen.lt[key] = window.innerWidth < breakpoints[key]
        })
    }

    if (process.client) {
        window.addEventListener('resize', updateScreenSize)
        updateScreenSize()
    }

    // console.log(screen)
    inject('screen', screen)
}

// ====== Vue without Nuxt
// import Vue from 'vue';
// const breakpoints = {
//     xs: 0,
//     sm: 576,
//     md: 768,
//     lg: 992,
//     xl: 1200,
// };
// Vue.prototype.$screen = Vue.observable({
//     width: process.client ? window.innerWidth : 0,
//     height: process.client ? window.innerHeight : 0,
//     gt: {},
// });
// function updateScreenSize() {
//     Vue.prototype.$screen.width = window.innerWidth;
//     Vue.prototype.$screen.height = window.innerHeight;
//     Object.keys(breakpoints).forEach(key => {
//         Vue.prototype.$screen.gt[key] = window.innerWidth > breakpoints[key];
//     });
// }
// if (process.client) {
//     window.addEventListener('resize', updateScreenSize);
//     updateScreenSize();
// }
