<template>
  <transition name="fade">
    <div v-if="visible" class="toast">
      <div class="toast-wrapper">{{text}}</div>
    </div>
</transition>

</template>

<script>
export default {
  name: 'toast',
  props: {
    text: String,
    setTimeout: {
      type: Number,
      default: 1500
    }
  },
  data () {
    return {
      visible: false,
      task: null
    }
  },
  methods: {
    show () {
      this.visible = true
      if (this.task) {
        clearTimeout(this.toast)
      }
      this.task = setTimeout(() => {
        this.visible = false
      }, this.setTimeout)
    },
    hide () {
      this.visible = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/base";
.toast {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  @include center;
  .toast-wrapper {
    width: rem(200);
    padding: rem(15);
    background: #7d7d7d;
    @include center;
    color: #fff;
    font-size: rem(18);
  }
}
</style>
