<template>
  <div class="wrapper" ref="scroll">
    <slot name="wrapper"></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    listen: {
      type: Boolean,
      default: false
    },
    bounce: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    initScroll () {
      this.scroll = new BScroll(this.$refs.scroll)
      if (this.listen) {
        this.scroll.on('scroll', (pos) => {
          console.log(this)
          console.log(pos)

          this.$emit('scroll', pos)
        })
      }
    },
    refresh () {
      this.$refs.scrolll && this.scroll.refresh()
    },
    disable () {
      this.$refs.scrolll && this.scroll.disable()
    }
  },
  mounted () {
    // if (this.$refs.scrolll) {
    this.initScroll()
    // }
  }
}
</script>

<style>

</style>
