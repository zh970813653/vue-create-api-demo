<template>
  <div class="js">
    {{fullname}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      firstname: 'zhang',
      lastname: 'hang'
    }
  },
  computed: {
    fullname: {
      get () {
        return `${this.firstname} ${this.lastname}`
      },
      set (val) {
        var arr = val.split(' ')
        this.firstname = arr[0]
        this.lastname = arr[1]
      }
    }
  },
  mounted () {
    console.log(this.fullname = 'wang meng')
    // console.log()

    // const arr = [1, 2, 3, 4, 5, 6]
    // arr.a = 9
    // for (const index in arr) {
    //   // eslint-disable-next-line eqeqeq
    //   if (index == 2) {
    //     continue
    //   }
    //   console.log(index, arr[index])
    //   }
    // const args = document.querySelectorAll('.zxc')
    // Array.from(args, () => {
    //   console.log()
    // })
    // console.log(args)
    // const arrs = Array(6).fill(10)
    // console.log(arrs)
    // const arrs = Array(6).join('').split('').map(item => 1)
    // console.log(arrs)
    //   const Person = function (name) {
    //     this.name = name
    //   }
    //   Person.prototype.eat = function () {
    //     Person.walk()
    //     console.log('eat food')
    //   }
    //   Person.walk = function () {
    //     console.log('this is walk')
    //   }
    //   const dog = new Person('dog')
    //   dog.eat()
    // function fn (x, y, z) {

    // }
    // function sum () {
    //   let num = 0
    //   console.log(arguments)
    //   Array.from(arguments).forEach(item => {
    //     console.log(item)
    //     num += item
    //   })
    //   return num
    // }
    // console.log(sum(1, 3, 5, 6))

    //   const obj = {
    //     a: 1,
    //     b: '22',
    //     asd: 'ewq'
    //   }
    //   const o = new Map(Object.entries(obj)).size
    //   console.log(o)

    // const arr = [1, 2, 3, 4, 5, 6, 7]
    // const [one, two, ...three] = arr
    // console.log(one, two, three)

    // const optios = {
    //   size: {
    //     width: 100,
    //     height: 100
    //   },
    //   items: ['zhang', 'hang'],
    //   flag: true
    // }
    // const { size: { width }, items: [item1] } = optios
    // console.log(width, item1)
    // eslint-disable-next-line no-unused-vars
    // const obj = {
    //   width: 100,
    //   height: 100,
    //   display: 'block'
    // }
    // function fn ({ width, height, display } = obj) {
    //   console.log(width)
    // }
    // fn()

    // const p1 = () => {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve(1000)
    //     }, 1000)
    //   })
    // }
    // const p2 = () => {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve(1)
    //     }, 0)
    //   })
    // }

    // Promise.race([p1(), p2()]).then(res => {
    //   console.log(res)
    // })

    // const price = 91.5

    // console.log(Reflect.apply(price > 100 ? Math.floor : Math.ceil, null, [price]))
    // Object.defineProperty()

    // const obj = { x: 1, y: 2 }
    // 用于判断一个对象的属性是否存在
    // console.log(Reflect.has(obj, 'z'))

    // console.log(Reflect.getOwnPropertyDescriptor);

    // 你会如何去给一个对象的属性设置只读的？
    // const obj = {
    //   nameL: 'zhanghang',
    //   price: 190
    // }
    // for (const [key] of Object.entries(obj)) {
    //   Object.defineProperty(obj, key, {
    //     writable: false
    //   })
    // }
    // // obj.price = 200
    // console.log(obj.nameL, obj.price)

    // const obj = {
    //   nameL: 'zhanghang',
    //   price: 190
    // }

    // const d = new Proxy(obj, {
    //   get (target, key) {
    //     return target[key] || ''
    //   },
    //   set (target, key, value) {
    //     if (Reflect.has(target, key)) {
    //       if (key === 'price') {
    //         if (value > 300) {
    //           throw new TypeError('price is 300 !!')
    //         } else {
    //           target[key] = value
    //           return true
    //         }
    //       } else {
    //         target[key] = value
    //         return true
    //       }
    //     } else {
    //       return false
    //     }
    //   }
    // })
    // d.price = 301
    // console.log(d.nameL, d.price)
    // const obj = {
    //   name: 'zhanghang',
    //   age: 18
    // }
    // const d = new Proxy(obj, {
    //   set (target, key, value) {
    //     if (key === 'age') {
    //       throw new TypeError('???obj.age不可以更改')
    //     }
    //   }
    // })
    // d.age = 15
    // console.log(d)
    // const obj = {
    //   name: 'zhanghang',
    //   age: 18
    // }
    // const d = Proxy.revocable(obj, {
    //   get (target, key) {
    //     if (key === 'age') {
    //       return target[key]
    //     } else {
    //       return target[key]
    //     }
    //   }
    // })

    // console.log(d.proxy.age)
    // setTimeout(() => {
    //   d.revoke()
    //   setTimeout(() => {
    //     console.log(d.proxy.age)
    //   }, 1000)
    // }, 3000)

    // function * loop () {
    //   const val = yield 3
    //   console.log(val)
    // }
    // const i = loop()
    // i.next(10)
    // i.next(20)
    // i.next(30)
    // console.log(2 ** 5)

    // Object.keys  取一个对象的所有key值 返回的是一个数组
    // Object.values 取一个对象的所有值 返回的也是一个数组
    // padStart  padEnd 字符串补白
    // const obj = {
    //   name: 'zhanghang',
    //   age: 18,
    //   data: 'dsa'
    // }
    // Object.defineProperty(obj, 'name', {
    //   enumerable: false // 让对象的某个属性不能被枚举
    // })
    // console.log(Object.getOwnPropertyDescriptor(obj, 'data'))

    // const obj = {
    //   name: 'Eason',
    //   age: 30
    // }
    // const handler = {
    //   get (target, key, receiver) {
    //     console.log('get', key)
    //     return Reflect.get(target, key, receiver)
    //   },
    //   set (target, key, value, receiver) {
    //     console.log('set', target, key, value)
    //     return Reflect.set(target, key, value, receiver)
    //   }
    // }
    // const proxy = new Proxy(obj, handler)
    // proxy.name = 'Zoe'
    // proxy.age = 18
    // class Person {
    //   constructor () {
    //     this.name = 'zhu'
    //   }
    // }
    // eslint-disable-next-line no-unused-vars
    // const son = new Person()
    // console.log(Object.instance(Person))
  }
}
</script>

<style lang="less" scoped>
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.fade-enter-active {
  transform-origin: left center;
}
</style>
