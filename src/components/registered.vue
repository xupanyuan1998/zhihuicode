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
    <div class="bai"></div>
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
    padding-top: 43px;
    width: 1200px;
    margin: 0 auto;

    .center {
      padding: 10px 0;
      overflow: hidden;

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

  .bai {
    height: 32px;
    width: 100%;
    background: #F5F5F5;
  }

  .warp {
    width: 600px;
    margin: 0 auto;
    padding: 82px 367px 52px 232px;

    ul {
      li {
        width: 600px;
        height: 44px;
        margin-bottom: 30px;

        p {
          float: left;
          height: 44px;
          margin-right: 32px;
          width: 168px;
          text-align: right;

          b {
            display: inline-block;
            height: 44px;
            line-height: 44px;
            font-size: 16px;
            font-weight: 400;
            color: rgba(254, 0, 0, 1);
            margin-right: 12px;
          }

          span {
            display: inline-block;
            height: 44px;
            line-height: 44px;
            font-size: 20px;
            font-weight: 400;
            color: rgba(116, 116, 116, 1);
          }
        }

        div {
          float: left;

          input {
            float: left;
            display: block;
            padding: 0 10px;
            height: 44px;
            line-height: 44px;
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
</style>
