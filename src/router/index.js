import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import noticedetali from '@/components/policy/policydetali'
import policy from '@/components/policy/policy'
import information from '@/components/information/information'
import informationMore from '@/components/information/informationMore'
import informationDetali from '@/components/information/informationdetali'
import guides from '@/components/information/guides'
import guidesDetali from '@/components/information/guidesDetali'
import openly from '@/components/openly/openly'
import Antonym from '@/components/Antonym/Antonym'
import onlineWork from '@/components/Antonym/onlineWork'
import Antonymdetali from '@/components/Antonym/Antonymdetali'
import Corporation from '@/components/Corporation/Corporation'
import Corporationlist from '@/components/Corporation/Corporationlist'
import myspace from '@/components/Corporation/myspace'
import tellme from '@/components/tellme/tellme'
import personal from '@/components/personal/personal'
import registered from '@/components/registered'
import newslist from '@/components/news/newslist'
import newsdetali from '@/components/news/newsdetali'
import industry from '@/components/industry/industry'
import order from '@/components/order/order'

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {//首页
      path: '/',
      name: 'index',
      component: index
    },
    {//公告详情
      path: '/policy/policydetali',
      name: 'noticedatali',
      component: noticedetali
    },
    {//公告
      path: '/policy',
      name: 'policy',
      component: policy
    },
    {//政策信息
      path: '/information',
      name: 'information',
      component: information
    },
    {//政策信息列表
      path: '/information/informationMore',
      name: 'informationMore',
      component:informationMore
    },
    {//政策信息详情
      path: '/information/informationMore/informationdetali',
      name: 'informationdetali',
      component:informationDetali
    },
    {//政策信息详情
      path: '/openly',
      name: 'openly',
      component:openly
    },
    {//办事指南
      path: '/information/guides',
      name: 'guides',
      component:guides
    },
    {//办事指南详情
      path: '/information/guides/guidesDetali',
      name: 'guidesDetali',
      component:guidesDetali
    },
    {//在线审批
      path: '/Antonym',
      name: 'Antonym',
      component:Antonym
    },
    {//办理须知
      path: '/Antonym/onlineWork',
      name: 'onlineWork',
      component:onlineWork
    },
    {//民企风采
      path: '/Corporation',
      name: 'Corporation',
      component:Corporation
    },
    {//企业列表
      path: '/Corporation/Corporationlist',
      name: 'Corporationlist',
      component:Corporationlist
    },
    {//在线审批详情
      path: '/Antonym/Antonymdetali',
      name: 'Antonymdetali',
      component:Antonymdetali
    },
    {//企业微空间
      path: '/Corporation/myspace',
      name: 'myspace',
      component:myspace
    },
    {//企业微空间
      path: '/tellme',
      name: 'tellme',
      component:tellme
    },
    {//个人中心
      path: '/personal',
      name: 'personal',
      component:personal
    },
    {//注册页面
      path:'/registered',
      name:'registered',
      component:registered
    },
    {//新闻列表
      path:'/newslist',
      name:'newslist',
      component:newslist
    },
    {//新闻列表
      path:'/newslist/newsdetali',
      name:'newsdetali',
      component:newsdetali
    },
    {//产业基金
      path:'/industry',
      name:'industry',
      component:industry
    },
    {//工单检测
      path:'/order',
      name:'order',
      component:order
    }
  ]
})

