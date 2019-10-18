<template>
  <div>
    <div class="top">
      <head-nav :clect="clectnav"></head-nav>
    </div>
    <div class="warp">
      <div class="left">
        <div @click="person" class="headerimg"><img src="../../../static/images/30.png" alt=""></div>
        <div class="fa"><p ><b>您好！王建</b><span>【法人】</span></p></div>
        <h3>13745689231</h3>
        <h5>铜陵市******有限公司</h5>
        <ul>
          <li v-for="(item,idx) in leftList" :class="idx==leftShow?'show':''" @click="xuanLeft(idx)"><img :src="item.url" alt="" ><span>{{item.name}}</span></li>
        </ul>
      </div>
      <div class="right" v-if="rightShow==0">
          <div class="order">
            <b>我的在线工单[ <i>{{orderall}}</i> ]</b>
            <p id="option">
<!--              <span v-for="(item,idx) in optionList" :key="idx" v-if="idx==0||idx==2" :class="soption==idx?'xuan':''" @click="cateState(idx)">{{item}}</span>-->
              <span v-for="(item,idx) in optionList" :key="idx"  :class="soption==idx?'xuan':''" @click="cateState(idx)">{{item}} <i v-if="idx==1">(  <em >{{dainum}}</em> )</i><i v-if="idx==3">(  <em >{{pingnum}}</em> )</i></span>
            </p>
          </div>
        <div class="title" v-if="soption==0">
          <div class="head">
            <span>编号</span>
            <b>工单名称</b>
            <strong>办理状态</strong>
            <i>结果</i>
            <em>完成时间</em>
          </div>
          <ul>
            <li @click="int" v-for="(item,idx) in orderlist.all" :key="idx">
            <span>{{idx+1}}</span>
            <b>{{item.title}}</b>
            <strong class="state" v-if="item.state==1">待审核</strong>
            <strong class="state"  v-if="item.state==2">退回</strong>
            <strong class="state"  v-if="item.state==3">交办信息</strong>
            <strong class="state"  v-if="item.state==4">已完成</strong>
            <strong class="state"  v-if="item.state==5">已评价</strong>
            <i class="jie" v-if="item.state>3">已完成</i>
            <i class="wei" v-if="item.state<=3">未完成</i>
            <em v-if="item.state>3">{{clearFen(item.auditTime)}}</em>
            <em v-if="item.state<=3">---</em>
          </li>
          </ul>
        </div>
        <div class="title" v-if="soption==2">
          <div class="head">
            <span>编号</span>
            <b>工单名称</b>
            <strong>结果</strong>
            <i>部门</i>
            <em>完成时间</em>
          </div>
          <ul>
            <li  @click="int" v-for="(item,idx) in orderlist.yi" :key="idx">
              <span>{{idx+1}}</span>
              <b>{{item.title}}</b>
              <strong class="state" v-if="item.state>3">已完成</strong>
              <i class="jie">{{item.departmentName}}</i>
              <em>{{clearFen(item.auditTime)}}</em>
            </li>
          </ul>
        </div>
        <div class="title" v-if="soption==1">
          <div class="head">
            <span>编号</span>
            <b>工单名称</b>
            <strong>工单状态</strong>
            <i >部门</i>
            <em>完成时间</em>
          </div>
          <ul>
            <li  @click="int" v-for="(item,idx) in orderlist.dai" :key="idx">
              <span>{{idx+1}}</span>
              <b>{{item.title}}</b>
              <strong class="state" v-if="item.state==1">待审核</strong>
              <strong class="state"  v-if="item.state==2">退回</strong>
              <strong class="state"  v-if="item.state==3">交办信息</strong>
              <strong class="state"  v-if="item.state==4">已完成</strong>
              <strong class="state"  v-if="item.state==5">已评价</strong>
              <i >{{item.departmentName}}</i>
              <em v-if="item.state>3">{{clearFen(item.auditTime)}}</em>
              <em v-if="item.state<=3">---</em>
            </li>
          </ul>
        </div>
        <div class="title" v-if="soption==3">
          <div class="head">
            <span>编号</span>
            <b>工单名称</b>
            <em class="zuo">完成时间</em>
            <i class="last">评价</i>
          </div>
          <ul>
            <li  @click="int" v-for="(item,idx) in orderlist.ping" :key="idx">
              <span>{{idx+1}}</span>
              <b>{{item.title}}</b>
              <em  class="zuo">{{clearFen(item.auditTime)}}</em>
              <i  class="last"><strong @click="pingjia"></strong></i>
            </li>
          </ul>
        </div>
        <div class="page">
          <div>
            <button v-if="current==1" disabled="disabled">上一页</button>
            <button v-if="current>1" @click="backPage">上一页</button>
            <button>第 <b>{{current}}</b> 页</button>
            <button>共 <b>{{pages}}</b> 页</button>
            <button v-if="current<pages"  @click="nextPage">下一页</button>
            <button  v-if="current==pages" disabled="disabled">下一页</button>
          </div>
        </div>
      </div>
      <div class="right" v-if="rightShow==1">
        <h1 class="route">我的评价</h1>
        <div class="routerc">
          <span>内容:</span>
          <textarea placeholder="请输入"></textarea>
        </div>
        <div class="manyi">
          <span>满意度</span>
          <p><b  v-for="(item,index) in itemClasslass" :key="index" :class="item" @click="ping(index)"></b></p>
        </div>
        <button class="save">提交</button>
      </div>
      <div class="right" v-if="rightShow==2">
       <div class="orderint" >
          <h1>基本信息</h1>
         <ul>
           <li><span>事项名称</span> <b>缴费人员增减申报（企业基本养老保险）</b></li>
           <li><span>申报号</span> <b>2019965301</b></li>
           <li><span>办件名称</span> <b>关于缴费人员增减申报（企业基本养 老保险）</b></li>
           <li><span>申报时间</span> <b>2019-9-06  10：56：30</b></li>
           <li><span>申请人</span> <b>陆励成</b></li>
           <li><span>联系人</span> <b>陆励成</b></li>
           <li><span>地址</span> <b>上海市陆家嘴金融国际中心58层</b></li>
           <li><span>受理部门</span> <b>市社会保险中心</b></li>
           <li><span>查询密码</span> <b>323650</b></li>
           <li><span>办件状态</span> <b>办结</b></li>
           <li><span>受理时间</span> <b>2019-9-06 10：56：30</b></li>
           <li><span>实际办结时间</span> <b>2019-9-08 10：56：30</b></li>
           <li><span>法人代表</span> <b>陆励成</b></li>
           <li><span>联系电话</span> <b>13000000000</b></li>
           <li><span>备注</span> <b>归属感</b></li>
         </ul>
         <h2>材料信息</h2>

       </div>
      </div>
      <div class="right" v-if="rightShow==3">
        <div class="personalmsg" >
          <h1>个人信息</h1>
          <ul>
            <li v-show="Modifys=='true'">
              <div class="name">
                <p><img src="../../../static/images/69.png" alt=""></p>
                <span>用户名</span>
              </div>
              <div class="opt" >
                <b class="zhong">王建</b>
                <button @click="Modify">修改用户名</button>
              </div>
            </li>
            <li v-show="Modifys=='false'" class="aa">
              <div class="name">
                <p><img src="../../../static/images/69.png" alt=""></p>
                <span>用户名</span>
              </div>
              <div class="opt" >
                <b><input type="text" v-model="username"><span>4-20位字符，可包含字母、数字、汉字、“·”、下划线，汉
字算两个字符，必须以字母或汉字开头</span></b>
                <button><span @click="okSave">确定</span> <span @click="canclename">取消</span></button>
              </div>
            </li>
            <li>
            <div class="name">
              <p><img src="../../../static/images/70.png" alt=""></p>
              <span>账号密码</span>
            </div>
            <div class="opt">
              <b class="zhong">********</b>
              <button>修改密码</button>
            </div>
          </li>
            <li>
              <div class="name">
                <p><img src="../../../static/images/71.png" alt=""></p>
                <span>手机号码</span>
              </div>
              <div class="opt">
                <b  class="zhong">13215856355</b>
                <button class="de">---</button>
              </div>
            </li>
            <li>
              <div class="name">
                <p><img src="../../../static/images/72.png" alt=""></p>
                <span>实名认证</span>
              </div>
              <div class="opt">
                <b  class="zhong">初级实名认证</b>
                <button>我要认证</button>
              </div>
            </li>
            <li>
              <div class="name">
                <p><img src="../../../static/images/73.png" alt=""></p>
                <span>邮箱</span>
              </div>
              <div class="opt">
                <b  class="zhong">未设定</b>
                <button>设定邮箱</button>
              </div>
            </li>
          </ul>

        </div>
      </div>
      <div class="right" v-if="rightShow==4">
       <div class="xi">
         <h1>系统消息 [ <span>4</span> ]</h1>
         <ul>
           <li><b></b> <span>	特种设备制造单位许可</span> <strong>2019-9-20</strong> <img src="../../../static/images/74.png" alt=""></li>
           <li><b></b> <span>	特种设备制造单位许可</span> <strong>2019-9-20</strong> <img src="../../../static/images/74.png" alt=""></li>
           <li class="xuanfu"><b></b> <span>	特种设备制造单位许可</span> <strong>2019-9-20</strong> <img src="../../../static/images/74.png" alt=""></li>
           <li><b></b> <span>	特种设备制造单位许可</span> <strong>2019-9-20</strong> <img src="../../../static/images/74.png" alt=""></li>
         </ul>
         <div class="page">
           <div>
             <button>上一页</button>
             <button>第 <b>1</b> 页</button>
             <button>共 <b>1</b> 页</button>
             <button>下一页</button>
           </div>
         </div>
       </div>
      </div>
      <div class="right" v-if="rightShow==5">
        <div class="collection">
          <h1>我的收藏 [ <span>4</span> ]</h1>
          <p><i>序号</i> <span>事件名称</span><strong>发起时间</strong><b>操作</b></p>
          <ul>
            <li><i>1</i> <span>	特种设备制造单位许可</span> <strong>2019-9-20</strong> <b><img src="../../../static/images/75.png" alt=""></b></li>
            <li><i>2</i> <span>	特种设备制造单位许可</span> <strong>2019-9-20</strong> <b><img src="../../../static/images/75.png" alt=""></b></li>
            <li class="xuanfu"><i>3</i> <span>	特种设备制造单位许可</span> <strong>2019-9-20</strong> <b><img src="../../../static/images/75.png" alt=""></b></li>
            <li><i>4</i> <span>	特种设备制造单位许可</span> <strong>2019-9-20</strong> <b><img src="../../../static/images/75.png" alt=""></b></li>
          </ul>
          <div class="page">
            <div>
              <button>上一页</button>
              <button>第 <b>1</b> 页</button>
              <button>共 <b>1</b> 页</button>
              <button>下一页</button>
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
    import footerNav from '../footer'
    export default {
        name: "personal",
        components:{headNav,footerNav},
        data(){
            return {
                clectnav: 0,
                optionList:['全部','待办工单','已办工单','待评价'],
                soption:0,
                rightShow:0,
                fullstar:0,//pingfen默认
                Modifys:'true',//修改用户名
                username:'',//用户名
                leftList:[
                    {url:'../../../static/images/54.png',name:'我的在线工单'},
                    {url:'../../../static/images/55.png',name:'任务监测'},
                    {url:'../../../static/images/56.png',name:'在线申报'},
                    {url:'../../../static/images/57.png',name:'产品管理'},
                    {url:'../../../static/images/58.png',name:'供需发布'},
                    {url:'../../../static/images/59.png',name:'企业资质'},
                    {url:'../../../static/images/60.png',name:'查看微空间'},
                    {url:'../../../static/images/61.png',name:'身份认证'},
                    {url:'../../../static/images/62.png',name:'修改密码'},
                    {url:'../../../static/images/63.png',name:'我的收藏'},
                    {url:'../../../static/images/65.png',name:'我的订阅'},
                    {url:'../../../static/images/64.png',name:'系统消息'},
                ],
                leftShow:0,
                current:1,//页码
                size:10,//每页的条数
                pages:'',//总页数
                total:'',//数据总数
                orderall:'',
                dainum:'',
                pingnum:'',
                orderlist:{
                    all:'',
                    yi:'',
                    dai:'',
                    ping:''
                },
                token:''
            }
        },
        methods:{
            //修改用户名
            Modify(){
              this.Modifys='false';
            },
            clearFen(i){
                return i.substring(0,i.indexOf(' '))
            },
            //确定修改用户名
            okSave(){
                console.log(this.username)
            },
            //取消修改
            canclename(){
                this.Modifys='true';
            },
            //修改个人信息页面
            person(){
              this.rightShow=3;
            },
            //左侧选中
            xuanLeft(i){
                this.leftShow=i;
                console.log(i);
                if(this.leftShow==11){//系统消息
                    this.rightShow=4;
                }else if(this.leftShow==9){
                    this.rightShow=5;
                }
                if(this.leftShow==0){
                    this.rightShow=0;
                }
            },
            cateState(i){
                this.soption=i;
               this.current=1;
                var data={
                    current:this.current,
                    size:this.size,
                    state:this. soption,
                    title:' ',
                    token:this.token
                };
                this.getList(data);
            },
            pingjia(){
                this.rightShow=1;
            },
            ping(i){
                this.fullstar=i+1;
            },
            int(){
                this.rightShow=2;
            },
            //工单上一页
            backPage(){
                this.current -=1;
                var data={
                    current:this.current,
                    size:this.size,
                    state:this. soption,
                    title:' ',
                    token:this.token
                };
                this.getList(data);
            },
            nextPage(){
                this.current +=1;
                var data={
                    current:this.current,
                    size:this.size,
                    state:this. soption,
                    title:' ',
                    token:this.token
                };
                this.getList(data);
            },
            getList(data){
                this.axios.post('/web/workorder/list',data).then(({data})=>{
                    console.log(data.data);
                    this.pages=data.data.pages;
                    this.total=data.data.total;
                    if(this.soption==0){
                        this.orderlist.all=data.data.records;
                        this.orderall=data.data.total;
                        this.dainum='';
                        this.pingnum='';
                    }
                    if(this.soption==1){
                        this.orderlist.dai=data.data.records;
                    }
                    if(this.soption==2){ this.orderlist.yi=data.data.records;}
                    if(this.soption==3){ this.orderlist.ping=data.data.records;}
                });
            }
        },
        computed:{
            itemClasslass(){//星星的数组
                let result = [];
                for(var i=0 ; i<this.fullstar;i++){//放全星
                    result.push('shi');
                }
                if(result.length < 5){//如果没有满到五个星就用灰色的星星补齐9
                    var offstar = 5 - result.length;
                    for(var i=0;i<offstar;i++){
                        result.push('xu');
                    }
                };
                return result;
            }
        },
        created() {
          this. token=localStorage.getItem('token');
           var data={
                current:this.current,
               size:this.size,
                state:this. soption,
                title:' ',
                token:this.token
            };
            this.getList(data);
            // this.axios.post('/system/user/edit',{ "user_id": 0,token:token}).then((data)=>{
            //     console.log(data)
            // })
        }
    }
</script>

<style scoped lang="less">
  .warp{
    width: 1200px;
    margin: 15px auto;
    overflow: hidden;
    .left{
      float: left;
      margin: 5px 17px 5px 3px;
      width:261px;
      height:926px;
      border: 1px solid #d7d7d7;
      box-shadow: 0 0 3px rgba(0,0,0,0.16);
      .headerimg{
        margin-top: 15px;
        img{
          width:66px;
          height:66px;
          display: block;
          margin: 0 auto;
        }
      }
      .fa{
        margin-top: 8px;
        height: 30px;
        position: relative;
        p{
          height: 30px;
          width: 160px;
         margin: 0 auto;
          >*{
            display: block;
            float: left;
            height: 30px;
            line-height: 30px;
            font-size:16px;
            font-weight:400;
          }
          b{
            color:rgba(69,69,69,1);
          }
          span{
            color: #E8390A;
          }
        }
      }
      h3,h5{
        height: 29px;
        text-align: center;
        line-height: 29px;
        font-size:16px;
        font-weight:400;
        color:rgba(69,69,69,1);
      }
      ul{
        margin-top: 10px;
        li{
          cursor: default;
          width:176px;
          height:50px;
          padding-left: 85px;
          display: flex;
          align-items: center;
          span{
            cursor: default;
            height: 50px;
            line-height: 50px;
            font-size:16px;
            font-weight:400;
            color:rgba(69,68,68,1);
            margin-left: 10px;
            display: inline-block;
          }
        }
        li.show{
          border-left: 6px solid #0095FF;
         padding-left: 79px;
          background: #E7F5FF;
        }
      }
    }
    .right{
      position: relative;
      float: left;
      width:912px;
      margin: 5px 3px 5px 0;
      min-height: 926px;
      box-shadow: 0 0 3px rgba(0,0,0,0.16);
      border:1px solid rgba(217,217,217,1);
      .order{
        height: 78px;
        width: 798px;
        padding: 0 70px 0 44px;
        b{
          display: block;
          float: left;
          height: 78px;
          line-height: 78px;
          font-size:20px;
          font-weight:400;
          color:rgba(70,70,70,1);
          i{color: #FF0000;}
        }
        p{
          height: 78px;
          line-height: 78px;
          float: right;
          display: flex;
          align-items: center;
          margin-right: 12px;
          margin-bottom: 5px;
          span{
            cursor: default;
            flex-direction:row;
            display: block;
            padding: 0 10px;
            height: 23px;
            line-height: 23px;
            margin-right: 26px;
            font-size:16px;
            font-weight:400;
            color:rgba(0,149,255,1);
            em{
              color:#FF0000;
              font-size:16px;
              font-weight:400;
            }
          }
          span.xuan{
            background:rgba(0,149,255,1);
            border-radius:4px;
            color: #fff;
          }
        }
      }
      .title{
        width: 786px;
        padding: 0 70px 0 56px;
        .head{
          display: flex;
          align-items: center;
          height: 69px;
          width: 793px;
          border-bottom: 1px solid #e6e6e6;
          padding-left: 9px;
          >*{
            display: block;
            flex-direction: row;
            float: left;
            font-size:16px;
            font-weight:bold;
            color:rgba(69,69,69,1);
            overflow: hidden;
            height: 69px;
            line-height: 69px;
          }
          span{
            text-align: center;
            width: 62px;
            margin-right: 50px;
          }
          b{
            width: 338px;
          }
          strong{
            width: 109px;
            text-align: center;
            margin-right: 40px;
          }
          i{
            width: 80px;
            margin-right: 20px;
          }
          em{
            width: 93px;
            text-align: center;
          }
          em.zuo{
            margin-left: 23px;
            margin-right: 49px;
          }
          i.last{
            width: 176px;
            margin-right: 0;
          }
        }
        ul{
          li{
            display: flex;
            align-items: center;
            height: 69px;
            width: 793px;
            border-bottom: 1px dashed #D9D9D9;
            padding-left: 9px;
            >*{
              display: block;
              flex-direction: row;
              float: left;
              overflow: hidden;
              height: 62px;
              line-height: 62px;
              font-size:14px;
              font-weight:400;
              color:rgba(69,69,69,1);
            }
            em.zuo{
              margin-left: 23px;
              margin-right: 49px;
            }
            i.last{
              width: 176px;
              margin-right: 0;
            }
            span{
              text-align: center;
              width: 62px;
              margin-right: 50px;
            }
            b{
              width: 338px;
            }
            strong.state{
              color: #007eff;
            }
            strong{
              width: 109px;
              text-align: center;
              margin-right: 40px;
            }
            i{
              width: 80px;
              margin-right: 20px;
              display: flex;
              align-items: center;
              strong{
               background: url("../../../static/images/66.png") no-repeat;
                width: 17px;
                height: 17px;
              }
            }
            i.jie{
              color: #007eff;
            }
            i.wei{
              color: #ff0000;
            }
            em{
              text-align: center;
              width: 93px;
            }
          }
          li:last-child{
            border-bottom: none;
          }
        }
      }
      .page{
        position: absolute;
        bottom: 24px;
        left: 0;
        width: 100%;
        height: 35px;
        div{
         position: absolute;
          left: 50%;
          transform: translate(-50%);
          height: 35px;
          button{
            display: block;
            float: left;
            border: none;
            outline: none;
            height: 35px;
            line-height: 35px;
            font-size:18px;
            font-weight:400;
            color:rgba(69,69,69,1);
            background: #fff;
            b{
              color: #E8390A;
              font-size:18px;
              font-weight:400;
            }
          }
        }
      }
      .route{
        width: 798px;
        padding: 0 70px 0 44px;
        height: 88px;
        line-height: 88px;
        font-size: 20px;
        color: #454545;
        font-weight: 400;
      }
      .routerc{
        padding: 0 70px 0 44px;
        width: 582px;
        height: 204px;
        span{
          width: 80px;
          display: block;
          float: left;
          text-align: right;
          font-size: 20px;
          color: #454545;
          font-weight: 400;
          margin-right: 20px;
        }
        textarea{
          display: block;
          float: left;
          width:456px;
          height:182px;
          padding: 10px;
          border:1px solid rgba(217,217,217,1);
          resize: none;
          outline: none;
          font-size:16px;
          font-weight:400;
          line-height: 25px;
        }
      }
      .manyi{
        padding: 0 70px 0 44px;
        margin-left: 100px;
        width: 483px;
        height: 98px;
        span{
          display: block;
          float: left;
          height: 98px;
          line-height: 98px;
          font-size:22px;
          font-weight:400;
          color:rgba(115,115,115,1);
        }
        p{
          float: left;
          height: 98px;
          display: flex;
          align-items: center;
          width: 372px;
          margin-left: 40px;
          b{
            width: 40px;
            height: 38px;
            display: block;
            float: left;
            margin-right: 29px;
          }
          b.shi{
            background: url("../../../static/images/67.png");
          }
          b.xu{
            background: url("../../../static/images/68.png");
          }
        }
      }
      .save{
        display: block;
        margin-left: 251px;
        width:312px;
        height:40px;
        background:rgba(232,57,10,1);
        line-height: 40px;
        text-align: center;
        font-size:22px;
        font-weight:400;
        color:rgba(255,255,255,1);
        outline: none;
        border: none;
      }
      .orderint{
        h1{
          height:60px;
          line-height: 60px;
          margin-top: 33px;
          padding-left: 22px;
          width: 798px;
          border-bottom: 2px solid #E8390A;
          margin-left: 34px;
          font-size:20px;
          font-weight:400;
          color:rgba(232,57,10,1);
        }
        ul{
          margin-left: 195px;
          width: 630px;
          margin-top: 12px;
          li{
            width: 630px;
            height: 59px;
            span{
              display: block;
              float: left;
              width: 100px;
              height: 59px;
              line-height: 59px;
              text-align: right;
              font-size:16px;
              font-weight:bold;
              color:rgba(69,69,69,1);
            }
            b{
              display: block;
              float: left;
              margin-left: 60px;
              width: 470px;
              height: 59px;
              line-height: 59px;
              font-size:16px;
              font-weight:400;
              color:rgba(69,69,69,1);
              overflow: hidden;
            }
          }
        }
        h2{
          width: 824px;
          height: 68px;
          line-height: 68px;
          padding-left: 40px;
          border-bottom: 1px solid #E8390A;
          font-size:20px;
          font-weight:400;
          color:rgba(232,57,10,1);
        }
      }
      .personalmsg{
        margin-top: 10px;
        h1{
         margin-left: 42px;
          width: 830px;
          padding-left: 7px;
          height: 58px;
          line-height: 58px;
          border-bottom: 1px solid #E8390A;
          font-size:20px;
          font-weight:400;
          color:rgba(69,69,69,1);
        }
        ul{
          width: 835px;
          margin-left: 42px;
          li{
            padding-left: 17px;
            width: 818px;
            border-bottom: 1px dashed #D9D9D9;
            overflow: hidden;
            .name{
              float: left;
              width:238px;
              height: 60px;
              display: flex;
              align-items: center;
             p{
               width: 30px;
               float: left;
               margin-right: 25px;
               img{
                 display: block;
               }
             }
              span{
                display: block;
                float: left;
                height:15px;
                font-size:16px;
                font-weight:400;
                color:rgba(69,69,69,1);
              }
            }
            .opt{
              width: 580px;
              float: left;
              b.zhong{
                line-height: 60px;
              }
              b{
                width: 323px;
                display: block;
                float: left;
                overflow: hidden;
                font-size:16px;
                font-weight:400;
                color:rgba(69,69,69,1);
              }
              button{
                display: block;
                float:right;
                height: 60px;
                line-height: 60px;
                font-size:16px;
                font-weight:400;
                color:rgba(0,126,255,1);
                outline: none;
                border: none;
                background: #fff;
                margin-right: 40px;
                text-align: center;
                width: 120px;
              }
              button.de{
                color: #454545;
              }
            }
          }
          li.aa{
            height: 114px;
            .name{
              margin-top: 38px;
              display: block;
            }
            .opt{
              b{
                input{
                  width:69px;
                  padding: 0 10px;
                  height:31px;
                  border:1px solid rgba(191,191,191,1);
                  margin-top: 38px;
                  outline: none;
                  line-height: 31px;
                  font-size:14px;
                  font-weight:400;
                  color:rgba(69,69,69,1);
                }
                span{
                  width: 323px;
                  display: block;
                  font-size:12px;
                  font-weight:400;
                  color:rgba(255,0,0,1);
                  line-height:18px;
                }
              }
              button{
                margin-top: 27px;
              }
            }
          }
        }
      }
      .xi{
        h1{
          margin-top: 22px;
          padding-left: 48px;
          height: 50px;
          line-height: 50px;
          font-size:20px;
          font-weight:400;
          color:rgba(69,69,69,1);
          span{
            font-size:20px;
            font-weight:400;
            color:#E8390A;
          }
        }
        ul{
          margin-left: 57px;
          width: 793px;
          li{
            display: flex;
            align-items: center;
            padding: 0 6px;
            width: 781px;
            height: 62px;
            border-bottom: 1px dashed #D9D9D9;
            b{
              width: 0;
              height: 0;
              margin-right: 10px;
              border-style: solid;
              border-width: 4px 0 4px 4px;
              border-color: transparent transparent transparent #e54923;
            }
            span{
              width: 552px;
              margin-right: 20px;
              overflow: hidden;
            }
            strong{
              width: 95px;
              font-size:16px;
              font-weight:400;
              color:rgba(69,69,69,1);
            }
            img{
              margin-left: 70px;
              margin-right: 18px;
            }
          }
          li.xuanfu{
            background: #E7F5FF;
          }
          li:last-child{
            border-bottom: none;
          }
        }
      }
      .collection{
        h1{
          margin-top: 22px;
          padding-left: 48px;
          height: 50px;
          line-height: 50px;
          font-size:20px;
          font-weight:400;
          color:rgba(69,69,69,1);
          span{
            font-size:20px;
            font-weight:400;
            color:#E8390A;
          }
        }
        p{
          width: 791px;
          height:54px ;
          margin-top: 8px;
          display: flex;
          align-items: center;
          margin-left: 51px;
          border-bottom:1px solid #d6d6d6 ;
          >*{
            font-size:16px;
            font-weight:bold;
            color:rgba(69,69,69,1);
            margin-right: 38px;
          }
          i{
            width: 67px;
            text-align: center;
          }
          span{
            width: 343px;
            padding-left: 65px;
          }
          strong{
            width: 121px;
            padding-left: 8px;
          }
          b{
            width: 38px;

          }
        }
        ul{
          width: 791px;
          margin-left: 51px;
          li{
            width: 791px;
            display: flex;
            align-items: center;
            border-bottom:1px dashed #d6d6d6 ;
            height: 61px;
            padding: 0;
            >*{
              font-size:16px;
              font-weight:400;
              color:rgba(69,69,69,1);
              margin-right: 38px;
            }
            i{
              width: 67px;
              text-align: center;
            }
            span{
              width: 408px;
            }
            strong{
              width: 129px;
            }
            b{
              text-align: center;
              width: 38px;
            }
          }
          li:last-child{border-bottom: none}
          li.xuanfu{background: #E7F5FF}
        }
      }
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
