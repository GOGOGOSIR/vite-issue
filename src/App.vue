

<template>
 <router-view v-slot="{ Component, route }">
    <keep-alive :include="['HomePage']">
      <component :is="Component" :key="route.fullPath" />
    </keep-alive>
  </router-view>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
