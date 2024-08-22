import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from '~/i18n/en'
import ko from '~/i18n/ko'

Vue.use(VueI18n)

export default ({ app, store }) => {
    const localeOptions = [
        {
            value: 'en-US',
            text: 'English',
        },
        {
            value: 'ko-KR',
            text: '한국어',
        },
    ]

    if (!store.$cookies.get('locale') || !localeOptions.map(item => item.value).includes(store.$cookies.get('locale'))) store.$cookies.set('locale', 'en-US')

    app.i18n = new VueI18n({
        locale: store.$cookies.get('locale'),
        fallbackLocale: 'en-US',
        messages: {
            'en-US': en,
            'ko-KR': ko,
        },
    })

    // Custom prop add to $i18n
    app.i18n.localeOptions = localeOptions
    // console.log(app.i18n)
}
