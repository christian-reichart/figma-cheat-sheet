<template>
    <header>
        <div class="splits">
            <div class="split">
                <img class="logo" v-lazy="{src: require('@/assets/figma-logo.svg')}" />
            </div>
            <div class="split text">
                <h1>Figma Cheat Sheet</h1>
                <p>For developers using inspect mode</p>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'CustomHeader'
    }
</script>

<style lang="scss" scoped>

@import '@/assets/scss/variables.scss';

header {
    background-color: $color-grey-light;
    padding: 40px 20px;
}
.splits {
    display: flex;
    justify-content: center;

    .split {
        margin: 0 20px;
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
</style>