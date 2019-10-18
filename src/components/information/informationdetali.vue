<template>
    <div>
      <div class="top">
        <head-nav :clect="clectnav"></head-nav>
      </div>
      <div class="container">
        <div class="nav">
          <span>首页</span><b> ></b><span>政策信息</span><b> ></b><span>本市政策详情</span>
        </div>
      </div>
      <div class="warp">
        <div class="left">
          <h3 v-for="(item,idx) in leftList" :key="idx" :class="leftSelect==idx?'select':''" @click="lefts(idx)">{{item}}</h3>
        </div>
        <div class="right">
          <div class="top"><div><p>{{content.title}}</p><span v-if="content.isTop===1">置顶</span></div></div>
          <div class="Units"><p><span>发布单位:{{content.departmentName }}</span> <b>发布日期:{{content.publishTime}}</b> </p></div>
          <div class="cate"><span>分类:{{content.categoryName}}</span> <b>行业:全部</b> <strong>分类编号:{{content.classIcno}}</strong> <p v-if="shoucang==0"><img src="../../../static/images/18.png" alt=""  @click="collection(content.policyId)"><i>收藏</i></p> <p v-if="shoucang==1"><img src="../../../static/images/77.png" alt=""  @click="canclecollection(content.policyId)"><i class="shou">已收藏</i></p></div>
          <div class="content" v-html="content.content"></div>
        </div>
      </div>
      <div class="bottom">
        <footer-nav></footer-nav>
      </div>
    </div>
</template>

<script>
    import headNav from "../headNav";
    import footerNav from "../footer";
    export default {
        name: "informationdetali",
        components: {
            headNav,
            footerNav
        },
        data(){
            return{
                clectnav: 1,
                leftList:['本市政策','本省政策','中央政策'],
                leftSelect:0,
                content:'',
                userId:'',
                shoucang:'',
            }
        },
        created() {
            this.leftSelect= this.$route.query.leftId;
            let id=this.$route.query.id;
            var a=localStorage.getItem('personal');
            this.msg=JSON.parse(a);
            if(a==null){
                this.userId=' ';
            }else{
                this.userId=JSON.parse(a).userId;
            }
            this.axios.post('/web/policy/policy',{policyId:id,userId:this.userId}).then(({data})=>{
                console.log(data.data);
                this.content=data.data;
                this.shoucang=data.data.collState;
            });
            this.$nextTick(function () {
                $('.content').children().css('font-size','14px')
            })
        },
        methods:{
            lefts(i){
                // this.leftSelect=i;
            },
            //收藏
            collection(i){
                console.log(this.msg,i);
                var a='#'+this.$route.fullPath;
                console.log(a);
                if(this.msg==null){

                }else{
                    this.axios.post('/web/usercollection/usercollection',{contentId:i,state:1,type:0,userId:this.msg.userId,Url:a}).then(({data})=>{
                        if(data.code==10001){
                            this.shoucang=1;
                        }
                    })
                }

            },
            //取消收藏
            canclecollection(i){
                this.axios.post('/web/usercollection/usercollection',{contentId:i,state:2,type:0,userId:this.userId,Url:' '}).then(({data})=>{
                    if(data.code==10001){
                        this.shoucang=0;
                    }
                })
            },
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
    padding: 21px 0;
    .left{
      float: left;
      margin-right: 20px;
      width:186px;
      height:150px;
      border:1px solid rgba(230,230,230,1);
      border-top: none;
      h3{
        width:186px;
        height: 50px;
        line-height: 50px;
        border-top: 1px solid rgba(230,230,230,1);
        text-align: center;
        font-size:18px;
        font-weight:400;
        color:#454545;
      }
      h3.select{
        color: #E84012;
        border-top: 1px solid #FF6A42;
      }
    }
    .right{
      float: left;
      width:989px;
      min-height: 700px;
      border:1px solid rgba(217,217,217,1);
      .top{
        padding-top: 40px;
        height: 29px;
        text-align: center;
        div{
          display: inline-block;
          p{
            display: block;
            float: left;
            height: 29px;
            line-height: 29px;
            font-size:20px;
            font-weight:400;
            color:rgba(69,69,69,1);
          }
          span{
            display: block;
            float: left;
            width:40px;
            height:18px;
            background:rgba(255,106,66,1);
            border-radius:4px;
            font-size:12px;
            font-weight:400;
            color:rgba(254,254,254,1);
            text-align: center;
            margin-left: 10px;
          }
        }

      }
      .Units{
        cursor: default;
        height: 48px;
        text-align: center;
        p{
          display: inline-block;
          span{
            display: block;
            float: left;
            height: 48px;
            line-height: 48px;
            font-size:12px;
            font-weight:400;
            color:rgba(115,115,115,1);
            margin-right: 47px;
          }
          b{
            float: left;
            display: block;
            height: 48px;
            line-height: 48px;
            font-size:12px;
            font-weight:400;
            color:rgba(115,115,115,1);
          }
        }
      }
      .cate{
        width:730px;
        height:26px;
        background:rgba(245,245,245,1);
        margin: 0 auto;
        cursor: default;
        >*{
          display: block;
          float: left;
          height: 26px;
          line-height: 26px;
        }
        span{
          margin-left: 145px;
          font-size:12px;
          font-weight:400;
          color:rgba(69,69,69,1);
        }
        b{
          margin-left: 50px;
          font-size:12px;
          font-weight:400;
          color:rgba(69,69,69,1);
        }
        strong{
          margin-left: 39px;
          font-size:12px;
          font-weight:400;
          color:rgba(69,69,69,1);
        }
        p{
          margin-left: 32px;
          overflow: hidden;
          cursor: default;
          img{
            display: block;
            float: left;
            margin: 7px 2px;
          }
          i{
            display: block;
            float: left;
          }
        }
      }
      .content{
        padding: 32px 88px 58px 93px;
      }
    }
  }
</style>
