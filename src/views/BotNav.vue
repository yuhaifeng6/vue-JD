<template>
  <div class='bot-nav'>
    <transition :name="transitionName">
      <router-view class="Router"></router-view>
    </transition>
    <cube-tab-bar
      v-model="selectedLabelDefault"
      :data="tabs"
      @click="clickHandler"
      @change="changeHandler"
      class="botnav">
    </cube-tab-bar>
    <span class="count_sum">{{count_sum}}</span>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      transitionName: "slide-right",
      selectedLabelDefault: '首页',
      tabs: [{
            label: '首页',
            icon: 'cubeic-home'
          }, {
              label: '分类',
              icon: 'cubeic-tag'
          }, {
              label: '搜索',
              icon: 'cubeic-search'
          }, {
              label: '购物车',
              icon: 'cubeic-mall'
          }, {
              label: '我的',
              icon: 'cubeic-person'
          }],
      }
    },
  computed: {
    ...mapGetters({
      count_sum: "count_sum"
    })
  },
  methods: {
    clickHandler (label) {
      // if you clicked home tab, then print 'Home'
      console.log(label)
    },
    // 点击与自身不同的其他导航
    changeHandler (label) {
      // if you clicked different tab, this methods can be emitted
      switch (label) {
          case "首页":
              this.$router.push({path: "/botnav/index"})
              break;
          case "分类": 
            this.$router.push({path: "/botnav/list"})
            break;
          case "搜索": 
            this.$router.push({path: "/botnav/search"})
            break;
          case "购物车": 
            this.$router.push({path: "/botnav/car"})
            break;
          case "我的": 
            this.$router.push({path: "/botnav/mine"})
            break;
          default:
              break;
      }
    }
  },
  mounted() {
    switch(this.$route.path){
      case "/botnav/index": {
        this.selectedLabelDefault = "首页"
        break;
      }
      case "/botnav/list": {
        this.selectedLabelDefault = "分类"
        break;
      }
      case "/botnav/search": {
        this.selectedLabelDefault = "搜索"
        break;
      }
      case "/botnav/car": {
        this.selectedLabelDefault = "购物车"
        break;
      }
      case "/botnav/mine": {
        this.selectedLabelDefault = "我的"
        break;
      }
    }
  },
}

</script>
<style lang='scss' scoped>
    .botnav{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 100;
        background: #ffffff;
        border-top: 1px solid #ededed;
    }
    .Router{
      position: absolute;
      width: 100%;
      transition: all .8s ease;
    }
    .slide-left-enter, .slide-right-leave-active{
      opacity: 0;
      -webkit-transform: translate(100%, 0);
      transform: translate(100%, 0);
    }
    .slide-left-leave-active, .slide-right-enter{
      opacity: 0;
      -webkit-transform: translate(-100%, 0);
      transform: translate(-100%, 0); 
    }
    .count_sum{
      position: fixed;
      bottom: 43px;
      right: 23%;
      z-index: 1001;
      width: 18px;
      height: 18px;
      line-height: 18px;
      font-size: 14px;
      text-align: center;
      background: red;
      color: #ffffff;
      border-radius: 50%;
    }
</style>
<style lang="scss">
  .cube-tab{
    div{
      font-size: 16PX;
      padding-bottom: 3px;
      margin-top: 5px;
    }
    i{
      font-size: 20px;
    }
  }
</style>