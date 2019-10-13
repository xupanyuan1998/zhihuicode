<template>
    <div>
      <div class="top">
        <head-nav :clect="clectnav"></head-nav>
      </div>
      <div class="container">
        <div class="nav">
          <span>首页</span><b> ></b><span>政策信息</span><b> ></b><span>本市政策详情</span>
        </div>
      </div>
      <div class="warp">
        <div class="left">
          <h3 v-for="(item,idx) in leftList" :key="idx" :class="leftSelect==idx?'select':''" @click="lefts(idx)">{{item}}</h3>
        </div>
        <div class="right">
          <h2><div><p>关于组织开展减税惠企政策微信有奖答题活动的通知</p><span>置顶</span></div></h2>
          <div class="Units"><p><span>发布单位:质监局</span> <b>发布日期:2019-9-25 16:02:38</b> </p></div>
          <div class="cate"><span>分类:行业规范</span> <b>行业:全部</b> <strong>分类编号:saegfsrgrs</strong> <p><img src="../../../static/images/18.png" alt=""><i>收藏</i></p></div>
          <div class="content"></div>
        </div>
      </div>
      <div class="bottom">
        <footer-nav></footer-nav>
      </div>
    </div>
</template>

<script>
    import headNav from "../headNav";
    import footerNav from "../footer";
    export default {
        name: "informationdetali",
        components: {
            headNav,
            footerNav
        },
        data(){
            return{
                clectnav: 1,
                leftList:['本市政策','本省政策','中央政策'],
                leftSelect:0,
            }
        },
        created() {
            this.leftSelect= this.$route.query.Id;
        },
        methods:{
            lefts(i){
                // this.leftSelect=i;
            }
        }
    }
</script>

<style scoped lang="less">
  .container {
    width: 100%;
    height: 32px;
    background: rgba(245, 245, 245, 1);
    .nav {
      width: 1200px;
      height: 32px;
      margin: 0 auto;
      span {
        display: block;
        float: left;
        height: 32px;
        line-height: 32px;
        font-size: 14px;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        margin-right: 10px;
      }
      b {
        display: block;
        float: left;
        height: 32px;
        line-height: 32px;
        margin-right: 10px;
      }
    }
  }
  .warp{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    padding: 21px 0;
    .left{
      float: left;
      margin-right: 20px;
      width:186px;
      height:150px;
      border:1px solid rgba(230,230,230,1);
      border-top: none;
      h3{
        width:186px;
        height: 50px;
        line-height: 50px;
        border-top: 1px solid rgba(230,230,230,1);
        text-align: center;
        font-size:18px;
        font-weight:400;
        color:#454545;
      }
      h3.select{
        color: #E84012;
        border-top: 1px solid #FF6A42;
      }
    }
    .right{
      float: left;
      width:989px;
      min-height: 700px;
      border:1px solid rgba(217,217,217,1);
      h2{
        padding-top: 40px;
        height: 29px;
        text-align: center;
        div{
          display: inline-block;
          p{
            display: block;
            float: left;
            height: 29px;
            line-height: 29px;
            font-size:20px;
            font-weight:400;
            color:rgba(69,69,69,1);
          }
          span{
            display: block;
            float: left;
            width:40px;
            height:18px;
            background:rgba(255,106,66,1);
            border-radius:4px;
            font-size:12px;
            font-weight:400;
            color:rgba(254,254,254,1);
            text-align: center;
            margin-left: 10px;
          }
        }

      }
      .Units{
        height: 48px;
        text-align: center;
        p{
          display: inline-block;
          span{
            display: block;
            float: left;
            height: 48px;
            line-height: 48px;
            font-size:12px;
            font-weight:400;
            color:rgba(115,115,115,1);
            margin-right: 47px;
          }
          b{
            float: left;
            display: block;
            height: 48px;
            line-height: 48px;
            font-size:12px;
            font-weight:400;
            color:rgba(115,115,115,1);
          }
        }
      }
      .cate{
        width:730px;
        height:26px;
        background:rgba(245,245,245,1);
        margin: 0 auto;
        >*{
          display: block;
          float: left;
          height: 26px;
          line-height: 26px;
        }
        span{
          margin-left: 145px;
          font-size:12px;
          font-weight:400;
          color:rgba(69,69,69,1);
        }
        b{
          margin-left: 50px;
          font-size:12px;
          font-weight:400;
          color:rgba(69,69,69,1);
        }
        strong{
          margin-left: 39px;
          font-size:12px;
          font-weight:400;
          color:rgba(69,69,69,1);
        }
        p{
          margin-left: 32px;
          overflow: hidden;
          img{
            display: block;
            float: left;
            margin: 7px 2px;
          }
          i{
            display: block;
            float: left;
          }
        }
      }
      .content{
        padding-top: 30px;
      }
    }
  }
</style>
