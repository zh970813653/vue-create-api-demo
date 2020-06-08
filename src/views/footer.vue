<template>
  <div class="footer">
    <div
    @click="changeSelectId(item.id,item.text)"
    class="footer-wrapper"
    :class="{'select':item.id===selectId}"
    v-for="item in dataList"
    :key="item.id">
      <span class="item">{{item.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataList: [
        {
          text: '通知',
          id: 1
        },
        {
          text: '通讯录',
          id: 2
        },
        {
          text: '发现',
          id: 3
        },
        {
          text: '我的',
          id: 4
        }
      ],
      selectId: 0
    }
  },
  methods: {
    changeSelectId (id, text) {
      console.dir(this.toast())

      this.selectId = id
      const toast = this.toast({
        text: `...${text}`
      })
      toast.show()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/base";
.footer{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  height: rem(50);
  box-shadow: 0 rem(-2) rem(10) rgba(0,0,0,.4);
  z-index: 999;
  .footer-wrapper{
    flex: 1;
    width: 25%;
    @include center;
    &.select{
      color:#FF2E5D
    }
  }
}
</style>
