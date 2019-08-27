<template>
  <div class='bot-nav'>
      <router-view/>
    <cube-tab-bar
        v-model="selectedLabelDefault"
        :data="tabs"
        @click="clickHandler"
        @change="changeHandler"
        class="botnav">
    </cube-tab-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
        }]
        }
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
  }
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
        .cube-tab{
            div{
                font-size: 16px;
                padding-bottom: 3px;
            }
            i{
                font-size: 20px;
            }
        }
    }
</style>