<template>
  <div id="app">
    <custom-header></custom-header>
    <div class="tips">
      <shortcut-tip
        v-for="tip in tips"
        :key="tip.id"
        :tip="tip"
      />
    </div>
  </div>
</template>

<script>
import CustomHeader from './components/CustomHeader.vue'
import ShortcutTip from './components/ShortcutTip.vue'
import tips from '@/assets/data/tips.json'

export default {
  name: 'App',
  data(){
    return {
      tips,
    }
  },
  components: {
    CustomHeader,
    ShortcutTip,
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

body {
  margin: 0; 
  padding: 0;
  color: $color-black;
}
#app {
  font-family: 'Work Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
