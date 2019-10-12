<template>
  <div>
    <div class="top">
      <head-nav :clect="clectnav"></head-nav>
    </div>
    <div class="warp">
      <div class="left">
        <div class="userimg">
          <div class="he_top">
           <div class="ni">
             <img src="../../../static/images/30.png" alt="">
             <p><span>您好! 张三</span><b>[法人]</b></p>
             <strong>13245653563</strong>
           </div>
            <i>铜陵市蓝天科技有限公司</i>
          </div>
          <div class="list">
            <div class="option">
              <p><img src="../../../static/images/31.png" alt=""></p>
              <span>我的订阅</span>
            </div>
            <div class="option">
              <p><img src="../../../static/images/32.png" alt=""></p>
              <span>我的收藏</span>
            </div>
            <div class="option">
              <p><img src="../../../static/images/33.png" alt=""></p>
              <span>系统消息</span>
            </div>
          </div>
        </div>
        <div class="leftL">
          <div class="online">
            <h4>在线办理</h4>
            <ul>
              <li><img src="../../../static/images/34.png" alt=""><span class="zai">在线工单</span></li>
              <li><img src="../../../static/images/35.png" alt=""><span>任务检测</span></li>
              <li><img src="../../../static/images/36.png" alt=""><span>在线申报</span></li>
            </ul>
          </div>
          <div class="online">
            <h4>企业服务</h4>
            <ul>
              <li><img src="../../../static/images/37.png" alt=""><span>产品管理</span></li>
              <li><img src="../../../static/images/38.png" alt=""><span>供需发布</span></li>
              <li><img src="../../../static/images/39.png" alt=""><span>企业资质</span></li>
              <li><img src="../../../static/images/40.png" alt=""><span>查看微空间</span></li>
            </ul>
          </div>
          <div class="online">
            <h4>个人信息</h4>
            <ul>
              <li><img src="../../../static/images/41.png" alt=""><span>身份认证</span></li>
              <li><img src="../../../static/images/42.png" alt=""><span>修改密码</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="right_t">
          <span>id</span>
          <b>工单名称</b>
          <strong>发起人</strong>
          <i>发起时间</i>
          <em>办理状态</em>
          <p>评价</p>
        </div>
        <div class="page">
          <div>
            <button>上一页</button>
            <p>第 <b>1</b>页共 <b>2</b>页</p>
            <button>下一页</button>
          </div>
        </div>
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
    export default {
        name: "personal",
        components:{headNav,footerNav},
        data(){
            return {
                clectnav: 0
            }
        },
        methods:{

        },
        created() {
        }
    }
</script>

<style scoped lang="less">
  .warp{
    width: 1200px;
    margin: 20px auto;
    overflow: hidden;
    .left{
      float: left;
      margin-right: 20px;
      width:266px;
      .userimg{
        width:264px;
        height:254px;
        margin-bottom: 10px;
        border:1px solid rgba(214,214,214,1);
        .he_top{
          height: 136px;
          border-bottom: 1px dashed rgba(214,214,214,1);
         .ni{
           padding: 22px 10px 0 20px;
           height: 72px;
           width: 234px;
           img{
             display: block;
             float: left;
             width: 72px;
             height: 72px;
           }
           p{
             width:150px ;
             margin-left: 12px;
             float: left;
             margin-top: 12px;
             height: 27px;
             line-height: 27px;
             overflow: hidden;
             span{
              display: block;
               float: left;
               font-size:14px;
               font-weight:400;
               color:rgba(69,69,69,1);
             }
             b{
               display: block;
               float: left;
               font-size:14px;
               font-weight:400;
               color:rgba(69,69,69,1);
                margin-left: 10px;
             }
           }
           strong{
             display: block;
             float: left;
             height: 26px;
             line-height: 26px;
             width:87px;
             font-size:14px;
             font-weight:400;
             color:rgba(69,69,69,1);
             margin-left: 12px;
           }
         }
          i{
            display: block;
            margin-left: 44px;
            width: 200px;
            height:42px ;
            line-height: 42px;
            overflow: hidden;
            font-size:14px;
            font-weight:400;
            color:rgba(69,69,69,1);
          }
        }
        .list{
          height: 94px;
          width: 240px;
          padding: 24px 12px 0 12px;
          .option{
            width: 56px;
            height: 94px;
            float: left;
            margin-right: 36px;
            span{
              display: block;
              width: 56px;
              text-align: center;
              height: 50px;
              line-height: 50px;
              font-size:14px;
              font-weight:400;
              color:rgba(69,69,69,1);
            }
            p{
              margin: 0 auto;
              width: 43px;
              height: 43px;
              border-radius: 50%;
              background:#7BC9BD;
              display: flex;
              align-items: center; /*定义body的元素垂直居中*/
              justify-content: center; /*定义body的里的元素水平居中*/
            }
          }
          .option:last-child{
            margin-right: 0;
            p{
              background:  #5CB0EC ;
            }
          }
          .option:first-child{
            p{
              background:#B284B5;
            }
          }
        }
      }
      .leftL{
        width: 264px;
        border:1px solid rgba(214,214,214,1);
        border-top: none;
        .online{
          width: 264px;
          h4{
            width:240px;
            height:49px;
            padding: 0 12px;
            line-height: 49px;
            background:rgba(245,245,245,1);
            font-size:18px;
            font-weight:400;
            color:rgba(69,68,68,1);
            border:1px solid rgba(214,214,214,1);
            border-left: none;
            border-right: none;
          }
          ul{
            padding: 0 50px 0 70px;
            width: 144px;
            li{
              height: 34px;
              display: block;
              margin-top: 18px;
              img{
                vertical-align: middle;
              }
              span{
                margin-left: 17px;
                line-height: 34px;
                display: inline-block;
                height: 34px;
                font-size:18px;
                font-weight:400;
                color:  #454444 ;
              }
              span.zai{
                color:rgba(102,168,158,1);
              }
            }
            li:last-child{
              margin-bottom: 16px;
            }
          }
        }
      }
    }
    .right{
      position: relative;
      float: left;
      width:862px;
      height: 928px;
      padding-left: 50px;
      border:1px solid rgba(217,217,217,1);
      .right_t{
        width: 770px;
        height: 63px;
        padding-left:20px;
        border-bottom: 1px solid  rgba(217,217,217,1);
        >*{
          display: block;
          float: left;
          line-height: 63px;
          font-size:18px;
          font-weight:bold;
          color:rgba(69,68,68,1);
          margin-right: 10px;
          overflow: hidden;
        }
        span{
          width:133px ;
        }
        b{
          width: 217px;
        }
        strong{
          width: 101px;
        }
        i{
          width: 119px;
        }
        em{
          width: 103px;
        }
        p{
          width: 37px;
        }
      }
      .page{
        position: absolute;
        bottom: 24px;
        left: 0;
        width: 100%;
        height: 35px;
        div{
         position: absolute;
          left: 50%;
          transform: translate(-50%);
          height: 35px;
          button{
            display: block;
            float: left;
            border: none;
            outline: none;
            height: 35px;
            line-height: 35px;
            font-size:18px;
            font-weight:400;
            color:rgba(69,69,69,1);
            background: #fff;
          }
          p{
            display: block;
            float: left;
            height: 35px;
            line-height: 35px;
            font-size:18px;
            font-weight:400;
            color:rgba(69,69,69,1);
            b{
              color: #E8390A;
              font-size:18px;
              font-weight:400;
            }
          }
        }
      }
    }
  }
</style>
<style scoped lang="less">
  .pageComponent {
    button{
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline:none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;
      &[disabled]{
        color: #c0c4cc;
        cursor: not-allowed;
      }
      &.active{
        cursor: not-allowed;
        background:#E7390A;
        color: #fff;
      }
    }
  }
</style>
