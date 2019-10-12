<template>
    <div>
      <div class="nav">
        <div class="online" @mouseenter="enter" @mouseleave="leave">
          <img src="../../static/images/3.png" alt="">
          <span>在线服务资源</span>
          <div id="navList" style="display: none">
            <ul>
              <li>初创服务</li>
              <li>科技创新</li>
              <li>知识产权</li>
              <li>市场拓展</li>
              <li>人力资源</li>
              <li>投融资服务</li>
              <li>企业管理</li>
              <li>法律服务</li>
              <li>商务服务</li>
              <li>办公用具</li>
            </ul>
          </div>
        </div>
        <ul class="naBar">
          <li v-for="(item,idx) in nav" @click="goIndex(idx)" :class="cNav==idx?'navClect':''"><span >{{item}}</span></li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "navBar",
        data(){
            return {
                nav:['首页','政策信息','在线办理','民企风采','产业基金','工单检测','政务公开','联系我们'],
                navClect:""
            }
        },
        props:['cNav'],
        methods:{
            goIndex(id){
                //跳转到相应的路由
               if (id==0){
                   this.$router.push('/')
               }
               if(id==1){
                   this.$router.push('/information')
               }
               if(id==6){
                   this.$router.push('/openly')
               }
               if(id==2){
                    this.$router.push('/Antonym')
                }
               if(id==3){
                   this.$router.push('/Corporation')
               }
                if(id==4){
                    this.$router.push('/industry');
                }
                if(id==5){
                    this.$router.push('/order');
                }
               if(id==7){
                   this.$router.push('/tellme')
               }
            },
            enter(){
                $('#navList').slideDown(200)
            },
            leave(){
                $('#navList').slideUp(200)
            }
        },
    }
</script>

<style scoped lang="less">

  .nav ul li.navClect{
    background:rgba(255,255,255,1);
  }
  .nav ul li.navClect span{
    color: #e7390a;
  }
.nav{
  width: 1200px;
  height:42px;
  margin: 0 auto;
  background:rgba(231,57,10,1);
  .online{
    width:180px;
    height:42px;
    background:rgba(255,141,30,1);
    float: left;
    margin-right: 45px;
    position: relative;
    cursor: default;
    img{
      display: block;
      float: left;
      width: 24px;
      height: 24px;
      margin:9px 10px 9px 25px;
    }
    span{
      display: block;
      float: left;
      height: 42px;
      line-height: 42px;
      width:96px;
      font-size:16px;
      font-weight:400;
      color:rgba(255,255,255,1);
    }
    #navList{
      position: absolute;
      top: 42px;
      left: 0;
      width:180px;
      z-index: 999;
      ul{
        width:180px;
        border: 1px solid #4c4c4c;
        border-bottom: none;
        li{
          width: 133px;
          height:40px;
          line-height: 40px;
          border-bottom: 1px solid #4c4c4c;
          padding-left: 45px;
          background: #fff;
          font-size: 18px;
        }
        li:hover{
          background: #cccccc;
        }
      }
    }
  }
  }
  .naBar{
    li{
      float: left;
      padding: 0 25px;
      line-height: 42px;
      height: 42px;
      margin-right: 5px;
      cursor: default;
      span{
        display: block;
        height:42px;
        line-height: 42px;
        font-size:16px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:#ffffff;
      }

    }
  }

</style>
