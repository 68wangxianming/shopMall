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
          <img :src="banner.image" width="100%" v-lazy="banner.image"/>
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
      <img v-lazy="adBanner" width="100%">
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
    <floor-component :floorData="floor1" :floorTitle="floorName.floor1"></floor-component>
    <floor-component :floorData="floor2" :floorTitle="floorName.floor2"></floor-component>
    <floor-component :floorData="floor3" :floorTitle="floorName.floor3"></floor-component>


    <!--Hot Area-->
    <div class="hot-area">
      <div class="hot-title">热卖商品</div>
      <div class="hot-goods">
        <!--这里需要一个list组件-->
        <van-list>
          <van-row gutter="20">
            <van-col span="12" v-for="(item , index) in hotGoods" :key="index">
              <goods-info :goodsId="item.goodsId" :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.price">

              </goods-info>
            </van-col>
          </van-row>
        </van-list>
      </div>
    </div>

  </div>

</template>

<script>
  import {swiper , swiperSlide} from 'vue-awesome-swiper'
import floorComponent from "@/components/pages/component/floorComponent";
import { toMoney } from "@/filter/moneyFilter.js";
import goodsInfo from '@/components/pages/component/goodsInfoComponent'


export default {
  created() {
    this.axios({
      url: this.url.getShopingMailInfo,
      method: "get"
    }).then(response => {
      if (response.status == 200) {
        this.category=response.data.data.category;
        this.adBanner = response.data.data.advertesPicture.PICTURE_ADDRESS;
        this.bannerPicArray= response.data.data.slides;
        this.recommendGoods = response.data.data.recommend;
        this.floor1 = response.data.data.floor1;
        this.floor2 = response.data.data.floor2;
        this.floor3 = response.data.data.floor3;
        this.floorName = response.data.data.floorName;
        this.hotGoods = response.data.data.hotGoods;
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
      floor1:[],
      floor2:[],
      floor3:[],
      floorName:{},
      hotGoods:[],  //热卖商品
    };
  },
  components:{swiper,swiperSlide,floorComponent,goodsInfo},
  filters: {
    moneyFilter(money) {
      return toMoney(money);
    }
  }
};
</script>

<style scoped>
  .search-bar{
    height:2.2rem;
    background-color: #e5017d;
    line-height: 2.2rem;
    overflow: hidden;
  }
  .search-input{
    width:100%;
    height: 1.3rem;
    border-top:0px;
    border-left:0px;
    border-right:0px;
    border-bottom:1px solid #fff !important;
    background-color: #e5017d;
    color:#fff;
  }
  .location-icon{
    padding-top:.2rem;
    padding-left:.3rem;
  }
  .swiper-area{
    clear:both;
    max-height:15rem;
    overflow: hidden;
  }
  .type-bar{
    background-color: #fff;
    margin:0 .3rem .3rem .3rem;
    border-radius: .3rem;
    font-size:14px;
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
  }
  .type-bar div{
    padding:.3rem;
    font-size:12px;
    text-align: center;
    flex:1;
  }
  .recommend-area{
    background-color: #fff;
    margin-top:.3rem;
  }
  .recommend-title{
    border-bottom:1px solid #eee;
    font-size:14px;
    padding:.2rem;
    color:#e5017d;
  }
  .recommend-body{
    border-bottom:1px solid #eee;
  }
  .recommend-item{
    width:99%;
    border-right:1px solid #eee;
    font-size:12px;
    text-align: center;
  }
  .hot-area{
    text-align: center;
    font-size:14px;
    height: auto;
    line-height:1.8rem;
    overflow: hidden;
  }
</style>
