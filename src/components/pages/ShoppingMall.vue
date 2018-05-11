<template>
  <div>
    <!--search bar layout-->
    <div class="search-bar">
      <van-row>
        <van-col span="3"><img :src="locationIcon" width="80%" class="location-icon"/></van-col>
        <van-col span="16">
          <input type="text" class="search-input"/>
        </van-col>
        <van-col span="4" offset="1">
          <van-button size="mini">查找</van-button>
        </van-col>
      </van-row>
    </div>

    <!--swipwer area-->
    <div class="swiper-area">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
          <img :src="banner.imageUrl" width="100%" v-lazy="banner.imageUrl"/>
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="type-bar">
      <div  v-for="(cate,index) in category" :key="index" >
        <img v-lazy="cate.image" width="90%" />
        <span>{{cate.mallCategoryName}}</span>
      </div>
    </div>

    <!--AD banner area-->
    <div class="ad-banner">
      <img v-lazy="adBanner.PICTURE_ADDRESS" width="100%">
    </div>

    <!--swiper-->
    <swiper :options="swiperOption">
      <swiper-slide v-for=" (item ,index) in recommendGoods" :key="index">
        <div class="recommend-item">

          <img :src="item.image" width="80%" />
          <div>{{item.goodsName}}</div>
          <div>￥{{item.price}} (￥{{item.mallPrice}})</div>

        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    created() {
      this.axios({
        url: 'https://www.easy-mock.com/mock/5af536578efab658654cbcdb/SmileVue/index',
        method: 'get',
      }).then((res)=>{
        if(res.status==200){
          this.category=res.data.data.category;
          this.adBanner = res.data.data.advertesPicture //获得广告图片
          this.recommendGoods = res.data.data.recommend  //推荐商品
          console.log(this.category);
        }
      })
    },
    data() {
      return {
        swiperOption:{
          slidesPerView:3
        },
        locationIcon: require('../../assets/img/location.png'),
        bannerPicArray: [
          {imageUrl: 'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic001.jpg'},
          {imageUrl: 'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic002.jpg'},
          {imageUrl: 'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic003.jpg'},
        ],
        category:[],
        adBanner:'',
        recommendGoods:[]
      }
    },

  }
</script>

<style scoped>
  .search-bar {
    height: 2.2rem;
    background-color: #e5017d;
    line-height: 2.2rem;
    overflow: hidden;
  }

  .search-input {
    width: 100%;
    height: 1.3rem;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 1px solid white !important;
    background-color: #e5017d;
    color: #fff;
  }

  .location-icon {
    padding-top: .2rem;
    padding-left: .3rem;
  }

  .swiper-area {
    width: 20rem;
    clear: both;
    height: 9.5rem;
    overflow: hidden;
  }

  .type-bar{
    background-color: #fff;
    margin:0 .3rem .3rem .3rem;
    border-radius: .3rem;
    font-size:14px;
    display: flex;
    flex-direction:row;
    flex-wrap:nowrap;
  }
  .type-bar div{
    padding: .3rem;
    font-size: 12px;
    text-align: center;
  }

  .recommend-body{
    border-bottom: 1px solid #eee;
  }

  .recommend-item{
    width:99%;
    border-right: 1px solid #eee;
    font-size: 12px;
    text-align: center;
  }
</style>
