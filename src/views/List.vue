<template>
  <div class='panelsbox'>
    <cube-scroll class="leftpanels">
      <ul>
        <li v-for="item, index in tabList" @click="selectlist(index)" :class="item.active?'active':''" :key="index">
          {{item.label}}
        </li>
      </ul>
    </cube-scroll>
    <cube-scroll class="rightpanels">
      <ul>
        <li v-for="item, index in tags" :key="index">
          <img :src="item.image" alt="">
          <p>{{item.label}}<i class="cubeic-add" @click="addToCar($event, item)"></i></p>
        </li>
      </ul>
    </cube-scroll>
  </div>
</template>

<script>
export default {
name: 'list',
  data(){
    return {  
      tabList: [
        {
          label: "热门推荐",
          active: true
        },
        {
          label: "手机数码",
          active: false
        },
        {
          label: "家用电器",
          active: false
        },
        {
          label: "家用空调",
          active: false
        },
        {
          label: "电脑产品",
          active: false
        },
        {
          label: "计生情趣",
          active: false
        },
        {
          label: "美妆护肤",
          active: false
        },
        {
          label: "口红",
          active: false
        },
        {
          label: "手袋",
          active: false
        },
        {
          label: "金银财宝",
          active: false
        },
        {
          label: "金银财宝",
          active: false
        },
        {
          label: "金银财宝",
          active: false
        },
        {
          label: "电脑产品",
          active: false
        },
        {
          label: "计生情趣",
          active: false
        },
        {
          label: "美妆护肤",
          active: false
        },
        {
          label: "口红",
          active: false
        },
      ],
      tags: []
    };
  },

  created() {
  },

  mounted() {
    var that = this
    that.getclassify(0)
    // 设置滚动盒子高度
    const leftHeight = document.querySelector(".leftpanels")
    const rightHeight = document.querySelector(".rightpanels")
    const bodyHeight = document.documentElement.clientHeight
    leftHeight.style.height = bodyHeight - 63 + "px"
    rightHeight.style.height = bodyHeight - 63 + "px"
  },

  methods: {
    // 点击左侧分类
    selectlist(val){
      this.tabList.forEach((item, index)=>{
        if (val == index) {
          item.active = true
        } else {
          item.active = false
        }
      });
      this.getclassify(val)
    },
    // 获取分类
    async getclassify(index){
      const result = await this.$http.get("/api/classify", {params: {type: index}})
      this.tags = result.data
    },
    // 添加商品到vuex
    addToCar(e, val){
      var that = this
      that.$store.commit('addCar', val)
    }
  },
}

</script>
<style lang='stylus' scoped>
 .panelsbox
  display flex
  .leftpanels
      width 30%
      li
          height 50px
          line-height 50px
          border-bottom 1px solid #fff
          color #333
          background #f8f8f8
          font-size  14px
      .active
          background #fff
          color #e93b3d
  .rightpanels
      width 70%
      ul
          display flex
          flex-wrap  wrap
          li
              width 50%
              justify-content center
              align-items center
              font-size 15px
              img 
                  width 80px
                  height  80px
              .cubeic-add
                font-size 18px
</style>