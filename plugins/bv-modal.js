// Make class="... alert-modal" => separate with normal <b-modal>
export default (context, inject) => {
    // https://bootstrap-vue.org/docs/components/modal#component-reference
    const defaultOptions = {
        centered: true,
        size: 'sm',
        okTitle: '확인',
        cancelTitle: '취소',
        dialogClass: 'mv-modal',
    }

    const bvModal = context.store._vm.$bvModal

    const msgBoxOk = (message, customOptions = {}) => bvModal.msgBoxOk(message, { ...defaultOptions, ...customOptions })
    const msgBoxConfirm = (message, customOptions = {}) => bvModal.msgBoxConfirm(message, { ...defaultOptions, ...customOptions })

    inject('mvModal', { msgBoxOk, msgBoxConfirm })
}
