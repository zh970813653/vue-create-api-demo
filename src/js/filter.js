import Vue from 'vue'

/*
 *金额数据梳理
 *@parm value
*/

Vue.filter('priceValue', (value) => {
  if (!value) return ''
  const result = parseFloat(value)
  if (Number.isInteger(result)) {
    return result
  } else {
    return result.toFixed(2)
  }
})
