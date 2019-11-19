<template>
  <div class='mine'>
      <ul>
        <li v-for="item, index in arr" class="mine_li" :key="index" @click="change(item)">
          <span class="mine_span">{{item.label}}</span>
          <i class="cubeic-arrow"></i>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
name: 'mine',
  data(){
    return {
      arr: [
        { label: "商品收藏" },
        { label: "我的足迹" },
        { label: "店铺收藏" },
        { label: "我的订单" },
        { label: "退出", type: "exit" },
      ]
    };
  },

  created() {},

  mounted() {},

  methods: {
    change(val){
      if (val.type == "exit") {
        this.$store.commit("setToken", "")
        localStorage.removeItem("token")
        this.$router.push("/login")
      }
    }
  },
}

</script>
<style lang='scss' scoped>
.mine_li{
  font-size: 14px;
  text-align: left;
  height: 50px;
  line-height: 50px;
  padding-left: 5%;
  border-bottom: 1px solid #eee;
  .mine_span{
    display: inline-block;
    width: 90%;
  }
}
</style>