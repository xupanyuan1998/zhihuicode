<template>
  <div>
    <div class="top">
      <head-nav :clect="clectnav"></head-nav>
    </div>
    <div class="warp">
      <div class="left">
        <div class="headerimg"><img src="../../../static/images/30.png" alt=""></div>
      </div>
      <p class="fa"><b>您好！王建</b><span>【法人】</span></p>
      <h5>铜陵市******有限公司</h5>
      <ul>
        <li><img src="" alt=""><span></span></li>
      </ul>
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
    margin: 15px auto;
    height: 941px;
    overflow: hidden;
    .left{
      float: left;
      margin: 5px 15px 5px;
      width:264px;
      height:926px;
      border: 1px solid #d7d7d7;
      box-shadow: 0 0 10px rgba(0,0,0,0.16);
    }
    .right{
      position: relative;
      float: left;
      width:852px;
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
