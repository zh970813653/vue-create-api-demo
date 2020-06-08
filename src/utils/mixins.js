import { mapActions, mapGetters } from 'vuex'

export const store = {
  component: {
    ...mapGetters([
      'toastVisible',
      'popVisible'
    ])
  },
  methods: {
    ...mapActions([
      'setToastVisible',
      'setPopVisible'
    ])
  }
}
