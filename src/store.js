import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    token: "",
    car_arr: JSON.parse(localStorage.getItem("car_arr")) || [], // 存储购物车商品的数组
  },
  mutations: {
    // 设置vuex的token  给token赋值
    setToken(state, token){
      state.token = token
    },
    // 添加商品到购物车
    addCar(state, val){
      let goods = state.car_arr.find(v=>v.title==val.label)
      if (goods) {
        goods.cartCount += 1        
      } else {
        state.car_arr.push({title: val.label, cartCount: 1})
      }
    },
    // 购物车商品数量+1
    car_add(state, index){
      state.car_arr[index].cartCount++
    },
    // 购物车商品数量-1
    car_remove(state, index){
      if (state.car_arr[index].cartCount > 1) {
        state.car_arr[index].cartCount--
      } else {
        if (window.confirm("确定从购物车移除该商品么？")) {
          state.car_arr.splice(index, 1)
        } 
      }
    },
    // 清空购物车
    clear_car(state){
      state.car_arr = []
    }
  },
  actions: {

  },
  // 相当于vue的computed  计算属性
  getters: {
    count_sum:state=>{
      let sum = 0
      state.car_arr.forEach(v=>{
        sum += v.cartCount
      })
      return sum
    }
  }
})

// 监听每次调用mutation时候都会先走这一方法，然后进行将数据存到localStorage进行持久化存储
store.subscribe((mutations, state)=>{
  localStorage.setItem("car_arr", JSON.stringify(state.car_arr))
})
export default store
