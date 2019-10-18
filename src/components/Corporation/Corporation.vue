<template>
  <div class="hello">
    <div>
      <head-nav :clect="clectnav"></head-nav>
    </div>
    <div class="warp">
      <div class="news yuan">
        <div class="new_l">
          <div class="title">
            <h5>铜陵民企之星</h5>
            <p>
              <router-link tag="a" to="/Corporation/Corporationlist">更多>></router-link>
            </p>
          </div>
          <div class="tu">
            <ul>
              <li  v-for="(item,idx) in content.companylist" @click="goQi(item.companyId)" :key="idx" :class="[{'clear_r':idx%4==3},{'clect':item.active}]"  @mouseover="fengSl(item)"><div><img :src="item.companyLogo" alt=""> <span>{{item.companyName}}</span></div></li>
            </ul>
          </div>
        </div>
        <div class="new_r">
          <div class="auto">
            <p>
              <span>企业名录检索</span>
            </p>
            <div class="bu">
              <div class="bu_l">
                <span>按产业:</span>
              </div>
              <ul class="bu_r">
                <li v-for="(item,idx) in content.industrylist" @click="chanS1(item)" :class="item.active?'selec':''">{{item.name}}</li>
              </ul>
            </div>
            <div class="bu">
              <div class="bu_l">
                <span>按规模:</span>
              </div>
              <ul class="bu_r">
                <li v-for="(item,idx) in content.scalelist" @click="chanS2(item)" :class="item.active?'selec':''">{{item.name}}</li>
              </ul>
            </div>
            <div class="bu">
              <div class="bu_l">
                <span>按地区:</span>
              </div>
              <ul class="bu_r">
                <li v-for="(item,idx) in content.regionlist" @click="chanS3(item)" :class="item.active?'selec':''">{{item.name}}</li>
              </ul>
            </div>
            <div class="search"><span>企业名称:</span><input type="text" v-model=" serachs.sousuo" /></div>
            <button @click="gomyspace">检索</button>
          </div>

        </div>
      </div>
      <div class="comp">
        <div><span>供需广场</span><p><b v-for="(item,idx) in gongXu" :key="idx" :class="idx==gong?'slerr':''" @mouseover="gongyi(idx)">{{item}}</b></p></div>
        <ul >
          <li v-for="(item,index)  in content.supplyanddemandlist" :key="index"><b v-if="item.type==1">[供应]</b><b v-if="item.type==2" class="xu">[需求]</b><span>{{item.productname}}</span><i>{{item.number}}</i><strong>{{clearFen(item.endtime)}}</strong></li>
        </ul>
      </div>
      <div class="qixin">
        <div class="xin">
          <div><span>信用查询</span><p><b v-for="(item,idx) in xinyongS" :key="idx" :class="idx==xinSle?'slerr':''" @mouseover="xinyi(idx)">{{item}}</b></p></div>
          <ul>
            <li><b>行政相对人名称</b><span>行政相对人代码</span><i>许可机关</i><strong>许可决定日期</strong></li>
            <li v-for="(item,idx) in content.companycreditlist"><b>{{item.administrativeName}}</b><span>{{item.licensing}}</span><i>{{item.mechanism}}</i><strong>{{clearFen(item.punishTime)}}</strong></li>
          </ul>
        </div>
        <div class="cha">
          <h4><span>查询企业</span></h4>
          <h2>企业全称:</h2>
          <input type="text">
          <button>查询</button>
          <p>企业信用数据来自****，如发现数据不准确，请联系我们纠正。</p>
        </div>
      </div>
      <div class="rencai">
        <div><span>优秀人才</span><p><b v-for="(item,idx) in rencaiAll" :key="idx" :class="idx==renSle?'slerr':''" @mouseover="renyi(idx)">{{item}}</b></p></div>
        <ul >
          <li v-for="(item,idx) in content.abilityarchivesList"><img :src="item.headImg" alt=""><span>{{item.name}}</span></li>
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
        name: "Corporation",
        data () {
            return {
                clectnav: 3,
                content:{
                    companylist:'',
                    supplyanddemandlist:'',
                    companycreditlist:'',
                    abilityarchivesList:'',
                    industrylist:'',
                    scalelist:'',
                    regionlist:''
                },
                xinyongS:['行政许可','行政处罚','红榜名单','黑榜名单'],
                rencaiAll:['铜陵企业家','铜陵海外华侨','外地同龄人才','商会','全部'],
                gongXu:['供应','需求','全部'],
                xinSle:0,
                renSle:0,
                gong:0,
                chan1:0,
                chan2:0,
                chan3:0,
                serachs:{
                    chan:'',
                    gui:'',
                    di:'',
                    sousuo:' '
                },
            }
        },
        created(){
            this.axios.post('/web/company/index').then(({data})=>{
                console.log(data);
                this.content.companylist=this.sliceArr(data.companylist,8);//民企之星
                this.content.supplyanddemandlist=this.sliceArr(data.supplyanddemandlist,6);//供需广场
                this.content.companycreditlist=this.sliceArr(data.companycreditlist,6);//企业信用
                this.content.abilityarchivesList=this.sliceArr(data.abilityarchivesList,8);//人才
                this.content.regionlist=this.addactive(data.regionlist);//地区
                this.content.scalelist=this.addactive(data.scalelist);//规模
                this.content. industrylist=this.addactive(data.industrylist);//产业

                // this. serachs.chan=data. industrylist[0].categoryId;//产业默认id
                // this. serachs.gui=data. scalelist[0].categoryId;//规模默认id
                // this. serachs.di=data. regionlist[0].categoryId;//产业默认id
            })
        },
        methods: {
            gomyspace() {
                // this.$router.push('/Corporation/Corporationlist');
                var data=this.serachs;
                console.log(data);
                this.$router.push({
                    path:'/Corporation/Corporationlist',
                    query: data
                })
            },
            //截取数组
            sliceArr(arr, i) {
                return arr.slice(0, i)
            },
            fengSl(index) {
                var _this = this;
                this.$nextTick(function () {
                    this.content.companylist.forEach(function (index) {
                        _this.$set(index, 'active', false);
                    });
                    this.$set(index, 'active', true);
                });
            },
            //企业详情
            goQi(i){
                this.$router.push({path:'/Corporation/myspace',query:{
                        id:i
                    }})
            },
            clearFen(i){
                return i.substring(0,i.indexOf(' '))
            },
            gongyi(i){
                let type='';
                this.gong=i;
                if(i==0){
                    type=1;
                }else if(i==1){
                    type=2;
                }else if(i==2){
                    type='';
                }
                this.axios.post('/web/company/list',{type:type}).then(({data})=>{
                    console.log(data.data);
                    this.content.supplyanddemandlist=this.sliceArr(data.data,6);//供需广场
                })
            },
            xinyi(i){
                this.xinSle=i;
            },
            renyi(i){
                this.renSle=i;
                let type='';
                if(i==4){
                    type='';
                }else{
                    type=i+1;
                };
                this.axios.post('/web/company/abilityarchiveslist',{type:type}).then(({data})=>{
                    this.content.abilityarchivesList=this.sliceArr(data.data,8);//人才
                })
            },
            //产业选中
            chanS1(index){
                this.$nextTick(function () {
                    var arr=this.content. industrylist;
                    this.addactive(arr);
                    this.$set(index,'active',true);
                    this.serachs.chan=index.categoryId;
                });
            },
            //规模选中
            chanS2(index){
                this.$nextTick(function () {
                    var arr= this.content.scalelist;
                    this.addactive(arr);
                    this.$set(index,'active',true);
                    this.serachs.gui=index.categoryId;
                });
            },
            //地区选中
            chanS3(index){
                this.$nextTick(function () {
                    var arr=this.content.regionlist;
                    this.addactive(arr);
                    this.$set(index,'active',true);
                    this.serachs.di=index.categoryId;
                });
            },
            //添加选中
            addactive(arr){
               for (let i=0;i<arr.length;i++){
                   arr[i].active=false;
               }
               return arr
            }
        },
        components:{
            headNav,
            footerNav
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .warp{
    width: 1200px;
    margin: auto;
    .news{
      margin-top: 15px;
      overflow: hidden;
      .new_l{
        width: 812px;
        float: left;
        .title{
          height: 36px;
          background: #f6f6f6;
          h5{
            width:126px;
            height:36px;
            float: left;
            font-size:16px;
            font-weight:bold;
            color:rgba(255,255,255,1);
            text-align: center;
            line-height: 36px;
            background: #E94921;
          }
          p{
            float: left;
            height: 36px;
            width: 676px;
            margin-right: 10px;
            span{
              display: block;
              float: left;
              height: 36px;
              line-height: 36px;
              margin-left: 29px;
              font-size:16px;
              font-weight:400;
              color:rgba(76,76,76,1);
            }
            a{
              display: block;
              float: right;
              margin-right: 5px;
              height: 36px;
              line-height: 36px;
              font-size:12px;
              font-weight:400;
              color:rgba(123,123,123,1);
            }

          }
        }
        .adlist{
          width: 820px;
          height:268px;
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
            }
          }
          li:last-child{
            border-bottom: none;
          }
        }
      }
      .new_r{
        float: left;
        margin-left: 23px;
        width:363px;
        border:1px solid rgba(227,227,227,1);
        .auto{
          height: 350px;
          p{
            width:361px;
            height:36px;
            background:rgba(245,245,245,1);
            span{
              display: block;
              width:120px;
              height:36px;
              text-align: center;
              line-height: 36px;
              background:rgba(232,57,10,1);
              font-size:16px;
              font-weight:bold;
              color:rgba(255,254,254,1);
            }
          }
          .bu{
            cursor: default;
            width: 300px;
            margin-left: 20px;
            margin-top: 17px;
            border-bottom: 1px dashed #E6E6E6;
            overflow: hidden;
            .bu_l{
              float: left;
              margin-right: 18px;
              width: 50px;
              span{
                display: block;
                height:42px;
                line-height: 42px;
                width:53px;
                font-size:16px;
                font-weight:400;
                color:rgba(69,69,69,1);
              }
            }
            .bu_r{
              width:230px;
              float: left;
              li{
                float: left;
                height:26px;
                line-height: 26px;
                text-align: center;
                margin-right: 9px;
                font-size:14px;
                font-weight:400;
                color:rgba(69,69,69,1);
                margin-bottom: 7px;
                margin-top: 7px;
                padding: 0 5px;
              }
              li.selec{
                background:rgba(232,73,33,1);
                color: #fff;
              }
            }
          }
          .search{
            margin: 35px 0 17px 20px;
            width: 300px;
            height: 35px;
            span{
              display: block;
              float: left;
              height: 35px;
              line-height: 35px;
              font-size:16px;
              font-weight:400;
              color:rgba(115,115,115,1);
            }
            input{
              display: block;
              outline: none;
              height: 35px;
              float: left;
              line-height: 35px;
              width:195px;
              margin-left: 10px;
              border:1px solid rgba(128,128,128,1);
             padding: 0 10px;
            }
          }
          button{
            display: block;
            outline: none;
            border: none;
            margin-left: 119px;
            width:94px;
            height:26px;
            background:rgba(232,57,10,1);
            border-radius:4px;
            font-size:16px;
            font-weight:400;
            color:rgba(255,255,255,1);
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
          padding: 0 7px;
          overflow: hidden;
        }
        li{
          width:183px;
          height:130px;
          border:1px solid rgba(227,227,227,1);
          float: left;
          margin-right: 20px;
          margin-top: 26px;
          div{
            width: 175px;
            height: 122px;
            margin: 3px;
            position: relative;
            img {
              width: 175px;
              height: 122px;
              position: absolute;
              top: 0;
              left: 0;
            }
            span{
              display: block;
              width:165px;
              height:30px;
              padding: 0 5px;
              background:rgba(0,0,0,1);
              opacity:0.65;
              position: absolute;
              z-index: 2;
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
        li.clear_r{
          margin-right: 0;
        }
        li.clect{
          width:181px;
          height:128px;
          border: 2px solid #ff8e1d;
        }
      }
    }
    .comp{
      height:288px;
      background:rgba(255,255,255,1);
      border:1px solid rgba(213, 213, 213, 0.68);
      margin-top: 20px;
      overflow: hidden;
      div{
        height:36px;
        background:rgba(245,245,245,1);
        opacity:0.9;
        span{
          display: block;
          float: left;
          width:120px;
          height:36px;
          line-height: 36px;
          text-align: center;
          background:rgba(231,57,10,1);
          font-size:16px;
          font-weight:bold;
          color:rgba(255,255,255,1);
        }
        p{
          cursor: default;
          float: right;
          margin-right: 21px;
          b{
            display: block;
            float: left;
            border-right:2px solid #E8390A ;
            padding-right: 10px;
            margin-left: 10px;
            margin-top: 8px;
          }
          b:last-child{
            border: none;
            padding-right: 0;
          }
          b.slerr{
            color: #E8390A;
          }
        }
      }
      ul{
        margin-left: 20px;
        width: 1095px;
        margin-top: 17px;
        li{
          height: 35px;
         border-bottom: 1px dashed #E6E6E6;
          >*{
            display: block;
            float: left;
            height: 35px;
            line-height: 35px;
        }
          b{
            width: 100px;
            overflow: hidden;
            font-size:14px;
            font-weight:400;
            color:rgba(223,76,57,1);
            line-height:36px;
          }
          b.xu{
            color: #32A49C;
          }
          span{
            margin-left: 24px;
            width: 420px;
            overflow: hidden;
            font-size:14px;
            font-weight:400;
            color:rgba(68,68,68,1);
            line-height:36px;
          }
          i{
            width: 300px;
            margin-left: 20px;
            overflow: hidden;
            font-size:14px;
            font-weight:400;
            color:rgba(69,69,69,1);
          }
          strong{
            float: right;
            font-size:12px;
            font-weight:400;
            color:rgba(51,51,51,1);
            line-height:36px;
          }
        }
        li:last-child{
          border-bottom: none;
        }
      }
    }
    .qixin{
      margin-top: 20px;
      overflow: hidden;
      .xin{
        float: left;
        width:811px;
        height:289px;
        background:rgba(255,255,255,1);
        border:1px solid rgba(213, 213, 213, 0.68);
        cursor: default;
        div{
          height:36px;
          background:rgba(245,245,245,1);
          opacity:0.9;
          span{
            display: block;
            float: left;
            width:120px;
            height:36px;
            line-height: 36px;
            text-align: center;
            background:rgba(231,57,10,1);
            font-size:16px;
            font-weight:bold;
            color:rgba(255,255,255,1);
          }
          p{
            float: right;
            margin-right: 21px;
            b{
              display: block;
              float: left;
              border-right:2px solid #E8390A ;
              padding-right: 10px;
              margin-left: 10px;
              margin-top: 8px;
            }
            b:last-child{
              border: none;
              padding-right: 0;
            }
            b.slerr{
              color: #E8390A;
            }
          }
        }
        ul{
          width: 738px;
          margin-left: 20px;
          overflow: hidden;
          li{
            height: 35px;
            line-height: 35px;
            border-bottom: 1px dashed #e6e6e6;
            >*{
              display: block;
              float: left;
              height: 35px;
              line-height: 35px;
              overflow: hidden;
            }
            b{
              width: 211px;
              font-size:14px;
              font-weight:400;
              color:rgba(69,69,69,1);
            }
            span{
              margin-left: 20px;
              width:200px;
              font-size:14px;
              font-weight:400;
              color:rgba(69,69,69,1);
            }
            i{
              margin-left: 20px;
              width:200px;
              font-size:14px;
              font-weight:400;
              color:rgba(69,69,69,1);
            }
            strong{
              float: right;
              font-size:12px;
              font-weight:400;
              color:rgba(69,69,69,1);
            }
          }
          li:first-child{
            border: none;
            >*{
              font-size:12px;
              font-weight:bold;
              color:rgba(69,69,69,1);
            }
          }
          li:last-child{
            border: none;
          }
        }
      }
      .cha{
        width:363px;
        height:289px;
        float: left;
        margin-left: 20px;
        border:1px solid rgba(227,227,227,1);
        h4{
          width:362px;
          height:36px;
          background:rgba(245,245,245,1);
          span{
            display: block;
            width:120px;
            height:36px;
            background:rgba(232,57,10,1);
            font-size:18px;
            font-weight:bold;
            color:rgba(255,254,254,1);
            text-align: center;
            line-height: 36px;
          }
        }
        h2{
          margin-left: 30px;
          width: 100px;
          height: 48px;
          line-height: 48px;
          font-size:16px;
          font-weight:400;
          color:rgba(69,69,69,1);
        }
        input{
          display: block;
          width:280px;
          height:34px;
          border:1px solid rgba(128,128,128,1);
          margin-left: 30px;
          line-height: 34px;
          padding:  0 10px;
          margin-bottom: 10px;
          outline: none;
        }
        button{
          margin:  0 auto;
          display: block;
         outline: none;
          border: none;
          width:94px;
          height:26px;
          background:rgba(232,57,10,1);
          border-radius:4px;
          font-size:14px;
          font-weight:400;
          color:rgba(255,254,254,1);
        }
        p{
          cursor: default;
          margin-left: 50px;
          width: 262px;
          height:33px;
          font-size:12px;
          font-weight:400;
          color:rgba(189,189,189,1);
          margin-top: 20px;
        }
      }
    }
    .rencai{
      margin-top: 20px;
      border:1px solid rgba(213, 213, 213, 0.68);
      padding-bottom: 20px;
      div{
        height:36px;
        background:rgba(245,245,245,1);
        opacity:0.9;
        span{
          display: block;
          float: left;
          width:120px;
          height:36px;
          line-height: 36px;
          text-align: center;
          background:rgba(231,57,10,1);
          font-size:16px;
          font-weight:bold;
          color:rgba(255,255,255,1);
        }
        p{
          cursor: default;
          float: right;
          margin-right: 21px;
          b{
            display: block;
            float: left;
            border-right:2px solid #E8390A ;
            padding-right: 10px;
            margin-left: 10px;
            margin-top: 8px;
          }
          b:last-child{
            border: none;
            padding-right: 0;
          }
          b.slerr{
            color: #E8390A;
          }
        }
      }
      ul{
        margin-top: 20px;
        padding: 0 30px;
        width: 1140px;
        overflow: hidden;
        height: 200px;
        li{
          float: left;
          width: 126px;
          height: 200px;
          margin-right: 18px;
          img{
           width: 126px;
            height: 168px;
          }
          span{
            display: block;
            width: 126px;
            height: 32px;
            text-align: center;
            line-height: 32px;
            font-size:14px;
            font-weight:400;
            color:rgba(69,69,69,1);
          }
        }
        li:last-child{
          margin-right: 0;
        }
      }
    }
  }
  .footer{
    margin-top: 17px;
  }
</style>
