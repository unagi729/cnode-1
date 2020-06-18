<template>
  <div class="Postlist">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" >
    </div>
    <div class="posts" v-else>
      <ul>
        <li>
          <div class="toobar">
            <router-link :to="{
        name:'root'
      }">
              <span>全部</span>
            </router-link>
            <router-link :to="{
              name:'category',
              params:{
                tab:'good'
              }
            }">
              <span>精华</span>
            </router-link>
            <router-link :to="{
              name:'category',
              params:{
                tab:'share'
              }
            }">
            <span>分享</span>
            </router-link>
            <span>问答</span>
            <router-link :to="{
              name:'category',
              params:{
                tab:'job'
              }
            }">
            <span>招聘</span>
            </router-link>
          </div>
        </li>
        <li v-for="post in posts">
          <!--头像-->
          <router-link :to="{
            name:'user_info',
            params:{
              name:post.author.loginname
            }
          }">
            <img :src="post.author.avatar_url" alt="">
          </router-link>
          <!--回复/浏览-->
          <span class="allcount">
          <span class="reply_count">{{post.reply_count}}</span>
          /{{post.visit_count}}
        </span>
          <!--帖子的分类-->
          <span :class="[{put_good:(post.good  == true),put_top:(post.top  == true),
        'topiclist-tab':(post.good  != true && post.top  != true)}]">
          <span>
            {{post | tabFormatter}}
          </span>
        </span>
          <!--标题-->
          <router-link :to="{
            name:'post_content',
            params:{
              id:post.id,
              name:post.author.loginname
            }
          }">
          <span>
          {{post.title}}
         </span>
          </router-link>
          <!--最終回复时间-->
          <span class="last_reply">
          {{post.last_reply_at | formatDate}}
        </span>
        </li>
        <li>
          <Pagination @handleList="renderList"></Pagination>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Pagination from "./Pagination";
    export default {
        name: "Ask",
      data(){
        return{
          posts:[],
          postpage:1,
          isLoading:false
        }
      },
      components:{
        Pagination
      },
      methods:{
        getData(){
          this.$http.get(`https://cnodejs.org/api/v1/topics?tab=${this.$route.params.tab}`,{
            params:{
              page:this.postpage,
              limit:20
            }
          })
            .then(res=>{
              this.isLoading=false
              this.posts=res.data.data
            })
            .catch(function (err) {
              console.log(err)
            })
        },
        renderList(value){
          this.postpage=value
          this.getData()
        }
      },
      beforeMount() {
        this.getData()
        this.isLoading=true
      },
      watch:{
        '$route'(to,from){
          this.getData()
        }
      }
    }
</script>

<style scoped>
  .Postlist{
    background-color: #e1e1e1;
  }
  .posts {
    margin-top: 10px;
  }

  .Postlist img {
    height: 30px;
    width: 30px;
    vertical-align: middle;
  }

  ul {
    list-style: none;
    width: 100%;
    max-width: 1344px;
    margin: 0 auto;
    padding-left:0px;
  }

  ul li:not(:first-child) {
    padding: 9px;
    font-size: 15px;
    font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", STHeiti, sans-serif !important;
    font-weight: 400;
    background-color: white;
    color: #333;
    border-top: 1px solid #f0f0f0;
  }

  li:not(:first-child):hover {
    background: #f5f5f5;
  }

  li:last-child:hover {
    background: white;
  }

  li span {
    line-height: 30px;
  }

  .allcount {
    width: 70px;
    display: inline-block;
    text-align: center;
    font-size: 12px;
  }

  .reply_count {
    color: #9e78c0;
    font-size: 14px;
  }

  .put_good, .put_top {
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    color: #fff;
    font-size: 12px;
    margin-right: 10px;
  }

  .topiclist-tab {
    background-color: #e5e5e5;
    color: #999;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    font-size: 12px;
    margin-right: 10px;
  }

  .last_reply {
    text-align: right;
    min-width: 50px;
    display: inline-block;
    white-space: nowrap;
    float: right;
    color: #778087;
    font-size: 12px;
  }

  .toobar {
    height: 40px;
    background-color: #f5f5f5;
  }

  .toobar span {
    font-size: 14px;
    color: #80bd01;
    line-height: 40px;
    margin: 0 10px;
    cursor: pointer;
  }

  .toobar span:hover {
    color: #9e78c0;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    text-decoration: underline;
  }

  .loading {
    text-align: center;
    padding-top: 300px;
  }
</style>
