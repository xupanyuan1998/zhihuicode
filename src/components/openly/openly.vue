<template>
  <div>
    <div class="top">
      <head-nav :clect="clectnav"></head-nav>
    </div>
    <div class="warp">
      <div class="tit">
        <div class="unit">
          <h4><span>单位情况</span></h4>
          <div class="msg">
            <div class="swiper">
              <ul id="tu">
                <li v-for="(item,idx) in content.bannerPofileList"><img :src="item.profileImg" alt=""></li>
              </ul>
              <p><span @click="toLeft"></span><b>{{clecttu+1}}</b><i>/5</i> <strong @click="toRight"> </strong></p>
            </div>
            <div class="right">
              <p>
               {{content.Affairs.brief}}
              </p>
              <router-link tag="a" :to="{path:'',query:{id:content.Affairs.categoryId}}">查看更多</router-link>
            </div>
          </div>
        </div>
        <div class="Leadership">
            <img :src="content.governmentAffairs.affairsImg" alt="">
            <span>{{content.governmentAffairs.governmentPosition+' '+content.governmentAffairs.governmentName}}</span>
        </div>
      </div>
      <div class="cen ">
        <div class="ban">
          <img src="../../../static/images/43.png" alt="">
        </div>
        <div class="open">
          <p><img src="../../../static/images/44.png" alt=""><span>依申请公开</span></p>
        </div>
      </div>
      <div class="left">
        <h1><span class="xuan">重点推荐</span> <router-link to="">更多 >></router-link></h1>
        <ul class="addlist" >
          <li v-for="(item,idx) in  content.recommendList" :key="idx"><b></b> <router-link :to="{path:'',query:{id:item.governmentId}}">{{item.title}}</router-link> <span>{{clearFen(item.publishTime)}}</span></li>
        </ul>
      </div>
      <div class="rights left">
        <h1><span v-for="(item,idx) in zheng" :key="idx"  :class="zhengXuan==idx?'xuan':''" @click="xuanZc(idx)">{{item}}</span></h1>
        <ul class="addlist" v-if="zhengXuan==0">
          <li v-for="(item,idx) in  content. provincepolicylist" :key="idx"><b></b> <router-link tag="a" :to="{path:'/information/informationMore/informationdetali',query:{id:item.policyId,leftId:1}}">{{item.title}}</router-link> <span>{{clearFen(item.publishTime)}}</span></li>
        </ul>
        <ul class="addlist" v-if="zhengXuan==1">
          <li v-for="(item,idx) in  content.centerpolicylist" :key="idx"><b></b> <router-link tag="a" :to="{path:'/information/informationMore/informationdetali',query:{id:item.policyId,leftId:2}}">{{item.title}}</router-link> <span>{{clearFen(item.publishTime)}}</span></li>
        </ul>
      </div>
      <div class="left">
        <h1><span class="xuan">人事信息</span> <router-link tag="a" to="">更多 >></router-link></h1>
        <ul class="addlist ren">
          <li v-for="(item,idx) in  content.personnelList" :key="idx"><b></b> <a href="javascript:;">{{item.governmentName}}</a> <span>{{item.governmentPosition}}</span></li>
        </ul>
      </div>
      <div class="rights gongkai left">
        <h1><span class="xuan">统计信息</span> <router-link tag="a" to="">更多 >></router-link></h1>
        <ul class="addlist">
          <li v-for="(item,idx) in  content.statisticList"><b></b> <router-link tag="a" to="">{{item.title}}</router-link> <span>{{clearFen(item.publishTime)}}</span></li>
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
    import footerNav from '../footer'
    //获取轮播图

    import $ from 'jquery'
    export default {
        name: "openly",
        components:{headNav,footerNav},
        data(){
            return {
                clectnav: 6,
                clecttu:0,
                size:0,
                imgWidth:0,
                clone:'',
                content:{
                    recommendList:'',
                    personnelList:'',
                    statisticList:'',
                    provincepolicylist:'',
                    centerpolicylist:'',
                    bannerPofileList:'',
                    Affairs:'',
                    governmentAffairs:''
                },
                zheng:['我省政策','中央政策'],
                zhengXuan:0
            }
        },
        created(){
            this.axios.post('/web/goverment/list').then(({data})=>{
                var that=this;
                console.log(data);
                this.content.recommendList=this.sliceAway(data.recommendList,6);
                this.content.personnelList=this.sliceAway(data.personnelList,6);
                this.content.statisticList=this.sliceAway(data. statisticList,6);
                this.content.provincepolicylist=this.sliceAway(data.provincepolicylist,6);
                this.content.centerpolicylist=this.sliceAway(data.centerpolicylist,6);
                this.content.bannerPofileList=this.sliceAway(data.bannerPofileList,6);
                this.content.governmentAffairs=this.governmentAffairs;
                this.content.Affairs=data.Affairs;
                this.content.governmentAffairs=data.governmentAffairs;

                this.$nextTick(function () {
                    that.size =$('#tu li').length;
                    that.imgWidth = $('#tu li').width();
                    that.clone = $('#tu li').first().clone(true);
                    /*copy 第一张的照片并且添加到最后已达到无缝对接的效果*/
                    $("#tu").append(this.clone);
                });
            })
        },
        methods: {
            toLeft() {

                console.log(this.size);
                //同理，如果当前图片位置是第一张图片我再按一下右按钮那么我们也利用css的快速变换使它的位置来到最后一张图片的位置（size-1），并且让倒数第二张图片滑动进来
                this.clecttu--;
                if (this.clecttu === -1) {
                    $('#tu').css({left: -(this.size - 1) * this.imgWidth});
                    this.clecttu = this.size-1;
                };
                $('#tu').animate({left: -this.clecttu * this.imgWidth}, 1000);
            },
            toRight() {
                this.clecttu++;
                /*当前图片为最后一张图片的时候（我们一开始复制并且添加到ul最后面的图片）
        并且再点击了一次左按钮，这时候我们就利用css的快速转换效果把ul移动第一张图片的位置
        并且第二张图片滑入达到无缝效果（css的变换效果很快我们肉眼是很难看见的）*/
                if (this.clecttu >this.size-1) {
                    $("#tu").css({left: 0});
                    this.clecttu = 0;
                }
                $("#tu").stop().animate({left: -this.clecttu*this.imgWidth}, 1000);
            },
            clearFen(i){
                return i.substring(0,i.indexOf(' '))
            },
            xuanZc(i){
                this.zhengXuan=i;
            },
            sliceAway(arr,i){
                //arr=数组  i切割结束的下标
                return arr.slice(0,i);
            },
        }
    }
</script>

<style scoped lang="less">
.warp{
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  .tit{
    float: left;
    margin-top: 20px;
    .unit{
      width:910px;
      height:320px;
      background:rgba(255,255,255,1);
      border:1px solid rgba(213, 213, 213, 0.68);
      float: left;
      h4{
        width:910px;
        height:40px;
        background:rgba(245,245,245,1);
        span{
          display: block;
          width:120px;
          height:40px;
          text-align: center;
          line-height: 40px;
          background:rgba(232,57,10,1);
          font-size:20px;
          font-weight:400;
          color:rgba(254,254,254,1);
        }
      }
      .msg{
        margin-top: 10px;
        overflow: hidden;
        .swiper{
          float: left;
          width:425px;
          height:269px;
          overflow: hidden;
          position: relative;
          ul{
            width: 500%;
            position: absolute;
            top: 0;
            left: 0;
            li{
              width:425px;
              height:269px;
              float: left;
            }
          }
          p{
            position: absolute;
            bottom: 0;
            left: 0;
            width:425px;
            height:40px;
            background:rgba(0,0,0,1);
            opacity:0.7;
            >*{
              display: block;
              float: left;
            }
            span{
             margin:9px 0 9px 70px;
             font-size: 21px;
              width: 21px;
              height: 21px;
              background: url("../../../static/images/24.png");
            }
            b{
              height: 40px;
              line-height: 40px;
              margin-left: 16px;
              width:10px;
              font-size:16px;
              font-weight:400;
              color:rgba(223,36,34,1);
            }
            i{
              height: 40px;
              line-height: 40px;
              font-size:12px;
              font-weight:400;
              color:rgba(254,254,254,1);
            }
            strong{
              float: right;
              margin:9px 70px 9px 0;
              font-size: 21px;
              width: 21px;
              height: 21px;
              background: url("../../../static/images/23.png");
            }
          }
        }
        .right{
          width: 440px;
          float: left;
          padding: 15px 26px 0 19px;
          p{
            display: block;
            height: 225px;
            width: 440px;
            line-height: 25px;
            overflow: hidden;
            text-indent: 2em;
          }
          a{
            display: block;
            float: right;
            font-size:14px;
            font-weight:400;
            color:rgba(191,191,191,1);
          }
        }
      }
    }
    .Leadership{
      float: left;
      margin-left: 15px;
      width:197px;
      height:308px;
      background:rgba(255,255,255,1);
      border:1px solid rgba(213, 213, 213, 0.68);
      padding: 11px 42px 0 32px;
      img{
        width:197px;
        height:260px;
      }
      span{
        display: block;
        width: 197px;
        height: 48px;
        line-height: 48px;
        text-align: center;
        font-size:20px;
        font-weight:400;
        color:rgba(69,69,69,1);
      }
    }
  }
  .left{
    float: left;
    width:588px;
    height:270px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(213, 213, 213, 0.68);
    margin-top: 20px;
    overflow: hidden;
    cursor: default;
    h1{
      width:588px;
      height:36px;
      background:rgba(245,245,245,1);
      span{
        float: left;
        display: block;
        width:120px;
        height:36px;
        text-align: center;
        line-height: 36px;
        color: #454545;
        font-size:20px;
        font-weight:400;

      }
      span.xuan{
        background:rgba(231,57,10,1);
        color:rgba(255,255,255,1);
      }
      a{
        display: block;
        float: right;
        line-height: 36px;
        height: 36px;
        font-size:12px;
        font-weight:400;
        color:rgba(122,122,122,1);
        margin-right: 30px;
      }
    }
    h2{
      width:588px;
      height:30px;
      background:rgba(245,245,245,1);
      opacity:0.9;
      span{
        display: block;
        float: left;
        margin-left: 22px;
        height:30px;
        font-size:14px;
        font-weight:400;
        color:rgba(115,115,115,1);
        line-height: 30px;
      }
      a{
        display: block;
        float: right;
        height: 30px;
        line-height: 30px;
        margin-right: 20px;
        font-size:12px;
        font-weight:400;
        color:rgba(115,115,115,1);
      }
    }
    .addlist{
      width: 535px;
      margin: 7px 30px 0 24px;
      li{
        width: 515px;
        height: 35px;
        line-height: 35px;
        border-bottom: 1px dashed #c5c5c5;
        padding: 0 10px;
        b{
          display: block;
          float: left;
          margin: 13px 10px 13px 6px;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 4px 0 4px 4px;
          border-color: transparent transparent transparent #e53509;
        }
        a{
          display: block;
          overflow: hidden;
          float: left;
          height: 35px;
          line-height: 35px;
          width: 400px;
          margin-right: 7px;
        }
        span{
          display: block;
          float: right;
          height: 35px;
          line-height: 35px;
          font-size: 12px;
          color: #bdbdbd;
        }
      }
      li:last-child{
        border-bottom: none;
      }
    }
    .ren{
      li{
        span{
          color: #333;
        }
      }
    }
  }
  .rights{
    margin-left: 20px;
  }
  .cen{
    float: left;
    width: 1200px;
    margin: 20px 0;
    overflow: hidden;
    height: 101px;
    .ban{
      display: block;
      float: left;
      margin-right: 20px;
      overflow: hidden;
    }
    .open{
      float: left;
      width: 270px;
      height: 100px;
      background: url("../../../static/images/45.png") no-repeat;
      p{
        padding-left: 50px;
        height: 100px;
        line-height: 100px;
        img{
          width: 31px;
          height: 36px;
          margin-right: 10px;
          display: block;
          float: left;
          margin-top: 30px;
        }
        span{
          color: #fff;
          font-size: 28px;
          height: 100px;
          line-height: 100px;
          display: block;
          float: left;
        }
      }
    }
  }
}
  .footer{
    margin-top: 20px;
  }
</style>
