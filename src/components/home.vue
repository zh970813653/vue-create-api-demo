<template>
  <div class="home">
    <!-- {{message|priceValue}} -->
    <input @input="input" type="text" v-model="message">
    <div>{{message|priceValue}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    input () {
      console.log(1)
    }
  },
  mounted () {
    const date = new Date()
    console.log(date.getHours())
    console.log(date.getMinutes())
    console.log(date.getSeconds())
    console.log(date % 60)
    // console.log(date.getHours())
  }

}
</script>

<style>

</style>
