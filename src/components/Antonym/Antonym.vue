<template>
  <div>
    <div class="top">
      <head-nav :clect="clectnav"></head-nav>
    </div>
    <div class="container">
      <div class="nav">
        <span>首页</span><b> ></b><span>在线办理</span><b> ></b><span>在线审批</span>
      </div>
    </div>
    <div class="warp">
      <div class="left">
        <h3 v-for="(item,idx) in menu" :class="menuSelect==idx?'select':''" @click="clectmenu(idx)">{{item}}</h3>
      </div>
      <div class="right" v-if="menuSelect==0">
        <h2>铜陵市民营企业服务项目在线查询平台</h2>
        <div class="bu">
          <div class="bu_l">
            <span>办理部门:</span>
          </div>
          <ul class="bu_r">
            <li v-for="(item,idx) in departmentVoList" :class="{'selec':item.active}" @click="bumen(item)">
              {{item.deptName}}
            </li>
          </ul>
        </div>
        <div class="bu">
          <div class="bu_l">
            <span>企业类型:</span>
          </div>
          <ul class="bu_r">
            <li v-for="(item,idx) in  industrylist" :class="{'selec':item.active}" @click="leixing(item)">
              {{item.name}}
            </li>
          </ul>
        </div>
        <div class="bu">
          <div class="bu_l">
            <span>服务项目:</span>
          </div>
          <ul class="bu_r">
            <li v-for="(item,idx) in  scalelist" :class="{'selec':item.active}" @click="server(item)">{{item.name}}</li>
          </ul>
        </div>
        <div class="bu">
          <div class="bu_l">
            <span>所在地:</span>
          </div>
          <ul class="bu_r">
            <li v-for="(item,idx) in  regionlist" :class="{'selec':item.active}" @click="di(item)">{{item.name}}</li>
          </ul>
        </div>
        <div class="xuan">
          <div class="yi">
            <span>已选择:</span>
            <ul>
              <li v-for="(item,idx) in  yixuan"><b>{{item.name}}</b> <em @click="cancle(item,idx)">X</em></li>
            </ul>
          </div>
          <div class="yi kuang">
            <span>标题:</span>
            <div>
              <input type="text" v-model="serchs">
              <p>
                <button @click="sousuo">检索</button>
                <button @click="result">重置</button>
              </p>
            </div>
          </div>
        </div>
        <h3>检索结果</h3>
        <ul class="jieguo">
          <li v-for="(item,idx) in content" :key="idx">
            <p @click="banli($event)"><b>{{idx+1}}</b><span>{{item.onlinework.title}}</span><img
              src="../../../static/images/sewlect.png" alt=""></p>
            <ul style="display: none">
              <li v-for="(items,ids) in item.onlinworkconnt" :key="ids">
                <h1>{{(ids+1)+items.title}}</h1>
                <h4>{{items.workBrief}}</h4>
                <div><span>附件:</span><a :href="items.attachmentUrl" type="download">{{items.attachmentName}}</a></div>
                <button v-if="items.state==1">我要办理</button>
                <button v-if="items.state==0" class="wei">暂未开通</button>
              </li>
            </ul>
          </li>
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
                <button v-for="i in pageTotal" @click="changeCurrentPage(i)" :class="{active:i === currentPage}"
                        :key="i">{{i}}
                </button>
              </template>
              <template v-else-if="currentPage < 4">
                <button v-for="i in 6" @click="changeCurrentPage(i)" :class="{active:i === currentPage}" :key="i">
                  {{i}}
                </button>
                <button :disabled="true">···</button>
                <button @click="changeCurrentPage(pageTotal)">{{pageTotal}}</button>
              </template>
              <template v-else-if="currentPage > pageTotal - 4">
                <button @click="changeCurrentPage(1)">1</button>
                <button :disabled="true">···</button>
                <button v-for="i in 6" @click="changeCurrentPage(i + (pageTotal - 6))"
                        :class="{active:(i + (pageTotal - 6)) === currentPage}" :key="i">{{i + (pageTotal - 6)}}
                </button>
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
              <span>共{{ pageConfig.total}}条</span>
            </div>
          </div>
        </div>
      </div>
      <div class="right" v-if="menuSelect==1">
        <h2>铜陵市民营企业服务项目在线查询平台</h2>
        <div class="bu">
          <div class="bu_l">
            <span>办理部门:</span>
          </div>
          <ul class="bu_r">
            <li class="selec">税务</li>
            <li>公积金</li>
            <li>公积金</li>
            <li>公积金</li>
            <li>公积金</li>
            <li>公积金</li>
            <li>公积金</li>
            <li>公积金</li>
            <li>公积金</li>
            <li>公积金</li>
          </ul>
        </div>
        <div class="bu">
          <div class="bu_l">
            <span>所在地:</span>
          </div>
          <ul class="bu_r">
            <li class="selec">铜官区</li>
            <li>义安区</li>
          </ul>
        </div>
        <div class="xuan">
          <div class="yi">
            <span>已选择:</span>
            <ul>
              <li><b>税务</b> <em>X</em></li>
              <li><b>义安区</b> <em>X</em></li>
            </ul>
          </div>
          <div class="yi kuang">
            <span>标题:</span>
            <div>
              <input type="text">
              <p>
                <button>检索</button>
                <button>重置</button>
              </p>
            </div>
          </div>
        </div>
        <h3>检索结果</h3>
        <ul class="jieguo">
          <li>
            <p><b>1.</b>
              <router-link tag="a" to="/Antonym/Antonymdetali">权限内企业投资项目核权限内企业投资项目核权限内</router-link>
              <img src="../../../static/images/file.png" alt=""></p>
          </li>
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
                <button v-for="i in pageTotal" @click="changeCurrentPage(i)" :class="{active:i === currentPage}"
                        :key="i">{{i}}
                </button>
              </template>
              <template v-else-if="currentPage < 4">
                <button v-for="i in 6" @click="changeCurrentPage(i)" :class="{active:i === currentPage}" :key="i">
                  {{i}}
                </button>
                <button :disabled="true">···</button>
                <button @click="changeCurrentPage(pageTotal)">{{pageTotal}}</button>
              </template>
              <template v-else-if="currentPage > pageTotal - 4">
                <button @click="changeCurrentPage(1)">1</button>
                <button :disabled="true">···</button>
                <button v-for="i in 6" @click="changeCurrentPage(i + (pageTotal - 6))"
                        :class="{active:(i + (pageTotal - 6)) === currentPage}" :key="i">{{i + (pageTotal - 6)}}
                </button>
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
              <span>共{{ pageConfig.total}}条</span>
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
        name: "Antonym",
        data() {
            return {
                clectnav: 2,
                menu: ['网上办事', '在线审批'],//左侧菜单
                menuSelect: 0,
                show: false,
                showPageNo: 8,
                currentPage: 1,
                pageTotal: '',//总的页数
                pageConfig: {
                    pageSize: '',     //一页的数据条数
                    total: '',         //总的数据条数
                },
                industrylist: '',
                scalelist: '',
                regionlist: '',
                departmentVoList: '',
                yixuan: [],
                json1:{},
                json2:{},
                json3:{},
                json4:{},
                content:'',
                serchs:'',
                departmentId:'',//部门id
                companyType:'',//企业类型
                serviceId:'',//服务项目
                regionId:''//所在地
            }
        },
        components: {
            headNav,
            footerNav
        },
        created() {
            this.getmsg(this.currentPage,15,this.serchs,this.companyType,this.departmentId,this.regionId,this.serviceId);
            this.axios.post('/web/onlinework/list').then(({data})=>{
                this.industrylist = this.addActive(data.industrylist);//企业类型
                this.scalelist = this.addActive(data.scalelist);//服务项目
                this.regionlist = this.addActive(data.regionlist);//所在地
                this.departmentVoList = this.addActive(data.departmentVoList);//办理部门
            })
        },
        watch: {
            departmentVoList: {
                handler(newVal) {
                    let json = {};
                    let that = this;
                    for (let i = 0; i < newVal.length; i++) {
                        if (newVal[i].active === true) {
                            that.json1.id = newVal[i].deptId;
                            that.json1.name = newVal[i].deptName;
                            that.json1.type = 'bumen';
                        }
                    };

                    let arr=[that.json2,that.json3,that.json4,that.json1];
                    let arr1=[];
                    for (let i=0;i<arr.length;i++){
                        if(arr[i].name!=undefined){
                            console.log(arr[i]);
                            arr1.push(arr[i]);
                        }
                    };
                    that.yixuan=arr1;
                },
                deep: true
            },
            industrylist: {
                handler(newVal) {
                    let json = {};
                    let that = this;
                    for (let i = 0; i < newVal.length; i++) {
                        if (newVal[i].active === true) {
                            that.json2.id = newVal[i].typeId;
                            that.json2.name = newVal[i].name;
                            that.json2.type = 'leixing';
                        }
                    };

                    let arr=[that.json2,that.json3,that.json4,that.json1];
                    let arr1=[];
                    for (let i=0;i<arr.length;i++){
                        if(arr[i].name!=undefined){
                            console.log(arr[i]);
                            arr1.push(arr[i]);
                        }
                    };
                    that.yixuan=arr1;
                },
                deep: true
            },
            scalelist: {
                handler(newVal) {
                    let json = {};
                    let that = this;
                    for (let i = 0; i < newVal.length; i++) {
                        if (newVal[i].active === true) {
                            that.json3.id = newVal[i].typeId;
                            that.json3.name = newVal[i].name;
                            that.json3.type = 'xiangmu';
                        }
                    };

                    let arr=[that.json2,that.json3,that.json4,that.json1];
                    let arr1=[];
                    for (let i=0;i<arr.length;i++){
                        if(arr[i].name!=undefined){
                            console.log(arr[i]);
                            arr1.push(arr[i]);
                        }
                    };
                    that.yixuan=arr1;
                },
                deep: true
            },
            regionlist: {
                handler(newVal) {
                    let that = this;
                    for (let i = 0; i < newVal.length; i++) {
                        if (newVal[i].active === true) {
                            that.json4.id = newVal[i].typeId;
                            that.json4.name = newVal[i].name;
                            that.json4.type = 'di';
                        }
                    };

                    let arr=[that.json2,that.json3,that.json4,that.json1];
                    let arr1=[];
                    for (let i=0;i<arr.length;i++){
                        if(arr[i].name!=undefined){
                            console.log(arr[i]);
                            arr1.push(arr[i]);
                        }
                    };
                    that.yixuan=arr1;
                },
                deep: true
            },
        },
        methods: {
            //选择部门
            bumen(index) {
                var _this = this;
                var json = {};
                if (index.active === false) {
                    this.$nextTick(function () {
                        this.departmentVoList.forEach(function (index) {
                            _this.$set(index, 'active', false);
                        });
                        this.$set(index, 'active', true);
                        // json.id=index.deptId;
                        // json.name=index.deptName;
                        // this.yixuan.push(json);
                        console.log(this.departmentVoList);
                    });
                } else if (index.active === true) {
                    this.$set(index, 'active', false);
                    _this.json1={};
                }
            },
            leixing(index) {
                var _this = this;
                if (index.active === false) {
                    this.$nextTick(function () {
                        this.industrylist.forEach(function (index) {
                            _this.$set(index, 'active', false);
                        });
                        this.$set(index, 'active', true);
                    });
                } else if (index.active === true) {
                    this.$set(index, 'active', false);
                    _this.json2={};
                }
            },
            server(index) {
                var _this = this;
                if (index.active === false) {
                    this.$nextTick(function () {
                        this.scalelist.forEach(function (index) {
                            _this.$set(index, 'active', false);
                        });
                        this.$set(index, 'active', true);
                    });
                } else if (index.active === true) {
                    this.$set(index, 'active', false);
                    _this.json3={};
                }
            },
            di(index) {
                var _this = this;
                if (index.active === false) {
                    this.$nextTick(function () {
                        this.regionlist.forEach(function (index) {
                            _this.$set(index, 'active', false);
                        });
                        this.$set(index, 'active', true);
                    });
                } else if (index.active === true) {
                    this.$set(index, 'active', false);
                    _this.json4={};
                }
            },
            clectmenu(idx) {
                this.menuSelect = idx;
            },
            //网上办事检索结果 下拉
            banli(event) {
                let li = event.currentTarget;
                if (this.show == false) {
                    $(li).find('img').addClass("route");
                    $(li).parent().find('ul').slideDown()
                    this.show = true
                } else {
                    $(li).find('img').removeClass("route");
                    $(li).parent().find('ul').slideUp();
                    this.show = false;
                }

                // console.log($(this))

            },
            prePage() {
                this.currentPage -= 1;
                this.getmsg(this.currentPage,15,this.serchs,this.companyType,this.departmentId,this.regionId,this.serviceId);
            },
            nextPage() {
                this.currentPage += 1;
                this.getmsg(this.currentPage,15,this.serchs,this.companyType,this.departmentId,this.regionId,this.serviceId);
            },
            changeCurrentPage(i) {
                this.currentPage = i;
                this.getmsg(this.currentPage,15,this.serchs,this.companyType,this.departmentId,this.regionId,this.serviceId);
            },
            //添加active
            addActive(arr) {
                for (var i = 0; i < arr.length; i++) {
                    arr[i].active = false;
                }
                return arr
            },
            //分页
            getmsg(a,b,c,d,e,f,j) {
                if(this.json1.id==undefined){
                    e=''
                }
                if(this.json1.id!=undefined){
                    e=this.json1.id;
                }

                if(this.json2.id==undefined){
                   d=''
                }
                if(this.json2.id!=undefined){
                    d=this.json2.id;
                }

                if(this.json3.id==undefined){
                    j=''
                }
                if(this.json3.id!=undefined){
                    j=this.json3.id;
                }

                if(this.json4.id==undefined){
                    f=''
                }
                if(this.json4.id!=undefined){
                    f=this.json4.id;
                }
                this.axios.post('/web/onlinework/index', {
                    companyType: d,
                    current: a,
                    departmentId: e,
                    regionId: f,
                    serviceId: j,
                    size: b,
                    title: c
                }).then(({data}) => {
                    this.pageTotal = data.Pages;
                    console.log(data.Pages);
                    this.currentPage = data.Current;
                    this.pageConfig.pageSize = data.Size;
                    this.pageConfig.total = data.Total;
                    this.content=data.onlineworkvolist;
                })
            },
            cancle(index){
                if(index.type==='bumen'){
                    for(var i=0;i<this.departmentVoList.length;i++){
                        this.departmentVoList[i].active=false;
                    }
                    this.json1={};
                }
                if(index.type==='leixing'){
                    for(var i=0;i<this.industrylist.length;i++){
                        this.industrylist[i].active=false;
                    }
                    this.json2={};
                }
                if(index.type==='xiangmu'){
                    for(var i=0;i<this.scalelist.length;i++){
                        this.scalelist[i].active=false;
                    }
                    this.json3={};
                }
                if(index.type==='di'){
                    for(var i=0;i<this.regionlist.length;i++){
                        this.regionlist[i].active=false;
                    }
                    this.json4={};
                }
            },
            //搜索
            sousuo(){
                this.getmsg(this.currentPage,15,this.serchs,this.companyType,this.departmentId,this.regionId,this.serviceId);
            },
            result(){
                this.json1={};
                for(var i=0;i<this.departmentVoList.length;i++){
                    this.departmentVoList[i].active=false;
                };
                this.json2={};
                for(var i=0;i<this.industrylist.length;i++){
                    this.industrylist[i].active=false;
                };
                this.json3={};
                for(var i=0;i<this.scalelist.length;i++){
                    this.scalelist[i].active=false;
                };
                this.json4={};
                for(var i=0;i<this.regionlist.length;i++){
                    this.regionlist[i].active=false;
                };
                this.serchs='';
                let that=this;
                let arr=[that.json2,that.json3,that.json4,that.json1];
                let arr1=[];
                for (let i=0;i<arr.length;i++){
                    if(arr[i].name!=undefined){
                        console.log(arr[i]);
                        arr1.push(arr[i]);
                    }
                };
                that.yixuan=arr1;
            }
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

  .warp {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 21px;
    padding-bottom: 30px;

    .left {
      float: left;
      margin-right: 20px;
      width: 180px;
      border: 1px solid rgba(230, 230, 230, 1);
      border-top: none;

      h3 {
        cursor: default;
        width: 180px;
        height: 50px;
        line-height: 50px;
        border-top: 1px solid rgba(230, 230, 230, 1);
        text-align: center;
        font-size: 18px;
        font-weight: 400;
        color: #454545;
      }
      h3.select {
        color: #E84012;
        border-top: 1px solid #FF6A42;
      }
    }

    .right {
      float: left;
      width: 992px;
      min-height: 775px;
      border: 1px solid rgba(217, 217, 217, 1);
      padding-top: 17px;

      h2 {
        height: 70px;
        line-height: 70px;
        width: 902px;
        margin-left: 20px;
        border-bottom: 1px dashed #E6E6E6;
        font-size: 20px;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        text-align: center;
      }

      .bu {
        width: 902px;
        margin-left: 20px;
        margin-top: 17px;
        border-bottom: 1px dashed #E6E6E6;
        overflow: hidden;
        cursor: default;
        user-select:none;
        .bu_l {
          float: left;
          margin-right: 40px;
          width: 85px;

          span {
            display: block;
            height: 26px;
            line-height: 26px;
            width: 73px;
            font-size: 16px;
            font-weight: 400;
            color: rgba(69, 69, 69, 1);
          }
        }

        .bu_r {
          width: 770px;
          float: left;

          li {
            float: left;
            width: 76px;
            height: 26px;
            line-height: 26px;
            text-align: center;
            margin-right: 9px;
            font-size: 14px;
            font-weight: 400;
            color: rgba(69, 69, 69, 1);
            margin-bottom: 7px;
          }

          li.selec {
            background: #1492ff;
            color: #fff;
          }
        }
      }

      .xuan {
        width: 879px;
        height: 108px;
        background: rgba(245, 245, 245, 1);
        margin-left: 20px;
        padding: 20px 10px;
        margin-top: 30px;

        .yi {
          width: 879px;
          overflow: hidden;

          span {
            display: block;
            float: left;
            height: 20px;
            width: 49px;
            font-size: 14px;
            font-weight: 400;
            color: rgba(115, 115, 115, 1);
            margin-right: 40px;
          }

          ul {
            float: left;
            width: 789px;

            li {
              padding: 0 10px;
              float: left;
              margin-left: 10px;
              border:1px solid #1492ff;

              b {
                display: block;
                float: left;
                height: 20px;
                font-size: 12px;
                line-height: 20px;
                font-weight: 400;
                color: #454545;
              }

              em {
                display: block;
                float: left;
                color: #454545;
                margin-left: 10px;
                height: 20px;
                font-size: 12px;
                line-height: 20px;
              }
            }
          }

          div {
            float: left;
            width: 600px;

            input {
              display: block;
              width: 570px;
              height: 30px;
              border: 1px solid rgba(189, 189, 189, 1);
              outline: none;
              line-height: 30px;
              background: rgba(245, 245, 245, 1);
              margin-bottom: 15px;
            }

            p {
              width: 570px;
              height: 26px;

              button {
                display: block;
                float: left;
                width: 76px;
                height: 26px;
                line-height: 26px;
                text-align: center;
                background: rgba(232, 73, 33, 1);
                border-radius: 4px;
                outline: none;
                border: none;
                font-size: 14px;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                margin-right: 76px;
              }
            }
          }
        }

        .kuang {
          margin-top: 20px;
          input{
            padding: 0 10px;
          }
        }
      }

      h3 {
        margin-left: 20px;
        margin-top: 18px;
        height: 40px;
        line-height: 40px;
        width: 64px;
        font-size: 16px;
        font-weight: bold;
        color: rgba(69, 69, 69, 1);
      }

      .jieguo {
        width: 899px;
        margin-left: 20px;

        li {
          cursor: default;
          width: 899px;
          border-bottom: 1px dashed rgba(230, 230, 230, 1);

          p {
            width: 899px;
            height: 52px;

            b, a {
              display: block;
              float: left;
              height: 52px;
              line-height: 52px;
              font-size: 14px;
              font-weight: 400;
              color: rgba(69, 69, 69, 1);
            }

            span {
              display: block;
              float: left;
              height: 52px;
              line-height: 52px;
              margin-left: 10px;
              max-width: 500px;
              overflow: hidden;
              font-size: 14px;
              font-weight: 400;
              color: rgba(69, 69, 69, 1);
            }

            img {
              display: block;
              float: right;
              margin-top: 18px;
            }

            img.route {
              transform: rotate(-180deg);
              transition: all 0.5s;

            }
          }

          ul {
            width: 823px;
            background: rgba(245, 245, 245, 1);
            padding: 13px 49px 13px 33px;

            li {
              width: 823px;
              border: none;

              h1 {
                line-height: 25px;
                font-size: 14px;
                font-weight: bold;
                color: rgba(53, 53, 53, 1);
              }

              h4 {
                width: 790px;
                line-height: 22px;
                margin-left: 23px;
                height: 13px;
                font-size: 14px;
                font-weight: 400;
                color: rgba(53, 53, 53, 1);
              }

              div {
                height: 37px;
                line-height: 37px;
                margin-left: 24px;

                span {
                  display: block;
                  float: left;
                  height: 37px;
                  line-height: 37px;
                  font-size: 16px;
                  font-weight: 400;
                  color: rgba(53, 53, 53, 1);
                }

                a {
                  display: block;
                  float: left;
                  margin-left: 5px;
                  font-size: 16px;
                  font-weight: 400;
                  text-decoration: underline;
                  color: rgba(48, 72, 255, 1);
                }
              }

              button {
                display: block;
                width: 90px;
                height: 26px;
                background: rgba(231, 57, 10, 1);
                border-radius: 5px;
                border: none;
                outline: none;
                margin-left: 78px;
                margin-top: 5px;
                font-size: 14px;
                font-weight: bold;
                color: rgba(254, 254, 254, 1);
              }
              button.wei{
                background: #d9d9d9;
              }
            }
          }
        }
      }
    }
  }

  .page {
    margin: 30px 0;
    text-align: center;

    div {
      display: inline-block;
    }
  }
</style>
<style scoped lang="less">
  .pageComponent {
    button {
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline: none;
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

      &[disabled] {
        color: #c0c4cc;
        cursor: not-allowed;
      }

      &.active {
        cursor: not-allowed;
        background: #E7390A;
        color: #fff;
      }
    }

    span {
      height: 28px;
      line-height: 28px;
    }
  }
</style>
