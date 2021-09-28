<template>
    <div class="toggle-keyboard-button" @click="toggleCtrlLayout()">
        Toggle ⌘/Ctrl
    </div>
</template>

<script>
    export default {
        name: 'ToggleKeyboard',
        methods: {
            toggleCtrlLayout() {
                this.$store.commit('toggleCtrl');
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.toggle-keyboard-button {
    font-weight: 700;
    border: 3px solid $color-black;
    border-radius: 10px;
    padding: 10px;
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        background-color: $color-black;
        color: $color-white;
    }
}
</style>