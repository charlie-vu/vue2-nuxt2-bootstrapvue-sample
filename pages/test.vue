<template>
    <b-container>
        <b-row cols="2" class="gutter-width-8px row-gap-8px">
            <b-col>
                <b-card>
                    <p>$dayjs().format('YYYY.MM.DD')</p>
                    <p class="mt-2">{{ $dayjs().format('YYYY.MM.DD') }}</p>
                </b-card>
            </b-col>
            <b-col>
                <b-card>
                    <p>$_.sample(['Lorem', 'Ispum', 'Dolor', 'Sit', 'Amet'])</p>
                    <p class="mt-2">{{ $_.sample(['Lorem', 'Ispum', 'Dolor', 'Sit', 'Amet']) }}</p>
                </b-card>
            </b-col>
            <b-col>
                <b-card>
                    <p>$common.displayNumber(12345, '원')</p>
                    <p class="mt-2">{{ $common.displayNumber(12345, '원') }}</p>
                </b-card>
            </b-col>
            <b-col>
                <b-card>
                    <p>$common.displayChange(12345)</p>
                    <p class="mt-2">{{ $common.displayChange(12345) }}</p>
                </b-card>
            </b-col>
            <b-col>
                <b-card>
                    <p>Alert/Noti Modal</p>
                    <b-button class="mt-2" @click="triggerAlert">
                        $mvModal.msgBoxOk()
                    </b-button>
                </b-card>
            </b-col>
            <b-col>
                <b-card>
                    <p>Confirm Modal</p>
                    <b-button class="mt-2" @click="triggerConfirm">
                        $mvModal.msgBoxConfirm()
                    </b-button>
                </b-card>
            </b-col>
            <b-col>
                <b-card>
                    <p>Loading Overlay</p>
                    <b-button class="mt-2" @click="triggerLoading">
                        $store.dispatch('startLoading'), ('stopLoading')
                    </b-button>
                </b-card>
            </b-col>
            <b-col>
                <b-card>
                    <p>i18n (refresh page to test $cookies (js-cookie))</p>
                    <b-form-group :label="$t('locale')" label-cols="2" class="mt-3" label-class="fw-700">
                        <b-select v-model="$i18n.locale" :options="$i18n.localeOptions"
                            @change="$cookies.set('locale', $event)" />
                    </b-form-group>
                    <p class="text-right font-italic small">Ex.: $t('demo.contact.phone')</p>
                    <b-table-simple bordered class="mt-3">
                        <b-tbody>
                            <b-tr>
                                <b-th>{{ $t('demo.name') }}</b-th>
                                <b-td>Lorem ipsum</b-td>
                            </b-tr>
                            <b-tr>
                                <b-th>{{ $t('demo.contact.phone') }}</b-th>
                                <b-td>010-1234-1234</b-td>
                            </b-tr>
                            <b-tr>
                                <b-th>{{ $t('demo.contact.address') }}</b-th>
                                <b-td>Lorem ipsum dolor sit amet.</b-td>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>
                    <p>{{ $t('withValue', { value: 'SomeFixedValue' }) }}</p>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        triggerAlert() {
            this.$mvModal.msgBoxOk('This is an alert')
        },
        triggerConfirm() {
            this.$mvModal.msgBoxConfirm('This is a confirm').then((isConfirm) => {
                if (isConfirm) {
                    this.$mvModal.msgBoxOk('CONFIRMED!')
                } else {
                    this.$mvModal.msgBoxOk('CANCELED!')
                }
            })
        },
        triggerLoading() {
            this.$store.dispatch('startLoading')
            setTimeout(() => {
                this.$store.dispatch('stopLoading')
            }, 500)
        },
    }
}
</script>
