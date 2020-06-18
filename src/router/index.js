import Vue from 'vue'
import Router from 'vue-router'
import Article from "../components/Article"
import Postlist from "../components/Postlist";
import UserInfo from "../components/UserInfo";
import SlideBar from "../components/SlideBar";
import Good from "../components/Good"
import About from "../components/About";
import Share from "../components/Share";
import Ask from "../components/Ask";
import Job from "../components/Job";

Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'root',
      path:'/',
      components: {
        main:Postlist
      }
    },
    {
      name:'post_content',
      path:'/topic/:id&author=:name',
      components:{
        main:Article,
        slidebar:SlideBar
      }
    },
    {
      name:'user_info',
      path:'/userinfo/:name',
      components:{
        main:UserInfo
      }
    },
    {
      name:'about',
      path:'/about',
      components:{
        main:About
      }
    },
    {
      name:'category',
      path:'/tab=:tab',
      components:{
        main:Good,Share,Ask,Job
      }
    }

  ]
})
