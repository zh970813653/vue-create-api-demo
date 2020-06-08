<template>
  <div class="father">
    <div class="tab-list">
      <router-link
      tag="div"
      class="list-item"
      v-for="(item,index) in list"
      :key="index"
      :to="item.path"
      >{{item.id}}</router-link>
    </div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          id: 1,
          text: '1页面',
          path: '/one'
        },
        {
          id: 2,
          text: '2页面',
          path: '/two'

        },
        {
          id: 3,
          text: '3页面',
          path: '/three'

        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.father{
  width: 200px;
  height: 500px;
  background: skyblue;
  margin: 50px auto;
  position: relative;
  .tab-list{
    width: 100%;
    height: 50px;
    background: pink;
    display: flex;
    .list-item{
      width: 33.3%;
      text-align: center;
      line-height: 50px;
      &.router-link-active{
        color: red;
      }
    }
  }
}

</style>
