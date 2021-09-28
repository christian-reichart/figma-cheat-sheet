<template>
    <header>
        <div class="inner-header">
        <div class="logo">
            <div class="split">
                <img class="logo" v-lazy="{src: require('@/assets/figma-logo.svg')}" />
            </div>
            <div class="split text">
                <h1>Figma Cheat Sheet</h1>
                <p>For developers using inspect mode</p>
            </div>
        </div>
        <toggle-keyboard />
        </div>
    </header>
</template>

<script>
import ToggleKeyboard from './ToggleKeyboard.vue'
    export default {
        name: 'CustomHeader',
        components: {
            ToggleKeyboard,
        }
    }
</script>

<style lang="scss" scoped>

@import '@/assets/scss/variables.scss';

header {
    background-color: $color-grey-light;
    padding: 40px 30px;

    .inner-header {
        max-width: 1440px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
.logo {
    display: flex;

    .split {
        margin-right: 20px;
    }
}

.text {
    text-align: left;
    display: flex;
    justify-content: center;
    flex-direction: column;
    h1 {
        margin: 0;
        margin-bottom: 5px;
        font-size: 32px;
    }

    p {
        margin: 0;
        font-weight: 500;
    }
}

.logo {
    max-height: 100px;
}

@media (max-width: 700px) {
    .logo {
        max-height: 60px;
    }

    .text {
        h1 {
            font-size: 20px;
        }

        p {
            font-size: 14px;
        }
    }
}
</style>