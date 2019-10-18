<template>
  <div>
    <div class="top">
      <head-nav :clect="clectnav"></head-nav>
    </div>
    <div class="warp">
      <div class="left">
        <h3 v-for="(item,idx) in leftlist" :class="leftShow==idx?'select':''" @click="cleft(idx)">{{item}}</h3>
      </div>
      <div class="right">
        <div class="serch">
          <input type="text" placeholder="请输入关键字" v-model=" serchs">
          <button @click="serchsa">搜索</button>
        </div>
        <h1 v-if="leftShow==0">本市政策</h1>
        <h1 v-if="leftShow==1">本省政策</h1>
        <h1 v-if="leftShow==2">中央政策</h1>
        <ul class="addlist">
<!--          <router-link tag="a" to="/information/informationMore/informationdetali">本市召开中小企业高质量发展座谈会23个优质中小企业重点项目集中开工</router-link>-->
          <li v-for="(item,idx) in newsList" :key="idx" ><router-link tag="a" :to="{path:'/information/informationMore/informationdetali',query:{id:item.policyId,leftId:leftShow}}"><b></b><em>本市召开中小企业高质量发展座谈会23个优质中小企业重点项目集中开工</em></router-link><p><strong></strong> <img v-if="item.collState==0" src="../../../static/images/20.png" alt="" @click="addshou(item)"><img v-if="item.collState==1" src="../../../static/images/77.png" @click="cancleshou(item)" alt=""></p><span>{{clearFen(item.publishTime)}}</span></li>
        </ul>
      </div>
    </div>
    <div class="page">
      <!--        分页组件-->
      <div>
        <!--          <page-component :page-config="pageConfigPageTotal"></page-component>-->
        <div class="pageComponent" v-if="pageConfig.total">
          <!--上一页-->
          <button @click="prePage" :disabled="currentPage === 1">上一页</button>
          <!--总页数小于8的-->
          <template v-if="pageTotal <= showPageNo">
            <button v-for="i in pageTotal" @click="changeCurrentPage(i)" :class="{active:i === currentPage}" :key="i">{{i}}</button>
          </template>
          <template v-else-if="currentPage < 4">
            <button v-for="i in 6" @click="changeCurrentPage(i)" :class="{active:i === currentPage}" :key="i">{{i}}</button>
            <button :disabled="true">···</button>
            <button @click="changeCurrentPage(pageTotal)">{{pageTotal}}</button>
          </template>
          <template v-else-if="currentPage > pageTotal - 4">
            <button @click="changeCurrentPage(1)">1</button>
            <button :disabled="true">···</button>
            <button v-for="i in 6" @click="changeCurrentPage(i + (pageTotal - 6))" :class="{active:(i + (pageTotal - 6)) === currentPage}" :key="i">{{i + (pageTotal - 6)}}</button>
          </template>
          <template v-else>
            <button @click="changeCurrentPage(1)">1</button>
            <button :disabled="true">···</button>
            <button @click="changeCurrentPage(currentPage - 2)">{{currentPage - 2}}</button>
            <button @click="changeCurrentPage(currentPage - 1)">{{currentPage - 1}}</button>
            <button class="active">{{currentPage}}</button>
            <button @click="changeCurrentPage(currentPage + 1)">{{currentPage + 1}}</button>
            <button @click="changeCurrentPage(currentPage + 2)">{{currentPage + 2}}</button>
            <button :disabled="true">···</button>
            <button @click="changeCurrentPage(pageTotal)">{{pageTotal}}</button>
          </template>
          <!--下一页-->
          <button @click="nextPage" :disabled="currentPage === pageTotal">下一页</button>
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
    import footerNav from "../footer"

    export default {
        name: "informationMore",
        data() {
            return {
                clectnav: 1,
                showPageNo:1,
                currentPage:1,
                pageTotal: 50,//总的页数
                pageConfig: {
                    pageSize: 10,     //一页的数据条数
                    total: 500,         //总的数据条数
                },
                categoryid:11,
                newsList:'',
                leftlist:['本市政策','本省政策','中央政策'],
                leftShow:0,
                serchs:'',
                userId:0,
            }
        },
        components: {
            headNav,
            footerNav
        },
        methods:{
            serchsa(){
                this.getnewList(20,1,this. categoryid,this.serchs);
            },
            cleft(i){
              this. leftShow=i;
              this.categoryid=i+11;
                this.getnewList(20,1,this. categoryid,this.serchs);
            },
            prePage(){
                this.currentPage -= 1;
                this.getnewList(20, this.currentPage,this. categoryid,this.serchs);
            },
            nextPage(){
                this.currentPage += 1;
                this.getnewList(20, this.currentPage,this. categoryid,this.serchs);
            },
            changeCurrentPage(i){
                this.currentPage = i;
                this.getnewList(20, this.currentPage,this. categoryid,this.serchs);
            },
            clearFen(i){
                return i.substring(0,i.indexOf(' '))
            },
            getnewList(a,b,c,d){
                this.axios.post('/web/policy/list',{title:d,categoryId:c,size:a,current:b,userId:this.userId}).then(({data})=>{
                    this.pageTotal=data.data.pages;
                    this.currentPage=data.data.current;
                    this. pageConfig.pageSize=data.data.size;
                    this. pageConfig.total=data.data.total;
                    this.newsList=data.data.records;
                    console.log(data)
                })
            },
            //添加收藏
            addshou(i){
                var a='#'+this.$route.fullPath+'/informationdetali?id='+i.policyId+'&leftId='+this.leftShow;
                console.log(a);
                if(this.msg==null){
                    alert('请登录')
                }else{
                    this.axios.post('/web/usercollection/usercollection',{contentId:i.policyId,state:1,type:0,userId:this.msg.userId,Url:a}).then(({data})=>{
                        if(data.code==10001){
                            this.$set(i,'collState',1);
                        }
                    })
                }

            },
            //取消收藏
            cancleshou(i){
                this.axios.post('/web/usercollection/usercollection',{contentId:i.policyId,state:2,type:0,userId:this.msg.userId,Url:' '}).then(({data})=>{
                    if(data.code==10001){
                        this.$set(i,'collState',0);
                    }
                })
            },
        },
        created() {
            var a=localStorage.getItem('personal');
            this.msg=JSON.parse(a);
            if(a==null){
                this.userId=0;
            }else{
                this.userId=JSON.parse(a).userId;
            }
            this.getnewList(20,1,this. categoryid,this.serchs);
        }
    }
</script>

<style scoped lang="less">
  .warp{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 21px ;
    .left{
      float: left;
      margin-right: 20px;
      width:186px;
      height:150px;
      border:1px solid rgba(230,230,230,1);
      border-top: none;
      h3{
        cursor: default;
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
      width:949px;
      min-height: 780px;
      border:1px solid rgba(217,217,217,1);
      padding:17px 20px ;
      position: relative;
      .serch{
        position: absolute;
        top: 12px;
        right: 81px;
        width:204px;
        height:36px;
        border:1px solid rgba(179,179,179,1);
        border-radius:0px 4px 4px 0px;
        input{
          display: block;
          float: left;
          border: none;
          outline: none;
          height: 36px;
          line-height: 36px;
          width: 124px;
          padding:0 10px;
        }
        button{
          display: block;
          float: left;
          border: none;
          outline: none;
          width:60px;
          height:36px;
          background:rgba(231,57,10,1);
          border-radius:0px 4px 4px 0px;
          text-align: center;
          line-height: 36px;
          font-size:14px;
          font-weight:400;
          color:rgba(255,255,255,1);
        }
      }
      h1{
        width: 949px;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid rgba(231,57,10,1);
        font-size:20px;
        font-weight:400;
        color:rgba(231,57,10,1);
      }
      .addlist{
        width: 949px;
        margin: 17px 0;
        li{
          height: 39px;
          line-height: 39px;
          border-bottom: 1px dashed #c5c5c5;
          a{
            overflow: hidden;
          }
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
          em{
            display: block;
            float: left;
            height: 39px;
            line-height: 39px;
            width: 550px;
            overflow: hidden;
            margin-right: 7px;
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
          p{
            float: left;
            margin-left: 96px;
            height: 39px;
            strong{
              display: block;
              float: left;
              width: 15px;
              height: 15px;
              background: url("../../../static/images/download.png");
              margin: 10px;
            }
            img {
              display: block;
              float: left;
              margin: 10px 0;
            }
          }
          span{
            display: block;
            float: right;
            height: 39px;
            line-height: 39px;
            font-size: 12px;
            color: #bdbdbd;
            font-family:Microsoft YaHei;
          }
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
<style lang="less">
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
