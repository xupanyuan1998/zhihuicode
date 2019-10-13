<template>
    <div class="bottom">
      <div class="slider"></div>
      <div class="di">
        <div class="left">
          <img src="../../static/images/dilogo.png" alt="">
          <ul>
            <li><span>铜陵市民营经济促进局 版权所有 </span></li>
            <li><span>地址：安徽省铜陵市铜官区北京中路85号  </span></li>
            <li><span>邮箱：service@tlsmyjjy.gov.cn   </span></li>
            <li><span> 网站备案号：徽7453456353号   </span></li>
          </ul>
        </div>
        <div class="center">
          <h4>站点地图</h4>
          <ul>
            <li><a href="javascript:;">网站首页</a><a href="javascript:;">新闻资讯</a><a href="javascript:;">信用数据</a></li>
            <li><a href="javascript:;">合作客户</a><a href="javascript:;">通知公告</a><a href="javascript:;">政务公开</a></li>
            <li><a href="javascript:;">企业信息</a><a href="javascript:;">联系我们</a><a href="javascript:;">联系方式</a></li>
          </ul>
        </div>
        <div class="right">
          <img src="../../static/images/app.png" alt="">
          <span>App下载</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "footerNav"
    }
</script>

<style scoped lang="less">
.bottom{
  width: 100%;
  background:rgba(243,243,243,1);
  .slider{
    width: 100%;
    height:5px;
    background:rgba(212,99,71,1);;
  }
  .di{
    width: 1200px;
    height: 162px;
    margin: 0 auto;
    .left{
      float: left;
      width: 350px;
      height: 100px;
      margin: 30px 175px 0 14px;
      img{
        display: block;
        float: left;
        margin-right: 26px;
      }
      ul{
        width: 280px;
        height: 100px;
        float: left;
        li{
          height: 25px;
          line-height: 25px;
          font-size: 14px;
          color: #525252;
        }
      }
    }
    .center{
      float: left;
      margin-top: 26px;
      height: 107px;
      h4{
        height: 26px;
        line-height: 26px;
        font-size: 14px;
        font-weight: bold;
        color: #525252;
      }
      ul{
        li{
          height: 27px;
          line-height: 27px;
          a{
            display: block;
            height: 27px;
            line-height: 27px;
            float: left;
            margin-right: 60px;
            font-size: 14px;
            color: #888;
          }
        }
      }
    }
    .right{
      width: 77px;
      height: 107px;
      float: right;
      margin-right: 8px;
      margin-top: 32px;
      span{
        width:77px;
        height:30px;
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(82,82,82,1);
        line-height:30px;
        text-align: center;
        overflow: hidden;
        display: block;
      }
    }
  }
}
</style>
