<template>
  <div>
    <div class="top">
      <head-nav :clect="clectnav"></head-nav>
    </div>
    <div class="container">
      <div class="nav">
        <span>首页</span><b> ></b><span>政策信息</span><b> ></b><span>办事指南</span>
      </div>
    </div>
    <div class="warp">
      <div class="left">
        <ul>
          <li :class="leftSelect==0?'slec':''" @click="leftS(0)"><span>全部</span></li>
          <li v-for="(item,idx) in leftList" :key="idx" :class="leftSelect==item.deptId?'slec':''" @click="leftS(item.deptId)"><span >{{item.deptName}}</span></li>
        </ul>
      </div>
      <div class="right">
        <div class="serch">
          <input type="text" placeholder="请输入关键字" v-model="serch">
          <button @click="serchsAs">搜索</button>
        </div>
        <h1>办事指南</h1>
        <ul class="addlist">
          <li v-for="(item,index) in newsList"><b>[{{item.departmentName}}]</b><router-link tag="a" :to="{path:'/information/guides/guidesDetali',query:{id:item.departmentId}}">{{item.title}}</router-link><p><strong></strong><img src="../../../static/images/29.png" alt=""></p> <span>{{clearFen(item.publishTime)}}</span></li>
        </ul>
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
        name: "guides",
        data(){
            return{
                clectnav: 1,
                showPageNo:8,
                currentPage:'',
                pageTotal: '',//总的页数
                pageConfig: {
                    pageSize: '',     //一页的数据条数
                    total: '',         //总的数据条数
                },
                newsList:'',
                leftList:[],
                leftSelect:'',
                serch:''
            }
        },
        components:{
            headNav,
            footerNav
        },
        methods:{
            //搜索
            serchsAs(){
                this.getnewList(20,this.currentPage,this.leftSelect,this.serch);
            },
            prePage(){
                this.currentPage -= 1;
                this.getnewList(20,this.currentPage,this.leftSelect,this.serch);
            },
            nextPage(){
                this.currentPage += 1;
                this.getnewList(20,this.currentPage,this.leftSelect,this.serch);
            },
            changeCurrentPage(i){
                this.currentPage = i;
                this.getnewList(20,this.currentPage,this.leftSelect,this.serch);
            },
            getnewList(a,b,c,d){
                this.axios.post('/web/guide/list',{title:'',guideId:d,departmentId:c,size:a,current:b}).then(({data})=>{
                    console.log(data.data.page2.records);
                    this.pageTotal=data.data.page2.pages;
                    this.currentPage=data.data.page2.current;
                    this. pageConfig.pageSize=data.data.page2.size;
                    this. pageConfig.total=data.data.page2.total;
                    this.newsList=data.data.page2.records;
                    this.leftList=data.data.departmentList;
                })
            },
            //左边选中状态
            leftS(i){
                if(i==0){
                    this.leftSelect='';
                }else{
                    this.leftSelect=i;
                }

                this.getnewList(20,1,this.leftSelect,this.serch);
            },
            clearFen(i){
                return i.substring(0,i.indexOf(' '))
            },
        },
        created() {
            console.log( this.$route.query.id)
           if( this.$route.query.id==undefined){
               this.leftSelect= '';
           }else{
               this.leftSelect= this.$route.query.id;
           }
            this.getnewList(20,1,this.leftSelect,this.serch);
        },

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
      border:1px solid rgba(217,217,217,1);
      padding:17px 20px 60px 20px;
      position: relative;
      min-height: 778px;
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
        padding-bottom: 30px;
        li{
          height: 43px;
          line-height: 43px;
          border-bottom: 1px dashed #c5c5c5;
          >*{
            display: block;
            float: left;
            height: 43px;
            line-height: 43px;
          }
         b{
           font-size: 14px;
           color: #454545;
           width: 80px;
         }
          a{
            margin-left: 3px;
            width: 500px;
            overflow: hidden;
          }
          p{
            margin-left: 100px;
            strong{
              display: block;
              float: left;
              width: 14px;
              height: 16px;
              background: url("../../../static/images/26.png") no-repeat;
              margin: 13px 16px 13px 0;
            }
            i{
              display: block;
              float: left;
              width: 14px;
              height: 16px;
              background: url("../../../static/images/27.png") no-repeat;
              margin: 13px 16px 13px 0;
            }
            em{
              display: block;
              float: left;
              width: 14px;
              height: 16px;
              background: url("../../../static/images/28.png") no-repeat;
              margin: 13px 16px 13px 0;
            }
            img{
              display: block;
              float: left;
              margin: 13px 16px 13px 0;
            }
          }
          span{
            float: right;
            font-size:12px;
            font-family:Source Han Sans CN;
            font-weight:400;
            color:rgba(189,189,189,1);
          }
        }
      }
    }
  }
  .page{
    position: absolute;
    bottom: 0;
    text-align: center;
    width: 100%;
    margin-bottom: 30px;
    div{
      display: inline-block;
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
