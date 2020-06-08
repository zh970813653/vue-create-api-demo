<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'
  // console.log(fontSize)
})
</script>

<style lang="scss">
@import './assets/styles/base.scss';
#app{
  font-size: rem(24);
  // background: skyblue;
}
</style>
