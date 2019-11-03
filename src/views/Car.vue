<template>
  <div class='car'>
    <div class="goods" v-for="(item, index) in car_arr" :key="index">
      {{item.title}}
      <div class="goods_right">
        <i class="cubeic-remove" @click="remove_count(index)"></i>
        <span>{{item.cartCount}}</span>
        <i class="cubeic-add" @click="add_count(index)"></i>
      </div>
    </div>
    <cube-button style="margin: 10px 0;">下单</cube-button>
    <cube-button style="margin: 10px 0;" @click="clear_car">清空购物车</cube-button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
name: 'car',
  data(){
    return {
    };
  },
  
  computed: {
    ...mapState({
      car_arr:state=>state.car_arr
    })
  },

  mounted() {},

  methods: {
    // 减少数量
    remove_count(index){
      this.$store.commit("car_remove", index)
    },
    // 增加数量
    add_count(index){
      this.$store.commit("car_add", index)
    },
    // 清空购物车
    clear_car(){
      this.$store.commit("clear_car")
    }
  },
}

</script>
<style lang='scss' scoped>
.goods{
  padding: 10px;
  text-align: left;
  .goods_right{
    float: right;
    i{
      font-size: 18px;
    }
  }
}
</style>