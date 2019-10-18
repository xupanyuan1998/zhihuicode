<template>
  <div>
    <div class="content">
      <div class="center">
        <div class="logo">
          <img src="../../static/images/logo.png" alt="">
          <p>
            <span>铜陵市民营经济云服务智慧平台</span>
            <b>Intelligent Platform for Cloud Service of Tongling Private Economy</b>
          </p>
        </div>
        <h3>欢迎注册</h3>
      </div>
    </div>
    <div class="res">
      <img src="../../static/images/52.png" alt=""><span>实名注册</span>
    </div>
    <div class="warp">
      <ul>
        <li>
          <p><b>*</b><span>用户名:</span></p>
          <div>
            <label>
              <input type="text" v-model="user">
            </label>
          </div>
        </li>
        <li>
          <p><b>*</b><span>真实姓名:</span></p>
          <div>
            <label>
              <input type="text" v-model="trueName">
            </label>
          </div>
        </li>
        <li>
          <p><b>*</b><span>证件类型:</span></p>
          <div>
            <h2>
              <strong> <a href="javascript:;"></a></strong>
            </h2>
          </div>
        </li>
        <li>
          <p><b>*</b><span>证件号码:</span></p>
          <div>
            <label>
              <input type="text" v-model="cardNum">
            </label>
          </div>
        </li>
        <li>
          <p><b>*</b><span>设置密码:</span></p>
          <div><label>
            <input type="password" v-model="password">
          </label></div>
        </li>
        <li>
          <p><b>*</b><span>确认密码:</span></p>
          <div><label>
            <input type="password" v-model="repassword">
          </label></div>
        </li>
        <li>
          <p><b>*</b><span>手机号码:</span></p>
          <div><label>
            <input type="text" v-model="phone">
          </label></div>
        </li>
        <li>
          <p><span>邮箱:</span></p>
          <div><label>
            <input type="email" v-model="email">
          </label></div>
        </li>
        <li class="yan">
          <p><b>*</b><span>验证码:</span></p>
          <div><label>
            <input type="text" v-model="numYan">
          </label> <img src="../../static/images/46.png" alt=""></div>
        </li>
        <li class="yan">
          <p><b>*</b><span>手机验证码:</span></p>
          <div><label>
            <input type="text" v-model="msgYan">
          </label><span v-if="isdao=='false'" @click="getMsgnum">获取短信验证码</span><span v-if="isdao=='true'">{{dao}}</span></div>
        </li>
      </ul>
      <button>立即注册</button>
    </div>
    <div>
      <footer-nav></footer-nav>
    </div>
    <div class="place" style="display: block">
      <div>
        <img src="../../static/images/53.png" alt="">
        <span>注册成功</span>
      </div>
    </div>
  </div>
</template>

<script>
    import footerNav from "./footer"
    export default {
        name: "registered",
        components: {
            footerNav
        },
        data() {
            return {
                user: '',
                password: '',
                repassword: '',
                phone: '',
                email: '',
                numYan: '',
                msgYan: '',
                //倒计时
                isdao:'false',
                dao:60,
                timer:'',
                trueName:'',//真实姓名
                card:'',//证件类型
                cardNum:''//证件号码
            }
        },
        methods:{
           getMsgnum(){
               var that=this;
              if(this.phone!=''){
                  this.isdao='true';
                  clearInterval(this.timer);
                  var timer=setInterval(function () {
                          if (that.dao>0){
                              that.dao--;
                          }
                          if(that.dao<=0){
                              clearInterval(timer);
                              that.isdao='false';
                              that.dao=60;
                          }
                      },1000);
              }

           }
        }
    }
</script>

<style scoped lang="less">
  .content {
    border-bottom: 2px solid #E7390A;
    .center {
      padding: 10px 0;
      overflow: hidden;
      width: 1200px;
      margin: 0 auto;
      .logo {
        height: 83px;
        float: left;
        margin-right: 10px;

        img {
          display: block;
          float: left;
          margin-right: 17px;
        }

        p {
          height: 83px;
          float: left;

          span {
            display: block;
            margin-top: 17px;
            height: 28px;
            font-size: 28px;
            font-weight: bold;
            color: rgba(231, 57, 10, 1);
          }

          b {
            display: block;
            height: 8px;
            font-size: 10px;
            font-weight: bold;
            color: rgba(231, 57, 10, 1);
            margin-top: 12px;
          }
        }
      }

      h3 {
        margin-top: 25px;
        height: 48px;
        border-left: 2px solid #D9D9D9;
        float: left;
        line-height: 48px;
        padding-left: 10px;
        font-size: 20px;
        font-weight: 400;
        color: rgba(69, 69, 69, 1);
      }
    }
  }
  .res{
    margin: 0 auto;
    width: 1200px;
    border-bottom: 1px solid #E6E6E6;
    height: 70px;
    img{
      margin: 39px 10px 10px 13px;
      display: block;
      float: left;
    }
    span{
      cursor: default;
      display: block;
      float: left;
      font-size:20px;
      color:rgba(69,69,69,1);
      margin-top: 38px;
    }
  }
  .warp {
    width: 600px;
    margin: 0 auto;
    padding: 49px 367px 52px 232px;
    ul {
      li {
        width: 600px;
        height: 38px;
        margin-bottom: 23px;
        p {
          float: left;
          height: 40px;
          margin-right: 32px;
          width: 168px;
          text-align: right;

          b {
            display: inline-block;
            height: 40px;
            line-height: 40px;
            font-size: 16px;
            font-weight: 400;
            color: rgba(254, 0, 0, 1);
            margin-right: 12px;
          }

          span {
            display: inline-block;
            height: 40px;
            line-height: 40px;
            font-size: 20px;
            font-weight: 400;
            color: rgba(116, 116, 116, 1);
          }
        }
        div {
          float: left;
          h2{
            display: block;
            padding: 0 10px;
            height: 38px;
            line-height: 38px;
            width: 378px;
            border: 1px solid rgba(179, 179, 179, 1);
            outline: none;
            position: relative;
            strong{
              width:32px;
              height:38px;
              position: absolute;
              top: 0;
              right: 0;
              background:rgba(229,229,229,1);
              a{
                display :inline-block;
                position: relative;
                width: 38px;
                height: 38px;
              }
              a:after {
                display: inline-block;
                content: " ";
                height: 10px;
                width: 10px;
                border-width: 0 1px 1px 0;
                border-color: #1a1a1a;
                border-style: solid;
                transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
                transform-origin: center;
                transition: transform .3s;
                position: absolute;
                top: 50%;
                right: 15px;
                margin-top: -10px;
              }
            }
          }
          input {
            float: left;
            display: block;
            padding: 0 10px;
            height: 38px;
            line-height: 38px;
            width: 378px;
            border: 1px solid rgba(179, 179, 179, 1);
            outline: none;
          }

        }
      }
      li.yan {
        div {
          input {
            width: 165px;
            display: block;
            float: left;
          }

          img {
            display: block;
            float: left;
            width: 141px;
            height: 40px;
            margin-top: 2px;
            margin-left: 36px;
          }

          span {
            display: block;
            float: left;
            width: 137px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            background: rgba(237, 237, 237, 1);
            margin-top: 2px;
            margin-left: 36px;
            font-size: 16px;
            font-weight: 400;
            color: rgba(188, 188, 188, 1);
          }
        }
      }
    }
    button {
      display: block;
      outline: none;
      border: none;
      width: 286px;
      height: 51px;
      background: rgba(231, 57, 10, 1);
      font-size: 24px;
      font-weight: 400;
      color: rgba(255, 254, 254, 1);
      margin: 18px 0 0 225px;
    }
  }
  .place{
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.2);
    position: fixed;
    top: 0;
    left: 0;
   div{
     width:294px;
     height:70px;
     background:rgba(255,255,255,1);
     border-radius:4px;
     position: fixed;
     top: 50%;
     left: 50%;
     transform: translate(-50%,-50%);
     img{
       display: block;
       float: left;
     }
     span{
       display: block;
       float: left;
       width:198px;
       height:68px;
       line-height: 68px;
       text-align: center;
       font-size:34px;
       font-weight:400;
       color:rgba(69,69,69,1);
       border: 1px solid #e6e6e6;

     }
   }
  }
</style>
