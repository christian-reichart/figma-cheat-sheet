<template>
    <img v-if="keyValue === 'LMB'" v-lazy="{src: require('@/assets/img/lmb.svg')}" />
    <img v-else-if="keyValue === 'RMB'" v-lazy="{src: require('@/assets/img/rmb.svg')}" />
    <img v-else-if="keyValue === 'Scroll'" v-lazy="{src: require('@/assets/img/scroll.svg')}" />
    <div v-else class="key-mock">
        <div class="chars">
            {{ keyValue }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'KeyMock',
        props: {
            keyValue: String,
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