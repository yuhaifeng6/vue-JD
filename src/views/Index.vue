<template>
  <div class='index' id="index">
    <!-- 轮播图 -->
    <cube-slide ref="slide" :data="items" @change="changePage">
      <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
        <a :href="item.url">
          <img :src="item.image">
        </a>
      </cube-slide-item>
    </cube-slide>
    <!-- 滚动分类 -->
    <cube-slide ref="slidelists" :auto-play="false" :data="lists" @change="changePage">
      <cube-slide-item v-for="(item, index) in lists" :key="index" @click.native="clickHandler(item, index)">
        <ul class="list-ul">
          <li class="list-li" v-for="(val, index1) in item" :key="index1">
            <a :href="val.url">
              <img :src="val.image" alt="">
              <p>{{val.label}}</p>
            </a>
          </li>
        </ul>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>

<script>
export default {
name: 'index',
  data(){
    return {
      items: [], //轮播图
      lists: [], //滚动分类
    };
  },

  async created() {
    var that = this
    try {
      // 获取轮播图图片地址
      const banner = await that.$http.get("/api/getBanner")
      that.items = banner.data
    } catch (error) {
      console.log(error)
    }
    try {
      // 获取分类滚动
      const scrollList = await that.$http.get("/api/srollinglist")
      that.lists = scrollList.data
    } catch (error) {
      console.log(error)
    }
  },

  mounted() {
  },

  methods: {
    changePage(current) {
      // console.log('当前轮播图序号为:' + current)
    },
    clickHandler(item, index) {
      // console.log(item, index)
    }
  },
}

</script>
<style lang='scss' scoped>
.index{
  a{
    img{
      width: 100%;
      height: 150px;
    }
  }
  .list-ul{
    display: flex;
    flex-wrap: wrap;
    .list-li{
      width: 20%;
      justify-content: center;
      img{
        width: 35px;
        height: 35px;
        border-radius: 50%;
        padding: 5px 0;
      }
      p{
        font-size: 14px;
        padding-bottom: 5px;
      }
    }
  }
}
</style>