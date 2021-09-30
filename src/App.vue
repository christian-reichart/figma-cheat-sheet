<template>
  <div id="app">
    <custom-header></custom-header>
    <div class="tips">
      <shortcut-tip
        v-for="tip, index in tips"
        :key="index"
        :tip="tip"
      />
    </div>
    <div class="iconography">
      <h2>Important Iconography</h2>
      <div class="icons">
        <div class="icon">
          <img src="@/assets/img/master-component.svg" />
          <h3>Master Component</h3>
          <p>This is the "blueprint" of a reusable component.</p>
        </div>
        <div class="icon">
          <img src="@/assets/img/component-instance.svg" />
          <h3>Component Instance</h3>
          <p>One of many instances linked to the master component.</p>
        </div>
        <div class="icon">
          <img src="@/assets/img/frame.svg" />
          <h3>Frame</h3>
          <p>The "Screens" in Figma.</p>
        </div>
      </div>
    </div>
    <p class="bottom-text">
      Something missing? :) Write me at <a href="mailto:hello@christianreich.art">hello@christianreich.art</a>.
    </p>
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

.tips {
  margin: 0 30px;
  margin-bottom: 60px;
}

.iconography {
  max-width: 1440px;
  margin: 0 auto;

  h2 {
    text-align: center;
    margin-bottom: 30px;
  }

  .icons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .icon {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 20px;
      min-width: 200px;

      img {
        height: 60px;
      }

      h3 {
        margin-bottom: 10px;
      }

      p {
        margin-top: 0;
      }
    }
  }
}

.bottom-text {
  background-color: $color-grey-light;
  padding: 40px 30px;
  text-align: center;
  margin: 0;
  margin-top: 60px;
}
</style>
