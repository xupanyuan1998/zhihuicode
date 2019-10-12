<template>
  <div>
    <div class="top">
      <head-nav :clect="clectnav"></head-nav>
    </div>
    <div class="container">
      <div class="nav">
        <span>首页</span><b> ></b><span>政策信息</span><b> ></b><span>办事指南</span><b> ></b><span>办事指南详情</span>
      </div>
    </div>
    <div class="warp">
      <div class="left">
        <ul>
          <li  :class="showLest==0?'slec':''"><span>全部</span></li>
          <li v-for="(item,idx) in leftList" :key="idx" :class="showLest==item.deptId?'slec':''"><span >{{item.deptName}}</span></li>
        </ul>
      </div>
      <div class="right">
        <h2>{{content.title}}</h2>
        <div class="int">
          <p><span>时间:{{content.publishTime}}</span> <b>来源:{{content.departmentName}}</b> <strong>字体显示:</strong> <em v-for="(item,idx) in size" :key="idx" :class="cSize==idx?'sele':''" @click="changeSize(idx)">{{item}}</em></p>
        </div>
        <div class="con" v-html="content.content"></div>
        <p class="fu"><span>附件: </span> <a v-for="(item,idx) in fuList" :href="item.attachmentUrl">{{item.enclosureName}}</a></p>
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

    //var test=(/font-size:\w+;?/g,'');//过滤字体大小
    export default {
        name: "guidesDetali",
        data(){
            return{
                clectnav: 1,
                id:'',
                content:'',
                leftList:'',
                showLest:'',
                size:['大','中','小'],
                cSize:2,
                fuList:[],
            }
        },
        components:{
            headNav,
            footerNav
        },
        methods:{
            changeSize(i){
                this.cSize=i;
                if(i==0){
                    $('.con').children().css('font-size','18px')
                }
                if(i==1){
                    $('.con').children().css('font-size','14px')
                }
                if(i==2){
                    $('.con').children().css('font-size','12px')
                }
            }
        },
        created() {
          this.id=  this.$route.query.id;
          this.axios.post('/web/guide/guide',{guideId:this.id}).then(({data})=>{
              this.content=data.data.guide;
              this.leftList=data.data.departmentList;
              this.showLest=data.data.guide.departmentId;
              this.fuList=data.data.guideenclosurelist
              console.log(data);
            })
        }
    }
</script>

<style scoped lang="less">
  .container {
    width: 100%;
    height: 32px;
    background: rgba(245, 245, 245, 1);
    .nav {
      width: 1200px;
      height: 32px;
      margin: 0 auto;
      span {
        display: block;
        float: left;
        height: 32px;
        line-height: 32px;
        font-size: 14px;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        margin-right: 10px;
      }
      b {
        display: block;
        float: left;
        height: 32px;
        line-height: 32px;
        margin-right: 10px;
      }
    }
  }
  .warp{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 21px;
    padding-bottom: 30px;
    .left{
      float: left;
      margin-right: 20px;
      width:196px;
      height:150px;
      ul{
        width: 196px;
        overflow: hidden;
        li{
          cursor: default;
          width: 89px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          background:rgba(255,255,255,1);
          border:1px solid rgba(230,230,230,1);
          border-left: none;
          float: left;
          margin-right: 8px;
          margin-bottom: 10px;
          span{
            display: block;
            width: 85px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            border-left: 4px solid #FF6A42;
          }
        }
        li.slec{
          background: #E7390A;
          span{
            border: none;
            color: #fff;
          }
        }
      }
    }
    .right{
      float: left;
      width:941px;
      min-height: 775px;
      border:1px solid rgba(217,217,217,1);
      padding:17px 20px ;
      h2{
        text-align: center;
        margin-top: 13px;
        height: 40px;
        line-height: 40px;
      }
      .int{
        width: 835px;
        height: 44px;
        margin: 0 auto;
        border-bottom: 1px solid #CCCCCC;
        p{
          width: 400px;
          margin: 0 auto;
          >*{
            display: block;
            float: left;
            height: 44px;
            line-height: 44px;

            }
          span{
            font-size:12px;
            font-weight:400;
            color:rgba(115,115,115,1);
          }
          b{
            margin-left: 10px;
            font-size:12px;
            font-weight:400;
            color:rgba(115,115,115,1);
          }
          strong{
            margin-left: 10px;
            color: #E8390A;
            margin-right: 10px;
          }
          em{
            margin-right: 10px;
            color: #737373;
            cursor: default;
          }
          em.sele{
            color: #E8390A;
          }
        }
      }
      .con{
        width: 835px;
        margin: 0 auto;
        padding: 20px 0;
      }
      .fu{
        width:730px;
        height:40px;
        background:rgba(245,245,245,1);
        margin-left: 90px;
        overflow: hidden;
        >*{
          display: block;
          float: left;
          height:40px;
          line-height: 40px;
        }
        span{
          margin-left: 21px;
          font-size:14px;
          font-weight:400;
          color:rgba(51,51,51,1);
        }
        a{
          font-size:14px;
          font-weight:400;
          color:rgba(11,0,255,1);
          margin-left: 15px;
        }
      }
    }
  }
  .page{
    margin: 30px 0;
    text-align: center;
    div{
      display: inline-block;
    }
  }
</style>
