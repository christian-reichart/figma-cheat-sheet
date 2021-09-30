<template>
    <div class="tip">
        <div class="text">
            <h2>{{ tip.title }}</h2>
            <p>{{ tip.description }}</p>
            <div class="shortcuts">
                <div v-for="key, index in keys" :key="index" class="shortcut">
                    <key-mock  :keyValue="key.key" />
                    <div v-if="index < keys.length -1" class="plus">
                        +
                    </div>
                </div>
            </div>
        </div>
        <div class="image">
            <div class="image-wrapper" :style="{
                width: (tip.img.width || 0) + 'px',
                height: (tip.img.height || 0) + 'px'
            }">
                <img v-lazy="{src: require('@/assets/img/' + tip.img.src)}" />
            </div>
        </div>
    </div>
</template>

<script>
import KeyMock from './KeyMock.vue'
    export default {
        name: 'ShortcutTip',
        components: { 
            KeyMock,
        },
        props: {
            tip: Object,
        },
        computed: {
            isCtrl() {
                return this.$store.state.isCtrlLayout;
            },
            keys() {
                if (!this.tip.keys) { return undefined; }
                const filteredKeys = this.tip.keys.filter(key => {
                    if(this.isCtrl) {
                        return key.isCtrlLayout
                    } else {
                        return !key.isCtrlLayout
                    }
                });

                // When no different keys specified, just return all keys (they are the same on both keyboard layouts)
                if (!filteredKeys.length) {
                    return this.tip.keys;
                } else {
                    return filteredKeys;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.tip {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid $color-grey;
    max-width: 1440px;
    margin: 0 auto;
    padding: 40px 20px;

    .text {
        text-align: left;
        width: 50%;
        padding-right: 20px;

        h2 {
            margin: 0;
            margin-bottom: 10px;
        }

        p {
            margin: 0;
        }
    }

    .image {
        width: 50%;
        display: flex;
        justify-content: flex-end;
    }

    @media (max-width: 800px) {
        flex-direction: column;

        .text {
            width: 100%;
            padding-right: 0;
            padding-bottom: 30px;
        }

        .image {
            width: 100%;
        }
    }
}

.image-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    max-width: 100%;
    max-height: 100%;

    img {
        max-height: 100%;
        max-width: 100%;

        &[lazy=loaded] {
            border: 3px solid $color-black;
        }
    }

    @media (max-width: 800px) {
        height: auto !important;
    }

}

.shortcuts {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 30px;

    .shortcut {
        display: flex;
        align-items: center;

        .plus {
            font-size: 24px;
            margin: 0 10px;
            font-weight: 700;
        }
    }
}

</style>