<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="slidebar"></router-view>
      <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Postlist from "./components/Postlist";
import UserInfo from "./components/UserInfo";
import SlideBar from "./components/SlideBar";
export default {
  name: 'App',
  components:{
    Header,Postlist,UserInfo,SlideBar
  }
}
</script>

<style>
.main{
  width: 80%;
  margin:0 auto;

}
</style>
