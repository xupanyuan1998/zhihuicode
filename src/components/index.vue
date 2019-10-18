<template>
  <div class="hello">
<div>
  <head-nav :clect="clectnav"></head-nav>
</div>
<!--    轮播图-->
    <div class="Containers">
      <div class="swipers">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in content.swiper" :key="index"><img :src="item.bigImg" alt="" @click="item.isLink==1?link(item.url):''"></swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
          <!--        <div class="swiper-button-prev" slot="button-prev"></div>-->
          <!--        <div class="swiper-button-next" slot="button-next"></div>-->
          <!--        <div class="swiper-scrollbar"   slot="scrollbar"></div>-->
        </swiper>
      </div>
<!--      新闻公告-->
      <div class="news">
        <div class="new_l">
          <div class="title">
            <h5>
              <span v-for="(item,ids) in newsTab" :key="ids" @mouseover="newTab(ids)" :class="ids==newclec?'sllee':''">{{item}}</span><a @click="gomore">更多>></a></h5>
          </div>
          <div class="adlist" >
            <ul class="addlist" v-if="newclec==0">
              <li v-for="(item,idx) in content.newslist" :key="idx"><b></b> <router-link :to="{path:'/newslist/newsdetali',query:{id:item.newsId}}" tag="a"><p>{{item.title}}</p><i v-if="item.isTOP==1">置顶</i></router-link> <span>{{clearFen(item.addtime)}}</span></li>
            </ul>
            <ul class="addlist" v-if="newclec==1">
              <li v-for="(item,idx) in content.noticelist" :key="idx"><b></b> <router-link :to="{path:'/policy/policydetali',query:{id:item.noticeid}}" tag="a"><p>{{item.title}}</p><i v-if="idx==0">置顶</i></router-link> <span>{{clearFen(item.addTime)}}</span></li>
            </ul>
          </div>
        </div>
       <div class="new_r">
         <div class="login" v-if="loginShow===0">
           <span class="erweima" @click="malogin"></span>
           <h2>欢迎登录民营经济智慧云服务平台</h2>
           <div><img src="../../static/images/9.png" alt=""> <input type="text" placeholder="请输入用户名" v-model="user"></div>
           <div><img src="../../static/images/10.png" alt=""> <input type="password" placeholder="请输入密码" v-model="password"></div>
           <button @click="login">登录</button>
           <p><b class="gores" >忘记密码</b><b class="gores"  @click="goRegistered">免费注册</b></p>
         </div>
         <div class="login erma" v-if="loginShow===1" @mouseleave="normal">
           <h2>欢迎登录民营经济智慧云服务平台</h2>
           <img src="../../static/images/app.png" alt="">
           <a href="javascript:;" class="gores">扫描二维码登录</a>
         </div>
         <div class="go" v-if="loginShow===2">
           <div class="heimg" @click="goPersonal">
             <img src="../../static/images/30.png" alt="">
             <span v-if="personal.roleId==0">个人用户</span>
             <span v-if="personal.roleId==1">企业法人</span>
             <span v-if="personal.roleId==2">经办人员</span>
           </div>
           <p>{{personal.userName}},欢迎您</p>
           <h3><button>修改密码</button><button @click="logout">退出登录</button></h3>
           <div v-if="personal.authenticationState==0">
             <b>您有一个法人账户未实名认证,</b>
             <router-link tag="a" to="/personal">请处理</router-link>
           </div>
         </div>
       </div>
      </div>
      <div class="news yuan">
        <div class="new_l">
          <div class="title">
            <h5><span class="sllee">园区风采</span> <router-link tag="a" to="javascript:;">更多>></router-link></h5>
          </div>
          <div class="tu">
            <ul>
              <li v-for="(item,idx) in content.areaslist"  @mouseover="yuanSl(item)" :key="idx" :class="[{'clear_r':idx%4==3},{'clect':item.active}]" ><div  @click="goyuan(item.areasId)"><img :src="item.icon" alt=""> <span>{{item.name}}</span></div></li>
            </ul>
          </div>
        </div>
        <div class="new_r">
          <div class="auto">
            <p>
              <span>在线办理</span>
              <router-link tag="a" to="/information/guides">更多>></router-link>
            </p>
            <ul class="line_list">
              <li v-for="(item,idx) in content.departmentlist" :key="idx" :class="changeColor(idx)"><span @click="linkto(item.deptId)" >{{item.deptName}}</span></li>
            </ul>
          </div>

        </div>
      </div>
      <div class="news qing">
        <div class="new_l">
          <img class="tong" src="../../static/images/12.jpg" alt="">
        </div>
        <div class="new_r">
          <div class="sheng">
            <div><img src="../../static/images/shui.png" alt=""><span>水</span></div>
            <div><img src="../../static/images/dian.png" alt=""><span>电</span></div>
            <div><img src="../../static/images/qi.png" alt=""><span>气</span></div>
          </div>
        </div>
      </div>
      <div class="news fast">
        <div class="new_l">
          <div class="title">
            <h5><span class="sllee">快速申报</span><a href="javascript:;">更多>></a></h5>
          </div>
          <div class="tool">
            <p><span>申报内容</span><b>申报日截止</b></p>
          </div>
          <ul class="addlist superstore">
            <li v-for="(item,index) in content.declarationlist" :key="index"><b></b> <router-link tag="a" to="{path:'',query:{id:item.declarationId}}">{{item.title}}</router-link> <strong v-if="item.state==0">[{{item.endday}}天]</strong><strong v-if="item.state==1" class="end">[结束]</strong> <span>{{clearFen(item.endtime)}}</span></li>
          </ul>
        </div>
        <div class="new_r">
          <div class="Problem">
            <div>
              <h4>
                <img src="../../static/images/13.png" alt="">
                <span>政策咨询</span>
              </h4>
              <p>填写您需要咨询的省市政策，我们将统一解答并通知您查阅，请下载我们的App或关注微信公众号，即时接收通知。</p>
            </div>
            <div>
              <h4>
                <img src="../../static/images/14.png" alt="">
                <span>问题投诉</span>
              </h4>
              <p>填写您需要咨询的省市政策，我们将统一解答并通知您查阅，请下载我们的App或关注微信公众号，即时接收通知。</p>
            </div>
            <div>
              <h4>
                <img src="../../static/images/15.png" alt="">
                <span style="color:rgba(50,164,156,1);">建议意见</span>
              </h4>
              <p>填写您需要咨询的省市政策，我们将统一解答并通知您查阅，请下载我们的App或关注微信公众号，即时接收通知。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="news sudi fast">
        <div class="new_l">
          <div class="title">
            <h5><span class="sllee">供需速递</span> <a href="javascript:;">更多>></a></h5>
          </div>
          <div class="tool su_header">
            <p><span>供需</span> <i>产品</i> <strong>数量</strong><b>截止时间</b></p>
          </div>
          <ul >
            <li v-for="(item,index)  in content.supplyanddemandlist" :key="index"><b v-if="item.type==1">[供应]</b><b v-if="item.type==2" class="xu">[需求]</b><span>{{item.productname}}</span><i>{{item.number}}</i><strong>{{clearFen(item.endtime)}}</strong></li>
          </ul>
        </div>
        <div class="new_r">
          <div class="auto talent">
            <p>
              <span>铜陵人才</span>
              <a href="javascript:;">更多>></a>
            </p>
            <ul class="hederimg">
              <li v-for="(item,index)  in content.abilityarchiveslist" :key="index"><img :src="item.headImg" alt=""><span>{{item.name}}</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="news">
        <div class="banner">
          <img src="../../static/images/banner.png" alt="">
        </div>
      </div>
      <div class="news feng">
        <div class="fengcai">
          <p><span>民企风采</span> <a href="javascript:;">更多>></a></p>
          <ul>
            <li v-for="(item,idx) in content.companylist"  :class="idx%5 ==4?'clear_r':''" @click="fengcai(item.companyId)"  @mouseover="fengSl(item)" :key="idx"><div :class="{'select':item.active}"><img :src="item.companyLogo" alt="" ></div> <span>{{item.companyName}}</span></li>
          </ul>
        </div>
      </div>
      <div class="new frend">
        <h5>友情链接</h5>
        <p><router-link :to="item.friendlinkUrl" v-for="(item,index)  in content.friendLinklist" :key="index">{{item.friendlinkName}}</router-link></p>
      </div>
    </div>
    <div class="footer">
      <footer-nav></footer-nav>
    </div>
  </div>
</template>

<script>
 // 引入导航栏
import headNav from "./headNav";
import footerNav from "./footer"
 import $ from 'jquery'
export default {
  name: 'index',
  data () {
    return {
      clectnav: 0,
        user:'',
        password:'',
        swiperOption:{
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                type: "bullets"
            },
            autoplay:{
                delay:1000,
                stopOnLastSlide : false,
                disableOnInteraction : true,
            },
            loop:false,
            speed:800,
            effect:'fade'//切换效果 fade, slider ,cube,"coverflow",flip
        },
        newsTab:['新闻','公告'],//新闻公告切换
        newclec:0,
        content:{
          swiper:[],
            newslist:[],
            noticelist:[],
            areaslist:'',
            declarationlist:'',
            supplyanddemandlist:'',
            abilityarchiveslist:'',
            companylist:'',
            friendLinklist:''
        },
        yuanSleect:0,
        loginShow:0,//登录框,
        personal:'',
    }
  },
    created(){
      //获取本地储存的登录数据
       let status= localStorage.getItem('token');
       //获取缓存个人信息数据
        let ge=localStorage.getItem('personal');
        this.personal=JSON.parse(ge);
        if(status==null){
            this.loginShow=0;
        }else{
            this.loginShow=2;
        }
        this.axios.post('/web/index/index').then(({data})=>{
            console.log(data);
            this.content.swiper=data.bannerList;//轮播图
            this.content.newslist=data.newslist;
            this.content.noticelist=data.noticelist;
            this.content.areaslist=data.areaslist;
            this.content.declarationlist=data.declarationlist;
            this.content.supplyanddemandlist=data.supplyanddemandlist;//供需
            this.content.abilityarchiveslist=data.abilityarchiveslist;//rencai
            this.content.companylist=data.companylist;//民企
            this.content.friendLinklist=data.friendLinklist;//友联
            this.content.departmentlist=data.departmentlist;//在线办理

        })
    },
    methods:{
      gomore(){//判断到新闻列表还是公告列表
        if(this.newclec==0){
            this.$router.push('/newslist')
        }
        if(this.newclec==1){
            this.$router.push('/policy')
        }
      },
        normal(){
            this.loginShow=0;
        },
        //登录
        login(){
            this.axios.post('/web/login/login',{mobile:this.user,password:this.password}).then(({data})=>{
                if(data.code===10001){
                    this.loginShow=2;
                   this.personal=data.data ;
                   console.log(data.data.tokenSign);
                   localStorage.setItem('token',data.data.tokenSign);
                   localStorage.setItem('personal',JSON.stringify(data.data));
                }
                // console.log(data)
            })
        },
        //退出
        logout(){
            this.loginShow=0;
            localStorage.removeItem('token');
            window.location.reload();
        },
        //二维码登录
        malogin(){
            this.loginShow=1;
        },
        newTab(i){//新闻公告开发
          this.newclec=i;
        },
        linkto(i){
            this.$router.push({path:'/information/guides',query:{id:i}});
        },
        yuanSl(index){
            var _this=this;
            this.$nextTick(function () {
                this.content.areaslist.forEach(function (index) {
                    _this.$set(index,'active',false);
                });
                this.$set(index,'active',true);
            });
        },
        fengSl(index){
            var _this=this;
            this.$nextTick(function () {
                this.content.companylist.forEach(function (index) {
                    _this.$set(index,'active',false);
                });
                this.$set(index,'active',true);
            });
        },
        //园区风采页面
        goyuan(i){
          console.log(i)
        },
        clearFen(i){
          return i.substring(0,i.indexOf(' '))
        },
        link(i){
            window.open(i,'_blank')
        },
        changeColor(index){
            if(index==1){
                return 'color_p'
            }
            if (index==2){
                return 'color_a'
            }
            if(index==3){return 'color_b'}
            if(index==4){return 'color_c'}
            if(index==5){return 'color_d'}
            if(index==6){return 'color_e'}
            if(index==7){return 'color_f'}
            if(index==8){return 'color_g'}
            if(index==9){return 'color_h'}
            if(index==10){return 'color_j'}
            if(index==11){return 'color_k'}
            if(index==12){return 'color_l'}
        },
        fengcai(i){
          console.log(i)
        },
        //个人中心
        goPersonal(){
          this.$router.push('personal')
        },
        //注册页面
        goRegistered(){
          this.$router.push('/registered')
        }
    },
    components:{
      headNav,
      footerNav
    }
}
</script>
<style lang="less">
  .swipers{
  .swiper-pagination{
  .swiper-pagination-bullet{
   background: red;
  }
  }
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .Containers{
    width: 1200px;
    height: auto;
    margin:  0 auto;
  }
  .swipers{
    width: 1200px;
    height: 400px;
    overflow: hidden;
    margin-top: 15px;
  }
  .news{
    margin-top: 15px;
    overflow: hidden;
    .new_l{
      width: 820px;
      float: left;
      .title{
        height: 36px;
        background: #f6f6f6;
        cursor: default;
        h5{
          width: 820px;
          height:36px;
          float: left;
          font-size:16px;
          font-family:Microsoft YaHei;
          font-weight:bold;
          color:rgba(255,255,255,1);
          text-align: center;
          line-height: 36px;
          span{
            width:84px;
            height:36px;
            display: block;
            float: left;
            background: #f6f6f6;
            font-size:16px;
            font-weight:400;
            color:rgba(76,76,76,1);
          }
          span.sllee{
            background: #E94921;
            font-weight:bold;
            color:rgba(255,255,255,1);
          }
          a{
            display: block;
            float: right;
            height: 36px;
            line-height: 36px;
            margin-right: 10px;
            width:42px;
            font-size:12px;
            font-weight:400;
            color:rgba(123,123,123,1);
          }
        }
      }
      .adlist{
        width: 820px;
        height:256px;
        overflow: hidden;
        margin-top: 10px;
      }
      .addlist{
        width: 796px;
        padding:  0 12px;
        li{
          height: 35px;
          line-height: 35px;
          border-bottom: 1px dashed #c5c5c5;
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
            float: left;
            height: 35px;
            line-height: 35px;
            width: 600px;
            overflow: hidden;
            margin-right: 7px;
            p{
              float: left;
            }
            i{
              display: block;
              float: left;
              width:32px;
              height:16px;
              line-height: 16px;
              background:rgba(229,53,9,1);
              border-radius:2px;
              font-size:12px;
              font-family:Microsoft YaHei;
              font-weight:400;
              color:rgba(255,255,255,1);
              text-align: center;
              margin-top: 7px;
              margin-left: 5px;
            }
          }

          span{
            display: block;
            float: right;
            height: 36px;
            line-height: 36px;
            font-size: 12px;
            color: #bdbdbd;
            font-family:Microsoft YaHei;
          }
        }
      }
    }
    .new_r{
      float: left;
      margin-left: 14px;
      width:363px;
      border:1px solid rgba(227,227,227,1);
      .login{
        width:363px;
        height:300px;
        background: url("../../static/images/8.png") no-repeat;
        position: relative;
        .erweima{
          width: 35px;
          height: 35px;
          display: block;
          background: url("../../static/images/login.png") no-repeat;
          position: absolute;
          top: 0;
          right: 0;
        }
        h2{
          width:363px;
          height: 77px;
          text-align: center;
          line-height: 77px;
          font-size:18px;
          font-weight:400;
          color:rgba(229,53,9,1);
        }
        div{
          width:284px;
          height:36px;
          background:rgba(255,255,255,1);
          border:1px solid rgba(227,227,227,1);
          border-radius:2px;
          margin: 0 auto 24px;
          img{
            display: block;
            float: left;
            margin: 6px;
          }
          input{
            float: left;
            border: none;
            outline: none;
            width: 240px;
            height: 36px;
            line-height: 36px;
            padding:0 3px;
            font-size:14px;
            font-weight:400;
          }
        }
        button{
          display: block;
          width:284px;
          height:36px;
          background:rgba(229,53,9,1);
          border-radius:2px;
          text-align: center;
          border: none;
          outline: none;
          line-height: 36px;
          margin:  0 auto;
          font-size:16px;
          font-weight:400;
          color:rgba(255,255,255,1);
        }
        p{
          width:284px;
          margin: 0 auto;
          height: 30px;
          b.gores{
            cursor: default;
            height: 30px;
            line-height: 30px;
            display: block;
            float: left;
          }
          b:last-child{
            float: right;
          }
        }
        .gores{
          display: block;
          font-size:14px;
          font-weight:400;
          color:rgba(41,93,211,1);
          height: 20px;
          line-height: 20px;
          text-align: center;
        }
      }
      .erma{
        h2{
          height: 72px;
          line-height: 72px;
          text-align: center;
        }
        img{
          display: block;
          width: 131px;
          height: 127px;
          margin:7px auto;
        }
        .gores{
          height: 69px;
          line-height: 69px;
          font-size: 18px;
          color: #e53509;
        }

      }
      .go{
        width:363px;
        height:300px;
        background: #fff;
       .heimg{
          width: 99px;
         height: 99px;
         border-radius: 50%;
         margin: 20px auto 0;
         position: relative;
         img{
           width: 99px;
           height: 99px;
         }
         span{
           display: block;
           position: absolute;
           bottom: 0;
           left: -6px;
           width: 99px;
           height: 26px;
           background: url("../../static/images/name.png")no-repeat;
            padding-left: 27px;
           font-size:12px;
           font-weight:400;
           color:rgba(255,254,254,1);
         }
        }
        p{
          height:40px;
          font-size:14px;
          font-weight:400;
          color:rgba(69,69,69,1);
          width: 303px;
          margin: 0 auto;
          text-align: center;
          line-height: 40px;
          overflow: hidden;
        }
        h3{
          padding: 0 70px;
          width: 210px;
          overflow: hidden;
          button{
            display: block;
            float: left;
            width:96px;
            height:32px;
            background:rgba(255,146,40,1);
            font-size:14px;
            font-weight:400;
            color:rgba(255,255,255,1);
            text-align: center;
            line-height: 32px;
            border: none;
            outline: none;
          }
          button:last-child{
            display: block;
            float: right;
            background:rgba(201,201,201,1);
          }
        }
        b{
          margin-top: 10px;
          display: block;
          height: 40px;
          font-size:12px;
          font-weight:400;
          color:rgba(69,68,68,1);
          line-height: 40px;
          text-align: center;
        }
       a{
          display: block;
          height: 20px;
          line-height: 20px;
          text-align: center;
          font-size:12px;
          font-weight:400;
          text-decoration:underline;
          color:rgba(1,25,255,1);
          cursor: pointer;
        }
      }

    }
  }
  .yuan{
    height:352px;
    .tu{
      width:100%;
      overflow: hidden;
      ul{
        width: 803px;
        padding: 0 9px 3px;
        overflow: hidden;
      }
      li{
        width:183px;
        height:133px;
        border:1px solid rgba(227,227,227,1);
        float: left;
        margin-right: 20px;
        margin-top: 20px;
        div{
          width: 175px;
          height: 125px;
          position: relative;
          margin: 4px;
          img {
            width: 175px;
            height: 125px;
            position: absolute;
            top: 0;
            left: 0;
          }
          span{
            display: block;
            width:175px;
            height:30px;
            background:rgba(0,0,0,1);
            opacity:0.65;
            position: absolute;
            z-index: 999;
            bottom: 0;
            font-size:12px;
            line-height: 30px;
            font-weight:400;
            color:rgba(255,255,255,1);
            text-align: center;
            overflow: hidden;
          }
        }
      }
      li.clect{
        border: 2px solid #ff8e1d;
        width:181px;
        height:131px;
      }
      li.clear_r{
        margin-right: 0;
      }
    }
  }
  .auto{
    width:363px;
    height:349px;
    background:rgba(255,249,240,1);
    border:1px solid rgba(227,227,227,1);
    p{
      width: 363px;
      height: 50px;
      span{
        display: block;
        height: 50px;
        line-height: 50px;
        float: left;
        font-size:16px;
        font-weight:bold;
        color:rgba(233,73,33,1);
        margin-left: 17px;
      }
      a{
        display: block;
        float: right;
        font-size:12px;
        font-weight:400;
        color:rgba(137,137,137,1);
        margin-right: 10px;
        margin-top: 17px;
      }
    }
    .line_list{
      width: 333px;
      padding: 20px 6px 20px 25px;
      overflow: hidden;
      li{
        width:86px;
        height:34px;
        float: left;
        border-radius:2px;
        margin-right: 24px;
        margin-bottom: 19px;
        background:rgba(221,156,120,1);
        text-align: center;
        line-height: 34px;
        cursor: default;
        color:rgba(255,255,255,1);
        a{
          font-size:14px;
          font-weight:400;
          color:rgba(255,255,255,1);
        }
      }
      li.color_p{
        background:rgba(120,175,221,1)
      }
      li.color_a{
        background:rgba(142,184,136,1);
      }
      li.color_b{
        background:rgba(123,201,189,1);
      }
      li.color_c{
        background:rgba(108,155,111,1);
      }
      li.color_d{
        background:rgba(127,149,231,1);
      }
      li.color_e{
        background:rgba(196,146,225,1);
      }
      li.color_f{
        background:rgba(244,148,101,1);
      }
      li.color_g{
        background:rgba(178,132,181,1);
      }
      li.color_h{
        background:rgba(103,164,207,1);
      }
      li.color_i{
        background:rgba(142,184,136,1);
      }
      li.color_j{
        background:rgba(142,184,136,1);
        //background:rgba(120,175,221,1);
      }
      li.color_k{
        background:rgba(120,175,221,1);
      }
      li.color_l{
        background:rgba(77,173,158,1);
      }
    }
  }
  .qing{
    height: 100px;
    .tong{
      width: 820px;
      height: 100px;
    }
    .sheng{
      height: 98px;
      padding: 0 35px 0 29px;
      width: 300px;
      background:rgba(255,249,240,1);
      div{
        width: 60px;
        height: 88px;
        float: left;
        margin-right: 60px;
        margin-top: 10px;
        img{
          width: 60px;
          height: 60px;
          display: block;
        }
        span{
          display: block;
          width: 60px;
          height: 28px;
          line-height: 28px;
          font-size:16px;
          font-weight:400;
          color:rgba(51,51,51,1);
          text-align: center;
        }
      }
      div:last-child{
        margin-right: 0;
      }
    }
  }
  .fast{
    height: 318px;
    .tool{
      margin-top: 1px;
      width:820px;
      height:31px;
      background:rgba(248,248,248,1);
      span{
        display: block;
        float: left;
        height: 31px;
        line-height: 31px;
        margin-left: 17px;
      }
      b{
        display: block;
        float: right;
        margin-right: 78px;
        font-size:14px;
        font-weight:400;
        color:rgba(112,112,112,1);
        line-height:36px;
      }
    }
    .new_l{
      .superstore{
        li{
          height: 35px;
          line-height: 35px;
          >*{
            height: 36px;
            line-height: 36px;
          }
          a{
            width: 600px;
            overflow: hidden;
          }
          span{
            float: right;
            width: 70px;
            margin-right: 20px;
          }
          strong.end{
            color: #333;
          }
          strong{
            display: block;
            float: left;
            width: 60px;
            font-size:12px;
            font-weight:400;
            color:rgba(229,53,9,1);
            margin-right: 8px;
          }
        }
      }
    }
    .Problem{
      height: 316px;
      background:rgba(255,249,240,1);
      div{
        width: 350px;
        height: 66px;
        margin:0 9px;
        padding: 17px 0;
        border-bottom: 1px dashed #a1a1a1;
        h4{
          float: left;
          width: 64px;
          margin-left: 10px;
          height: 66px;
          img{
            display: block;
            margin: 0 auto;
          }
          span{
            display: block;
            width: 64px;
            height: 24px;
            line-height: 24px;
            font-size:16px;
            font-weight:bold;
            color:rgba(213,161,84,1);
          }
        }
        p{
          float: left;
          height: 66px;
          width: 252px;
          margin-left: 13px;
          line-height: 22px;
          overflow: hidden;
        }
      }
      div:last-child{
        border-bottom: none;
      }
    }
  }
  .sudi{
    height: 398px;
    overflow: hidden;
    .su_header{
      span{
        margin-left: 20px;
        color:rgba(112,112,112,1);
      }
      i{
        display: block;
        float: left;
        height: 31px;
        line-height: 31px;
        margin-left: 30px;
        color:rgba(112,112,112,1);
      }
      strong{
        float: left;
        margin-left:337px ;
        height: 31px;
        line-height: 31px;
        color:rgba(112,112,112,1);
      }
      b{
        float: right;
        margin-right: 52px;
        color:rgba(112,112,112,1);
      }
    }
    .new_l{
      ul{
        margin-top: 6px;
        width:796px ;
        height: 321px;
        overflow: hidden;
        padding: 0 13px;
        cursor: default;
        li{
          height: 35px;
          line-height: 35px;
          border-bottom: 1px  dashed #c5c5c5;
          >*{
            display: block;
            height: 36px;
            float: left;
          }
          b{
            margin-left: 10px;
            color: #df4c39;

          }
          b.xu{
            color: #32a49c;
          }
          span{
            margin-left: 12px;
            color: #444444;
            width: 360px;
            overflow: hidden;
          }
          i{
            margin-left: 10px;
            color: #444444;
            width: 248px;
          }
          strong{
            float: right;
            margin-right: 39px;
            color: #333333;
          }
        }
      }
    }
    .new_r{
      .talent{
        height: 394px;
        p{
          height: 45px;
          line-height: 45px;
          span{
            height: 45px;
            line-height: 45px;
          }
          a{
            margin-top: 0;
          }
        }
        ul{
          width: 325px;
          height: 344px;
          padding: 0 27px 0 20px;
          overflow: hidden;
          margin-top: 10px;
          li{
            width: 96px;
            height: 160px;
            float: left;
            margin-right: 12px;
            margin-bottom: 15px;
            img{
              display: block;
            }
            span{
              display: block;
              height: 32px;
              line-height: 32px;
              text-align: center;
              font-size:14px;
              font-weight:400;
              color:rgba(51,51,51,1);
            }
          }
          li.cleras{
            margin-right: 0;
          }
        }
      }
    }
  }
  .feng{
    margin-top: 20px;
    .fengcai{
      p{
        height: 36px;
        background: #EDEDED;
        >*{
          display: block;
          float: left;
          height: 36px;
          line-height: 36px;
        }
        span{
          width:96px;
          height:36px;
          background: #E94921;
          font-size:16px;
          font-weight:bold;
          color:rgba(255,255,255,1);
          text-align: center;
        }
        a{
          float: right;
          font-size:12px;
          font-weight:400;
          color:rgba(123,123,123,1);
          margin-right: 10px;
        }
      }
      ul{
        margin-top: 23px;
        height: 418px;
        padding:0 3px;
        width:1194px;
        li{
          margin-top: 5px;
          height: 203px;
          margin-right: 36px;
          width: 210px;
          float: left;
          div{
            width: 210px;
            height:160px ;
            display: flex;
            align-items: center; /*定义body的元素垂直居中*/
            justify-content: center; /*定义body的里的元素水平居中*/
            img{
              width: 200px;
              height: 150px;
            }
          }
          div.select{
            width: 206px;
            height:156px;
            border: 2px solid #ff8e1d;
          }

          span{
            display: block;
            height: 43px;
            line-height: 43px;
            font-size:14px;
            font-weight:400;
            color:rgba(26,26,26,1);
            text-align: center;
            width: 200px;
            overflow: hidden;
          }
        }
        li.clear_r{
          margin-right: 0;
        }
      }
    }
  }
  .frend{
    margin-top: 10px;
    width: 1176px;
    padding:0 12px;
    height:94px;
    background:rgba(255,249,240,1);
    border:1px solid rgba(227,227,227,1);
    overflow: hidden;
    h5{
      height: 40px;
      border-bottom: 1px dashed #d0cdc8;
      line-height: 40px;
      font-size:16px;
      font-weight:bold;
      color:rgba(233,73,33,1);
    }
    p{
      height: 52px;
      line-height: 52px;
      overflow: hidden;
      a{
        display: block;
        float: left;
        margin-right: 30px;
        height: 52px;
        line-height: 52px;

      }
    }
  }
  .footer{
    margin-top: 17px;
  }
</style>
