<template>
    <img v-if="keyValue === 'LMB'" src="@/assets/img/lmb.svg" />
    <img v-else-if="keyValue === 'RMB'" src="@/assets/img/rmb.svg" />
    <img v-else-if="keyValue === 'Scroll'" src="@/assets/img/scroll.svg" />
    <div v-else class="key-mock">
        <div class="chars">
            {{ getDisplayValue(keyValue) }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'KeyMock',
        props: {
            keyValue: String,
        },
        computed: {
            isCtrl() {
                return this.$store.state.isCtrlLayout;
            }
        },
        methods: {
            getDisplayValue(val) {
                switch (val){
                    case 'command':
                        return this.isCtrl ? 'Ctrl' : '⌘';
                    case 'Shift':
                        return '⇧';
                    case 'Enter':
                        return '⏎';
                    case 'option':
                        return this.isCtrl ? 'Alt' : '⌥';
                    case 'control':
                        return this.isCtrl ? 'Ctrl' : '⌃';
                    default:
                        return val;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.key-mock {
    background-color: $color-black;
    border-radius: 10px;
    padding: 17px 27px;
    font-size: 24px;
    font-weight: 500;
    color: $color-white;
    display: inline-block;
}
</style>