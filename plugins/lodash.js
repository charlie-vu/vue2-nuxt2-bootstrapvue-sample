import lodash from 'lodash'
export default (context, inject) => {
    inject('_', lodash)
}
