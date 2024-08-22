// COMMON FUNCTION
// Syntax: this.$common.someFunction()

// Useful for b-table data-format:
// fields: [
//     {..., formatter: (value) => this.$common.displayDate(value)}
// ]

export default (context, inject) => {
    // console.log(context)
    const common = {
        displayNumber: (number, append = '') => {
            return (!number && number !== 0) ? '-' : `${number.toLocaleString('ko-KR')} ${append}`.trim()
            // 1234 => 1,234 || 1,234 Unit
            // null => -
        },
        displayChange: (number, append = '') => {
            return (!number && number !== 0) ? '-' : `${number.toLocaleString('ko-KR', { signDisplay: 'always' })} ${append}`.trim()
        },

        displayDate: (date) => {
            return date ? context.$dayjs(date).format('YYYY.MM.DD') : '-'
        },
        displayDatetime: (datetime) => {
            return datetime ? context.$dayjs(datetime).format('YYYY.MM.DD HH:mm:ss') : '-'
        },

        // Regex.test(str)
        regexName: /^.{2,20}$/,
        regexPhone: /^[0-9]{3,}-[0-9]{3,4}-[0-9]{3,4}$/,
        regexEmail: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    }
    inject('common', common)
}

// ========= Pure Vue2 global variables:
// import Vue from 'vue';
// const makeComma = (number) => {
//   if (!number) {
//     return '0'
//   }
//   return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
// }
// Vue.prototype.$makeComma = makeComma
