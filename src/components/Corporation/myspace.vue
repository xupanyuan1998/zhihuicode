<template>
  <div class="hello">
    <div>
      <head-nav :clect="clectnav"></head-nav>
    </div>
    <div class="warp">
      <div class="top">
        <div class="t_l">
          <div class="inl">
            <img :src="company.companyLogo" alt="">
          </div>
          <div class="int">
            <h2>{{company.companyName}}</h2>
            <h4><span>浏览: 200次</span><span>关注:10</span></h4>
            <p>{{company.intro}}</p>
          </div>
        </div>
        <div class="t_r">
          <h3><span>企业信息</span></h3>
          <ul>
            <li>所属行业:{{company.industry}}</li>
            <li>注册资金:{{company.startupCapital}}万</li>
            <li>所在地址:{{company.address}} </li>
            <li>联系电话:{{company.telephone}} </li>
            <li> 服务邮箱:{{company.email}}</li>
            <li>单位信用：{{company.creditName}}</li>
            <li>单位规模：</li>
          </ul>
        </div>
      </div>
      <div class="server">
        <div class="s_l">
          <h4><span>产品/服务</span></h4>
          <ul>
            <li v-for="(item,idx) in serviceList" :key="idx" :class="idx%3==2?'selec':''"><img :src="item.smallImg" alt=""><span>{{item.name}}</span></li>
          </ul>
        </div>
        <div class="c_l">
          <h4><span>近期需求</span></h4>
          <ul>
            <li v-for="(item,idx) in supplyanddemandlist" :key="idx"><b v-if="item.type==1" class="xu">[供应]</b><b v-if="item.type==2" >[需求]</b><strong>{{item.productname}}</strong><i>{{item.number}}</i><span>{{clearFen(item.endtime)}}</span></li>
          </ul>
        </div>
      </div>
      <div class="zheng">
        <h4><span>企业资质</span></h4>
        <ul>
          <li v-for="(item,idx) in qualificationsList" :key="idx"><img :src="item.smallImg" alt=""></li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <footer-nav></footer-nav>
    </div>
  </div>
</template>
<script>
    import headNav from "../headNav";
    import footerNav from "../footer"
    import $ from 'jquery'
    export default {
        name: "myspace",
        data () {
            return {
                clectnav: 3,
                user:'',
                password:'',
                company:'',
                serviceList:'',//产品服务
                qualificationsList:'',//企业资质
                supplyanddemandlist:'',//供需
            }
        },
        created(){
            // this.axios.post('/web/index/index').then((data)=>{console.log(data)})
            var id=this.$route.query.id;
            this.axios.post('/web/company/company',{companyId:id}).then(({data})=>{
                console.log(data.data);
                this.company=data.data.company;
                this.serviceList=data.data.servicelist;//产品服务
                this.qualificationsList=this.sliceAway(data.data.qualificationslist,8);//企业资质
                this.supplyanddemandlist=data.data.supplyanddemandlist;//供需
            })
        },
        methods:{
            clearFen(i){
                return i.substring(0,i.indexOf(' '))
            },
            //切割数组
            sliceAway(arr,i){
                //arr=数组  i切割结束的下标
                return arr.slice(0,i);
            },
        },
        components:{
            headNav,
            footerNav
        }
    }
</script>

<style scoped lang="less">
  .warp{
    width: 1200px;
    margin: auto;
    .top{
      height: 275px;
      margin-top: 20px;
      .t_l{
        float: left;
        width: 860px;
        height:275px;
        border:1px solid rgba(230,230,230,1);
        .inl{
          display: block;
          float: left;
          margin: 20px;
          position: relative;
          width:312px;
          height:234px;
          img{
            position: absolute;top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
          }
        }
        .int{
          float: left;
          width: 466px;
          h2{
            margin-top: 10px;
            line-height: 40px;
            height: 40px;
            font-size:20px;
            font-weight:400;
            color:rgba(69,69,69,1);
          }
          h4{
            height: 26px;
            line-height: 26px;
            font-size:12px;
            font-weight:400;
            color:rgba(179,179,179,1);
            span{
              display: block;
              float: left;
              height: 26px;
              line-height: 26px;
            }
            span:last-child{
              margin-left: 17px;
            }
          }
          p{
            margin-top: 9px;
            height: 160px;
            line-height: 24px;
            font-size:14px;
            font-weight:400;
            color:rgba(102,102,102,1);
            overflow: hidden;
          }
        }

      }
      .t_r{
        width:316px;
        height:275px;
        border:1px solid rgba(230,230,230,1);
        float: left;
        margin-left: 20px;
        h3{
          width:316px;
          height:36px;
          background:rgba(245,245,245,1);
          span{
            width:120px;
            height:36px;
            background:rgba(232,57,10,1);
            display: block;
            text-align: center;
            line-height: 36px;
            font-size:20px;
            font-weight:bold;
            color:rgba(255,255,255,1);
          }
        }
        ul{
          width: 265px;
          height: 172px;
          padding: 25px 20px 40px 20px;
          li{
            width: 265px;
            height: 24px;
            line-height: 24px;
            font-size:14px;
            font-weight:400;
            color:rgba(69,69,69,1);
          }
        }
      }
    }
    .server{
      height: 342px;
      margin-top: 20px;
      .s_l {
        float: left;
        width:590px;
        height:342px;
        border:1px solid rgba(230,230,230,1);
        h4{
          width:590px;
          height:36px;
          background:rgba(245,245,245,1);
          span{
            display: block;
            width:120px;
            height:36px;
            text-align: center;
            line-height: 36px;
            background:rgba(232,57,10,1);
            font-size:20px;
            font-family:Microsoft YaHei;
            font-weight:bold;
            color:rgba(254,254,254,1);
          }
        }
        ul{
          padding: 30px 20px 13px 20px;
          width: 549px;
          height: 263px;
          li{
            cursor: default;
            width: 160px;
            float: left;
            height: 123px;
            margin-right: 30px;
            margin-bottom: 8px;
            img{
              width: 160px;
              height: 91px;
            }
            span{
              display: block;
              height: 32px;
              line-height: 32px;
              text-align: center;
              font-size:16px;
              font-weight:400;
              color:rgba(69,69,69,1);
            }
          }
          li.selec{
            margin-right: 0;
          }
        }
      }
      .c_l{
        float: left;
        margin-left: 19px;
        width:585px;
        height:342px;
        border:1px solid rgba(230,230,230,1);
        h4{
          width:590px;
          height:36px;
          background:rgba(245,245,245,1);
          span{
            display: block;
            width:120px;
            height:36px;
            text-align: center;
            line-height: 36px;
            background:rgba(232,57,10,1);
            font-size:20px;
            font-weight:bold;
            color:rgba(254,254,254,1);
          }
        }
        ul{
          width: 492px;
          height: 255px;
          padding: 26px 48px;
          overflow: hidden;
          li{
            height: 38px;
            line-height: 38px;
            overflow: hidden;
            border-bottom: 1px dashed #e6e6e6;
            >*{
              display: block;
              float: left;
              height: 38px;
              line-height: 38px;
            }
            b{
              font-size:14px;
              font-weight:400;
              color:rgba(50,164,156,1);
            }
            b.xu{
              color: #df4c39;
            }
            strong{
              width: 168px;
              overflow: hidden;
              margin-left: 20px;
              font-size:14px;
              font-weight:400;
              color:rgba(68,68,68,1);
            }
            i{
              width: 147px;
              font-size:14px;
              font-weight:400;
              color:rgba(69,69,69,1);
            }
            span{
              float: right;
              margin-right: 8px;
              font-size:14px;
              font-weight:400;
              color:rgba(69,69,69,1);
              line-height:36px;
            }
          }
        }
      }
    }
    .zheng{
      width:1198px;
      height:285px;
      border:1px solid rgba(230,230,230,1);
      margin: 20px 0;
      h4{
        height:36px;
        background:rgba(245,245,245,1);
        span{
          display: block;
          width:120px;
          height:36px;
          text-align: center;
          line-height: 36px;
          background:rgba(232,57,10,1);
          font-size:20px;
          font-weight:bold;
          color:rgba(254,254,254,1);
        }
      }
      ul{
        margin: 32px 67px 32px 50px;
        width: 1081px;
        height: 180px;
        overflow: hidden;
        li{
          width:125px;
          height:180px;
          float: left;
          margin-right: 55px;
          img{
            width:125px;
            height:180px;
          }
        }
      }
    }
  }
</style>
