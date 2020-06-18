<template>
    <div class="header">
      <router-link :to="{
        name:'root'
      }">
      <img src="../assets/cnodejs_light.svg" alt="">
      </router-link>
      <ul>
        <router-link :to="{
        name:'root'
      }"><li>首页</li>
          </router-link>
        <router-link :to="{
          name:'about'
        }">
        <li>关于</li>
        </router-link>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
  .header{
    background-color: #444;
    height: 50px;
  }
  ul{
    list-style: none;
    float: right;
    margin:4px;
  }
  li{
    display: inline-block;
    padding: 10px 15px;
  }
  img{
    max-width: 120px;
    margin-left: 15px;
    margin-top: 10px;
  }
  a{
    text-decoration: none;
    color: white;
    font-size: 14px;
    text-shadow: none;
  }
</style>
