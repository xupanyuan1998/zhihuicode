<template>
    <div>
      <div class="top">
        <div class="con">
          <p >欢迎光临铜陵市民营经济云服务智慧平台！</p>
          <div><b></b><span>服务热线：0562-5880190</span></div>
        </div>
      </div>
      <!--    头部-->
      <div class="warp">
        <div class="warp_c">
          <div class="t_left"><img src="../../static/images/logo.png" alt=""></div>
          <div class="t_center">
            <h4>铜陵市民营经济云服务智慧平台</h4>
            <span>Intelligent Platform for Cloud Service of Tongling Private Econ</span>
          </div>
          <div class="t_right">
            <div class="serch">
              <div>
                <span v-model="select" @click="choose">{{select}} <i></i></span>
                <input type="text" placeholder="请输入关键字搜索">
              </div>
              <button>搜索</button>
            </div>
            <div class="wechat">
              <img src="../../static/images/2.png" alt="">
              <span>微信公众号</span>
            </div>
            <div class="wechat">
              <img src="../../static/images/2.png" alt="">
              <span>app下载</span>
            </div>
            <ul id="select" style="display: none">
              <li @click="xuan('服务项目')">服务项目</li>
              <li @click="xuan('政策信息')">政策信息</li>
              <li @click="xuan('企业信息')">企业信息</li>
            </ul>
          </div>
        </div>
      </div>
      <!--    导航-->
      <div class="nav">
        <navBar :cNav="clect"></navBar>
      </div>
    </div>
</template>

<script>
  import navBar from "./navBar";
    export default {
        name: "headNav",
        data(){
            return {
                select:'服务项目',
            }
        },
        methods:{
            choose(){
                $('#select').slideDown(200);
            },
            xuan(index){
                this.select=index;
                $('#select').slideUp(200);
            }
        },
        props:['clect'],
        components:{
            navBar
        }
    }
</script>

<style scoped lang="less">
  #select{
    position: absolute;
    width: 70px;
    top:70px;
    left: 0;
    li{
      cursor: default;
      width: 70px;
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      text-align: center;
    }
  }
  .top{
    width:100%;
    height:30px;
    background:rgba(242,242,242,1);
    .con{
      width: 1200px;
      height: 30px;
      margin: 0 auto;
      p{
        float: left;
        font-size:14px;
        line-height: 30px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(73,73,73,1);
        height: 30px;
      }
      div{
        height: 30px;
        line-height: 30px;
        float: right;
        b{
          display: block;
          float: left;
          width: 16px;
          height: 16px;
          background: url("../../static/images/1.png");
          margin-top: 7px;
        }
        span{
          height: 30px;
          line-height: 30px;
          display: block;
          float: left;
          font-size:14px;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:rgba(73,73,73,1);
          margin-left: 2px;
        }
      }
    }
  }
  .warp{
    width: 100%;
    height: 110px;
    .warp_c{
      width: 1200px;
      height: 110px;
      margin: 0 auto;
      .t_left{
        width: 37px;
        height: 85px;
        float: left;
        margin: 12px 0 12px 20px;
        cursor: default;
      }
      .t_center{
        float: left;
        height: 60px;
        margin: 25px 0px 25px 17px;
        h4{
          height: 40px;
          line-height: 40px;
          font-size:28px;
          font-family:Microsoft YaHei;
          font-weight:bold;
          color:rgba(231,57,10,1);
        }
        span{
          display: block;
          height: 20px;
          line-height: 20px;
          width:393px;
          font-size:10px;
          font-family:Microsoft YaHei;
          font-weight:bold;
          color:rgba(231,57,10,1);
        }
      }
      .t_right{
        float: right;
        height: 110px;
        position: relative;
        .serch{
          height: 36px;
          margin: 35px 50px 35px 0;
          width: auto;
          float: left;
          div{
            float: left;
            width:260px;
            height:34px;
            border:1px solid rgba(228,228,228,1);
            span {
              cursor: default;
              float: left;
              display: block;
              width: 70px;
              height: 34px;
              line-height: 34px;
              padding: 0 8px;
              font-size:14px;
              font-family:Microsoft YaHei;
              font-weight:400;
              color:rgba(73,73,73,1);
              position: relative;
              border-right: 1px solid rgba(228,228,228,1);
              i{
                width: 0;
                height: 0;
                border: 6px solid transparent;
                border-top-color: #d7d7d7;
                display: block;
                position: absolute;
                top: 16px;
                right: 8px;
              }
            }
            input{
              width: 150px;
              height: 34px;
              line-height: 34px;
              border:none;
              outline: none;
              padding: 0 10px;
              font-size:14px;
              font-family:Microsoft YaHei;
              font-weight:400;
            }
          }
          button{
            display: block;
            float: left;
            border: none;
            outline: none;
            width:60px;
            height:36px;
            line-height: 36px;
            background:rgba(231,57,10,1);
            border-radius:0 4px 4px 0;
            font-size:14px;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(255,255,255,1);
          }
        }
        .wechat{
          width: 120px;
          height: 34px;
          margin: 38px 0;
          padding-right: 10px;
          float: left;
          img{
            display: block;
            width: 34px;
            height: 34px;
            float: left;
          }
          span{
            width: 86px;
            height: 34px;
            line-height: 34px;
            float: left;
            font-size:14px;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(51,51,51,1);
            text-align: center;
          }
        }
      }
    }
  }
  .nav{
    width:100%;
    height:42px;
    background:rgba(231,57,10,1);
  }
</style>
