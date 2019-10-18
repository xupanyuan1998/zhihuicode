<template>
    <div>
      <div class="top">
        <head-nav :clect="clectnav"></head-nav>
      </div>
      <div class="container">
        <div class="nav">
          <span>首页</span><b> ></b><span>政策信息</span><b> ></b><span>通知公告</span>
        </div>
      </div>
      <div class="warp">
        <div class="left">
          <h3 v-for="(item,idx) in left_select" :key="idx" :class="idx==left_show?'select':''" @click="showslect(idx)">{{item}}</h3>
      </div>
        <div class="right">
          <div class="serch">
            <input type="text" placeholder="请输入关键字">
            <button @click="serchsAs">搜索</button>
          </div>
          <h1 v-if="left_show==0">通知公告</h1>
          <h1 v-if="left_show==1">行政公示</h1>
          <h1 v-if="left_show==2">行业规范</h1>
          <ul class="addlist">
            <li v-for="(item,idx) in newsList" :key="idx"><b></b><router-link tag="a" :to="{path:'/policy/policydetali',query:{id:item.noticeid}}">{{item.title}}</router-link><span>{{clearFen(item.addTime)}}</span></li>
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
  import footerNav from '../footer'
  //分页组件
    export default {
        name: "policy",
        components:{headNav,footerNav},
        data(){
            return {
                clectnav: 0,
                newsList:[],
                showPageNo:8,
                currentPage:1,
                pageTotal: '',//总的页数
                pageConfig: {
                    pageSize: '',     //一页的数据条数
                    total: '',         //总的数据条数
                },
                left_select:['通知公告','行政公示','行业规范'],
                left_show:0,
                serch: '',
                categoryId:''
            }
        },
        methods:{
            serchsAs(){
                this.getnewList(20,1,this.serch,this.categoryId);
            },
            prePage(){
                this.currentPage -= 1;
                this.getnewList(20,1,this.serch,this.categoryId);
            },
            nextPage(){
                this.currentPage += 1;
                this.getnewList(20,1,this.serch,this.categoryId);
            },
            changeCurrentPage(i){
                this.currentPage = i;
                this.getnewList(20,1,this.serch,this.categoryId);
            },
            getnewList(a,b,c,d){
                this.axios.post('/web/newnotice/noticelist',{title:c,categoryId:d,size:a,current:b}).then(({data})=>{
                    // console.log(data);
                   this.pageTotal=data.data.pages;
                   this.currentPage=data.data.current;
                   this. pageConfig.pageSize=data.data.size;
                   this. pageConfig.total=data.data.total;
                    this.newsList=data.data.records;

                })
            },
            showslect(i){
                this.left_show=i;
                this.categoryId=i+1;
                this.getnewList(20,1,this.serch,this.categoryId);
            },
            clearFen(i){
                return i.substring(0,i.indexOf(' '))
            },
        },
        created() {
            this.getnewList(20,1,this.serch,this.categoryId);
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
    .left{
      float: left;
      margin-right: 20px;
      width:186px;
      height:150px;
      border:1px solid rgba(230,230,230,1);
      border-top: none;
      cursor: default;
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
      min-height: 800px;
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
        li{
          height: 43px;
          line-height: 43px;
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
            height: 43px;
            line-height: 43px;
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
            height: 43px;
            line-height: 43px;
            font-size: 12px;
            color: #bdbdbd;
            font-family:Microsoft YaHei;
          }
        }
        li:last-child{
          border-bottom: none;
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
