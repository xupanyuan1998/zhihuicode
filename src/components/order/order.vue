<template>
<div>
  <div class="top">
    <head-nav :clect="clectnav"></head-nav>
  </div>
  <div class="container">
    <div class="nav">
      <span>首页</span><b> ></b><span>工单检测</span>
    </div>
  </div>
  <div class="warp" id="warp">
    <div class="left" >
      <h1>铜陵市民营企业服务监测平台 <button @click="launchFullscreen(element)" >全屏</button></h1>
      <div class="cont" id="container" ></div>
      <ul >
        <li v-for="(item,idx) in cateList" :class="idx==cla?'sec':''" @click="select(idx)">{{item}}</li>
      </ul>
    </div>
    <div class="right">
      <div class="top">
        <h2>本月指标</h2>
       <div class="content">
         <ul>
           <li><span>访客数量:</span><b>561</b></li>
           <li><span>工单数量:</span><b>235</b></li>
           <li><span>办结数量:</span><b>121</b></li>
         </ul>
         <div>
           <strong>留言/反馈:</strong>
           <p>正常情况下，HIF一方面不断产生，另一方面不断降解。是非常浪费资源的，一般情况下现。</p>
         </div>
       </div>
      </div>
      <div class="all">
        <h2>总体指标</h2>
        <ul>
          <li><span>检测区域：</span><b>枞阳县</b></li>
          <li><span>园区数量：</span><b>5</b></li>
          <li><span>项目总数：</span><b>10</b></li>
          <li><span>服务企业：</span><b>15</b></li>
          <li><span>工单数量：</span><b>20</b></li>
          <li><span>好评数量：</span><b>50</b></li>
        </ul>
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
    //在页面中引入高德地图
    export default {
        name:'order',
        components:{
            headNav,
            footerNav
        },
        data(){
            return {
                clectnav: 5,
                map:'',
                infoWindow:'',
                marker:'',
                n:'',
                element:'',
                cateList:['待办工单','园区分布','企业分布','工单办理','用水服务','用气服务','用电服务','民星企业'],
                cla:0
            }
        },
        created(){
            this.$nextTick(function () {
                this.element=document.getElementById('warp');
            })
        },
        mounted() {
            var that=this;
            this.map = new AMap.Map('container', {
                zoom: 9
            });
            this.infoWindow=new AMap.InfoWindow({
                isCustom:	true,
                draggable: true,  //是否可拖动
                offset: new AMap.Pixel(0, -31),
                content:""
            });
         // let   arr=[{j:113.65912903759764,w:34.74606634973564},{j:113.60273827526854,w:34.79126106664183},{j:113.60488404248045,w:113.60488404248045}];
         //    for(var i=0; i<arr.length;i++){
         //        let arr1=[arr[i].j,arr[i].w];
         //
         //        that.marker = new AMap.Marker({
         //            iconStyle: '//webapi.amap.com/theme/v1.3/markers/b/mark_r.png',
         //            position:  arr1,
         //            zIndex: 101,
         //            map:that.map
         //        });
         //        that.marker.on('click', function(e){
         //            console.log(that.infoWindow);
         //            that.infoWindow.setContent("<ul><li>sadgfsg</li></ul>");
         //            that.infoWindow.open(that.map, e.lnglat);
         //        });
         //        that.marker.setMap(that.map);
         //    }
        },
        methods: {
            //進入全屏
            launchFullscreen(element) {
                //此方法不可以在異步任務中執行，否則火狐無法全屏
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    element.msRequestFullscreen();
                } else if (element.oRequestFullscreen) {
                    element.oRequestFullscreen();
                } else if (element.webkitRequestFullscreen) {
                    element.webkitRequestFullScreen();
                } else {
                    document.IsFullScreen = true;
                }
            },
            select(i){
                this.cla=i;
                let arr=[{j:113.65912903759764,w:34.74606634973564},{j:113.60273827526854,w:34.79126106664183},{j:113.611194,w:34.801869}];
                this.addCoordinates(arr)
            },
            //添加坐标点
            addCoordinates(arr){
                var that=this;
                for(var i=0; i<arr.length;i++){
                    let arr1=[arr[i].j,arr[i].w];
                    console.log(arr1);
                    that.marker = new AMap.Marker({
                        iconStyle: '//webapi.amap.com/theme/v1.3/markers/b/mark_r.png',
                        position:  arr1,
                        zIndex: 101,
                        map:that.map
                    });
                    that.marker.on('click', function(e){
                        console.log(that.infoWindow);
                        that.infoWindow.setContent("<ul><li>sadgfsg</li></ul>");
                        that.infoWindow.open(that.map, e.lnglat);
                    });
                    that.marker.setMap(that.map);
                }



    },
            //退出全屏
            exitFullscreen() {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.oRequestFullscreen) {
                    document.oCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else {
                    document.IsFullScreen = false;
                }
            }
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
    margin: 0 auto 20px;
    height: 725px;
    overflow: hidden;
    background: #fff;
    .left{
      float: left;
      width: 77.5%;
      height:100%;
      h1{
        height: 13.79%;
        display:flex;
        align-items:center;
        justify-content:center;
        text-align: center;
        font-size:30px;
        font-weight:400;
        color:rgba(69,69,69,1);
      }
      .cont{
        width:100%;
        height:67.86%;
        box-shadow:0 5px 5px 0 rgba(0, 0, 0, 0.21);
        background: #333;
      }
      ul{
        margin-top: 18px;
        width:99.89%;
        height: 15.44%;
        overflow: hidden;
        border:1px dashed rgba(217,217,217,1);
        border-top: none;
        border-left: none;
        li{
          float: left;
          width:24.8%;
          height:49.5%;
          display:flex;
          align-items:center;
          justify-content:center;
          text-align: center;
          border-top:1px dashed rgba(217,217,217,1);
          border-left:1px dashed rgba(217,217,217,1);
          font-size:20px;
          font-weight:400;
          color:rgba(69,69,69,1);
        }
        li.sec{
          background: #3377FF;
          color: #FFFFFF;
        }
      }
    }
    .right{
      float: left;
      margin-left: 20px;
      width: 250px;
      .top{
        margin-top: 100px;
        width:248px;
        height:241px;
        border:1px solid rgba(217,217,217,1);
        h2{
          width:250px;
          height:32px;
          background:rgba(51,119,255,1);
          line-height: 32px;
          text-align: center;
          font-size:16px;
          font-weight:400;
          color:rgba(254,254,254,1);
        }
        .content{
          ul{
            li{
              width: 215px;
              padding: 0 15px 0 22px;
              height: 34px;
              line-height: 34px;
              overflow: hidden;
              border-bottom: 1px dashed #e6e6e6;
              >*{
                display: block;
                float: left;
                height: 34px;
                line-height: 34px;
              }
              span{
                width:65px;
                height:13px;
                font-size:14px;
                font-weight:400;
                color:rgba(69,69,69,1);
              }
              b{
                margin-left: 12px;
                width:23px;
                height:11px;
                font-size:14px;
                font-weight:400;
                color:rgba(232,57,10,1);
              }
            }
          }
          div{
            width: 215px;
            padding: 0 15px 0 22px;
            height: 96px;
            overflow: hidden;
            strong{
              display: block;
              width: 100%;
              height: 30px;
              line-height: 30px;
              font-size:14px;
              font-weight:400;
              color:rgba(69,69,69,1);
            }
            p{
              margin-left: 10px;
              height: 66px;
              font-size:10px;
              font-weight:400;
              color:rgba(69,69,69,1);
              line-height:15px;
            }
          }
        }
      }
      .all{
        margin-top: 19px;
        width:248px;
        height:361px;
        border:1px solid rgba(217,217,217,1);
        h2{
          width:250px;
          height:32px;
          background:rgba(51,119,255,1);
          line-height: 32px;
          text-align: center;
          font-size:16px;
          font-weight:400;
          color:rgba(254,254,254,1);
        }
        ul{
          li{
            width: 215px;
            padding: 0 15px 0 22px;
            height: 34px;
            line-height: 34px;
            overflow: hidden;
            border-bottom: 1px dashed #e6e6e6;
            >*{
              display: block;
              float: left;
              height: 34px;
              line-height: 34px;
            }
            span{
              height:13px;
              font-size:14px;
              font-weight:400;
              color:rgba(69,69,69,1);
            }
            b{
              margin-left: 12px;
              height:11px;
              font-size:14px;
              font-weight:400;
              color:rgba(232,57,10,1);
            }
          }
        }
      }
    }
  }
</style>
