import axios from 'axios'

export function axiosJSON (url, method = 'get', params = {}) {
  console.log(url)
  url = `http://localhost:8080${url}`
  return new Promise((resolve, reject) => {
    axios({
      method,
      url,
      params
    }).then((res) => {
      return resolve(res)
    }).catch(e => {
      return reject(e)
    })
  })
}
