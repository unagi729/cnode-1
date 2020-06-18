<template>
  <div class="About">
    <div class="panel">
    <div class="header">
      <ul>
        <router-link :to="{
          name:'root'
        }">
        <li>主页</li>
        </router-link>
        /
        <li>关于</li>
      </ul>
    </div>
    <div class="topic">
    <div class="title"><h3>项目介绍</h3></div>
      <div class="content">
      <p>本项目使用Vue来仿写cnode社区，用vue-cli来搭建项目模板，利用cnode官方提供的社区API，使用Axios获取数据，并且用Vue Router进行路由的转换和传参，使用watch监听路由的变化，用webpack来进行打包。</p>
      <p>其中包括 PostList 主列表、Aticle 文章详情页、SlideBar 侧边栏、UserInfo 用户个人信息和   Pagination 分页组件等</p>
      <p>使用的技术栈：<b>Vue-cli/Vue2/Vue Router/Axios/ES6/NPM</b></p>
      </div>
    </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "About",
      data(){
          return{
            isLoading:false
          }
      },

    }
</script>

<style scoped>
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  .About{
    background-color: #e1e1e1;
  }
  .header{
    padding: 9px;
    background-color: #f5f5f5;
    margin-top: 10px;
  }
  ul,li{
    list-style: none;
    color:#999;
  }
  li{
    display: inline-block;
    font-size: 14px;

    margin: 0 10px;
  }
  li:first-child{
    color:#80bd01;;
  }
  li:first-child:hover{
    text-decoration: underline;
  }
  .topic{
    padding: 10px;
    border-top: 1px solid #e5e5e5;
    background-color: white;
  }
  .title{
    margin: 0 0 15px;
    border-bottom: 1px solid #eee;
  }
  h3{
    font-size: 24.5px;
    line-height: 40px;
  }
  .content{
    line-height: 40px;
  }
</style>
