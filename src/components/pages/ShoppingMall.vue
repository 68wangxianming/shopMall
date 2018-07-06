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
      <div v-for="(cate,index) in category" :key="index">
        <img v-lazy="cate.image" width="90%"/>
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
          <img :src="item.image" width="80%"/>
          <div>{{item.goodsName}}</div>
          <div>￥{{item.price | moneyFilter}} (￥{{item.mallPrice}})</div>
        </div>
      </swiper-slide>
    </swiper>
    <!--floor one area-->
    <floorComponent :floorData="floor1"></floorComponent>
  </div>

</template>

<script>
import floorComponent from "@/components/pages/component/floorComponent";
import { toMoney } from "@/filter/moneyFilter.js";

export default {
  created() {
    this.axios({
      url: this.url.getShopingMailInfo,
      method: "get"
    }).then(res => {
      if (res.status == 200) {
        this.category = res.data.data.category;
        this.adBanner = res.data.data.advertesPicture; //获得广告图片
        this.recommendGoods = res.data.data.recommend; //推荐商品
        this.floor1 = res.data.data.floor1; //楼层1数据
        this.floor1_0 = this.floor1[0];
        this.floor1_1 = this.floor1[1];
        this.floor1_2 = this.floor1[2];
      }
    });
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3
      },
      locationIcon: require("../../assets/img/location.png"),
      bannerPicArray: [
        {
          imageUrl:
            "http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic001.jpg"
        },
        {
          imageUrl:
            "http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic002.jpg"
        },
        {
          imageUrl:
            "http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic003.jpg"
        }
      ],
      category: [],
      adBanner: "",
      recommendGoods: [],
      floor1: [],
      floor1_0: [],
      floor1_1: [],
      floor1_2: []
    };
  },
  components: { floorComponent },
  filters: {
    moneyFilter(money) {
      return toMoney(money);
    }
  }
};
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
  padding-top: 0.2rem;
  padding-left: 0.3rem;
}

.swiper-area {
  width: 20rem;
  clear: both;
  height: 9.5rem;
  overflow: hidden;
}

.type-bar {
  background-color: #fff;
  margin: 0 0.3rem 0.3rem 0.3rem;
  border-radius: 0.3rem;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.type-bar div {
  padding: 0.3rem;
  font-size: 12px;
  text-align: center;
}

.recommend-body {
  border-bottom: 1px solid #eee;
}

.recommend-item {
  width: 99%;
  border-right: 1px solid #eee;
  font-size: 12px;
  text-align: center;
}

.floor-anomaly {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}

.floor-anomaly div {
  width: 10rem;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

.floor-one {
  border-right: 1px solid #ddd;
}

.floor-two {
  border-bottom: 1px solid #ddd;
}

.floor-rule {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fff;
}

.floor-rule div {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 10rem;
  border-bottom: 1px solid #ddd;
}

.floor-rule div:nth-child(odd) {
  border-right: 1px solid #ddd;
}
</style>
