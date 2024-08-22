<template>
  <div>
    <div class="text-center">
      <h2 class="text-primary fw-900 display-4">Hello World!</h2>
      <b-button to="/test" variant="danger" class="text-uppercase fw-700 mt-3">
        Component Test
      </b-button>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col">
          <b-card class="h-100">
            <h3>Main</h3>
            <ul class="mt-3">
              <li>Javascript</li>
              <li>Vue 2 (Options API)</li>
              <li>Nuxt 2</li>
              <li>Bootstrap-vue</li>
              <li>Bootrap 4</li>
              <li>SCSS</li>
            </ul>
          </b-card>
        </div>
        <div class="col">
          <b-card class="h-100">
            <h3>Plugins</h3>
            <ul class="mt-3">
              <li>js-cookies</li>
              <li>axios</li>
              <li>dayjs</li>
              <li>lodash</li>
              <li>i18n</li>
            </ul>
          </b-card>
        </div>
        <div class="col">
          <b-card class="h-100">
            <h3>Features</h3>
            <ul class="mt-3">
              <li>Cookies, Global store, Global Variables</li>
              <li>Connect APIs</li>
              <li>Day, time formatting</li>
              <li>JS utilities (lodash)</li>
              <li>Internationalization</li>
              <li>Multiple layouts: with-menu, blank...</li>
            </ul>
          </b-card>
        </div>
      </div>
    </div>
    <ul>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  // middleware(context) {
  //   return context.redirect('/test')
  // },
  data() {
    return {

    }
  },
}
</script>
