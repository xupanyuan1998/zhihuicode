<template>
    <div>
      <div class="content">
        <div class="center">
          <div class="logo">
            <img src="../../../static/images/logo.png" alt="">
            <p>
              <span>铜陵市民营经济云服务智慧平台</span>
              <b>Intelligent Platform for Cloud Service of Tongling Private Economy</b>
            </p>
          </div>
          <h3>知识产权办理</h3>
        </div>
      </div>
      <div class="warp">
        <h1>知识产权办理服务</h1>
        <div class="title">
          <div class="first xuan">
            <b>办理须知</b>
            <span></span>
          </div>
          <div class="secend two">
            <b>申报信息</b>
          </div>
          <div class="secend there">
            <b>申报完成</b>
          </div>
        </div>
       <div class="con" v-if="shenbao===0">
         <ul class="list">
           <li class="head">
             <h4><b></b><span>受理条件</span></h4>
             <ul>
               <li>1、涵盖《中华人民共和国著作权法》规定的作品（不含计算机软件）</li>
               <li>2、申请人及作品符合相关法律、法规的规定"</li>
             </ul>
           </li>
           <li class="head">
             <h4><b></b><span>收取材料</span></h4>
             <ul>
               <li>1.作品登记申请表（必要）</li>
               <li> 2.权利保证书（必要）</li>
               <li>3.作品（必要)</li>
               <li>4.委托合同（非必要）</li>
             </ul>
           </li>
         </ul>
         <p class="agree"><b :class="show?'zhong':''" @click="agree"></b><i> 我已阅读上述要求并自检符合条件、本人对办理该事件所提交的申报材料实质内容的真实性负责</i></p>
         <button v-if="show==false" >下一步</button>
         <button v-if="show==true" class="nexttrue" @click="next">下一步</button>
       </div>
        <div class="msg" v-if="shenbao===1">
          <h2><b></b><span>基本信息</span></h2>
          <ul class="table">
            <li><div><p><b>*</b><span>申请人证件类型</span></p> <i><em></em></i></div> <div class="two"><p><b>*</b><span>申请人证件类型</span></p><input type="text" /></div></li>
            <li><div><p><b>*</b> <span>申请人/申请单位</span></p><input type="text"></div></li>
            <li><div><p><span>联系人身份证</span></p> <i><em></em></i></div> <div><p><span>联系电话</span></p><input type="text" ></div></li>
            <li><div><p><b></b> <span>联系地址</span></p><input type="text"></div></li>
            <li><div><p><b></b> <span>事件名称</span></p><input type="text"></div></li>
            <li><div><p> <span>备注</span></p> <textarea ></textarea></div></li>
          </ul>
          <h2><b></b><span>材料说明</span></h2>
          <p class="place"> 温馨提示：单个材料上传最大20MB，20M-500MB的文件请使用大文件上传。若文件大于500MB，建议打包压缩后分多次上传。</p>
          <ul class="cailiao">
            <li><b>材料名称</b><span>必要性</span><strong>材料下载</strong><i>材料名称</i></li>
            <li><b>知识产权登记材料</b><span>必要</span><strong><img src="" alt=""></strong><i><input type="file"><button>本地上传</button></i></li>
          </ul>
        </div>
      </div>
      <div class="footer">
        <footer-nav></footer-nav>
      </div>
    </div>
</template>

<script>
    import footerNav from "../footer"
    export default {
        name: "onlineWork",
        components:{
            footerNav
        },
        data(){
            return {
                show:false,
                shenbao:0
            }
        },
        methods:{
            agree(){
                this.show = this.show === false;
             // if(this.show===false){
             //     this.show=true;
             // }else{
             //     this.show=false;
             // }
            },
            next(){
                this.shenbao=1;
                $('.title').find('div').removeClass('xuan');
                $('.title').find('div').eq(1).addClass('xuan');
            }

        }
    }
</script>

<style scoped lang="less">
  input,button{
    outline: none;
  }
  .content {
    border-bottom: 2px solid #d9d9d9;
  .center {
    padding: 26px 0 10px;
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
  .warp{
    width: 1200px;
    margin: 0 auto;
    padding-bottom: 50px;
    h1{
      margin-left: 55px;
      height: 96px;
      line-height: 96px;
      font-size:24px;
      font-weight:400;
      color:rgba(69,69,69,1);
    }
    .title{
      height:52px;
      margin-left: 94px;
      position: relative;
      margin-bottom: 22px;
      div{
        float: left;
        height: 50px;
        b{
          -moz-user-select:none;/*火狐*/
          -webkit-user-select:none;/*webkit浏览器*/
          -ms-user-select:none;/*IE10*/
          user-select:none;
        }
      }
      div.first{
        position: relative;
        z-index: 3;
        top: 0;
        left: 0;
        background: #ebebeb;
        width: 103px;
       b{
         display: block;
         height: 50px;
         line-height: 50px;
         padding-left: 24px;
         font-size:16px;
         font-weight:400;
         color:#737373;
       }
      }
      div.first:after{
        position: absolute;top: 0;right: -42px;
        content: '';
        display: block;
          width: 0;
          height: 0;
          border-left: 42px solid #ebebeb;
          border-top: 25px solid transparent;
          border-bottom: 25px solid transparent;
      }
      div.secend{
        background: #ebebeb;
        width: 100px;
        b{
          display: block;
          height: 50px;
          line-height: 50px;
          font-size:16px;
          font-weight:400;
          color:#737373;
          position: absolute;
          z-index: 999;
          width: 65px;
          left: 51px;
        }
      }
      div.secend:before{
        position: absolute;
        top: 0;
        left: 0;
        content:'';
        display: block;
        width: 0;
        height: 0;
        border-left: 42px solid #fff;
        border-top: 25px solid transparent;
        border-bottom: 25px solid transparent;
      }
      div.secend:after{
        position: absolute;
        top: 0;
        right: -42px;
        display: block;
        content:'';
        width: 0;
        height: 0;
        border-left: 42px solid #ebebeb;
        border-top: 25px solid transparent;
        border-bottom: 25px solid transparent;
      }
      div.there{
        position: absolute;
        z-index: 1;
        top: 0;
        left: 242px;
      }
      div.two{
        position: absolute;
        z-index: 2;
        top: 0;
        left: 120px;
      }
      div.xuan{
        background: #FA6D47;
        b{
          color: #fff;
        }
      }
      div.xuan:after{
        border-left: 42px solid #FA6D47;
      }
    }
    .con{
      .list{
        margin-left: 58px;
        width: 1100px;
        padding-bottom: 3px;
        border-bottom: 1px dashed #D9D9D9;
        .head{
          margin-bottom: 22px;
          h4{
            height: 29px;
            display: flex;
            align-items: center;
            b{
              width: 0;
              height: 0;
              border-left: 7px solid #e53509;
              border-top: 6px solid transparent;
              border-bottom: 6px solid transparent;
            }
            span{
              margin-left: 15px;
              font-size:16px;
              font-weight:400;
              color:rgba(69,69,69,1);
            }
          }
          ul{
            li{
              height: 40px;
              line-height: 40px;
              font-size:16px;
              font-weight:400;
              color:rgba(69,69,69,1);
            }
          }
        }
      }
      .agree{
        margin-left: 58px;
        display: flex;
        align-items: center;
        height: 59px;
        b{
          width:15px;
          height:15px;
          background:rgba(229,229,229,1);
          border-radius:4px;
          position: relative;
        }
        b:after{
          display: block;
          width: 5px;
          height: 10px;
          border-color: #FA6D47;
          border-style: solid;
          border-width: 0 3px 3px 0;
          transform: rotate(45deg);
          position: absolute;
          top: 0;
          left: 4px;
        }
        b.zhong:after{
          content:'';
        }
        i{
          margin-left: 9px;
          font-size:16px;
          font-weight:400;
          color:rgba(69,69,69,1);
        }
      }
      button{
        margin-left: 491px;
        margin-top: 135px;
        width:200px;
        height:51px;
        background:rgba(235,235,235,1);
        outline: none;
        border: none;
        font-size:24px;
        font-weight:400;
        color:rgba(115,114,114,1);
      }
      button.nexttrue{
        background: #FA6D47 ;
        color: #fff;
      }
    }
    .msg{
      h2{
        height: 57px;
        display: flex;
        align-items: center;
        margin-left: 58px;
        b{
          width: 0;
          height: 0;
          border-left: 7px solid #e53509;
          border-top: 5px solid transparent;
          border-bottom: 6px solid transparent;
        }
        span{
          margin-left: 15px;
          width:80px;
          font-size:20px;
          font-weight:400;
          color:rgba(69,69,69,1);
        }
      }
      .table{
        margin-top: 9px;
        width: 969px;
        margin-left: 90px;
        li{
          height: 30px;
          margin-bottom: 32px;
          div{
            float: left;
           p{
            width: 162px;
             height: 30px;
             text-align: right;
             float: left;
           }
            b{
              display: inline-block;
              font-size:16px;
              height: 30px;
              line-height: 30px;
              font-weight:400;
              color:rgba(255,0,0,1);
            }
            span{
              display: inline-block;
              height: 30px;
              line-height: 30px;
              font-size:16px;
              font-weight:400;
              color:rgba(69,69,69,1);
              margin-left: 10px;
            }
            i{
              display: block;
              float: left;
              margin-left: 10px;
              width:280px;
              height:28px;
              border:1px solid rgba(179,179,179,1);
              position: relative;
              em{
                display: block;
                width:30px;
                height:28px;
                background:rgba(235,235,235,1);
                position: absolute;
                right: 0;
                top: 0;
              }
              em:after{
                content:'';
                width: 0;
                height: 0;
                border-top: 5px solid #b3b3b3;
                border-left: 5px solid transparent;
                border-right: 4px solid transparent;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
              }
            }
            input{
              margin-left: 10px;
              width:280px;
              height:28px;
              border:1px solid rgba(179,179,179,1);
            }
            textarea{
              resize: none;
            }
          }
          div.two{
            float: right;
            input{
              width: 270px;
              margin-left: 15px;
            }
          }
        }
      }
      .place{

      }
      .cailiao{
        li{
          b{}
          span{}
          strong{
            img{}
          }
          i{
            input{}
            button{}
          }
        }
      }
    }
  }
</style>
