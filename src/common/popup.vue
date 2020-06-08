<template>
    <transition name="fade">

  <div class="popup" v-if="popVisible">
      <div class="popup-bg" @click="hide"></div>
    <transition name="slide-up">
      <div class="popup-wrapper" v-if="title&&title.length" v-show="visible">
        <div class="popup-title">{{title}}</div>
        <div
          v-for="(item,index) in btn"
          :key="index"
          class="popup-btn"
          :class="{'danger':item.type==='danger'}"
          @click="item.click"
        >{{item.text}}</div>
      </div>
    </transition>
  </div>
    </transition>

</template>

<script>
// import { store } from '@/utils/mixins'
export default {
  // mixins: [store],
  name: 'popup',
  props: {
    title: String,
    btn: Array
  },
  data () {
    return {
      popVisible: false,
      visible: false
    }
  },
  methods: {
    show () {
      this.popVisible = true
      setTimeout(() => {
        this.visible = true
      })
    },
    hide () {
      this.visible = false

      setTimeout(() => {
        this.popVisible = false
      }, 200)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/base.scss";
.popup {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.4);
  .popup-bg {
    width: 100%;
    height: 100%;
  }
  .popup-wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    background: white;
    // @include
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    // padding: rem(10) 0;
    .popup-title {
      height: rem(44);
      width: 100%;
      border-bottom: rem(1) solid #7d7d7d;
      font-size: rem(20);
      @include center;
    }
    .popup-btn {
      font-size: rem(16);
      padding: rem(5) 0;
      &.danger {
        color: red;
      }
    }
  }
}

.fade-enter,.fade-leave-to{
  opacity: 0;
}
.fade-enter-active,.fade-leave-active{
  transition: all .3s ease;
}
</style>
