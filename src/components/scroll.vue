<template>
  <div class="f1" ref="wrapper">
    <ul>
      <li>111</li>
      <li>222</li>
      <li>333</li>
      <li>444</li>
      <li>555</li>
    </ul>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  dataL () {
    return {}
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      scrollX: true,
      snap: true,
      zoom: true,
      eventPassthrough: 'vertical'
    })
  }
}
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.f1 {
  width: 300px;
  height: 300px;
  // background: pink;
  margin: 200px auto;
  white-space: nowrap;
  overflow: hidden;
  border:1px solid red;
  // padding-right: 50px;
}
ul{
  width: 1500px;
}
li {
  display: inline-block;
  width: 300px;
  height: 300px;
  background: yellow;
  border: 1px solid skyblue;
  // margin-right: 10px;
}
</style>
