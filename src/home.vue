

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <a href="https://www.baidu.com">baidu</a>
</template>

<script lang="ts">
import { defineComponent, onMounted, onActivated } from 'vue'

export default defineComponent({
  name: 'HomePage',
  setup() {
    onMounted(() => {
      console.log('mounted')
      window.addEventListener('pageshow', function (event) {
        console.log('after , pageshow 1:', event)
      })
    })
    onActivated(() => {
      console.log('onActivated')
    })
  }
})
</script>

