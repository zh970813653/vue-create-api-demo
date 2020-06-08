import Vue from 'vue'
import CreateApi from 'vue-create-api'
import Toast from '../common/toast'

Vue.use(CreateApi)

Vue.createAPI(Toast, true)

Vue.mixin({
  methods: {
    toast (settings) {
      return this.$createToast({
        $props: settings
      })
    }
  }
})
