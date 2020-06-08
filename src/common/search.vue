<template>
  <div class="search-input">
    <input type="text" class="input" v-model="keyword" @input="input" />
    <scroll class="scroll">
      <template v-slot:wrapper>
        <div class="search-input-list">
          <li class="item" v-for="(item,index) in list" :key="index">{{item}}</li>
        </div>
      </template>
    </scroll>
  </div>
</template>

<script>
// import BScroll from 'better-scroll'
import scroll from '@/common/scroll'
export default {
  components: {
    scroll
  },
  props: {
    dataList: Object
  },
  data () {
    return {
      keyword: '',
      timer: null,
      list: []
    }
  },
  computed: {
    getKey () {
      const keyList = []
      for (const key in this.dataList) {
        keyList.push(key)
      }
      return keyList
    }
  },
  methods: {
    input () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for (const key in this.dataList) {
          // console.log(this.dataList[key])
          // console.log(this.dataList[key])
          // console.log(this.result)

          this.dataList[key].forEach((item, index) => {
            if (
              item.spell.indexOf(this.keyword) !== -1 ||
              item.name.indexOf(this.keyword) !== -1
            ) {
              result.push(item.name)
              // console.log(item)
            }
          })
          this.list = result
        }
      }, 200)
    }
  },
  mounted () {
    // this.scroll = new BScroll(this.$refs.scroll)
  }
}
</script>

<style lang='scss' scoped>
@import "../assets/styles/base.scss";
.search-input {
  width: rem(300);
  height: rem(50);
  border-radius: 50px;
  background: pink;
  background: #fff;
  position: relative;
  .input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
    text-indent: rem(20);
    font-size: rem(20);
  }
  .scroll {
    height: rem(160);
    overflow: hidden;
    position: absolute;
    top: rem(50);
    right: 0;
    z-index: 999;
    width: 100%;
    border: rem(1) solid #000;
  }
  .search-input-list {
    background: white;
    .item {
      padding-left: rem(15);
      border-bottom: rem(1) solid #eee;
    }
  }
}
</style>
