<template>
  <div class="hello">
    <div>
      <head-nav :clect="clectnav"></head-nav>
    </div>
    <div class="warp">
      <div class="top">
        <div class="t_l">
          <img src="../../../static/images/bank1.png" alt="">
          <div class="int">
            <h2>铜陵银行</h2>
            <h4><span>浏览: 200次</span><span>关注:10</span></h4>
            <p>贵阳银行股份有限公司（简称：“贵阳银行”）成立于1997年，注册资本22.99亿元，总行位于贵州省贵阳市。2016年8月，贵阳银行首次公开发行股票在上海证券交易所成功上市，股票代码601997。目前，全行下辖9个省内分行、1个省外分行，机构网点实现贵州省88个县域全覆盖，发起设立贵阳贵银金融租赁有限责任公司和广元市贵商村镇银行股份有限公司，初步形成立足贵州、辐射西南、面向全国的服务网络。</p>
          </div>
        </div>
        <div class="t_r">
          <h3><span>企业信息</span></h3>
          <ul>
            <li>所属行业:银行</li>
            <li>注册资金:500万</li>
            <li>所在地址:贵州省贵阳市中华北路77号 </li>
            <li>联系电话:400-119-6033 </li>
            <li> 服务邮箱：jydfsd@126.com </li>
            <li>单位信用：信用企业</li>
            <li>单位规模：</li>


          </ul>
        </div>
      </div>
      <div class="server">
        <div class="s_l">
          <h4><span>产品/服务</span></h4>
          <ul>
            <li><img src="../../../static/images/licai.png" alt=""><span>个人理财</span></li>
            <li><img src="../../../static/images/licai.png" alt=""><span>个人理财</span></li>
            <li class="selec"><img src="../../../static/images/licai.png" alt=""><span>个人理财</span></li>
            <li><img src="../../../static/images/licai.png" alt=""><span>个人理财</span></li>
            <li><img src="../../../static/images/licai.png" alt=""><span>个人理财</span></li>
            <li class="selec"><img src="../../../static/images/licai.png" alt=""><span>个人理财</span></li>
          </ul>
        </div>
        <div class="c_l">
          <h4><span>近期需求</span></h4>
          <ul>
            <li><b>[需求]</b><strong>销售桂花树</strong><i>1000颗</i><span>2019-9-12</span></li>
            <li><b>[需求]</b><strong>销售桂花树</strong><i>1000颗</i><span>2019-9-12</span></li>
            <li><b>[需求]</b><strong>销售桂花树</strong><i>1000颗</i><span>2019-9-12</span></li>
            <li><b>[需求]</b><strong>销售桂花树</strong><i>1000颗</i><span>2019-9-12</span></li>
            <li><b>[需求]</b><strong>销售桂花树</strong><i>1000颗</i><span>2019-9-12</span></li>
            <li><b>[需求]</b><strong>销售桂花树</strong><i>1000颗</i><span>2019-9-12</span></li>
          </ul>
        </div>
      </div>
      <div class="zheng">
        <h4><span>企业资质</span></h4>
        <ul>
          <li><img src="../../../static/images/zheng.png" alt=""></li>
          <li><img src="../../../static/images/zheng.png" alt=""></li>
          <li><img src="../../../static/images/zheng.png" alt=""></li>
          <li><img src="../../../static/images/zheng.png" alt=""></li>
          <li><img src="../../../static/images/zheng.png" alt=""></li>
          <li><img src="../../../static/images/zheng.png" alt=""></li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <footer-nav></footer-nav>
    </div>
  </div>
</template>
<script>
    import headNav from "../headNav";
    import footerNav from "../footer"
    import $ from 'jquery'
    export default {
        name: "myspace",
        data () {
            return {
                clectnav: 3,
                user:'',
                password:'',
                imgUrl:['../../static/images/4.jpg','../../static/images/54.jpg',
                    '../../static/images/6.jpg','../../static/images/7.jpg'],
                swiperOption:{
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                        type: "bullets"
                    },
                    autoplay:{
                        delay:1000
                    },
                    loop:true,
                    speed:800,
                    effect:'slider'//切换效果 fade, slider ,cube,"coverflow",flip
                }
            }
        },
        created(){
            // this.axios.post('/web/index/index').then((data)=>{console.log(data)})
        },
        methods:{

        },
        components:{
            headNav,
            footerNav
        }
    }
</script>

<style scoped lang="less">
  .warp{
    width: 1200px;
    margin: auto;
    .top{
      height: 275px;
      margin-top: 20px;
      .t_l{
        float: left;
        width: 860px;
        height:275px;
        border:1px solid rgba(230,230,230,1);
        img{
          display: block;
          float: left;
          margin: 20px;
        }
        .int{
          float: left;
          width: 466px;
          h2{
            margin-top: 10px;
            line-height: 40px;
            height: 40px;
            font-size:20px;
            font-weight:400;
            color:rgba(69,69,69,1);
          }
          h4{
            height: 26px;
            line-height: 26px;
            font-size:12px;
            font-weight:400;
            color:rgba(179,179,179,1);
            span{
              display: block;
              float: left;
              height: 26px;
              line-height: 26px;
            }
            span:last-child{
              margin-left: 17px;
            }
          }
          p{
            margin-top: 9px;
            height: 160px;
            line-height: 24px;
            font-size:14px;
            font-weight:400;
            color:rgba(102,102,102,1);
            overflow: hidden;
          }
        }

      }
      .t_r{
        width:316px;
        height:275px;
        border:1px solid rgba(230,230,230,1);
        float: left;
        margin-left: 20px;
        h3{
          width:316px;
          height:36px;
          background:rgba(245,245,245,1);
          span{
            width:120px;
            height:36px;
            background:rgba(232,57,10,1);
            display: block;
            text-align: center;
            line-height: 36px;
            font-size:20px;
            font-weight:bold;
            color:rgba(255,255,255,1);
          }
        }
        ul{
          width: 265px;
          height: 172px;
          padding: 25px 20px 40px 20px;
          li{
            width: 265px;
            height: 24px;
            line-height: 24px;
            font-size:14px;
            font-weight:400;
            color:rgba(69,69,69,1);
          }
        }
      }
    }
    .server{
      height: 342px;
      margin-top: 20px;
      .s_l {
        float: left;
        width:590px;
        height:342px;
        border:1px solid rgba(230,230,230,1);
        h4{
          width:590px;
          height:36px;
          background:rgba(245,245,245,1);
          span{
            display: block;
            width:120px;
            height:36px;
            text-align: center;
            line-height: 36px;
            background:rgba(232,57,10,1);
            font-size:20px;
            font-family:Microsoft YaHei;
            font-weight:bold;
            color:rgba(254,254,254,1);
          }
        }
        ul{
          padding: 30px 20px 13px 20px;
          width: 549px;
          height: 263px;
          li{
            cursor: default;
            width: 160px;
            float: left;
            height: 123px;
            margin-right: 30px;
            margin-bottom: 8px;
            img{
              width: 160px;
              height: 91px;
            }
            span{
              display: block;
              height: 32px;
              line-height: 32px;
              text-align: center;
              font-size:16px;
              font-weight:400;
              color:rgba(69,69,69,1);
            }
          }
          li.selec{
            margin-right: 0;
          }
        }
      }
      .c_l{
        float: left;
        margin-left: 19px;
        width:585px;
        height:342px;
        border:1px solid rgba(230,230,230,1);
        h4{
          width:590px;
          height:36px;
          background:rgba(245,245,245,1);
          span{
            display: block;
            width:120px;
            height:36px;
            text-align: center;
            line-height: 36px;
            background:rgba(232,57,10,1);
            font-size:20px;
            font-family:Microsoft YaHei;
            font-weight:bold;
            color:rgba(254,254,254,1);
          }
        }
        ul{
          width: 492px;
          height: 255px;
          padding: 26px 48px;
          overflow: hidden;
          li{
            height: 38px;
            line-height: 38px;
            overflow: hidden;
            border-bottom: 1px dashed #e6e6e6;
            >*{
              display: block;
              float: left;
              height: 38px;
              line-height: 38px;
            }
            b{
              font-size:14px;
              font-weight:400;
              color:rgba(50,164,156,1);
            }
            strong{
              width: 168px;
              overflow: hidden;
              margin-left: 20px;
              font-size:14px;
              font-weight:400;
              color:rgba(68,68,68,1);
            }
            i{
              width: 147px;
              font-size:14px;
              font-weight:400;
              color:rgba(69,69,69,1);
            }
            span{
              float: right;
              margin-right: 8px;
              font-size:14px;
              font-weight:400;
              color:rgba(69,69,69,1);
              line-height:36px;
            }
          }
        }
      }
    }
    .zheng{
      width:1198px;
      height:285px;
      border:1px solid rgba(230,230,230,1);
      margin: 20px 0;
      h4{
        height:36px;
        background:rgba(245,245,245,1);
        span{
          display: block;
          width:120px;
          height:36px;
          text-align: center;
          line-height: 36px;
          background:rgba(232,57,10,1);
          font-size:20px;
          font-family:Microsoft YaHei;
          font-weight:bold;
          color:rgba(254,254,254,1);
        }
      }
      ul{
        margin: 32px 67px 32px 50px;
        width: 1081px;
        height: 180px;
        overflow: hidden;
        li{
          width:125px;
          height:180px;
          float: left;
          margin-right: 55px;
          img{
            width:125px;
            height:180px;
          }
        }
      }
    }
  }
  .footer{
    margin-top: 17px;
  }
</style>
