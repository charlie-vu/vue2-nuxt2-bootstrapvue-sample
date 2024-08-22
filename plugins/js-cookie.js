import jsCookie from 'js-cookie'
export default (context, inject) => {
    inject('cookies', jsCookie)
}
