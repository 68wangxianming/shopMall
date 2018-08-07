const BASEURL = 'https://www.easy-mock.com/mock/5ae2eeb23fbbf24d8cd7f0b6/SmileVue/'
const LOCALURL = 'http://localhost:5000/'
const URL = {
  getShopingMailInfo: BASEURL + 'index',
  getGoodsInfo: BASEURL + 'getGoodsInfo',
  registerUser: LOCALURL + 'user/register',
  login: LOCALURL + 'user/login',
  getDetailGoodsInfo: LOCALURL + 'goods/getDetailGoodsInfo',
  getCategoryList:LOCALURL+'goods/getCategoryList',
  getCateGorySubList : LOCALURL+'goods/getCategorySubList',  //得到小类信息
  getGoodsListByCategorySubID : LOCALURL+'goods/getGoodsListByCategorySubID',  //得到小类商品信息
}


module.exports = URL
